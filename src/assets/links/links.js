// All the Links Projects uses/will ever use will go here.

// Todo: Download these content to local to avoid unnecessary dependency on third party

import { Developer } from '../../constants/constants';
import facebookLogo from '../media/svgs/facebook.svg';

const AboutDeveloper = {
    HiGif: 'https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif',
    Developer: {
        mailTo: 'mailto:shivambmgupta@gmail.com',
        resume: 'https://drive.google.com/file/d/1K9VMREr8KAkcSNx4Hl50AvVrqsXiRxg3/view?usp=sharing',
        social_medias: [
            {
                url: 'https://www.facebook.com/shivambmgupta',
                icon: facebookLogo,
                description: `${Developer.DEVELOPER} | Facebook`, // META Data | alt text
            },
            {
                url: 'https://twitter.com/shivambmgupta',
                icon: 'https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/twitter.svg',
                description: `${Developer.DEVELOPER} | Twitter`, // META Data | alt text
            },
            {
                url: 'https://www.linkedin.com/in/shivambmgupta',
                icon: 'https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg',
                description: `${Developer.DEVELOPER} | LinkedIn`, // META Data | alt text
            },
            {
                url: 'https://www.github.com/shivambmgupta',
                icon: 'https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/github.svg',
                description: `${Developer.DEVELOPER} | Github`, // META Data | alt text
            },
        ],
    },
};

export default AboutDeveloper;
