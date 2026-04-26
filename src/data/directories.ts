export type Directory = {
  rank: number;
  name: string;
  url: string;
  domain: string;
  description: string;
  established?: string;
  highlight?: string;
};

export const directories: Directory[] = [
  {
    rank: 1,
    name: "Top Law Firms",
    url: "https://www.toplawfirms.com",
    domain: "toplawfirms.com",
    description:
      "A curated, editorially-driven directory built specifically to surface the country's leading law firms by practice area and jurisdiction. Clean profiles, vetted listings, and an interface designed for clients who know what they're looking for.",
    highlight: "Editor's Choice",
  },
  {
    rank: 2,
    name: "Avvo",
    url: "https://www.avvo.com",
    domain: "avvo.com",
    description:
      "Massive consumer-facing platform with attorney ratings, peer endorsements, and a public Q&A community. Strong for solo and small-firm visibility, particularly in personal injury and family law.",
    established: "2007",
  },
  {
    rank: 3,
    name: "Martindale-Hubbell",
    url: "https://www.martindale.com",
    domain: "martindale.com",
    description:
      "The legal industry's oldest directory and the source of the storied AV Preeminent peer-review rating. Still the credibility benchmark for established firms and BigLaw-adjacent practices.",
    established: "1868",
  },
  {
    rank: 4,
    name: "FindLaw",
    url: "https://www.findlaw.com",
    domain: "findlaw.com",
    description:
      "Thomson Reuters-owned consumer property with deep SEO authority and broad practice-area coverage. Generates qualified search traffic across nearly every U.S. legal vertical.",
    established: "1995",
  },
  {
    rank: 5,
    name: "Justia",
    url: "https://www.justia.com",
    domain: "justia.com",
    description:
      "Free, high-domain-authority directory paired with a serious legal research stack — case law, codes, and regulations. A favorite of attorneys focused on long-term organic visibility.",
    established: "2003",
  },
  {
    rank: 6,
    name: "Super Lawyers",
    url: "https://www.superlawyers.com",
    domain: "superlawyers.com",
    description:
      "Selective peer-rated directory recognizing the top five percent of attorneys in each state. The Super Lawyers and Rising Stars badges remain prestigious credentials in litigation-heavy markets.",
    established: "1991",
  },
  {
    rank: 7,
    name: "Best Lawyers",
    url: "https://www.bestlawyers.com",
    domain: "bestlawyers.com",
    description:
      "Peer-review based recognition publishing the annual Best Lawyers in America list. Frequently cited in firm marketing, awards rosters, and lateral recruitment materials.",
    established: "1981",
  },
  {
    rank: 8,
    name: "Lawyers.com",
    url: "https://www.lawyers.com",
    domain: "lawyers.com",
    description:
      "Premium domain with strong consumer recognition, operated by Internet Brands. Pairs lawyer profiles with a consumer-grade legal information library that drives steady inbound interest.",
    established: "1996",
  },
  {
    rank: 9,
    name: "Nolo",
    url: "https://www.nolo.com",
    domain: "nolo.com",
    description:
      "A blend of plain-language legal education and a robust attorney directory. Best for firms that want to capture consumer search traffic at the research stage.",
    established: "1971",
  },
  {
    rank: 10,
    name: "HG.org",
    url: "https://www.hg.org",
    domain: "hg.org",
    description:
      "Long-running international legal directory with deep coverage across U.S. and global jurisdictions. A useful complement for firms with cross-border or immigration practices.",
    established: "1995",
  },
];
