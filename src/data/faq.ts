export const quickTopics = [
  { label: "Start here", href: "/faq/getting-started/", section: "getting-started" },
  { label: "QC photos", href: "/faq/qc-photos/", section: "qc-photos" },
  { label: "Spreadsheets", href: "/faq/spreadsheets/", section: "spreadsheets" },
  { label: "Links and agents", href: "/faq/links-and-agents/", section: "links-and-agents" },
  { label: "Buying safety", href: "/faq/buying-safety/", section: "buying-safety" },
  { label: "After ordering", href: "/faq/after-ordering/", section: "after-ordering" },
];

export const faqGroups = [
  {
    title: "Getting started",
    items: [
      {
        question: "What is the UUfinds Spreadsheet?",
        answer:
          "The UUfinds Spreadsheet is a curated product index for buyers who want to browse finds, review categories, compare QC-style product images, and continue to Maison Looks shopping links.",
      },
      {
        question: "Is this a shop or a product directory?",
        answer:
          "It is a directory and shopping helper. Product cards send you to the external Maison Looks experience, where final product details and ordering steps should be checked before you buy.",
      },
      {
        question: "How should I use the site?",
        answer:
          "Start with a category, open the finds that match your style, compare product images, then use the linked spreadsheet or product page to continue your research.",
      },
      {
        question: "Do I need a Discord account?",
        answer:
          "No account is required to browse UU Find Hub. A community or Discord can still be useful if you want buyer feedback, updates, or help comparing similar finds.",
      },
    ],
  },
  {
    title: "QC photos",
    items: [
      {
        question: "What does QC mean?",
        answer:
          "QC means quality control. In this context it usually refers to warehouse photos, close-up images, seller notes, and buyer checks used before approving an item for shipping.",
      },
      {
        question: "What should I check in QC photos?",
        answer:
          "Look at shape, color, stitching, logo placement, tags, hardware, fabric texture, sizing labels, and any visible flaws. Compare several images instead of trusting one angle.",
      },
      {
        question: "Why can the product color look different?",
        answer:
          "Warehouse lighting, camera exposure, shadows, and screen settings can all change how a color looks. Ask for clearer photos when color accuracy is important.",
      },
      {
        question: "Can QC photos guarantee product quality?",
        answer:
          "No. QC photos reduce risk, but they cannot guarantee materials, comfort, durability, or exact sizing. Treat them as a decision tool, not a warranty.",
      },
    ],
  },
  {
    title: "Spreadsheets",
    items: [
      {
        question: "Why use a spreadsheet?",
        answer:
          "A spreadsheet makes it easier to organize finds, compare categories, save product links, and keep notes while you build a haul or shortlist.",
      },
      {
        question: "What should I track in my spreadsheet?",
        answer:
          "Track product name, category, price, seller link, size, color, QC status, agent notes, shipping status, and any concerns you want to recheck later.",
      },
      {
        question: "How do I compare similar finds?",
        answer:
          "Compare photos, seller consistency, material notes, buyer comments, price, and return risk. The cheapest option is not always the cleanest choice.",
      },
      {
        question: "Can a spreadsheet replace final QC?",
        answer:
          "No. A spreadsheet helps organize decisions, but final approval should still be based on current product details, QC photos, and agent updates.",
      },
    ],
  },
  {
    title: "Links and agents",
    items: [
      {
        question: "What if a product link is dead?",
        answer:
          "Dead links can happen when a seller removes a listing, changes a product page, or an agent platform stops supporting the URL. Search the product name again or choose a similar find.",
      },
      {
        question: "Why do some links need conversion?",
        answer:
          "Some Taobao, Weidian, Yupoo, or 1688 URLs may need to be converted before an agent can read them. Use the cleanest original link available and check that it opens before ordering.",
      },
      {
        question: "Are all listed products always in stock?",
        answer:
          "No. Stock changes quickly. Always confirm availability, size, color, and price on the linked product page or with your agent before paying.",
      },
      {
        question: "What should I send to my agent?",
        answer:
          "Send the clean product URL, selected size, color, notes, and any reference images. Clear instructions reduce the chance of ordering the wrong variant.",
      },
    ],
  },
  {
    title: "Buying safety",
    items: [
      {
        question: "How do I reduce risk before buying?",
        answer:
          "Compare multiple finds, read buyer signals, check seller consistency, review QC images carefully, and avoid rushing into listings with weak photos or unclear sizing.",
      },
      {
        question: "Are prices final?",
        answer:
          "Prices can change and may not include domestic shipping, international shipping, service fees, currency changes, or customs charges. Use prices as estimates until checkout is confirmed.",
      },
      {
        question: "How should I choose the right size?",
        answer:
          "Use seller measurements, product photos, size charts, and previous buyer notes. For clothing and shoes, compare measurements against an item you already own.",
      },
      {
        question: "Should I approve an item with a small flaw?",
        answer:
          "It depends on the flaw, price, and your tolerance. Minor warehouse-photo issues may be acceptable, but obvious logo, shape, stain, or sizing problems are worth rejecting or rechecking.",
      },
    ],
  },
  {
    title: "After ordering",
    items: [
      {
        question: "Does UU Find Hub handle orders or refunds?",
        answer:
          "No. Orders, refunds, returns, parcel handling, and shipping support are handled by the external shop, seller, or agent platform you choose.",
      },
      {
        question: "When should I ask for extra photos?",
        answer:
          "Ask for extra photos when the item has complex details, unclear logos, possible stains, unusual sizing, color concerns, or anything that could change your decision.",
      },
      {
        question: "Can I use the site on mobile?",
        answer:
          "Yes. The layout is responsive, and the language switcher works across pages. If a menu blocks the page, selecting a language closes it automatically.",
      },
      {
        question: "How often are finds updated?",
        answer:
          "Finds can be refreshed as products change, but listings may still go out of stock or move. Recheck links before building a final order.",
      },
    ],
  },
];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
