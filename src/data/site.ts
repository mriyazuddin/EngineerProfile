export const SITE_URL = "https://riyaz.blog";
export const NAME = "Mohammed Riyazuddin";
export const EMAIL = "riyaz15@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/mriyazuddin1/";
export const GITHUB = "https://github.com/mriyazuddin";
export const LOCATION = "Hyderabad, India";
export const RESUME = "/resume.pdf";

export const trackRecord = [
  ["years_in_support", "close to 20"],
  ["support_roles_hired_for", "21"],
  ["avg_handle_time_min", "17 → 13"],
  ["repeat_calls", "27% → 12%"],
  ["support_docs_written", "100+"],
];

export const leadershipAreas = [
  { title: "Leading through leads", text: "At Teradata, a manager reported to me with two team leads under them. At Deloitte, I managed a large team through assistant managers and team leads." },
  { title: "Hiring", text: "Hired for 21 support roles in a six-month APAC recruitment rotation at Automattic, and led candidates through its trial process." },
  { title: "Coaching and performance", text: "Coaching, mentoring and performance management, and trainings for support teammates. A clear quality bar, and help reaching it." },
  { title: "Support operations", text: "Projects at Deloitte that cut average handle time from 17 to 13 minutes and repeat calls from 27% to 12%." },
];

export const debugAreas = [
  { title: "WordPress and WooCommerce", text: "Themes, plugins, Stripe, PayPal, WooPayments, Bookings and Subscriptions." },
  { title: "Domains, DNS and email", text: "The issues that sit between the site, the host and the inbox." },
  { title: "Data and tools", text: "SQL queries, WP-CLI, browser DevTools, Zendesk, GitHub and Jira." },
  { title: "Documentation", text: "Clear customer-facing guides, and training for the people answering tickets." },
];

export const experience = [
  { when: "Dec 2025 to present", role: "Technical Support Engineer, Freelance", text: "Build WordPress and WooCommerce sites. Resolve issues with themes, plugins, hosting, DNS, email and payment gateways." },
  { when: "Jun 2019 to Apr 2025", role: "Happiness Engineer, Automattic", text: "Supported WordPress.com and WooCommerce customers by email and live chat, using SQL to troubleshoot: 500+ tickets a month at 90%+ CSAT. Created or updated over 100 support documents. Spent a six-month rotation on APAC recruitment, hiring for 21 support roles, led candidates through Automattic's trial process, and ran trainings for support teammates." },
  { when: "May 2018 to Apr 2019", role: "IT Support, Freelance", text: "Provided on-site IT support to small businesses, resolving software, hardware, printer, operating system, network, Office 365, email setup and data backup issues." },
  { when: "Sep 2016 to Apr 2018", role: "Senior Manager, Teradata", text: "Led a support engineering team for Teradata products through a manager and two team leads, each leading several support engineers. Responsible for support operations, including hiring, coaching and performance management." },
  { when: "Aug 2005 to Sep 2016", role: "Manager, Service Desk, Deloitte", text: "Started as a front-line IT support analyst and went on to manage a large team through assistant managers and team leads, responsible for support operations, hiring, coaching and performance management. Ran improvement projects that cut average handle time from 17 to 13 minutes and repeat calls from 27% to 12%." },
];

export const sidebar = [
  { title: "Daily tools", text: "WordPress, WooCommerce, Zendesk, WP-CLI, Browser DevTools, DNS, HTML and CSS" },
  { title: "Working knowledge", text: "SQL, GitHub, Jira, JavaScript (basic), PHP (basic)" },
  { title: "Languages", text: "English, Urdu, Hindi" },
  { title: "Education", text: "Bachelor of Computer Applications, Osmania University" },
];

export const projects = [
  { title: "Qaaf Gifts", tag: "Client project · WooCommerce", img: "/projects/qaaf-gifts.webp", url: "https://qaafgifts.com", summary: "WooCommerce store with an AI support assistant that hands complex tickets to a person.", text: "Sole developer. Set up payments and built an AI support assistant that answers routine questions and passes complex tickets to a person." },
  { title: "Nature Life Water", tag: "Client project · WooCommerce", img: "/projects/nature-life-water.webp", url: "https://naturelifewater.com", summary: "Store setup for a Sierra Leone client: tax, shipping, custom payment gateways and WhatsApp chat.", text: "Store for a Sierra Leone client, including products, tax, shipping logic, custom payment gateways and WhatsApp chat." },
  { title: "Quality Core Constructions", tag: "Demo · WordPress", img: "/projects/quality-core-constructions.webp", url: "https://qualitycoreconstructions.com", summary: "", text: "Corporate demo with a lead-generation form, project progress tracking and a responsive layout." },
  { title: "Bridal Elegance", tag: "Demo · WooCommerce", img: "/projects/bridal-elegance.webp", url: "https://tmrbusiness2.wpcomstaging.com/", summary: "", text: "Image-led bridal store demo that handles complex product variations and a secure checkout flow." },
];

export const series = {
  sql: { name: "SQL from Scratch", short: "SQL", path: "/blog/sql", about: "daily lessons for complete beginners" },
  wordpress: { name: "WordPress from Scratch", short: "WordPress", path: "/blog/wordpress", about: "daily lessons for complete beginners" },
  leadership: { name: "Leadership", short: "Leadership", path: "/blog/leadership", about: "lessons from leading support teams" },
} as const;
export type SeriesKey = keyof typeof series;
