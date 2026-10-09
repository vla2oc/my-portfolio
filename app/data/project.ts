export interface Project {
  id: number;
  title: string;
  category: "Work" | "Pet Project" | "Hackaton";
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
  {
    id: 6,
    title:
      "Lease Search: Retrieval Experiment on 29 Commercial Lease Agreements (Dense vs BM25 vs Hybrid)",
    category: "Pet Project",
    slug: "lease-rag",
    videoMp4: "/img/lease-rag.mp4",
    posterUrl: "/img/lease-rag-prev.jpg",
    shortDescription:
      "A search engine over 29 commercial lease agreements that returns the original contract clauses instead of an LLM answer. I left generation out on purpose: it hides the layer that actually breaks. The same question can be run through dense, BM25 and hybrid retrieval over one index, and an eval script with gold paragraph IDs measures where each mode fails. The demo shows one of those failures on purpose: a question that none of the three modes can answer, and the reason why.",

    githubUrl: "https://github.com/vla2oc/lease-rag",
    liveUrl: "",

    stack: [
      {
        name: "Next.js 16 (App Router) + React 19 + TypeScript",
        reason:
          "UI and the search API live in one repo. Search runs in a Node route handler because the index is read from disk, and typed chunk and result shapes keep the parser, the index and the UI in agreement.",
      },
      {
        name: "Cheerio",
        reason:
          "Parses the SEC EDGAR lease HTML into paragraphs while keeping each <p id>. Those IDs become the ground truth for the eval and the paragraph range shown next to every result.",
      },
      {
        name: "Vercel AI SDK + OpenAI text-embedding-3-small",
        reason:
          "embedMany indexes the corpus in batches, and embed handles the query at search time (about $0.0000004 per request). The model is symmetric, with no query/passage prefixes, so flat score distributions could not be blamed on a prefix mismatch. That ruled out one easy explanation for the results.",
      },
      {
        name: "wink-bm25-text-search + wink-nlp-utils",
        reason:
          "The lexical channel runs fully locally with no network calls, with its own tokenization. It is the baseline the other modes are compared against, and it doubles as a post-deploy canary that checks the index without spending an API call.",
      },
      {
        name: "Reciprocal Rank Fusion (k=60), written by hand",
        reason:
          "Fuses rankings from two channels whose scores are not comparable, without calibrating them. Writing it myself is how I noticed that RRF throws away score magnitude: hybrid scores of 0.032 / 0.016 are arithmetic, not relevance.",
      },
      {
        name: "Eval script in plain TypeScript (hit@1, hit@5, MRR)",
        reason:
          'Ground truth comes from paragraph IDs in the source HTML (<p id="s1p91">), so every score is computed by code, not by me eyeballing results. That makes each change to chunking or retrieval measurable before and after.',
      },
      {
        name: "Tailwind CSS + Framer Motion",
        reason:
          "A minimal, thread-style interface that keeps the focus on the returned text: document ID, paragraph range and raw score are shown next to every fragment.",
      },
    ],

    features: [
      "Three retrieval modes (dense, BM25, hybrid via RRF) over the same 1,299-chunk index, switchable per query, so one question can be compared side by side.",
      "Results are the original contract fragments with document ID, paragraph range and raw score. There is no LLM paraphrase in between.",
      "One command (npm run eval) reports hit@1, hit@5 and MRR for all three modes against gold paragraph IDs.",
      "Hardened search API: input validation, a 20 requests/min per-IP rate limit, and BM25 that keeps working even without an API key.",
    ],

    metrics: [
      "29 lease agreements from SEC EDGAR parsed into 1,299 chunks and indexed for three retrieval modes.",
      "Baseline on 6 gold questions: BM25 hit@5 1.00 / MRR 0.68, hybrid 0.83 / 0.59, dense 0.50 / 0.38. The set is small, so I use it to compare changes, not as a benchmark.",
      "7 failure modes found and written up in the README, each with the number that proves it. Example: a chunk queried with its own verbatim text ranked 2nd, with a top-5 score spread of 0.01.",
    ],

    challenges: [
      {
        challenge:
          "Dense retrieval can't tell near-identical clauses apart. Every lease has the same default clause, so the embeddings collapse into roughly one point, and ranking is decided by noise.",
        solution:
          "Ran a controlled experiment: query the index with the exact text of the gold paragraph. It still ranked 2nd, with a spread of 0.01 across the top 5. That isolates the limit as architectural (a bi-encoder never sees the query), not a phrasing problem. So the fix is lexical signal, a cross-encoder or a narrower search space, not swapping the embedding model.",
      },
      {
        challenge:
          "Users ask by company name, but contracts say 'Tenant' and 'Landlord'. The name appears in 2 of 1,299 chunks, the header and the exhibits, so hybrid search scored the same 0.60 as BM25 alone.",
        solution:
          "Built a 5-question set that separates questions with a distinguishing term in the chunk from questions where the only distinguisher is the party name. The pattern was clean: the first kind passes, the second fails in every mode, because fusion can't help when both channels share the same blind spot. This is the question in the demo. The next experiment, with success criteria written down in advance, is contextual chunk headers that put the party name and section title into every chunk.",
      },
      {
        challenge:
          "The metric said 'hit' while the chunk couldn't answer the question. For 'monthly rent in month 20', BM25 put the right chunk first, but the rent table had lost its column headers.",
        solution:
          "Traced it with grep over the parsed index to a 40-character minimum-paragraph filter. It removes 43% of paragraphs, mostly page numbers and footers, but also the header 'Term $/SQ.FT Monthly Annually' (29 characters). I documented it, split the metrics into file@5 (right contract?) and chunk@1 (right paragraph?) so one score can't hide which layer fails, and specified the fix: filter by content instead of length, and glue table headers to their first row.",
      },
    ],

    learnings: [
      "Learned to evaluate retrieval separately from generation: an LLM answer on top would have hidden every failure listed here.",
      "Learned that a good metric can lie. hit@5 = 1.0 says nothing if the parser removed the context the answer depends on.",
      "Learned to design eval questions that can actually fail: questions drafted from a contract's summary page all land in one chunk and score near 100% while measuring nothing.",
      "Practiced turning an observation into a controlled experiment, like the verbatim self-query, before deciding what to change.",
      "Learned to write the hypothesis and the success criteria before running the next experiment, so the result can't be argued into a win afterwards.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return mockProjects.find((p) => p.slug === slug);
}

export function getProjectByCategory(category: Project["category"]): Project[] {
  return mockProjects.filter((p) => p.category === category);
}
