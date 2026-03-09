export default {
  id: 'ekids',
  client: {
    name: 'eKids.com',
    logo: '/images/ekids-logo.png',
    brand: 'eKids.com',
    title: 'CRO Checklist',
    subtitle: 'CRO Audit 2026',
    roadmap: 'eKids.com UX Optimization Roadmap',
  },
  breakdownTitle: 'CRO Analysis',
  priorityGroups: [
    {
      id: 'first',
      label: 'High-Impact Optimizations',
      badge: 'First',
      badgeClass: 'first',
      sections: [
        { id: 'homepage', title: 'Homepage Message', image: '/images/homepage-playful-icons.png', theme: 'homepage', items: [
          { id: 'add-character-driven-hero-banner', label: 'Add character-driven hero banner' },
          { id: 'highlight-best-sellers-above-the-fold', label: 'Highlight best sellers above the fold' },
          { id: 'add-clear-value-proposition-headline', label: 'Add clear value proposition headline' },
          { id: 'include-seasonal-promotional-messaging', label: 'Include seasonal/promotional messaging' },
          { id: 'optimize-cta-buttons-for-visibility', label: 'Optimize CTA buttons for visibility' },
        ]},
        { id: 'product', title: 'Product Page Content', image: '/images/product-boxes-merchandising.png', theme: 'product', items: [
          { id: 'add-volume-durability-details', label: 'Add volume/durability details' },
          { id: 'improve-product-image-quality-angles', label: 'Improve product image quality & angles' },
          { id: 'add-size-comparison-visuals', label: 'Add size comparison visuals' },
          { id: 'include-use-case-scenario-descriptions', label: 'Include use-case/scenario descriptions' },
          { id: 'add-faq-section-per-product', label: 'Add FAQ section per product' },
        ]},
        { id: 'trust', title: 'Trust Signals', image: '/images/trust-badge.png', theme: 'trust', items: [
          { id: 'add-security-badges-to-checkout', label: 'Add security badges to checkout' },
          { id: 'display-return-policy-prominently', label: 'Display return policy prominently' },
          { id: 'add-customer-testimonials-to-key-pages', label: 'Add customer testimonials to key pages' },
          { id: 'show-satisfaction-guarantees', label: 'Show satisfaction guarantees' },
        ]},
        { id: 'reviews', title: 'Product Reviews', image: '/images/customer-reviews-stars.png', theme: 'reviews', items: [
          { id: 'implement-review-collection-strategy', label: 'Implement review collection strategy' },
          { id: 'add-photo-reviews-feature', label: 'Add photo reviews feature' },
          { id: 'display-star-ratings-on-collection-pages', label: 'Display star ratings on collection pages' },
          { id: 'enable-review-filtering-sorting', label: 'Enable review filtering & sorting' },
        ]},
        { id: 'collections', title: 'Collection Pages', image: '/images/product-boxes-merchandising.png', theme: 'collections', items: [
          { id: 'improve-filtering-sorting-options', label: 'Improve filtering & sorting options' },
          { id: 'add-quick-view-product-previews', label: 'Add quick-view product previews' },
          { id: 'optimize-grid-layout-for-engagement', label: 'Optimize grid layout for engagement' },
          { id: 'add-collection-level-descriptions', label: 'Add collection-level descriptions' },
        ]},
      ],
    },
    {
      id: 'next',
      label: 'Secondary Optimizations',
      badge: 'Next',
      badgeClass: 'next',
      sections: [
        { id: 'search', title: 'Site Search', image: '/images/search-magnify.png', theme: 'search', items: [
          { id: 'optimize-results-for-character-names', label: 'Optimize results for character names' },
          { id: 'add-no-results-try-suggestions', label: 'Add "No Results? Try..." suggestions' },
          { id: 'implement-autocomplete-with-images', label: 'Implement autocomplete with images' },
          { id: 'add-popular-trending-searches', label: 'Add popular/trending searches' },
        ]},
        { id: 'bundling', title: 'Product Bundling', image: '/images/discount-shopping-bag.png', theme: 'bundling', items: [
          { id: 'create-gift-set-bundles', label: 'Create gift set bundles' },
          { id: 'add-free-shipping-progress-bar', label: 'Add free shipping progress bar' },
          { id: 'implement-frequently-bought-together', label: 'Implement "Frequently bought together"' },
          { id: 'show-bundle-savings-prominently', label: 'Show bundle savings prominently' },
        ]},
        { id: 'cart', title: 'Cart Experience', image: '/images/cart-shopping.png', theme: 'cart', items: [
          { id: 'streamline-checkout-flow', label: 'Streamline checkout flow' },
          { id: 'add-trust-badges-to-cart-page', label: 'Add trust badges to cart page' },
          { id: 'show-estimated-delivery-dates', label: 'Show estimated delivery dates' },
          { id: 'implement-cart-abandonment-recovery', label: 'Implement cart abandonment recovery' },
        ]},
        { id: 'social', title: 'Social Proof', image: '/images/social-proof-thumbs.png', theme: 'social', items: [
          { id: 'add-x-people-bought-this-indicators', label: 'Add "X people bought this" indicators' },
          { id: 'show-real-time-purchase-notifications', label: 'Show real-time purchase notifications' },
          { id: 'display-user-generated-content', label: 'Display user-generated content' },
          { id: 'add-instagram-feed-integration', label: 'Add Instagram feed integration' },
        ]},
        { id: 'occasions', title: 'Occasion-Based Collections', image: '/images/gift-set-bundle.png', theme: 'search', items: [
          { id: 'create-birthday-holiday-gift-guides', label: 'Create birthday/holiday gift guides' },
          { id: 'add-thank-you-gift-collections', label: 'Add "Thank You" gift collections' },
          { id: 'build-seasonal-landing-pages', label: 'Build seasonal landing pages' },
        ]},
      ],
    },
    {
      id: 'ongoing',
      label: 'Continuous Improvements',
      badge: 'Ongoing',
      badgeClass: 'ongoing',
      sections: [
        { id: 'shipping', title: 'Shipping Policy', image: '/images/shipping-delivery-truck.png', theme: 'shipping', items: [
          { id: 'clarify-shipping-timelines-on-all-pages', label: 'Clarify shipping timelines on all pages' },
          { id: 'add-free-shipping-threshold-messaging', label: 'Add free shipping threshold messaging' },
          { id: 'offer-expedited-shipping-options', label: 'Offer expedited shipping options' },
        ]},
        { id: 'mobile', title: 'Mobile Usability', image: '/images/mobile-responsive-design.png', theme: 'mobile', items: [
          { id: 'optimize-tap-targets-button-sizes', label: 'Optimize tap targets & button sizes' },
          { id: 'improve-mobile-navigation-flow', label: 'Improve mobile navigation flow' },
          { id: 'test-fix-mobile-checkout-friction', label: 'Test & fix mobile checkout friction' },
        ]},
        { id: 'gifting', title: 'Gifting & Seasonal', image: '/images/gifting-thank-you-holiday.png', theme: 'gifting', items: [
          { id: 'add-gift-wrapping-options', label: 'Add gift wrapping options' },
          { id: 'create-seasonal-promotional-calendar', label: 'Create seasonal promotional calendar' },
          { id: 'build-themed-landing-pages-per-season', label: 'Build themed landing pages per season' },
        ]},
      ],
    },
  ],
  breakdown: {
    toc: [
      { id: 'what-they-do-well', label: "What They're Doing Well" },
      { id: 'add-character-driven-hero-banner', label: 'Hero & Value Proposition' },
      { id: 'add-clear-value-proposition-headline', label: 'Value Proposition Headline' },
      { id: 'fix-sign-in-discount', label: '10% Sign-In Popup (Backwards)' },
      { id: 'display-star-ratings-on-collection-pages', label: 'Star Ratings on Product Cards' },
      { id: 'display-user-generated-content', label: 'Follow the Fun → UGC' },
      { id: 'create-birthday-holiday-gift-guides', label: 'Gift-Finder / Quiz' },
      { id: 'add-free-shipping-progress-bar', label: 'Free Shipping Progress' },
      { id: 'add-trust-badges-to-cart-page', label: 'Trust Badges' },
      { id: 'create-gift-set-bundles', label: 'Bundle Builder' },
      { id: 'implement-frequently-bought-together', label: 'Post-Purchase Upsell' },
      { id: 'loyalty-repeat', label: 'Loyalty & Repeat Purchase' },
    ],
    groups: [
      {
        title: "What They're Doing Well",
        items: [{ id: 'what-they-do-well', title: "What They're Doing Well", paragraphs: [
          'Navigation architecture is solid. Shop by Brand, Category, and Age gives three distinct paths to product.',
          'Free shipping threshold is prominent. The cart reminder is a proven AOV lift mechanism.',
          'Social proof signals exist. Stock scarcity is used on product cards — good.',
        ]}],
      },
      {
        title: 'High-Impact Problems to Fix',
        items: [
          { id: 'add-character-driven-hero-banner', title: 'Add character-driven hero banner', paragraphs: ['The homepage hero is a Bluey banner → shop now. There\'s no statement about who eKids is, why to buy here vs. Amazon.'], fix: 'Add a persistent brand bar or hero subheadline with trust signals above the fold.' },
          { id: 'add-clear-value-proposition-headline', title: 'Add clear value proposition headline', paragraphs: ['The hero section is almost entirely brand-logo-driven with no value proposition.'], fix: 'Add a clear value proposition above the fold.' },
          { id: 'fix-sign-in-discount', title: 'The "10% off sign-in" popup is backwards', paragraphs: ['The discount should be for new visitors in exchange for an email — not for existing account holders.'], fix: 'Replace with email capture popup: "Get 10% off your first order" → email input → discount code.' },
          { id: 'display-star-ratings-on-collection-pages', title: 'No social proof on product cards', paragraphs: ['Star ratings are absent from product cards. Review volume is a major trust signal for parents.'], fix: 'Enable review stars on collection/product card templates.' },
          { id: 'display-user-generated-content', title: '"Follow the Fun" social section is dead weight', paragraphs: ['Static images linking to social don\'t drive conversions.'], fix: 'Replace with shoppable UGC feed. Each post should link to the product.' },
          { id: 'create-birthday-holiday-gift-guides', title: 'No gift-finder or quiz', paragraphs: ['A huge percentage of buyers are gift-givers who don\'t know what to buy.'], fix: 'Add "Find the perfect gift" quiz (age → character → product type).' },
        ],
      },
      {
        title: 'Quick Wins',
        items: [
          { id: 'add-free-shipping-progress-bar', title: 'Free shipping progress bar', paragraphs: ['Ensure it\'s prominent on cart page and checkout flows.'] },
          { id: 'add-trust-badges-to-cart-page', title: 'Add trust badges', paragraphs: ['Safe for kids, licensed, warranty — make these visible above the fold and at checkout.'] },
          { id: 'implement-frequently-bought-together', title: 'Frequently bought together', paragraphs: ['On product pages, suggest complementary items to increase AOV.'] },
        ],
      },
      {
        title: 'Bigger Strategic Opportunities',
        items: [
          { id: 'create-gift-set-bundles', title: 'Bundle builder', paragraphs: ['A "build a gift set" or "buy 2, save 10%" mechanic could significantly lift AOV.'] },
          { id: 'implement-cart-abandonment-recovery', title: 'Cart abandonment recovery', paragraphs: ['Email/SMS sequences. Recover 10–15% of abandoned carts.'] },
          { id: 'loyalty-repeat', title: 'Loyalty / repeat purchase', paragraphs: ['A points program would reward parents who buy multiple times a year.'] },
        ],
      },
    ],
  },
};
