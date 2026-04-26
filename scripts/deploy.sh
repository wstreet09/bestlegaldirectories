#!/usr/bin/env bash
# Build the Astro site and publish dist/ to the `production` branch.
# The production branch is force-pushed as a single fresh commit each time —
# no history to grow, no merge conflicts.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

REMOTE_URL="$(git remote get-url origin)"

echo "▶ Building Astro site..."
npm run build

WORKDIR="$(mktemp -d)"
trap 'rm -rf "$WORKDIR"' EXIT

echo "▶ Preparing production branch in $WORKDIR..."
cd "$WORKDIR"
git init -q -b production
git remote add origin "$REMOTE_URL"
cp -R "$ROOT/dist/." .

git add .
git -c user.email="${DEPLOY_EMAIL:-deploy@bestlegaldirectories.com}" \
    -c user.name="${DEPLOY_NAME:-Site Deploy}" \
    commit -q -m "Production build $(date -u +%Y-%m-%dT%H:%M:%SZ)"

echo "▶ Force-pushing to origin/production..."
git push -q --force origin production

echo "✓ Deployed. Hostinger will pick this up on its next pull (or via webhook)."
