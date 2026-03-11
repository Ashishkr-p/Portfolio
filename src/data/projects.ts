export type Project = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  results: string[];
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'guest-checkout-flow-for-ecommerce',
    title: 'Guest Checkout Flow for E-commerce',
    summary:
      'Reduced checkout drop-off by streamlining the anonymous buyer experience with intelligent validation and fast field interactions.',
    problem:
      'Guest users were abandoning checkout due to mandatory account creation and repetitive data entry in a multi-step flow.',
    solution:
      'Designed a single-page guest checkout with progressive disclosure, address persistence, and inline error handling for high completion rates.',
    architecture:
      'Built with modular React components, Redux Toolkit for checkout state orchestration, and API-driven validation with retry-safe actions.',
    techStack: ['React', 'Next.js', 'Redux Toolkit', 'TypeScript', 'TailwindCSS'],
    results: ['22% checkout completion increase', '18% lower checkout time', 'Significant drop in validation errors'],
    image: '/projects/guest-checkout.svg'
  },
  {
    id: 2,
    slug: 'paynow-qr-payment-integration',
    title: 'PayNow QR Payment Integration',
    summary:
      'Implemented a resilient QR payment workflow with payment status polling and real-time user feedback.',
    problem:
      'Payment retries and unclear status states caused failed or duplicate transactions for mobile shoppers.',
    solution:
      'Integrated PayNow QR with idempotent backend tokens, visible payment state transitions, and fallback payment paths.',
    architecture:
      'Event-based payment status management with polling + websocket fallback, mapped to deterministic frontend state machine.',
    techStack: ['Next.js', 'Node.js', 'Redux Toolkit', 'Framer Motion', 'New Relic'],
    results: ['31% reduction in payment failures', 'Improved payment confidence', 'Fewer support tickets'],
    image: '/projects/paynow.svg'
  },
  {
    id: 3,
    slug: 'postal-code-address-autofill-system',
    title: 'Postal Code Address Autofill System',
    summary:
      'Accelerated form completion by auto-populating city/state based on postal code with graceful fallbacks.',
    problem:
      'Users manually entered location details incorrectly, leading to delayed deliveries and order edits.',
    solution:
      'Added postal code lookups, debounce controls, and editable autofill fields with strict validation boundaries.',
    architecture:
      'Client-side lookup orchestration with memoized caches and server-side normalization to prevent stale address data.',
    techStack: ['React', 'Redux Toolkit', 'Node.js', 'TypeScript', 'Linux'],
    results: ['40% faster address entry', 'Drop in invalid address submissions', 'Higher delivery success rates'],
    image: '/projects/postal-code.svg'
  },
  {
    id: 4,
    slug: 'multi-image-upload-system',
    title: 'Multi Image Upload System',
    summary:
      'Developed a performant multi-image upload flow with previews, compression, and resilient retries.',
    problem:
      'Large image uploads were slow, unstable, and failed silently on poor network conditions.',
    solution:
      'Built chunked upload with optimistic UI previews, progress bars, and retry queues for failed segments.',
    architecture:
      'Parallel upload workers with cancel controls, upload state in Redux slices, and monitoring hooks in New Relic.',
    techStack: ['Next.js', 'Webpack', 'Redux', 'TailwindCSS', 'Git'],
    results: ['50% faster median upload', 'Improved success rate on weak networks', 'More confident product listing UX'],
    image: '/projects/multi-image.svg'
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
