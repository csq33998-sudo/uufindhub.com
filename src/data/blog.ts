export type BlogPost = {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  body: string;
  steps: string[];
};

export const blogCategories = [
  "Buying Guides",
  "Case Studies",
  "Spreadsheet Tips",
  "QC Notes",
  "Style Planning",
  "Order Diary",
] as const;

export const blogPosts: BlogPost[] = [
  {
    title: "How to Turn a UUfinds Spreadsheet Row Into an Agent-Ready Shortlist",
    category: "Buying Guides",
    date: "2/10/2026",
    readTime: "4 min read",
    image: "/images/products/washed-varsity-jacket.png",
    excerpt:
      "A revised step-by-step buying guide for turning a row into a shortlist item, with more emphasis on intent, outfit use, and decision notes than generic spreadsheet cleanup.",
    body:
      "The best spreadsheet rows do not automatically become purchases. Treat each row like a candidate: decide why it belongs in your haul, compare it against alternatives, and only then move it into an agent-ready shortlist. This keeps the process closer to a buying journal than a raw link dump.",
    steps: [
      "Write one reason the item belongs in your haul before opening more links.",
      "Compare it with one similar product already saved in your shortlist.",
      "Add a short note for fit, season, outfit use, or why the item should wait.",
      "Move it to your final list only when the reason is still clear after a second review.",
    ],
  },
  {
    title: "I Compared Two Hoodie Finds - The Winner Was Not the Cheaper One",
    category: "Case Studies",
    date: "2/10/2026",
    readTime: "3 min read",
    image: "/images/products/relaxed-zip-hoodie.png",
    excerpt:
      "A rewritten buying story about two hoodie options where the better pick came from clearer proportions, fewer unanswered sizing questions, and stronger outfit value.",
    body:
      "The first hoodie looked like the easy pick because the row price was lower. After comparing the shape, zipper line, pocket position, and how each hoodie would fit into the same outfit plan, the second option made more sense. The lesson is simple: the lowest row price is not always the cleanest buy.",
    steps: [
      "Compare the hoodie with items already in your planned haul.",
      "Check whether the cheaper option creates more size or fabric uncertainty.",
      "Use the notes column to record why one option wins.",
      "Pick the item that reduces doubt, not just the item with the lower price.",
    ],
  },
  {
    title: "The Maybe List: Where Good Finds Should Wait",
    category: "Spreadsheet Tips",
    date: "2/11/2026",
    readTime: "3 min read",
    image: "/images/products/washed-wide-denim.png",
    excerpt:
      "Instead of deleting every uncertain row, use a maybe list for finds that have style potential but need better evidence before becoming order candidates.",
    body:
      "A maybe list is different from a final shortlist. It holds products that look promising but still need a better photo, a clearer size note, or a stronger reason to buy. This keeps your final Maison Looks list cleaner while still preserving useful discoveries.",
    steps: [
      "Move style-interesting finds into Maybe when the evidence is incomplete.",
      "Add the exact missing proof, such as sizing, photo angle, color, or stock.",
      "Review Maybe items once before checkout instead of checking them every day.",
      "Delete the row if the missing proof still does not appear after review.",
    ],
  },
  {
    title: "A Warehouse Photo Looked Off - Here Is How I Decided",
    category: "QC Notes",
    date: "2/12/2026",
    readTime: "4 min read",
    image: "/images/products/oversized-denim-jacket.png",
    excerpt:
      "A QC decision story about a jacket that looked different in warehouse photos, focusing on how to separate lighting changes from real product differences.",
    body:
      "Seller photos are usually brighter and more styled than warehouse photos. In this case, the jacket looked flatter in the warehouse image, but the shape, collar, pocket placement, and stitching were consistent. The issue was likely lighting, not a different product.",
    steps: [
      "Compare structural details first: collar, pockets, seams, and proportions.",
      "Treat color as uncertain when only one warehouse angle looks darker.",
      "Ask for another photo only if the difference changes your buy decision.",
      "Record the final judgment in notes so the same doubt does not come back later.",
    ],
  },
  {
    title: "Why One Jacket Stayed and Three Similar Finds Were Cut",
    category: "Style Planning",
    date: "2/13/2026",
    readTime: "4 min read",
    image: "/images/products/puffer-stand-jacket.png",
    excerpt:
      "A style-planning article about reducing four outerwear saves into one stronger pick by comparing season, silhouette, color, and repeat use.",
    body:
      "Outerwear rows can pile up quickly because every jacket looks useful on its own. The better test is whether it adds something different to your haul. In this review, one jacket stayed because it had a clear winter role, neutral color, and stronger outfit range.",
    steps: [
      "Group similar jackets together instead of reviewing them one by one.",
      "Keep the piece that covers the most real outfits.",
      "Remove items that repeat the same color, weight, or silhouette.",
      "Use the saved budget on better QC or shipping instead of duplicate outerwear.",
    ],
  },
  {
    title: "The Notes Column That Stopped a Wrong Variant Order",
    category: "Order Diary",
    date: "2/14/2026",
    readTime: "3 min read",
    image: "/images/products/washed-baseball-cap.png",
    excerpt:
      "A short order diary showing how one plain-language note prevented the wrong color and variant from being submitted during checkout.",
    body:
      "The row title was not specific enough, and the product page had several similar variants. A simple note with the exact color, size, and image reference made the order easier to submit correctly. Small notes matter most when products have multiple options.",
    steps: [
      "Write the exact selected variant in plain language.",
      "Add a visual clue when colors or prints are similar.",
      "Keep agent instructions separate from personal comments.",
      "Recheck the note before submitting the item.",
    ],
  },
  {
    title: "How I Ranked Pants Finds for a More Balanced Haul",
    category: "Style Planning",
    date: "2/15/2026",
    readTime: "4 min read",
    image: "/images/products/straight-work-pants.png",
    excerpt:
      "A practical styling breakdown for choosing pants based on outfit role, fit contrast, footwear pairing, and how often the item would actually be worn.",
    body:
      "Pants can change an entire haul because they control silhouette. Instead of picking the most interesting pair, this review ranked each option by whether it worked with existing sneakers, outerwear, and hoodie choices. The safest pick was the one that connected the most outfits.",
    steps: [
      "Match each pants option with at least two tops from the haul.",
      "Check whether the fit balances your sneakers and outerwear.",
      "Avoid buying two pairs that create the same outfit shape.",
      "Pick the pair with the highest repeat-use value.",
    ],
  },
  {
    title: "A Sneaker Find Looked Great, But the Haul Did Not Need It",
    category: "Case Studies",
    date: "2/16/2026",
    readTime: "3 min read",
    image: "/images/products/retro-low-sneaker.png",
    excerpt:
      "A case study about rejecting a strong sneaker find because it duplicated the role of another pair already saved in the same haul.",
    body:
      "Not every good find belongs in the current order. This sneaker had clean photos and a fair price, but it overlapped too much with another pair already planned. Removing it made the haul cheaper, lighter, and more focused.",
    steps: [
      "Ask whether the sneaker creates a new outfit option.",
      "Compare color and shape against pairs already saved.",
      "Cut the duplicate even if the product itself looks strong.",
      "Save the link for a later haul if it still has long-term value.",
    ],
  },
  {
    title: "What Changed After I Rechecked Stock Before Checkout",
    category: "Order Diary",
    date: "2/17/2026",
    readTime: "4 min read",
    image: "/images/products/nylon-track-pants.png",
    excerpt:
      "A checkout diary about how a final stock review changed the order list, removed two uncertain items, and prevented a delayed warehouse process.",
    body:
      "The spreadsheet looked ready, but one last link review showed that two items had changed availability. Removing them before checkout avoided replacement messages and kept the rest of the order moving. The final review is not busywork; it protects momentum.",
    steps: [
      "Open the final product links immediately before checkout.",
      "Remove items with unclear stock instead of hoping they pass.",
      "Keep backup finds in a separate list, not the final order.",
      "Submit the cleaner haul once every remaining item still loads correctly.",
    ],
  },
  {
    title: "How to Read a Product Thumbnail Without Overtrusting It",
    category: "Buying Guides",
    date: "2/18/2026",
    readTime: "3 min read",
    image: "/images/products/panel-runner-sneaker.png",
    excerpt:
      "A buyer-focused article about using thumbnails as sorting signals while avoiding the mistake of treating one polished image as proof of product quality.",
    body:
      "A thumbnail should help you decide what to open, not what to buy. Good thumbnails show shape and category quickly, but they can hide material quality, sizing issues, and small detail problems. Use them as filters, then slow down on the final picks.",
    steps: [
      "Use thumbnails to sort categories and broad style only.",
      "Open product pages before judging detail quality.",
      "Do not compare final options from thumbnail crops alone.",
      "Save only items that still look convincing after full image review.",
    ],
  },
  {
    title: "The Budget Split I Use Before Adding Accessories",
    category: "Style Planning",
    date: "2/19/2026",
    readTime: "3 min read",
    image: "/images/products/silver-chain-necklace.png",
    excerpt:
      "A planning note on keeping accessories useful without letting small add-ons quietly push a haul past its original budget.",
    body:
      "Accessories are easy to add because each one feels cheap. The problem is that several small choices can crowd out the main pieces. A simple budget split keeps accessories intentional and stops the haul from drifting.",
    steps: [
      "Set the main-item budget before browsing accessories.",
      "Limit accessories to pieces that complete existing outfits.",
      "Avoid adding small items just because shipping is already happening.",
      "Review the final accessory count before checkout.",
    ],
  },
  {
    title: "When a Spreadsheet Find Deserves a Second Chance",
    category: "Spreadsheet Tips",
    date: "2/20/2026",
    readTime: "4 min read",
    image: "/images/products/suede-skate-sneaker.png",
    excerpt:
      "A maintenance article about revisiting older saved finds when the original issue was missing evidence, not a clear product problem.",
    body:
      "Some older rows look weak because they were saved before enough information was available. If the design still fits your haul and the missing issue can be checked, the find may deserve a second review instead of automatic deletion.",
    steps: [
      "Revisit older rows only when the style still fits your current plan.",
      "Identify whether the old concern was missing proof or a real flaw.",
      "Look for updated product photos or clearer variant information.",
      "Promote the row only if the new evidence answers the original concern.",
    ],
  },
];
