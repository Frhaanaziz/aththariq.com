/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Farhan Aziz Ath Thariq',
  author: 'Farhan Aziz Ath Thariq',
  headerTitle: 'Farhan Aziz Ath Thariq',
  description: `An over-engineered personal blog where I write about software engineering, productivity, and other stupid stuff. Also, it's my portfolio.`,
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.aththariq.com',
  analyticsURL: 'https://cloud.umami.is/share/cf02iZxjEoE0z2x5/aththariq.com',
  siteRepo: 'https://github.com/Frhaanaziz/aththariq.com',
  siteLogo: '/static/images/site/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'farhan@aththariq.com',
  github: 'https://github.com/Frhaanaziz',
  x: 'https://twitter.com/frhaanthariq',
  twitter: 'https://twitter.com/frhaanthariq',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/frhaanaziz/',
  // threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com/frhaanaziz/',
  spotify: 'https://open.spotify.com/user/31py43jmocffbqettuflaqx7dime',
  // buymeacoffee: 'https://buymeacoffee.com/asdasdasd',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      src: 'https://cloud.umami.is/script.js',
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    // provider: 'buttondown',
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
