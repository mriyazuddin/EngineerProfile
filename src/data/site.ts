export const SITE_URL = "https://riyaz.blog";
export const NAME = "Mohammed Riyazuddin";
export const EMAIL = "riyaz15@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/mriyazuddin1/";
export const GITHUB = "https://github.com/mriyazuddin";
export const LOCATION = "Hyderabad, India";
export const RESUME = "/resume.pdf";

export const leadershipAreas = [
  { title: "Servant leadership", text: "I see my job as helping my team do its best work, so it can do its best work for customers." },
  { title: "Training, coaching and performance", text: "Coaching, mentoring and performance management, and trainings for support teammates at Deloitte, Teradata and Automattic. A clear quality bar, and help reaching it." },
  { title: "Operational excellence", text: "Finding what slows a team down or brings customers back, and fixing it." },
];

export const experience = [
  { when: "Dec 2025 to present", role: "Technical Support Engineer, Freelance", text: "Build WordPress and WooCommerce sites. Resolve issues with themes, plugins, hosting, DNS, email and payment gateways." },
  { when: "May 2025 to Nov 2025", role: "Career break", text: "Planned time off after almost six years at Automattic." },
  { when: "Jun 2019 to Apr 2025", role: "Happiness Engineer (Technical Support Engineer), Automattic", text: "Supported WordPress.com and WooCommerce customers by email and live chat, using SQL to troubleshoot. Analysed logs, reproduced bugs and filed bug reports in GitHub for developers. Created or updated over 100 support documents. Spent a six-month rotation on APAC recruitment, hiring for 21 support roles, led candidates through Automattic's trial process, and ran trainings for support teammates." },
  { when: "Apr 2018 to Aug 2018", role: "Customer Support Manager, ESW Capital (through Crossover)", text: "Managed 15 L1 and L2 support engineers. Led the transition of Symphony Commerce's support operations into ESW Capital's support organization after ESW Capital acquired the company." },
  { when: "Sep 2016 to Apr 2018", role: "Senior Manager, Technical Support, Teradata", text: "Led L1 and L2 support for Teradata products. Responsible for support operations, including hiring, coaching and performance management." },
  { when: "Aug 2005 to Sep 2016", role: "Manager, Service Desk, Deloitte", text: "Started as a front-line IT support analyst and went on to lead the service desk team, responsible for support operations, hiring, coaching and performance management. Ran improvement projects that cut average handle time from 17 to 13 minutes and repeat calls from 27% to 12%." },
];

export const sidebar = [
  { title: "Daily tools", text: "WordPress, WooCommerce, Zendesk, WP-CLI, Browser DevTools, DNS, HTML and CSS" },
  { title: "Working knowledge", text: "SQL, GitHub, Jira, Postman, JavaScript (basic), PHP (basic)" },
  { title: "Languages", text: "English, Urdu, Hindi" },
  { title: "Education", text: "Bachelor of Computer Applications, Amjad Ali Khan College of Business Administration (affiliated to Osmania University)" },
];

export const projects = [
  { title: "Qaaf Gifts", tag: "Client project · WooCommerce", img: "/projects/qaaf-gifts.webp", url: "https://qaafgifts.com", summary: "WooCommerce store with an AI support assistant that hands complex tickets to a person.", text: "Sole developer. Set up payments and built an AI support assistant that answers routine questions and passes complex tickets to a person." },
  { title: "Nature Life Water", tag: "Client project · WooCommerce", img: "/projects/nature-life-water.webp", url: "https://naturelifewater.com", summary: "Store setup for a Sierra Leone client: tax, shipping, custom payment gateways and WhatsApp chat.", text: "Store for a Sierra Leone client, including products, tax, shipping logic, custom payment gateways and WhatsApp chat." },
];

export const series = {
  sql: { name: "SQL from Scratch", short: "SQL", path: "/blog/sql", about: "daily lessons for complete beginners" },
  wordpress: { name: "WordPress from Scratch", short: "WordPress", path: "/blog/wordpress", about: "daily lessons for complete beginners" },
  leadership: { name: "Leadership", short: "Leadership", path: "/blog/leadership", about: "lessons from leading support teams" },
} as const;
export type SeriesKey = keyof typeof series;
