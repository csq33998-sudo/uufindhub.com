const titles = [
  "UUfinds Spreadsheet QC: What Buyers Should Check First",
  "UUfinds QC Guide for Spreadsheet Buyers",
  "UUfinds Spreadsheet QC Photos and Warehouse Lighting",
  "UUfinds Spreadsheet QC Problems Before Agent Checkout",
  "How to Check Logos in UUfinds Spreadsheet QC Photos",
  "How to Read UUfinds Spreadsheet QC Images",
  "Why UUfinds Spreadsheet QC Helps Reduce Buying Risk",
  "What Makes a UUfinds Spreadsheet Row Reliable?",
  "Benefits of QC Images Before International Shipping",
  "Why UUfinds Spreadsheet Works as a Buying Checklist",
  "How to Compare Multiple UUfinds Spreadsheet Rows",
  "Using UUfinds Spreadsheet to Avoid Weak Sellers",
  "Quality Checks With a UUfinds Spreadsheet Row",
  "Why UUfinds Spreadsheet Helps Smarter Purchases",
  "How to Build a UUfinds Spreadsheet QC Workflow",
  "UUfinds Spreadsheet Comparison Guide for Buyers",
  "UUfinds Spreadsheet vs Agent QC: Key Differences",
  "How to Review a UUfinds Spreadsheet Row",
  "How to Keep UUfinds Spreadsheet Rows Accurate",
  "Fixing Dead Links in UUfinds Spreadsheet",
  "How to Spot a Useful UUfinds Spreadsheet Row",
  "Buying Strategy With UUfinds Spreadsheet Finds",
  "UUfinds Spreadsheet Tricks for QC Checks",
  "Saving UUfinds Spreadsheet Items More Efficiently",
  "Reliable Spreadsheet Habits for Cross-Border Buyers",
  "How to Search Products in UUfinds Spreadsheet",
  "Copying Product Links Without Breaking Agent Checkout",
  "How UUfinds Spreadsheet Improves Shopping Research",
  "Using UUfinds Spreadsheet as a QC Review Tool",
  "What a UUfinds Spreadsheet QC Row Cannot Prove",
  "Why Weidian Links Fail in Agent Checkout",
  "Common Agent Link Converter Errors and Fixes",
  "Why Link Converter Failures Hurt QC Workflows",
  "Choosing a Taobao Link Converter for Agent Orders",
  "Yupoo to Agent Link Workflow for UUfinds Spreadsheet",
  "How to Convert Links for Kakobuy Orders",
  "Step-by-Step Link Conversion for Agent Orders",
  "How to Convert Weidian Links for Agent Orders",
  "Can Link Converters Improve Proxy Shopping?",
  "What Makes a Link Converter Useful for Spreadsheet Rows?",
  "Five Link Converter Mistakes Before Agent Checkout",
  "How a UUfinds Spreadsheet Checklist Improves Purchases",
  "Is QC Enough Before International Shipping?",
  "How Link Reliability Improves Agent Orders",
  "Best Source Platforms for UUfinds Spreadsheet Research",
  "Agent QC vs Spreadsheet QC: What Buyers Should Compare",
  "Is a QC Platform Enough for Product Purchases?",
  "Why Product Ranking Helps UUfinds Spreadsheet Buyers",
  "Automated QC vs Manual Spreadsheet Review",
  "Clothing QC Guide for UUfinds Spreadsheet Buyers",
  "Clothing QC Checks Before Agent Checkout",
  "Why Clothing QC Photos Cannot Prove Authenticity",
  "How to Avoid Common Clothing QC Mistakes",
  "How to Spot Trending Clothing Rows With Better Evidence",
  "What Makes a Clothing Spreadsheet Row Worth Saving?",
  "How to Review Bag Finds From Chinese Platforms",
  "Checking Bag Shape, Hardware, and Stitching",
  "How to Choose a Better Bag Row in UUfinds Spreadsheet",
  "Why Bag Finds Need Extra QC Photos",
  "Bag QC Checklist for UUfinds Spreadsheet Buyers",
  "Bag QC Photos: Shape, Hardware, Stitching, and Straps",
  "How Bag QC Notes Help Buying Agents Avoid Wrong Variants",
  "Bag Buying Guide Before International Shipping",
  "Bag QC Compared With Other Spreadsheet Finds",
  "Sneaker QC Checklist for UUfinds Spreadsheet Buyers",
  "Why Sneaker QC Matters Before Shipping",
  "How to Check Sneaker Details Without Authenticity Claims",
  "Best Sneaker QC Signals to Check",
  "Sneaker Source Platform Guide for Spreadsheet Buyers",
  "How to Check Collectible Sneaker QC Photos",
  "Why QC Photos Can Miss Product Problems",
  "Five Steps to Verify Logos in QC Photos",
  "Optimizing UUfinds Spreadsheet QC Workflow",
  "Lower-Risk Shopping With QC Checks",
  "Safe Buying Checklist for Proxy Purchases",
  "Can Verified Product Rows Be Trusted?",
  "Hidden Risks in UUfinds Spreadsheet Rows",
  "Avoiding Hidden UUfinds Spreadsheet Mistakes",
];

export const pageSize = 8;

function excerptFor(title: string) {
  const lower = title.toLowerCase();
  const focus = title
    .replace(/[?:]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  if (lower.includes("link")) {
    return `Link handling can slow down agent orders when URLs are expired, malformed, or unsupported. This guide focuses on ${focus}, with practical ways to keep product links cleaner and easier to submit.`;
  }
  if (lower.includes("spreadsheet")) {
    return `A shopping spreadsheet is only useful when it stays organized, current, and easy to verify. This guide explains ${focus}, so buyers can read rows, compare finds, and avoid weak decisions.`;
  }
  if (lower.includes("bag")) {
    return `Bag QC needs close inspection of structure, shape, hardware, straps, stitching, inner labels, and inside details. This guide covers ${focus} before you send a spreadsheet row to a buying agent or commit to international shipping.`;
  }
  if (lower.includes("sneaker")) {
    return `Sneaker QC is about more than one good photo. This guide breaks down ${focus}, including shape, alignment, materials, labels, and close-up details.`;
  }
  if (lower.includes("clothing") || lower.includes("apparel")) {
    return `Clothing QC works best when you review fabric, print placement, seams, tags, sizing notes, and overall shape. This guide applies those checks to ${focus}.`;
  }
  if (lower.includes("logo")) {
    return `Logo checks are a key part of quality control. This guide explains ${focus}, including placement, spacing, proportions, stitching, and close-up clarity.`;
  }
  if (lower.includes("lighting")) {
    return `Poor lighting can hide color shifts, texture problems, and small defects. This guide looks at ${focus} when warehouse images are not perfectly shot.`;
  }
  return `Quality control reduces uncertainty when buying through Chinese marketplaces and agents. This guide focuses on ${focus}, with practical checks for photos, sellers, item details, and shipping decisions.`;
}

export const guides = titles.map((title) => ({ title, excerpt: excerptFor(title) }));
export const pageCount = Math.ceil(guides.length / pageSize);

export function getGuidesPage(page: number) {
  const first = (page - 1) * pageSize;
  return guides.slice(first, first + pageSize);
}
