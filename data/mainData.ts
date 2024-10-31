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
  roleType: 'Fulltime' | 'Part-time' | 'Consultant' | 'Freelance'
  startDate: string
  endDate?: string
  description: string
  active?: boolean
  techStack?: TechStackType[]
  hidden?: boolean
}

export interface Skill {
  name: string
  id: string
  category: 'Languages' | 'Web Dev' | 'AI & Data Science' | 'DevOps & Tools'
  field?: string
  subfield?: string
  description?: string
  imgSrc?: string
  level: 'advanced' | 'familiar' | 'learning'
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
    name: 'Valsoft - Aspire',
    location: 'Remote - Canada',
    description:
      'Aspire Software is a division of Valsoft that focuses on acquiring, managing, and building vertical market software businesses.',
    imgSrc: 'https://www.valsoftcorp.com/wp-content/uploads/2017/10/valsoft-logo.svg',
    url: 'https://www.valsoftcorp.com/',
    active: true,
    items: [
      {
        title: 'Software Developer - DockMaster',
        roleType: 'Fulltime',
        startDate: '2024/04/15',
        description:
          'Implemented new features and fixed bugs, ensuring the continuous improvement and reliability of the software. Maintained server configurations, ensuring optimal performance and availability. Attended product meetings to ideate and discuss feature enhancements, contributing to the strategic growth and development of the software. Collaborated closely with cross-functional teams to ensure the alignment of development efforts with business goals and user needs. Developing prototypes for AI features to be integrated within the software.',
        techStack: [
          { name: 'Django', href: 'https://www.djangoproject.com/' },
          { name: 'Python', href: 'https://www.python.org/' },
          { name: 'AWS', href: 'https://aws.amazon.com/' },
          { name: 'Redis', href: 'https://redis.io/' },
          { name: 'Datadog', href: 'https://www.datadoghq.com/' },
          { name: 'GitHub', href: 'https://github.com/' },
          // { name: 'OpenSearch', href: 'https://opensearch.org/' },
          { name: 'Bash', href: 'https://www.gnu.org/software/bash/' },
          { name: 'Postgres', href: 'https://www.postgresql.org/' },
          // { name: 'DjangoRQ', href: 'https://github.com/rq/django-rq' },
          { name: 'NGINX', href: 'https://www.nginx.com/' },
          { name: 'Locust', href: 'https://locust.io/' },
        ],
        active: true,
      },
      {
        title: 'AI Backend Developer - Hospitality Portfolio',
        roleType: 'Fulltime',
        startDate: '2023/10/15',
        endDate: '2024/04/15',
        description:
          'Developed prototypes for AI features tailored to the hospitality department, enhancing support and operational efficiency. Created a RAG documentation chat for the support team, streamlining access to information and reducing response times. Implemented automated ticket first replies with suggested solutions, improving customer service efficiency and response accuracy. Designed AI-driven BI solutions to generate insights from databases and software APIs, facilitating data-driven decision-making. Developed tools for summarization and classification of backlog tickets, assisting the product team in prioritizing and addressing issues effectively.',
        techStack: [
          { name: 'FastAPI', href: 'https://fastapi.tiangolo.com/' },
          { name: 'OpenAI', href: 'https://openai.com/' },
          { name: 'Pinecone', href: 'https://www.pinecone.io/' },
          // { name: 'Serverless Functions', href: 'https://vercel.com/docs/serverless-functions' },
          { name: 'Docker', href: 'https://www.docker.com/' },
          { name: 'Langchain', href: 'https://www.langchain.com/' },
          { name: 'Pandas', href: 'https://pandas.pydata.org/' },
          { name: 'Scikitlearn', href: 'https://scikit-learn.org/' },
          { name: 'Nextjs', href: 'https://nextjs.org/' },
          { name: 'Gradio', href: 'https://gradio.app/' },
          { name: 'Postgres', href: 'https://www.postgresql.org/' },
        ],
      },
      {
        title: 'API Implementation Engineer - InnQuest',
        roleType: 'Fulltime',
        startDate: '2022/10/24',
        endDate: '2023/10/15',
        description:
          'Created, configured, tested, and deployed Agora API integration functionalities, ensuring seamless connectivity and optimal performance. Coordinated the implementation of third-party systems connections with active system monitoring, ensuring reliable and efficient integrations. Developed multiple automation tools to facilitate the search and investigation of issues, significantly improving the efficiency of the troubleshooting process.',
        techStack: [
          { name: 'Postman', href: 'https://www.postman.com/' },
          { name: 'Testrail', href: 'https://www.gurock.com/testrail' },
          { name: 'Selenium', href: 'https://www.selenium.dev/' },
          { name: 'Python', href: 'https://www.python.org/' },
          // { name: 'APIs', href: '#' },
          { name: 'Pandas', href: 'https://pandas.pydata.org/' },
        ],
      },
    ],
  },
  {
    name: 'FlairsTech',
    location: 'Maadi - Egypt',
    description:
      'FlairsTech is a software development company that specializes in building custom software solutions for businesses. We help businesses automate their processes and improve their efficiency.',
    imgSrc:
      'https://media.licdn.com/dms/image/C4D0BAQFEqFIZYFhFpA/company-logo_200_200/0/1630540236589/flairstech_logo?e=1726704000&v=beta&t=AuvxQoMg94CqpL1A2-SOgZIChOIE14uscukufiaUDv0',
    url: 'https://flairstech.com/',
    active: true,
    items: [
      {
        title: 'AI Fullstack Developer (Consultant)',
        roleType: 'Consultant',
        startDate: '2023/02/14',
        description:
          'Developed AI solutions for the operations department, enhancing efficiency and performance across various tasks. Created an AI web application for the quality team, reducing call/ticket evaluation time by up to 80% and achieving a 90% utilization rate for overall call evaluations. Led the development and deployment of the web application, handling frontend, backend, AI microservices, server configurations, and deployment.',
        techStack: [
          { name: 'Mistral LLM', href: '#' },
          { name: 'Whisper ASR', href: '#' },
          { name: 'VLLM', href: '#' },
          { name: 'Sveltekit', href: 'https://kit.svelte.dev/' },
          { name: 'FastAPI', href: 'https://fastapi.tiangolo.com/' },
          { name: 'Docker', href: 'https://www.docker.com/' },
          { name: 'Postgres', href: 'https://www.postgresql.org/' },
          { name: 'AWS', href: 'https://aws.amazon.com/' },
          { name: 'github', href: 'https://github.com/' },
          { name: 'nginx', href: 'https://www.nginx.com/' },
          { name: 'langchain', href: 'https://www.langchain.com/' },
        ],
        active: true,
      },
    ],
  },
]

export let skillsData: Skill[] = [
  {
    name: 'Javascript',
    id: 'javascript',
    category: 'Languages',
    level: 'advanced',
  },
  {
    name: 'Typescript',
    id: 'typescript',
    category: 'Languages',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'React',
    id: 'react',
    category: 'Web Dev',
    field: 'Frontend',
    level: 'advanced',
  },
  {
    name: 'Next.js',
    id: 'nextjs',
    category: 'Web Dev',
    field: 'Fullstack',
    subfield: 'Frameworks',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'Tailwind',
    id: 'tailwind',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Styling',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'Fiber',
    id: 'fiber',
    category: 'Web Dev',
    field: 'Backend',
    level: 'learning',
  },
  {
    name: 'ShadCN',
    id: 'shadcn',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Styling',
    level: 'advanced',
  },
  {
    name: 'CSS',
    id: 'css',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Styling',
    level: 'advanced',
  },
  {
    name: 'Prisma',
    id: 'prisma',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'ORM',
    level: 'advanced',
  },
  {
    name: 'OpenAI',
    id: 'openai',
    category: 'AI & Data Science',
    field: 'AI',
    description: 'GPTs, Whisper',
    level: 'familiar',
    mostUsed: true,
  },
  {
    name: 'LangChain',
    id: 'langchain',
    category: 'AI & Data Science',
    field: 'AI',
    subfield: 'Frameworks',
    level: 'familiar',
    mostUsed: true,
  },
  {
    name: 'Python',
    id: 'python',
    category: 'Languages',
    level: 'familiar',
    mostUsed: true,
  },
  {
    name: 'C Lang',
    id: 'clang',
    category: 'Languages',
    level: 'familiar',
  },
  {
    name: 'Node.js',
    id: 'nodejs',
    category: 'Web Dev',
    field: 'Backend',
    level: 'familiar',
  },
  {
    name: 'Fast API',
    id: 'fastapi',
    category: 'Web Dev',
    field: 'Backend',
    level: 'familiar',
    mostUsed: true,
  },
  {
    name: 'Django',
    id: 'django',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'Flask',
    id: 'flask',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'Docker',
    id: 'docker',
    category: 'DevOps & Tools',
    field: 'Containers',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'AWS',
    id: 'aws',
    category: 'DevOps & Tools',
    field: 'Cloud Providers',
    level: 'advanced',
  },
  {
    name: 'Azure',
    id: 'azure',
    category: 'DevOps & Tools',
    field: 'Cloud Providers',
    level: 'advanced',
  },
  {
    name: 'Git',
    id: 'git',
    category: 'DevOps & Tools',
    field: 'Source Control',
    level: 'advanced',
  },
  {
    name: 'Github',
    id: 'github',
    category: 'DevOps & Tools',
    field: 'Source Control',
    level: 'advanced',
  },
  {
    name: 'Azure DevOps',
    id: 'azuredevops',
    category: 'DevOps & Tools',
    field: 'Source Control',
    level: 'advanced',
  },
  {
    name: 'Bash',
    id: 'bash',
    category: 'DevOps & Tools',
    field: 'Shell',
    level: 'advanced',
  },
  {
    name: 'Powershell',
    id: 'powershell',
    category: 'DevOps & Tools',
    field: 'Shell',
    level: 'advanced',
  },
  {
    name: 'Linux',
    id: 'linux',
    category: 'DevOps & Tools',
    field: 'OS',
    level: 'advanced',
  },
  {
    name: 'SQL',
    id: 'sql',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'advanced',
    hidden: true,
  },
  {
    name: 'NoSQL',
    id: 'nosql',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'advanced',
    hidden: true,
  },
  {
    name: 'MongoDB',
    id: 'mongodb',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'learning',
  },
  {
    name: 'PostgreSQL',
    id: 'postgres',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'MySQL',
    id: 'mysql',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'advanced',
  },
  {
    name: 'Redis',
    id: 'redis',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'Bootstrap',
    id: 'bootstrap',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Styling',
    level: 'advanced',
  },
  {
    name: 'Pandas',
    id: 'pandas',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Analytics',
    level: 'advanced',
  },
  {
    name: 'Numpy',
    id: 'numpy',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Analytics',
    level: 'advanced',
  },
  {
    name: 'Anaconda',
    id: 'anaconda',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Tools',
    level: 'advanced',
  },
  {
    name: 'Jupyter',
    id: 'jupyter',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Tools',
    level: 'advanced',
  },
  {
    name: 'Matplotlib',
    id: 'matplotlib',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Visualization',
    level: 'advanced',
  },
  {
    name: 'Plotly',
    id: 'plotly',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Visualization',
    level: 'advanced',
  },
  {
    name: 'Seaborn',
    id: 'seaborn',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Visualization',
    level: 'advanced',
  },
  {
    name: 'Scikit-learn',
    id: 'scikitlearn',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'ML',
    level: 'advanced',
  },
  {
    name: 'Postman',
    id: 'postman',
    category: 'DevOps & Tools',
    field: 'Tools',
    level: 'advanced',
  },
  {
    name: 'DataDog',
    id: 'datadog',
    category: 'DevOps & Tools',
    field: 'Analytics',
    level: 'advanced',
  },
  {
    name: 'Umami',
    id: 'umami',
    category: 'DevOps & Tools',
    field: 'Analytics',
    level: 'advanced',
  },
  {
    name: 'PowerBI',
    id: 'powerbi',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Visualization',
    level: 'advanced',
  },
  {
    name: 'Celery',
    id: 'celery',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'NGINX',
    id: 'nginx',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'Vercel',
    id: 'vercel',
    category: 'DevOps & Tools',
    field: 'Cloud Providers',
    level: 'advanced',
  },
  {
    name: 'VLLM',
    id: 'vllm',
    category: 'AI & Data Science',
    field: 'AI',
    subfield: 'Frameworks',
    level: 'advanced',
  },
  {
    name: 'OpenSource LLMs, Mistral, LLAMA, Vicuna',
    id: 'mistral',
    category: 'AI & Data Science',
    field: 'AI',
    level: 'advanced',
  },
  {
    name: 'Streamlit',
    id: 'streamlit',
    category: 'AI & Data Science',
    field: 'Prototyping',
    level: 'advanced',
  },
  {
    name: 'Gradio',
    id: 'gradio',
    category: 'AI & Data Science',
    field: 'Prototyping',
    level: 'advanced',
  },
  {
    name: 'Huggingface',
    id: 'huggingface',
    category: 'AI & Data Science',
    field: 'AI',
    level: 'advanced',
  },
  {
    name: 'GoLang',
    id: 'golang',
    category: 'Languages',
    level: 'learning',
  },
  {
    name: 'Jira',
    id: 'jira',
    category: 'DevOps & Tools',
    field: 'DevOps & Tools',
    subfield: 'Fullstack',
    level: 'advanced',
  },
  {
    name: 'Sanity',
    id: 'sanity',
    category: 'Web Dev',
    field: 'CMS',
    level: 'advanced',
  },
  {
    name: 'Pinecone',
    id: 'pinecone',
    category: 'AI & Data Science',
    field: 'AI',
    subfield: 'Vectors',
    level: 'advanced',
  },
  {
    name: 'TestRail',
    id: 'testrail',
    category: 'DevOps & Tools',
    field: 'DevOps & Tools',
    level: 'advanced',
  },
  {
    name: 'Locust',
    id: 'locust',
    category: 'DevOps & Tools',
    field: 'DevOps & Tools',
    level: 'advanced',
  },
  {
    name: 'Grafana',
    id: 'grafana',
    category: 'DevOps & Tools',
    field: 'DevOps & Tools',
    subfield: 'Fullstack',
    level: 'advanced',
  },
  {
    name: 'Selenium',
    id: 'selenium',
    category: 'DevOps & Tools',
    field: 'DevOps & Tools',
    level: 'advanced',
  },
  {
    name: 'PyTest',
    id: 'pytest',
    category: 'DevOps & Tools',
    field: 'DevOps & Tools',
    level: 'advanced',
  },
  {
    name: 'Svelte',
    id: 'svelte',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Fullstack',
    level: 'advanced',
  },
  {
    name: 'SvelteKit',
    id: 'sveltekit',
    category: 'Web Dev',
    field: 'Fullstack',
    level: 'advanced',
  },
  {
    name: 'Vite',
    id: 'vite',
    category: 'DevOps & Tools',
    field: 'DevOps & Tools',
    level: 'advanced',
  },
  {
    name: 'Yarn',
    id: 'yarn',
    category: 'DevOps & Tools',
    field: 'DevOps & Tools',
    level: 'advanced',
    hidden: true,
  },
  {
    name: 'Tableau',
    id: 'tableau',
    category: 'AI & Data Science',
    field: 'Analytics',
    level: 'advanced',
  },
  {
    name: 'Three.js',
    id: 'threejs',
    category: 'Web Dev',
    field: 'Frontend',
    level: 'advanced',
  },
  {
    name: 'Poetry',
    id: 'poetry',
    category: 'DevOps & Tools',
    field: 'Tools',
    level: 'advanced',
  },
  {
    name: 'PNPM',
    id: 'pnpm',
    category: 'DevOps & Tools',
    field: 'Tools',
    level: 'advanced',
    hidden: true,
  },
  {
    name: 'Github Actions',
    id: 'githubactions',
    category: 'DevOps & Tools',
    field: 'Deployment',
    level: 'advanced',
  },
  {
    name: 'Framer Motion',
    id: 'framermotion',
    category: 'Web Dev',
    field: 'Frontend',
    level: 'advanced',
  },
  {
    name: 'VS Code',
    id: 'vscode',
    category: 'DevOps & Tools',
    field: 'Tools',
    level: 'advanced',
  },
  {
    name: 'MeiliSearch',
    id: 'meilisearch',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'Stripe',
    id: 'stripe',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'Notion',
    id: 'notion',
    category: 'DevOps & Tools',
    field: 'Tools',
    level: 'advanced',
  },
]
