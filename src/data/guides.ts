const titles = [
  "Why Are Customers Complaining About Find QC?",
  "Common QC Lighting Issues in Chinese E-Commerce",
  "Common QC Problems and How to Fix Them",
  "How to Check Product Logos Before Shipping",
  "How to Analyze QC Images Like a Pro",
  "How QC Analysis Improves Trust in Imported Products",
  "What Makes a Finds QC Process Reliable?",
  "Benefits of Accessing QC Images Before Shipping",
  "Why a Spreadsheet Can Be a Safe Buying Checklist",
  "Batch Comparison in Spreadsheets for QC Efficiency",
  "Can a Spreadsheet Help You Avoid Untrusted Sellers?",
  "Quality Assurance With a Finds Spreadsheet",
  "Why Spreadsheets Help Smart Purchases",
  "How to Master Spreadsheet QC Workflows",
  "Spreadsheet Comparison Guide for Shopping Quality Control",
  "Finds Spreadsheet vs Agent QC: Key Differences",
  "Spreadsheet Review for E-Commerce Quality Control",
  "How to Improve Spreadsheet Accuracy",
  "Fixing Dead Links in Your Shopping Spreadsheet",
  "How to Spot a Legit Spreadsheet From a Fake One",
  "Optimizing a Buying Strategy for Quality Products",
  "Spreadsheet Tricks for Product Quality Control",
  "Saving Spreadsheet Items More Efficiently",
  "Reliable Spreadsheet Habits for Cross-Border Buyers",
  "How to Master Product Searching in a Spreadsheet",
  "Copying Product Links Without Breaking Your Workflow",
  "How Product Spreadsheets Improve Shopping Experience",
  "Spreadsheet as a QC Tool for Product Inspections",
  "Why Spreadsheet QC Can Become a Secret Weapon",
  "Why Weidian Links Fail to Convert",
  "Common Link Converter Errors and Fixes",
  "Why Link Converter Failures Hurt QC Workflows",
  "Choosing the Best Taobao Link Converter",
  "Yupoo to Agent Link Converter Workflow Tips",
  "How to Convert Links for Kakobuy Orders",
  "Step-by-Step Link Conversion for Chinese Product Imports",
  "How to Convert Weidian Links for Agent Orders",
  "Can Link Converters Improve Proxy Shopping?",
  "What Makes a Link Converter Useful for Teams?",
  "Five Common Link Converter Mistakes",
  "How a Buying Checklist Improves Online Purchases",
  "Is QC the Best Way to Ensure Product Quality?",
  "How Reliability Improves China Shopping Success",
  "Best Product Platforms for Quality Assurance",
  "Agent QC vs In-House Checks: What Buyers Should Compare",
  "Is a QC Platform Enough for Product Purchases?",
  "Why Product Ranking Helps E-Commerce Buyers",
  "Automated QC vs Manual Inspection",
  "Clothing QC Guide for Chinese Shopping",
  "Designer Clothing QC Checks for Buyers",
  "Why Clothing QC Photos Help Verify Authenticity",
  "How to Avoid Common Clothing Flaws",
  "How to Spot Real Trending Clothing Items",
  "What Makes Quality Clothing Worth Buying?",
  "How to Trust Bag Brands From Chinese Platforms",
  "Checking Bag Shape, Hardware, and Stitching",
  "How to Choose a Better Shopping Bag Find",
  "Why Quality Bags Need Extra QC Checks",
  "Bag Buying Guide for Long-Lasting Picks",
  "Designer Bag QC Compared With Other Platforms",
  "Sneaker QC Checklist for Buyers",
  "Why Sneaker Quality Matters Before Shipping",
  "How to Spot Authentic Sneaker Details",
  "Best Quality Sneakers and What to Check",
  "Sneaker Brand Guide for Quality Assurance",
  "How to Check Collectible Sneaker QC Photos",
  "Why QC Evaluation Can Miss the Mark",
  "Five Steps to Verify Logos in QC Reports",
  "Optimizing QC Workflow for Product Inspections",
  "Risk-Free Shopping With Quality Checks",
  "Safe Buying Checklist for Proxy Purchases",
  "Can Verified Products Be Trusted?",
  "Hidden Risks in Finds Spreadsheets",
  "Avoiding Hidden Spreadsheet Mistakes",
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
    return `Bag purchases need close inspection of structure, shape, hardware, straps, stitching, and inside details. This guide covers ${focus} before you commit to international shipping.`;
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
