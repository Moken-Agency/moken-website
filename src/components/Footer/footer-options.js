import {instagram, twitter, dribbble, behance, linkedin, instagramWhite, behanceWhite, dribbbleWhite, linkedinWhite, twitterWhite} from '../../images/socials';

export default {
    menuOption: {
        menuColumns: [
            {
                title: 'The Company',
                routes: [
                    {
                        title: 'Who’s Who & What’s What',
                        route: ''
                    },
                    {
                        title: 'Our Partners',
                        route: '/our-partners'
                    },
                    {
                        title: 'Client Results',
                        route: ''
                    },
                    {
                        title: 'Investors',
                        route: ''
                    },
                    {
                        title: 'Careers',
                        route: '/careers'
                    },
                    {
                        title: 'Insights',
                        route: ''
                    },
                ]
            },
            {
                title: 'Help & Support',
                routes: [
                    {
                        title: 'FAQ',
                        route: ''
                    },  {
                        title: 'Help Centre',
                        route: ''
                    },  {
                        title: 'Connect with Us',
                        route: '/connect-with-us'
                    },  {
                        title: 'Privacy',
                        route: '/privacy'
                    },  {
                        title: 'Terms',
                        route: '/terms'
                    },

                ]
            },
            {
                title: 'Collaborate',
                routes: [
                    {
                        title: 'Become a Partner',
                        route: ''
                    },
                    {
                        title: 'Sponsor the Future',
                        route: ''
                    },
                    {
                        title: 'Work with Mo + Ken',
                        route: '/mo-ken'
                    },
                    {
                        title: 'Product Testing Team',
                        route: '/product-testing-team'
                    },
                    {
                        title: 'Educate the Next Generation',
                        route: ''
                    },
                    {
                        title: 'Innovation Committee',
                        route: ''
                    },

                ]
            },
        ]
    },
    socialsMedia: [
        {image: twitter, link: ''},
        {image: behance, link: ''},
        {image: instagram, link: ''},
        {image: linkedin, link: ''},
        {image: dribbble, link: ''},
    ],
    socialsMediaWhite: [
        {image: twitterWhite, link: ''},
        {image: behanceWhite, link: ''},
        {image: instagramWhite, link: ''},
        {image: linkedinWhite, link: ''},
        {image: dribbbleWhite, link: ''},
    ],

    styles: {
        joinFirstText: {
            display: 'block',
            marginTop: 40,
            marginBottom: 20,
            letterSpacing: 0.3
        },
        joinSecondText: {
            marginBottom: 20,
        }
    }
}
