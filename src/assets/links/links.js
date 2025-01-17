// All the Links Projects uses/will ever use will go here.
import { Developer } from '../../constants/constants';
import facebookLogo from '../media/svgs/icons8-facebook-logo.svg';
import twitterLogo from '../media/svgs/icons8-x.svg';
import githubLogo from '../media/svgs/icons8-github.svg';
import linkedinLogo from '../media/svgs/icons8-linkedin.svg';

const AboutDeveloper = {
    HiGif: 'https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif',
    Developer: {
        mailTo: 'mailto:shivambmgupta@gmail.com',
        resume: 'https://drive.google.com/file/d/19z5LfqCgv9kRA2sV4uxfsRmG0O0yvOjg/view?usp=sharing',
        social_medias: [
            {
                url: 'https://www.facebook.com/shivambmgupta',
                icon: facebookLogo,
                description: `${Developer.DEVELOPER} | Facebook`, // META Data | alt text
            },
            {
                url: 'https://x.com/shivambmgupta',
                icon: twitterLogo,
                description: `${Developer.DEVELOPER} | X (Twitter)`, // META Data | alt text
            },
            {
                url: 'https://www.linkedin.com/in/shivambmgupta/',
                icon: linkedinLogo,
                description: `${Developer.DEVELOPER} | LinkedIn`, // META Data | alt text
            },
            {
                url: 'https://www.github.com/shivambmgupta',
                icon: githubLogo,
                description: `${Developer.DEVELOPER} | Github`, // META Data | alt text
            },
        ],
    },
};

export default AboutDeveloper;
