import { lazy } from 'react';

const About = lazy(() => import('../components/About'));
const ProjectList = lazy(() => import('../components/ProjectList'));
const BlogList = lazy(() => import('../components/BlogsList'));

export const Developer = {
    DEVELOPER: 'Shivam Gupta',
    USERNAME: '@shivambmgupta',
    HEADING: 'Hi, I\'m Shivam Gupta',
    ABOUT: `Engineer with a thing for distributed systems, security, and scale. I’ve built KYC infra for some of the biggest banks in India and now lead national identity sync at scale for the UAE. My code touches millions of users and survives production because it’s designed to. I believe in the old saying: “Everything that can go wrong, will — unless you test, log, and design for it.” Off the clock, you’ll find me lifting, watching sci-fi, or rewatching Nolan films I pretend not to overanalyze.`,
};

export const AlertData = {
    showAlert: true,
    alterType: 'info',
    closable: true,
    heading: 'React Native NPM Update 🚀',
    description: `The latest release of my React Native NPM package 'rn-circular-bar' is live. Built using Reanimated v2, this module has reached over 81 weekly downloads and is used by the community to create elegant, animated progress indicators. Check it out below!`,
    actionLink: `https://www.npmjs.com/package/rn-circular-bar`,
};

export const Blogs = [
    {
        heading: 'ESLint: What, Why, When, How',
        content: 'Elevate your JavaScript code quality with ESLint. Learn how to enforce consistency, avoid bugs, and build clean architectures from the ground up.',
        url: 'https://shivambmgupta.medium.com/eslint-what-why-when-how-7353a10e65c5',
        views: '25,000+',
        key: 1,
    },
    {
        heading: 'Best React Practices',
        content: 'Explore high-quality patterns and workflows for building scalable React apps. From architecture to component best practices, this guide has you covered.',
        url: 'https://dev.to/shivambmgupta/best-react-practices-bp8',
        views: '18,000+',
        key: 2,
    },
    {
        heading: 'Containment, Specialization and Inheritance in React',
        content: 'A deep dive into advanced React patterns like containment and specialization. Master DRY principles and component composition the right way.',
        url: 'https://shivambmgupta.medium.com/containment-specialization-and-inheritance-in-react-native-react-8fffaf789b94',
        views: '1,500+',
        key: 0,
    }
];

export const Pages = [
    {
        pageLink: '/',
        view: About,
        displayName: 'About',
        showInNavbar: true,
    },
    {
        pageLink: '/blogs',
        view: BlogList,
        displayName: 'Blogs',
        showInNavbar: true,
    },
    {
        pageLink: '/projects',
        view: ProjectList,
        displayName: 'Projects',
        showInNavbar: false,
    },
];

export const BlogConstants = {
    header: 'Technical Blogs',
};

export const profile = {
    about: {
        heading: 'About',
        body: `
            I'm a Software Engineer focused on backend systems, FinTech infra, and distributed architecture.
            At Signzy, I’ve built onboarding and KYC platforms used by SBI, Citi, HSBC, YES Bank, and now lead a UAE federal KYC sync system at scale. I work across backend architecture, encryption, analytics, and compliance-heavy deployments that handle millions of sessions monthly.
            Outside of work, I enjoy running long distances, overengineering kitchen tools, and quietly holding a grudge against Australia since the 2023 World Cup final.
            What follows is a timeline — not just of job titles, but systems I’ve built, side quests I’ve shipped, and milestones I didn't skip (even 10th grade). It’s not exhaustive, just honest.
        `,
      },
      experience: {
        heading: '', // Timeline only — no section heading
        dateOptions: { year: 'numeric', month: 'long' },
        dateFormat: 'en-US',
        body: [
          {
            companyName: 'Signzy',
            profile: 'Software Development Engineer - II',
            about: `
              Leading the development of high-scale onboarding platforms and KYC automation services. Architect of the UAE Federal KYC sync system (Dizy) using Temporal workflows. Own the analytics module that ingests real-time data from MongoDB replicas and pushes to a time-series DB. Delivering systems for YES Bank, SBI, and HDFC that support millions of sessions monthly.
            `,
            fromDate: new Date(2024, 9, 18),
            current: true,
          },
          {
            companyName: 'Signzy',
            profile: 'Software Development Engineer - I',
            about: `
              Delivered RBI-compliant data migration for Citi Bank, shifting KYC infra from Singapore to India. Built encryption modules using pluggable RSA + AES logic. Designed scalable backend services for OneCard and Amazon Pay. Contributed across the entire SDLC including CI/CD, testing, code review, and architecture discussions.
            `,
            fromDate: new Date(2021, 9, 1),
            endDate: new Date(2024, 9, 17),
          },
          {
            companyName: 'Radiance Technologies LLC',
            profile: 'Software Developer Intern',
            about: `
              Built MERN stack web apps in a fast-paced delivery cycle. Integrated APIs, managed frontend state, and delivered UI enhancements based on client feedback.
              They basically just let me code — no grunt work, no HR rounds, just VSCode and Git. I also sat through long product calls I barely understood, nodded a lot, and googled the rest later. 
              It was chaotic, real, and easily one of the most valuable experiences I’ve had starting out.
            `,
            fromDate: new Date(2020, 8, 1),
            endDate: new Date(2021, 8, 30),
          },          
          {
            companyName: 'Government Engineering College, Ujjain',
            profile: 'B.Tech – Computer Science & Engineering',
            about: `Graduated with a CGPA of 7.8/10. Studied CSE with a focus on systems, algorithms, and databases. Started building real-world projects early on and began working professionally during my final year — where practical deadlines often taught more than theory.`,
            fromDate: new Date(2017, 5, 1),
            endDate: new Date(2021, 6, 30),
          },
          {
            companyName: 'Rani Laxmibai Public School, Datia',
            profile: 'XII – ISC (PCM)',
            about: `Secured 89%. Was the District Topper. This was when I really started solving problems — not just academically, but through logic, patterns, and eventually writing small programs for fun.`,
            yearOnly: true,
            year: '2016',
          },
          {
            companyName: 'Rani Laxmibai Public School, Datia',
            profile: 'X – ICSE',
            about: `Secured 88%. I was just a kid who liked tinkering with anything tech or Physics. Spent evenings breaking school computers and nights copy-pasting HTML from W3Schools, wondering why things weren’t centered. The curiosity stuck.`,
            yearOnly: true,
            year: '2014',
          }          
        ],
      },
      education: {
        heading: '', // Not used anymore — timeline now shows everything
        dateOptions: { year: 'numeric', month: 'long' },
        dateFormat: 'en-US',
        body: [],
      },
    achievements: {
        about: `Things I’ve eventually got working. Some were side projects, some were production-critical systems, and some just started as late-night ideas with way too much coffee. A few blew up, a few failed silently, and almost all of them taught me something that didn’t come from a course or tutorial. Here’s a handful of those moments — shipped, scaled, and slightly battle-tested.`,
        body: [
            'Engineered national-scale onboarding/KYC systems used by SBI, Citi, YES Bank, and UAE’s ICP.',
            'Built pluggable RSA + AES encryption modules integrated with runtime cipher suite negotiation.',
            'Delivered RBI-compliant data migration for Citi Bank across country boundaries.',
            'Published NPM module "rn-circular-bar" with over 80+ weekly downloads.',
            'Blogs featured by roadmap.sh and Dev.to; 25k+ views on ESLint and React content.',
            'Solved 650+ LeetCode problems and cracked Google Code Jam Round 1 (2019, 2020).',
            'Led a team of 7 engineers across two major product verticals at Signzy.',
        ],
    }
};
