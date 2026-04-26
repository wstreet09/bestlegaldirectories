#!/usr/bin/env bash
# Build the Astro site and publish dist/ contents to the `production` branch
# as a regular fast-forward commit. Hostinger pulls this branch and serves
# the files from the repo root.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

REMOTE_URL="$(git remote get-url origin)"

echo "▶ Building Astro site..."
npm run build

WORKDIR="$(mktemp -d)"
trap 'rm -rf "$WORKDIR"' EXIT

echo "▶ Fetching production branch..."
if git ls-remote --exit-code --heads "$REMOTE_URL" production > /dev/null 2>&1; then
  git clone --quiet --branch production --single-branch "$REMOTE_URL" "$WORKDIR"
else
  echo "  (production branch does not exist yet — creating it)"
  git clone --quiet "$REMOTE_URL" "$WORKDIR"
  cd "$WORKDIR"
  git checkout --orphan production
  git rm -rf --quiet . > /dev/null 2>&1 || true
  cd "$ROOT"
fi

cd "$WORKDIR"

echo "▶ Replacing files with fresh build..."
# Remove every tracked file/dir at root (preserves .git)
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
# Copy in new dist contents
cp -R "$ROOT/dist/." .

git add -A
if git diff --cached --quiet; then
  echo "✓ No changes since last deploy. Nothing to push."
  exit 0
fi

git -c user.email="${DEPLOY_EMAIL:-deploy@bestlegaldirectories.com}" \
    -c user.name="${DEPLOY_NAME:-Site Deploy}" \
    commit --quiet -m "Production build $(date -u +%Y-%m-%dT%H:%M:%SZ)"

echo "▶ Pushing to origin/production (fast-forward, no force)..."
git push --quiet origin production

echo "✓ Deployed. Hostinger webhook will trigger pull."
