import {instagramWhite, linkedinWhite, dribbbleWhite, twitterWhite, behance, dribbble, instagram, linkedin, twitter} from '../../images/socials';
import Mohamed from '../../images/Mohamed.jpg'

const templateAdvisor =  {
        avatar: Mohamed,
        title: 'MOKEN ADVISOR',
        name: 'Mohamed Ibshara',
        bio: 'Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.',
        expertiseArea: 'Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies.',

        socialLinks: [
            {
                link: 'https://www.instagram.com/mibshara/',
                icon: instagramWhite,
                blackIcon: instagram
            },
            {
                link: 'https://www.instagram.com/mibshara/',
                icon: linkedinWhite,
                blackIcon: linkedin

            },
            {
                link: 'https://www.instagram.com/mibshara/',
                icon: twitterWhite,
                blackIcon: twitter

            },
            {
                link: 'https://www.instagram.com/mibshara/',
                icon: dribbbleWhite,
                blackIcon: dribbble

            },
        ],

        rates: [
            {
                title: '30 minutes',
                value: '$50.00 CAD'
            },
            {
                title: '30 minutes',
                value: '$50.00 CAD'
            },
            {
                title: '30 minutes',
                value: '$50.00 CAD'
            }]
};

export default {
    advisors: [
        templateAdvisor,
        templateAdvisor,
        templateAdvisor,
        templateAdvisor,
        templateAdvisor,
    ]
};
