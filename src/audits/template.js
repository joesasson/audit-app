// Copy this file and rename (e.g., acme.js) to create a new client audit.
// Add your new audit to src/audits/index.js

export default {
  id: 'acme',
  client: {
    name: 'Acme Corp',
    logo: '/images/acme-logo.png',
    brand: 'Acme.com',
    title: 'CRO Checklist',
    subtitle: 'CRO Audit 2026',
    roadmap: 'Acme UX Optimization Roadmap',
  },
  breakdownTitle: 'CRO Analysis',
  priorityGroups: [
    {
      id: 'first',
      label: 'High-Impact Optimizations',
      badge: 'First',
      badgeClass: 'first',
      sections: [
        {
          id: 'homepage',
          title: 'Homepage',
          image: '/images/homepage.png',
          theme: 'homepage',
          items: [
            { id: 'add-hero', label: 'Add hero banner' },
            { id: 'value-prop', label: 'Add value proposition' },
          ],
        },
      ],
    },
    {
      id: 'next',
      label: 'Secondary',
      badge: 'Next',
      badgeClass: 'next',
      sections: [],
    },
    {
      id: 'ongoing',
      label: 'Ongoing',
      badge: 'Ongoing',
      badgeClass: 'ongoing',
      sections: [],
    },
  ],
  breakdown: {
    toc: [],
    groups: [],
  },
};
