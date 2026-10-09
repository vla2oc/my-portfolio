export interface Project {
  id: number;
  title: string;
  category: "Work" | "Pet Project" | "Hackatom";
  videoMp4: string;
  posterUrl: string;
  slug: string;
  shortDescription: string;
  githubUrl: string;
  liveUrl: string;
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
    videoMp4: "/img/TheGarden.mp4",
    posterUrl: "/img/the-garden-prev.jpg",
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
    title:
      "Crypto AI-Tracker: Microservices Dashboard with Hybrid Sentiment Analysis",
    category: "Work",
    slug: "crypto-dashboard",
    videoMp4: "/img/crypto-preview.mp4",
    posterUrl: "/img/crypto-portfolio-prev.jpg",
    githubUrl: "https://github.com/vla2oc/cryptoPortfolio",
    liveUrl: "https://vla2oc.github.io/cryptoPortfolio/",
    shortDescription:
      "Retail investors bleed money due to market noise and emotional bias. This platform acts as a personal quant. It’s a microservices-based dashboard that fuses real-time portfolio tracking with an NLP-driven 'Fear & Greed' index. Zero guesswork, just data-backed insights.",
    stack: [
      {
        name: "Docker & Docker Compose",
        reason:
          "Ensured full containerization. I isolated every microservice so the system runs identically across macOS, Linux, and Windows without environment conflicts.",
      },
      {
        name: "Python (FastAPI) + PyTorch",
        reason:
          "The perfect engine for heavy ML lifting. FastAPI handles asynchronous requests while the dedicated inference service runs FinBERT, keeping the main API Gateway completely unblocked.",
      },
      {
        name: "Node.js (Express)",
        reason:
          "Acts as the API Gateway and central orchestrator. It securely manages business logic, portfolio CRUD operations, and bridges the React client with the AI engine.",
      },
      {
        name: "React + Vite",
        reason:
          "Chosen for high-performance SPA rendering. Ensures the dashboard UI and heavy data visualizations update instantly without layout thrashing.",
      },
    ],

    features: [
      "Two-stage Hybrid AI pipeline (FinBERT + Gemini) generating hallucination-free market insights.",
      "Real-time cryptocurrency portfolio tracking with dynamic data visualization.",
      "Automated news aggregation and processing from multiple financial sources.",
      "Decoupled microservices architecture ensuring high scalability and fault tolerance.",
    ],

    metrics: [
      "Architected a novel two-stage Hybrid AI pipeline, effectively eliminating the risk of LLM hallucinations in financial sentiment analysis.",
      "Built a resilient microservices ecosystem with secure internal networking between Node.js and Python containers.",
      "Separated system logic into the 'Quantitative Analyst' (scoring) and 'Qualitative Reporter' (summary), achieving enterprise-grade objectivity.",
    ],

    challenges: [
      {
        challenge:
          "AI Hallucinations: Generative LLMs often fabricate facts or misjudge the sentiment of financial news, which is catastrophic for trading decisions.",
        solution:
          "Engineered a hybrid pipeline. First, a local FinBERT model acts as the 'Ground Truth', delivering strict mathematical probability scores. Only then does Gemini receive these hard numbers alongside the news to draft a human-readable report. Gemini is constrained by math, making hallucinations impossible.",
      },
    ],
    learnings: [
      "Mastered cross-service communication and networking between Node.js and Python ecosystems via Docker.",
      "Learned how to effectively constrain Generative AI outputs using deterministic Machine Learning models.",
      "Gained practical experience in designing and orchestrating a scalable microservices architecture from scratch.",
    ],
  },
  {
    id: 3,
    title: "SushkovPro: B2B Corporate Identity & Digital Transformation",
    category: "Work",
    slug: "sushkovpro",
    videoMp4: "/img/sushkov.mp4",
    posterUrl: "/img/sushkov-prev.jpg",
    shortDescription:
      "A complete digital transformation for a traditional construction firm. More than just a corporate site, its a high-performance B2B platform designed to establish industry authority, showcase architectural capabilities through 3D elements, and drive high-quality lead generation.",

    githubUrl: "https://github.com/vla2oc/SushkovPro",
    liveUrl: "https://vla2oc.github.io/SushkovPro/",

    stack: [
      {
        name: "React 19 + Vite",
        reason:
          "Leveraged the latest React features and Vite's lightning-fast HMR to build a highly responsive SPA that feels instantaneous to the user.",
      },
      {
        name: "Tailwind CSS v4",
        reason:
          "Utilized the newest engine for zero-runtime overhead, enabling rapid UI development while keeping the CSS bundle size minimal for SEO.",
      },
      {
        name: "React Three Fiber (R3F) & Framer Motion",
        reason:
          "Combined to deliver a premium user experience. R3F brings architectural concepts to life via 3D, while Framer Motion handles smooth, scroll-triggered micro-interactions.",
      },
      {
        name: "React Hook Form + Axios",
        reason:
          "Engineered a seamless and robust lead-capture pipeline. Ensures fast rendering, strict validation, and reliable data submission for B2B inquiries.",
      },
    ],

    features: [
      "Interactive 3D architectural elements breaking the mold of standard corporate websites.",
      "High-converting B2B inquiry flows optimized for both desktop and mobile users.",
      "Premium scroll-triggered animations and seamless page transitions.",
      "Mobile-first responsive architecture featuring immersive parallax effects on desktop.",
    ],

    metrics: [
      "Successfully transitioned a traditional offline B2B business into the digital space, creating a new primary channel for lead generation.",
      "Achieved top-tier performance scores despite heavy 3D and animation workloads by utilizing modern frontend optimization techniques.",
      "Differentiated the brand from local competitors by delivering an interactive, 'agency-level' digital face.",
    ],

    challenges: [
      {
        challenge:
          "Performance vs. Visuals: Integrating WebGL/3D models and complex Framer Motion animations often degrades website performance, which negatively impacts B2B SEO and user retention.",
        solution:
          "Implemented strict performance budgets. Used lazy loading for R3F canvases, optimized 3D asset delivery via Vite, and relied on Tailwind v4's utility-first approach to ensure the main thread remained unblocked.",
      },
    ],

    learnings: [
      "Mastered the integration of WebGL (React Three Fiber) into standard DOM layouts without compromising accessibility or UX.",
      "Learned how to translate a physical, offline construction brand into a digital identity that commands trust.",
      "Improved skills in building efficient, conversion-focused form pipelines using React Hook Form.",
    ],
  },
  {
    id: 4,
    title: "Health DApp: Web3 Fitness Dashboard & Analytics",
    slug: "health-tracker",
    category: "Pet Project",
    videoMp4: "/img/health.mp4",
    posterUrl: "/img/dapp-health-prev.jpg",
    shortDescription:
      "Personal health data shouldn't be locked in corporate silos. This DApp bridges modern fitness tracking with Web3. It provides a premium, responsive dashboard for tracking daily metrics (steps, water, vitals) while being architecturally ready for on-chain data anchoring.",

    githubUrl: "https://github.com/vla2oc/health-dapp",
    liveUrl: "https://vla2oc.github.io/health-dapp/",

    stack: [
      {
        name: "React 19 + Vite + React Router v7",
        reason:
          "Adopted the bleeding-edge 2025 frontend ecosystem. Ensures lightning-fast HMR, concurrent rendering capabilities, and highly optimized routing.",
      },
      {
        name: "Tailwind CSS v4 + Shadcn UI",
        reason:
          "Leveraged native CSS variables and zero-runtime styling to build a clean, mobile-first interface. Shadcn UI provided highly accessible, customizable primitives.",
      },
      {
        name: "Recharts & Context API",
        reason:
          "Combined centralized state management with Recharts to create a dynamic dataviz layer. Charts and UI elements respond instantly to user inputs and goal completions.",
      },
      {
        name: "Wagmi + Viem + Zod",
        reason:
          "Integrated the modern standard for EVM communication. Zod ensures strict payload validation before any health data interacts with the Web3 layer.",
      },
    ],

    features: [
      "Smart Goal Tracking: UI elements and charts dynamically shift colors based on user progress (e.g., reaching daily step counts).",
      "Real-time Data Visualization: Interactive Area, Bar, and Donut charts updating seamlessly via React Context.",
      "Web3-Ready Architecture: Pre-configured Wagmi hooks for future smart contract interactions and on-chain health data storage.",
      "Mobile-First UX: Features highly optimized mobile interactions, including touch-friendly drawer inputs and responsive layouts.",
    ],

    metrics: [
      "Successfully architected a project using beta/release-candidate technologies (React 19, Tailwind v4), proving high adaptability to new tools.",
      "Bridged enterprise-grade Web2 UI/UX with Web3 infrastructure without compromising performance or accessibility.",
      "Implemented a scalable global state system managing multiple health metrics simultaneously with zero unnecessary re-renders.",
    ],

    challenges: [
      {
        challenge:
          "Web3 UX Friction: Decentralized apps often suffer from clunky user experiences due to constant wallet pop-ups and slow on-chain reads, which is unacceptable for a daily fitness tracker.",
        solution:
          "Architected a 'Web2-first' approach. The core dashboard runs entirely on optimized local state (Context API) for instant feedback. The Web3 layer (Wagmi/Viem) is isolated, allowing users to track their health smoothly, interacting with the blockchain only when explicitly anchoring data.",
      },
    ],

    learnings: [
      "Mastered the transition to React 19 paradigms and Tailwind v4's new CSS variable engine.",
      "Learned how to effectively isolate complex Web3 logic from pure UI components to maintain high frame rates.",
      "Advanced my skills in data visualization, specifically synchronizing complex Recharts animations with global state changes.",
    ],
  },
  {
    id: 5,
    title:
      "ConvoyMind: Trip Planner for Truck Drivers (AETR Rest Stops & Parking)",
    category: "Work",
    slug: "convoymind",
    videoMp4: "/img/convoymind.mp4",
    posterUrl: "/img/convoymind.png",
    shortDescription:
      "A mobile app that plans a truck driver's trip around the law, not just the road. The driver enters a route, and ConvoyMind calculates where mandatory AETR/EU rest stops fall, checks whether parking is likely to be available there, and flags scheduling conflicts before the truck leaves the yard. Built as an MVP by a 4-person startup team and pitched on stage at MobiScale Demo Day.",

    githubUrl: "-",
    liveUrl: "https://convojmind-landing.vercel.app/",

    stack: [
      {
        name: "Expo (managed) + React Native + TypeScript",
        reason:
          "The user is a driver holding a phone, so the product had to be native mobile. Managed Expo let me carry my React experience over and ship a working prototype without maintaining native build tooling.",
      },
      {
        name: "Expo Router",
        reason:
          "File-based routing keeps navigation predictable and close to the web mental model, which kept the React Native specific surface area small for an MVP.",
      },
      {
        name: "TomTom Orbis Routing v2",
        reason:
          "Chosen because it models rest stops natively inside route legs and returns routing plus live traffic in a single call, so the rest-stop plan and the ETA come from the same source of truth.",
      },
      {
        name: "AETR rules engine in pure TypeScript",
        reason:
          "Driving-time and rest regulations are implemented as plain, typed, framework-free functions. The rules are legally fixed, so hardcoding them makes the logic fully testable and independent of the UI.",
      },
      {
        name: "Jest (jest-expo) + MSW v2",
        reason:
          "No free real-time truck parking API exists for Europe, so parking is served by a mock API. MSW runs the same handlers in tests (msw/node) and in the dev app (msw/native), so the app is built against a stable contract that a real data source can replace later.",
      },
    ],

    features: [
      "Automatic calculation of mandatory breaks and rest periods along a route according to AETR/EU driving-time rules.",
      "Parking availability check at each planned stop, with the data source and confidence shown next to every figure.",
      "Early conflict detection: the driver sees before departure where the legal schedule and the real route do not fit together.",
      "Portrait-mode timeline ('tape') as the main result screen: the trip is shown as a sequence in time instead of a map, because that is what a driver can actually read on a phone.",
    ],

    metrics: [
      "Taken from architecture documents to a working prototype that the team demos to carriers.",
      "Pitched on stage at MobiScale Demo Day (Edition 2) in September 2026 with a live prototype.",
      "Problem confirmed in conversation with a carrier who had already built an internal tool for the same task.",
    ],

    challenges: [
      {
        challenge:
          "No data where it matters most: there is no free, real-time API for truck parking occupancy in Europe, yet parking is half of the product's value.",
        solution:
          "Defined a parking API contract first and built the MVP against a mock that follows it. In parallel, mapped the real public sources (GDDKiA registry in Poland, Autobahn GmbH and SID Toll Collect in Germany) and designed the UI to label every number with its source and confidence, so forecasts are never presented as live data.",
      },
      {
        challenge:
          "Map or no map: every routing product defaults to a map, but a driver in a cab needs to know when to stop, not to study geography on a small portrait screen.",
        solution:
          "Made a time-based timeline the primary view and deliberately moved the map out of the MVP. This cut scope and produced a screen that answers the driver's real question at a glance.",
      },
      {
        challenge:
          "First React Native project, small team, limited time: easy to drown in scope and native complexity.",
        solution:
          "Worked documentation-first. Locked decisions in DECISIONS.md, parked everything non-essential in NOT_NOW.md (map view, geocoding, multi-day routing, extra truck dimensions), and split the build into two phases, core logic and app, connected only by an API contract.",
      },
    ],

    learnings: [
      "Moved from web React to React Native and learned which habits transfer and which do not.",
      "Learned to design around a real usage context (one hand, portrait phone, truck cab) instead of copying the conventions of the product category.",
      "Practiced separating domain logic from UI: the regulation engine is testable on its own and does not know the app exists.",
      "Learned to say 'not now' in writing: an explicit list of deferred features protected the MVP better than any deadline.",
      "Saw how a product is tested outside the code: carrier conversations, a stage pitch, and judges asking where the data comes from.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return mockProjects.find((p) => p.slug === slug);
}

export function getProjectByCategory(category: Project["category"]): Project[] {
  return mockProjects.filter((p) => p.category === category);
}
