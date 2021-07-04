import { lazy } from 'react';

const About = lazy(() => import('../components/About'));
const ProjectList = lazy(() => import('../components/ProjectList'));
const BlogList = lazy(() => import('../components/BlogsList'));

export const Developer = {
    DEVELOPER: 'Shivam Gupta',
    USERNAME: '@shivambmgupta',
    HEADING: 'Hi, I\'m Shivam Gupta',
    ABOUT: 'I\'m a simple developer, who reads widely. Curious enough to learn every day. Passionate enough to keep myself up to date. Dedicated enough to create something better.',
};

export const Blogs = [
    {
        heading: 'Containment, Specialization and Inheritance in React-Native/React',
        content: 'In this blog, I have covered Containment, Specialization and Inheritance in React/React-Native, the difference between them and how using these concepts with help you go DRY (Don\'t Repeat Yourself) and save you from writing redundant code ',
        url: ' https://shivambmgupta.medium.com/containment-specialization-and-inheritance-in-react-native-react-8fffaf789b94',
        key: 0,
    },
    {
        heading: 'ESLint: What, Why, When, How',
        content: 'Your javascript project can have pitfalls if not dealt with care. Linting tools like ESLint makes your codebase way more consistent, less error-prone. With ESLint, you can impose code standards/guidelines by setting up standalone rules, which you can turn off and on. In just few steps, you can make your medium to large-scaled non-trivial javascript application consistent in terms of the codebase. For more details please read my ',
        url: 'https://shivambmgupta.medium.com/eslint-what-why-when-how-7353a10e65c5',
        key: 1,
    },
];

export const Pages = [
    {
        pageLink: '/',
        view: BlogList,
        displayName: 'Blogs',
        showInNavbar: true,
    },
    {
        pageLink: '/about',
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
        body: 'I\'m a simple developer, who reads widely. Curious enough to learn every day. Passionate enough to keep myself up to date. Dedicated enough to create something better.',
    },
    experience: {
        heading: 'Experience',
        dateOptions: { year: 'numeric', month: 'long' },
        dateFormat: 'en-US',
        body: [
            {
                companyName: 'Radiance Technologies LLC',
                profile: 'SDE I',
                about: 'MERN Stack Developer, working on both React and React-Native. Directing our software programming initiatives. Developing and executing project plans. Shaping the future of our systems. Overseeing the development of documentation.',
                fromDate: new Date(2021, 6, 1),
                current: true,
            },
            {
                companyName: 'Radiance Technologies LLC',
                profile: 'Intern',
                about: 'MERN Stack Developer. Developing applications. Collaborating with senior leaders. Proactively learning about new technologies',
                fromDate: new Date(2020, 8, 1),
                endDate: new Date(2021, 5, 30),
            },
            {
                companyName: 'Thinking Machines',
                profile: 'Intern',
                about: 'Worked on C++ GUI Paint-like Project. Learnt QT, and designs principles in that span. Other technologies: C, Java, Python, HTML, CSS, JavaScript.',
                fromDate: new Date(2020, 5, 1),
                endDate: new Date(2020, 8, 30),
            },
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
                grade: '7.61/10',
                fromDate: new Date(2017, 5, 1),
                endDate: new Date(2021, 6, 31),
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
            'Delivered 3 MERN Stack Projects.',
            'Delivered 1 freelance project.',
            'Academic Star, 12 Std. (District Topper)',
            '5 stars in Problem Solving at Hackerrank.',
        ],
    }
};
