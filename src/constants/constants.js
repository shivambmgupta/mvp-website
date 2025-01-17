import { lazy } from 'react';

const About = lazy(() => import('../components/About'));
const ProjectList = lazy(() => import('../components/ProjectList'));
const BlogList = lazy(() => import('../components/BlogsList'));

export const Developer = {
    DEVELOPER: 'Shivam Gupta',
    USERNAME: '@shivambmgupta',
    HEADING: 'Hi, I\'m Shivam Gupta',
    ABOUT: `Software Engineer in Fintech, specializing in building scalable, high-performance applications. Passionate about innovation and solving complex engineering challenges.`
};

export const AlertData = {
    showAlert: true,
    alterType: 'info',
    closable: true,
    heading: 'Exciting NPM Update!',
    description: `
        The latest release of my React Native NPM package 'rn-circular-bar' is now live! Optimized for performance and enriched with advanced features, it has garnered significant traction, peaking at over 81 weekly downloads. Check it out today!
    `,
    actionLink: `https://www.npmjs.com/package/rn-circular-bar`,
};

export const Blogs = [
    {
        heading: 'Best React Practices',
        content: 'Discover proven strategies for building robust, maintainable, and scalable React applications. Dive into techniques for optimizing workflows and enforcing clean, modular architecture.',
        url: 'https://dev.to/shivambmgupta/best-react-practices-bp8',
        views: '18,000+',
        key: 2,
    },
    {
        heading: 'Containment, Specialization and Inheritance in React',
        content: 'A comprehensive exploration of advanced React paradigms, including containment, specialization, and inheritance. Master these techniques to write DRY, reusable components.',
        url: 'https://shivambmgupta.medium.com/containment-specialization-and-inheritance-in-react-native-react-8fffaf789b94',
        views: '1,500+',
        key: 0,
    },
    {
        heading: 'ESLint: What, Why, When, How',
        content: 'Elevate your JavaScript projects by integrating ESLint. Learn how it enforces consistency, automates code quality, and prevents anti-patterns.',
        url: 'https://shivambmgupta.medium.com/eslint-what-why-when-how-7353a10e65c5',
        views: '25,000+',
        key: 1,
    }
];

export const Pages = [
    {
        pageLink: '/blogs',
        view: BlogList,
        displayName: 'Blogs',
        showInNavbar: true,
    },
    {
        pageLink: '/',
        view: About,
        displayName: 'About',
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
    header: 'Blogs',
};

export const profile = {
    about: {
        heading: 'About',
        body: `
            I am Shivam Gupta, a Software Engineer with a focus in FinTech and deep expertise in the MERN stack. I am committed to staying at the forefront of emerging technologies. Beyond engineering, I am passionate about physics, long-distance running, and culinary experimentation.
        `,
    },
    experience: {
        heading: 'Experience',
        dateOptions: { year: 'numeric', month: 'long' },
        dateFormat: 'en-US',
        body: [
            {
                companyName: 'Signzy',
                profile: 'Software Development Engineer - II',
                about: `
                    Lead the development of Digital-Onboarding platforms utilized by enterprise clients including SBI, HSBC, Citi, Yes Bank, HDFC, and Amazon Pay. Module owner for Analytics and Notifications, supporting seamless onboarding for over 500k users monthly. Leading a team of 7 engineers, ensuring adherence to agile methodologies, CI/CD pipelines, and code quality benchmarks.
                `,
                fromDate: new Date(2024, 9, 18),
                current: true,
            },
            {
                companyName: 'Signzy',
                profile: 'Software Development Engineer - I',
                about: `
                    Played a pivotal role in engineering operations, including data migration for a multinational bank in compliance with RBI guidelines. Contributed to developing Digital-Onboarding solutions using Node.js and MongoDB with stringent FinTech compliance requirements. Delivered high-availability modules under aggressive timelines.
                `,
                fromDate: new Date(2021, 9, 1),
                endDate: new Date(2024, 9, 17),
            },
            {
                companyName: 'Radiance Technologies LLC',
                profile: 'Intern',
                about: 'Designed and delivered robust MERN stack applications while collaborating with cross-functional teams to meet project requirements and ensure timely delivery.',
                fromDate: new Date(2020, 8, 1),
                endDate: new Date(2021, 8, 30),
            }
        ],
    },
    education: {
        heading: 'Education',
        dateOptions: { year: 'numeric', month: 'long' },
        dateFormat: 'en-US',
        body: [
            {
                organization: 'Government Engineering College, Ujjain',
                discipline: 'Computer Science & Engineering',
                grade: '7.8/10',
                fromDate: new Date(2017, 5, 1),
                endDate: new Date(2021, 6, 30),
            },
            {
                organization: 'Rani Laxmibai Public School, Datia',
                discipline: 'XII | ISC',
                grade: '89%',
                yearOnly: true,
                year: '2016',
            },
            {
                organization: 'Rani Laxmibai Public School, Datia',
                discipline: 'X | ICSE',
                grade: '88%',
                yearOnly: true,
                year: '2014',
            },
        ],
    },
    achievements: {
        heading: 'Achievements',
        body: [
            'Architected and delivered scalable MERN stack applications, including Video-KYC and advanced analytics modules.',
            'Led the technical design and implementation of Yes Bank’s Digital Onboarding Journey for savings accounts, credit cards, and AL (Work In Progress).',
            'Successfully delivered a high-impact freelance project for 7Pence Advisors.',
            'Solved 650+ problems on LeetCode, showcasing proficiency in problem-solving and optimization.',
            'Recognized as an Academic Star and District Topper in 12th Grade.',
            'Qualified for Google Code Jam Round 1 in both 2019 and 2020.',
        ],
    }
};