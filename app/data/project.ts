export interface Project {
  id: number;
  title: string;
  category: "Work" | "Pet Project" | "Hackatom";
  videoWebm: string;
  videoMp4: string;
  posterUrl?: string;
  slug: string;
  shortDescription: string;
  githubUrl: string;
  liveUrl?: string;
  stack: {
    name: string;
    reason: string;
  }[];
  features: string[];
  metrics: string[];

  challenges: {
    challenge: string;
    solution: string;
  }[];

  learnings: string[];
}

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "The Garden",
    category: "Work",
    slug: "the-garden",
    videoWebm: "/img/TheGarden.webm",
    videoMp4: "/img/TheGarden.mp4",
    shortDescription:
      "A high-performance premium promotional website for a luxury lounge, focused on delivering a cinematic user experience and smooth 60fps animations.",
    githubUrl: "https://github.com/vla2oc/The-Garden",
    liveUrl: "https://vla2oc.github.io/The-Garden/",
    stack: [
      {
        name: "React 19",
        reason:
          "Leveraged Concurrent Rendering to prioritize task execution and prevent UI freezes during heavy interface updates.",
      },
      {
        name: "GSAP (GreenSock)",
        reason:
          "Used for building complex scroll-driven animations and providing full control over synchronized animation timelines.",
      },
      {
        name: "Tailwind CSS v4",
        reason:
          "Enabled zero-runtime styling, reduced the final CSS bundle size, and minimized browser main-thread workload.",
      },
    ],
    features: [
      "Advanced scroll-triggered animation timelines synchronized with user interactions.",
      "Premium visual experience designed from scratch around the brand identity and aesthetic inspired by Instagram.",
      "Clean architecture with a clear separation between animation logic and UI components.",
    ],
    metrics: [
      "Built the MVP version of the project independently within 2–3 days.",
      "Optimized rendering performance to maintain a stable 60 FPS under heavy animation workloads.",
      "100% self-directed development, including project structure, branding, and product positioning.",
    ],
    challenges: [
      {
        challenge:
          "Performance degradation and layout thrashing caused by multiple heavy animations running simultaneously during scroll interactions.",
        solution:
          "Profiled performance using Chrome DevTools and replaced layout-affecting properties with GPU-accelerated transforms and opacity-based animations.",
      },
    ],
    learnings: [
      "Gained hands-on experience with advanced browser rendering performance profiling.",
      "Learned how to translate the atmosphere of a physical business into a compelling digital brand experience.",
      "Improved my ability to rapidly build and launch viable MVPs under tight deadlines.",
    ],
  },
  {
    id: 2,
    title: "Crypto Dashboard",
    category: "Work",
    slug: "crypto-dashboard",
    videoWebm: "/img/crypto-preview.webm",
    videoMp4: "/img/crypto-preview.mp4",
  },
  {
    id: 3,
    title: "SushkovPro",
    category: "Work",
    slug: "sushkovpro",
    videoWebm: "/img/sushkov.webm",
    videoMp4: "/img/sushkov.mp4",
  },
  {
    id: 4,
    title: "Health Tracker",
    slug: "health-tracker",
    category: "Pet Project",
    videoWebm: "/img/health.webm",
    videoMp4: "/img/health.mp4",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return mockProjects.find((p) => p.slug === slug);
}

export function getProjectByCategory(category: Project["category"]): Project[] {
  return mockProjects.filter((p) => p.category === category);
}
