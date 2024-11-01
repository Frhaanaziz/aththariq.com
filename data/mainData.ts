export interface Project {
  type: 'work' | 'self'
  title: string
  description?: string
  imgSrc: string[]
  url?: string
  repo?: string
  builtWith: string[]
  hidden?: boolean
}

export interface Company {
  name: string
  location?: string
  imgSrc?: string
  startDate?: string
  endDate?: string
  url?: string
  active?: boolean
  hidden?: boolean
  description?: string
  descCard?: string
  items: Experience[]
}

export interface TechStackType {
  name: string
  href?: string
}
export interface Experience {
  title: string
  roleType: 'Fulltime' | 'Part-time' | 'Consultant' | 'Freelance' | 'Intern'
  startDate: string
  endDate?: string
  description: string
  active?: boolean
  techStack?: TechStackType[]
  hidden?: boolean
}

export interface Skill {
  id: string
  name: string
  category: 'Languages' | 'Web Dev' | 'AI & Data Science' | 'DevOps & Tools'
  level?: 'advanced' | 'familiar' | 'learning'
  hidden?: boolean
  href?: string
  mostUsed?: boolean
}

export let projectsData: Project[] = [
  {
    type: 'work',
    title: 'CRM (Customer Relationship Management)',
    description:
      'This platform is designed to provide a seamless and feature-rich experience by leveraging WebSocket for real-time updates, Twilio Voice for integrated inbound and outbound calling, and a responsive user interface built with Vue.js and Nuxt.js. To maintain zero downtime during updates, we implemented a blue-green deployment strategy, allowing smooth updates without user disruption. Additionally, we developed a persistent Kanban board with user-defined ordering using SQL, empowering teams to manage workflows efficiently. ',
    repo: 'CRM',
    imgSrc: [
      '/static/images/projects/crm-0.jpeg',
      '/static/images/projects/crm-1.jpeg',
      '/static/images/projects/crm-2.jpeg',
      '/static/images/projects/crm-3.jpeg',
      '/static/images/projects/crm-4.jpeg',
      '/static/images/projects/crm-5.jpeg',
      '/static/images/projects/crm-6.jpeg',
      '/static/images/projects/crm-7.jpeg',
      '/static/images/projects/crm-8.jpeg',
    ],
    url: 'https://app.idb2b.com/',
    builtWith: [
      'Typescript',
      'Vue.js',
      'Nuxt.js',
      'Tailwind',
      'Socket.io',
      'Twilio',
      'Supabase',
      'Postgres',
      'NGINX',
    ],
  },
  {
    type: 'work',
    title: 'Admin Dashboard',
    description:
      'This project develops a comprehensive admin dashboard for a travel agency, streamlining management of tours, events, customers, transactions, analytics, reporting, and content. Key features include tour scheduling, customer data tracking, centralized transaction handling with secure payment integration, and dynamic content management. An analytical dashboard provides insights into key metrics, while Role-Based Access Control (RBAC) enhances security by defining role-based permissions. Additionally, flexible API endpoints support external integrations, making this dashboard a robust tool for optimizing operations and enhancing user experience.',
    imgSrc: [
      '/static/images/projects/admin-dashboard-0.png',
      '/static/images/projects/admin-dashboard-1.png',
      '/static/images/projects/admin-dashboard-2.png',
      '/static/images/projects/admin-dashboard-3.png',
      '/static/images/projects/admin-dashboard-4.png',
      '/static/images/projects/admin-dashboard-5.png',
    ],
    url: 'https://tw-admin.aththariq.com/',
    repo: 'tabungan-wisata',
    builtWith: [
      'Typescript',
      'React',
      'Next.js',
      'TRPC',
      'Tanstact Query',
      'Socket.io',
      'Tailwind',
      'Shadcn UI',
      'Prisma ORM',
      'NGINX',
      'MySQL',
    ],
  },
  {
    type: 'work',
    title: 'User Dashboard',
    description:
      'This project involves creating a comprehensive user dashboard for a travel agency, offering enhanced user experience and control over travel activities. Key features include integrated top-up with Midtrans for seamless transactions, balance and transaction tracking for clear financial oversight, real-time notifications via WebSocket, and a Progressive Web App (PWA) build for a native app-like experience on mobile. Challenges included implementing ensuring transaction security through data encryption and verification, and maintaining data precision, especially for financial and travel data.',
    imgSrc: [
      '/static/images/projects/user-dashboard-0.png',
      '/static/images/projects/user-dashboard-1.png',
      '/static/images/projects/user-dashboard-2.png',
      '/static/images/projects/user-dashboard-3.png',
      '/static/images/projects/user-dashboard-4.png',
    ],
    url: 'https://tw-student.aththariq.com/',
    repo: 'tabungan-wisata',
    builtWith: [
      'Typescript',
      'React',
      'Next.js',
      'Sentry',
      'Tailwind',
      'Shadcn UI',
      'TRPC',
      'Tanstack Query',
      'Socket.io',
      'Prisma ORM',
      'NGINX',
      'MySQL',
    ],
  },

  {
    type: 'work',
    title: 'Landing Page',
    description:
      'This project is a responsive and visually appealing website designed as a homepage for a study tour travel agency, optimized for various devices. Key features include an interactive homepage with essential company information, a comprehensive tour listing page with advanced filters (price, duration, location), and a mobile-friendly design that provides a seamless experience across devices. Built for high performance, the website ensures fast loading times and encourages visitors to explore further.',
    imgSrc: [
      '/static/images/projects/landing-page-0.png',
      '/static/images/projects/landing-page-1.png',
      '/static/images/projects/landing-page-2.png',
      '/static/images/projects/landing-page-3.png',
    ],
    url: 'https://tw-front.aththariq.com/',
    repo: 'tabungan-wisata',
    builtWith: [
      'Typescript',
      'React',
      'Next.js',
      'Sentry',
      'Tailwind',
      'Shadcn UI',
      'Strapi CMS',
      'NGINX',
    ],
  },
  {
    type: 'self',
    title: 'Yahoo Finance Scraper',
    description:
      'The Yahoo Finance News Scraper is a TypeScript-based tool that uses Puppeteer to extract news articles from Yahoo Finance across various topics. It allows for configurable scraping of article titles, URLs, and content, while incorporating error handling and type safety.',
    imgSrc: ['/static/images/projects/1.jpg'],
    repo: 'yahoo-finance-scraper',
    builtWith: ['Typescript', 'Puppeteer', 'Node.js'],
  },
  {
    type: 'self',
    title: 'Typescript Node Starter',
    description:
      'The TypeScript Node Starter is a template for building Node.js applications with TypeScript, featuring configurations for ESLint and Prettier to maintain code quality. To get started, clone the repository, install dependencies using pnpm, and use various scripts to build, start, develop, lint, and format the code.',
    imgSrc: ['/static/images/projects/2.jpg'],
    repo: 'typescript-node-starter',
    builtWith: ['Typescript', 'ESLint', 'Prettier', 'Node.js'],
  },
]

export let experienceData: Company[] = [
  {
    name: 'Pipeline',
    location: 'South Jakarta - Indonesia',
    description:
      'Pipeline is a sales acceleration company that combines AI-powered CRM solutions with marketing automation to transform B2B sales processes. We empower startups and SMBs with customizable lead management tools and intelligent insights to drive growth and maximize conversion rates.',
    imgSrc:
      'https://media.licdn.com/dms/image/v2/C560BAQFiyYNRibXs9Q/company-logo_200_200/company-logo_200_200/0/1631336815267/pipelinetechnology_logo?e=1738800000&v=beta&t=aT_Oy6E_NWT-YT_bt6JiifJCYFioad_LwBLzLvmojIA',
    url: 'https://idb2b.com/en',
    // active: true,
    items: [
      {
        title: 'Software Engineer',
        roleType: 'Intern',
        startDate: '2024/05/29',
        endDate: '2024/08/30',
        description:
          'Developed B2B CRM system from scratch using Nuxt.js, featuring Twilio Voice integration for softphone functionality and persistent Kanban board with SQL-based custom ordering. Implemented zero-downtime CI/CD pipelines and Jira workflow to optimize development processes.',
        // active: true,
        techStack: [
          { name: 'typescript', href: 'https://www.typescriptlang.org/' },
          { name: 'vuejs', href: 'https://vuejs.org/' },
          { name: 'nuxtjs', href: 'https://nuxt.com/' },
          { name: 'twilio', href: 'https://www.twilio.com/en-us' },
          { name: 'supabase', href: 'https://supabase.com/' },
          { name: 'postgres', href: 'https://www.postgresql.org/' },
          { name: 'nginx', href: 'https://www.nginx.com/' },
          { name: 'jira', href: 'https://www.atlassian.com/software/jira' },
        ],
      },
    ],
  },
]

export let skillsData: Skill[] = [
  {
    name: 'Javascript',
    id: 'javascript',
    category: 'Languages',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Typescript',
    id: 'typescript',
    category: 'Languages',
    href: 'https://www.typescriptlang.org/',
    mostUsed: true,
  },
  {
    name: 'React',
    id: 'react',
    category: 'Web Dev',
    href: 'https://react.dev/',
    mostUsed: true,
  },
  {
    name: 'Next.js',
    id: 'nextjs',
    category: 'Web Dev',
    href: 'https://nextjs.org/',
    mostUsed: true,
  },
  {
    name: 'Vue.js',
    id: 'vuejs',
    category: 'Web Dev',
    href: 'https://vuejs.org/',
    mostUsed: true,
  },
  {
    name: 'Nuxt.js',
    id: 'nuxtjs',
    category: 'Web Dev',
    href: 'https://nuxt.com/',
    mostUsed: true,
  },
  {
    name: 'NestJS',
    id: 'nestjs',
    category: 'Web Dev',
    href: 'https://nestjs.com/',
    mostUsed: true,
  },
  {
    name: 'Tailwind',
    id: 'tailwind',
    category: 'Web Dev',
    href: 'https://tailwindcss.com/',
  },
  {
    name: 'ShadCN',
    id: 'shadcn',
    category: 'Web Dev',
    href: 'https://ui.shadcn.com/',
  },
  {
    name: 'CSS',
    id: 'css',
    category: 'Web Dev',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'Prisma',
    id: 'prisma',
    category: 'Web Dev',
    href: 'https://www.prisma.io/',
    mostUsed: true,
  },
  {
    name: 'Node.js',
    id: 'nodejs',
    category: 'Web Dev',
    href: 'https://nodejs.org/en',
  },
  {
    name: 'Supabase',
    id: 'supabase',
    category: 'Web Dev',
    href: 'https://supabase.com/',
  },
  {
    name: 'PostgreSQL',
    id: 'postgres',
    category: 'Web Dev',
    href: 'https://www.postgresql.org/',
  },
  {
    name: 'MySQL',
    id: 'mysql',
    category: 'Web Dev',
    href: 'https://www.mysql.com/',
    mostUsed: true,
  },
  {
    name: 'NGINX',
    id: 'nginx',
    category: 'Web Dev',
    href: 'https://nginx.org/en/',
  },
  {
    name: 'Svelte',
    id: 'svelte',
    category: 'Web Dev',
    href: 'https://svelte.dev/',
  },
  {
    name: 'SvelteKit',
    id: 'sveltekit',
    category: 'Web Dev',
    href: 'https://svelte.dev/docs/kit/introduction',
  },
  {
    name: 'Zod',
    id: 'zod',
    category: 'Web Dev',
    href: 'https://zod.dev/',
  },
  {
    name: 'Sentry',
    id: 'sentry',
    category: 'Web Dev',
    href: 'https://sentry.io/',
  },
  {
    name: 'tRPC',
    id: 'trpc',
    category: 'Web Dev',
    href: 'https://trpc.io/',
  },
  {
    name: 'Docker',
    id: 'docker',
    category: 'DevOps & Tools',
    href: 'https://www.docker.com/',
    level: 'learning',
  },
  {
    name: 'Linux',
    id: 'linux',
    category: 'DevOps & Tools',
    href: 'https://www.linux.org/',
  },
  {
    name: 'Postman',
    id: 'postman',
    category: 'DevOps & Tools',
    href: 'https://www.postman.com/',
  },
  {
    name: 'Git',
    id: 'git',
    category: 'DevOps & Tools',
    href: 'https://git-scm.com/',
  },
  {
    name: 'Github',
    id: 'github',
    category: 'DevOps & Tools',
    href: 'https://github.com/',
  },
  {
    name: 'Bash',
    id: 'bash',
    category: 'DevOps & Tools',
    href: 'https://www.gnu.org/software/bash/',
  },
  {
    name: 'Vercel',
    id: 'vercel',
    category: 'DevOps & Tools',
    href: 'https://vercel.com/',
  },
  {
    name: 'Jira',
    id: 'jira',
    category: 'DevOps & Tools',
    href: 'https://www.atlassian.com/software/jira',
  },
  {
    name: 'PNPM',
    id: 'pnpm',
    category: 'DevOps & Tools',
    href: 'https://pnpm.io/',
  },
  {
    name: 'Github Actions',
    id: 'githubactions',
    category: 'DevOps & Tools',
    href: 'https://github.com/features/actions',
  },
  {
    name: 'VS Code',
    id: 'vscode',
    category: 'DevOps & Tools',
    href: 'https://code.visualstudio.com/',
  },
  {
    name: 'Midtrans',
    id: 'midtrans',
    category: 'DevOps & Tools',
    href: 'https://midtrans.com/en',
  },
  {
    name: 'OpenAI',
    id: 'openai',
    category: 'AI & Data Science',
    href: 'https://openai.com/',
  },
]
