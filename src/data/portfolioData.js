export const developerProfile = {
  name: "Karunathilaka",
  handle: "karunathilaka",
  title: "Senior Vue & Frontend Engineer",
  tagline: "Sync your ideas into high-performance web applications.",
  subtagline: "Crafting fast web apps & digital experiences.",
  cliCommand: "npx karunathilaka --portfolio",
  status: "Available for new projects",
  location: "Remote / Worldwide",
  bio: "Frontend engineer specializing in Vue 3, Vite, TypeScript, and modern web architectures. Passionate about building lightning-fast UI components, rich visual systems, and developer tools.",
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Production Apps Built", value: "35+" },
    { label: "NPM Downloads", value: "120K+" },
    { label: "Client Satisfaction", value: "99.8%" }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "karunalaka@devportfolio.io"
  }
};

export const skillsData = [
  {
    category: "Frontend Core",
    icon: "⚡",
    description: "Reactive UI, state management, and modern Web APIs.",
    skills: [
      { name: "Vue 3 / Composition API", level: 98, tag: "Expert" },
      { name: "JavaScript (ES2024+) / TS", level: 95, tag: "Expert" },
      { name: "Pinia / Vuex State Management", level: 92, tag: "Advanced" },
      { name: "Vue Router & SSR (Nuxt 3)", level: 90, tag: "Advanced" },
      { name: "HTML5 / Semantic Web / Accessibility", level: 96, tag: "Expert" }
    ]
  },
  {
    category: "Styling & UI Architecture",
    icon: "🎨",
    description: "Design systems, CSS architecture, micro-animations.",
    skills: [
      { name: "Vanilla CSS3 / Design Systems", level: 96, tag: "Expert" },
      { name: "Tailwind CSS / PostCSS", level: 94, tag: "Expert" },
      { name: "CSS Grid & Flexbox Layouts", level: 98, tag: "Expert" },
      { name: "Glassmorphism & Canvas FX", level: 88, tag: "Advanced" },
      { name: "Responsive Design & Mobile First", level: 95, tag: "Expert" }
    ]
  },
  {
    category: "Build Tools & Backend Integration",
    icon: "🛠️",
    description: "High-speed bundling, APIs, and dev environment orchestration.",
    skills: [
      { name: "Vite / Rollup / Webpack", level: 92, tag: "Advanced" },
      { name: "RESTful & GraphQL APIs", level: 89, tag: "Advanced" },
      { name: "Node.js & Express / Hono", level: 85, tag: "Intermediate" },
      { name: "Git / CI/CD Workflows", level: 91, tag: "Advanced" },
      { name: "Vitest / Cypress Testing", level: 84, tag: "Intermediate" }
    ]
  }
];

export const experienceTimeline = [
  {
    period: "2024 - PRESENT",
    role: "Lead Vue Architect",
    company: "Nexus Labs",
    location: "Remote",
    description: "Leading frontend development of cloud asset workspace. Re-engineered core rendering engine resulting in a 45% decrease in initial bundle size and sub-100ms render times.",
    highlights: [
      "Architected custom Vue 3 component library used across 8 sub-products.",
      "Implemented real-time WebSocket state synchronization engine with Pinia.",
      "Mentored junior and mid-level Vue developers."
    ]
  },
  {
    period: "2022 - 2024",
    role: "Senior Frontend Engineer",
    company: "Veloce Systems",
    location: "San Francisco, CA",
    description: "Built high-performance dashboard interfaces and data analytics tools for enterprise clients.",
    highlights: [
      "Migrated legacy codebase from Options API to Vue 3 Composition API + TypeScript.",
      "Integrated automated CI/CD component testing pipelines with Vitest.",
      "Optimized Web Vitals score to 99 across desktop and mobile devices."
    ]
  },
  {
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "PixelCraft Agency",
    location: "Austin, TX",
    description: "Developed bespoke web applications, e-commerce storefronts, and interactive marketing platforms for global tech brands.",
    highlights: [
      "Created 20+ responsive web projects with custom micro-animations.",
      "Collaborated closely with UI/UX designers to translate Figma tokens into clean code."
    ]
  }
];

export const projectsData = [
  {
    id: "project-1",
    title: "Apex Workspace – Agentic Developer Canvas",
    tagline: "One shared dark canvas for developers and AI agents to manage workflows.",
    category: "Vue.js Apps",
    categoryKey: "vue",
    featured: true,
    bannerColor: "linear-gradient(135deg, #00e5ff 0%, #8b5cf6 100%)",
    techStack: ["Vue 3", "Vite", "Pinia", "TypeScript", "Vanilla CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    summary: "A high-performance workspace app inspired by modern developer portals. Features real-time state sync, dynamic bento grids, and interactive terminal widgets.",
    codeSnippet: `// ApexWorkspace.vue
import { ref, computed } from 'vue';
import { useAgentStore } from '@/stores/agentStore';

const agentStore = useAgentStore();
const activeAgents = computed(() => agentStore.runningWorkers);

const executeTask = async (taskId) => {
  await agentStore.dispatchWorker(taskId, { async: true });
};`,
    details: {
      overview: "Apex Workspace was built to address the fragmented experience of managing multi-agent build tasks. Built with Vue 3's Composition API and Pinia, it offers 60fps rendering even with hundreds of live stream metrics.",
      keyFeatures: [
        "Interactive Bento-Grid dynamic layout manager",
        "Monospaced Live Output Terminal with syntax highlighting",
        "Sub-50ms reactive state updates powered by Vue 3 reactivity engine",
        "Fully accessible dark theme with WCAG AAA contrast compliance"
      ],
      metrics: "3.2x faster render speed compared to legacy React dashboard"
    }
  },
  {
    id: "project-2",
    title: "VibeUI – Design System & Component Library",
    tagline: "Ultra-sleek, glassmorphic Vue 3 component library built for developer experience.",
    category: "UI/UX & Systems",
    categoryKey: "ui",
    featured: true,
    bannerColor: "linear-gradient(135deg, #10b981 0%, #00e5ff 100%)",
    techStack: ["Vue 3", "CSS Variables", "Storybook", "Vitepress"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    summary: "Zero-dependency design system featuring 40+ accessible UI components, customizable CSS design tokens, and smooth micro-animations.",
    codeSnippet: `/* VibeUI Glassmorphism Utility */
.vibe-glass-panel {
  background: rgba(14, 16, 23, 0.75);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}`,
    details: {
      overview: "VibeUI provides developers with instant access to production-ready dark mode UI components. Designed specifically to mimic high-end SaaS platforms like Notion Dev and Vercel.",
      keyFeatures: [
        "40+ fully customizable, copy-paste Vue 3 components",
        "Lightweight (<12kb gzipped total bundle size)",
        "Integrated dark mode, keyboard navigation shortcuts, and focus indicators"
      ],
      metrics: "Over 45,000 package downloads on NPM"
    }
  },
  {
    id: "project-3",
    title: "DevMetrics – Realtime API Analytics Dashboard",
    tagline: "Monitor GraphQL & REST API traffic with instant data visualizations.",
    category: "Full Stack",
    categoryKey: "fullstack",
    featured: false,
    bannerColor: "linear-gradient(135deg, #f43f5e 0%, #8b5cf6 100%)",
    techStack: ["Vue 3", "Chart.js", "Express", "WebSockets"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    summary: "Real-time API monitoring console with interactive time-series charts, endpoint latency heatmap, and customizable alert webhooks.",
    codeSnippet: `// useMetrics.ts
import { ref, onMounted, onUnmounted } from 'vue';

export function useMetricsStream(endpoint: string) {
  const data = ref([]);
  let ws: WebSocket;

  onMounted(() => {
    ws = new WebSocket(endpoint);
    ws.onmessage = (e) => data.value.push(JSON.parse(e.data));
  });

  return { data };
}`,
    details: {
      overview: "DevMetrics streams throughput and error rate data directly into a Vue dashboard via WebSockets, giving backend engineering teams instant insights into microservice health.",
      keyFeatures: [
        "WebSocket real-time metrics streaming",
        "Heatmap visualization for latency bottlenecks",
        "Exportable PDF and CSV diagnostic reports"
      ],
      metrics: "Handles 10,000+ data events per second"
    }
  },
  {
    id: "project-4",
    title: "CodePulse – Interactive Snippet Engine",
    tagline: "Collaborative code sharing tool with live execution preview.",
    category: "Vue.js Apps",
    categoryKey: "vue",
    featured: false,
    bannerColor: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    techStack: ["Vue 3", "Monaco Editor", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    summary: "A browser-based code playground empowering developers to write, test, and share Vue & JS snippets with instant URL hash persistence.",
    codeSnippet: `// CodeRunner.vue
const runCode = () => {
  const iframe = document.getElementById('output-frame');
  iframe.srcdoc = \`
    <style>\${userCSS.value}</style>
    <script>\${userJS.value}<\/script>
  \`;
};`,
    details: {
      overview: "CodePulse brings the speed of local Vite prototyping straight into the browser. Uses Monaco Editor engine for rich code completion and error diagnostics.",
      keyFeatures: [
        "Integrated VS Code-style editor with syntax highlighting",
        "Instant iframe sandbox preview with auto-reload",
        "Shareable URL state hashing"
      ],
      metrics: "Used by 1,200+ active weekly developers"
    }
  }
];
