export default {
    leftMenu: [
        {
            title: 'Investors',
            route: '/investors',
            withDivider: true
        },
        {
            title: 'Partners',
            route: '/partners',
            withDivider: true
        },
        {
            title: 'Insights',
            route: '/insights',
            withDivider: true
        },
        {
            title: 'Careers',
            route: '/careers',
        },
    ],
    rightMenu: [
        {
            title: 'The academy',
            route: 'academy',
            withDivider: true
        },
        {
            title: 'Shop moken',
            route: 'shop-moken',
            withDivider: true
        },
        {
            title: 'Work with us',
            route: 'work-with-us',
        },

    ],
    mainMenu: [
        {
            title: 'About',
            dividerColor: '#b3b3b3',
            subRouts: [
                {
                    title: 'ABOUT MOKEN',
                    route: '/'

                },
                {
                    title: 'PEOPLE & LEADERSHIP',
                    route: '/'

                },
                {
                    title: 'CLIENT RESULTS',
                    route: '/'

                },
                {
                    title: 'OUR PARTNERS',
                    route: '/our-partners'

                },
                {
                    title: 'PORTFOLIO',
                    route: '/portfolio'
                },
            ]
        },
        {
            title: 'agency',
            dividerColor: '#ffc4af',
            subRouts: [
                {
                    title: 'About agency',
                    route: '/about-agency'
                },
                {
                    title: 'Expertise',

                },
                {
                    title: 'SPRINTS & ROADMAPS',

                },
                {
                    title: 'STARTUPSMART PACKAGES',
                    route: '/start-up-smart'

                },
                {
                    title: 'PRODUCT TESTING TEAM',
                    route: '/product-testing-team'

                },
            ]

        },
        {
            title: 'community',
            route: 'community',
            dividerColor: '#ff2a68',
            subRouts: [
                {
                    title: 'ABOUT THE COMMUNITY',
                },
                {
                    title: 'FOR STARTUPS',

                },
                {
                    title: 'FOR INVESTORS',

                },
                {
                    title: 'FOR STUDENTS',

                },
                {
                    title: 'FOR AGENCIES',

                },
                {
                    title: 'FOR CORPORATIONS',

                },
            ]
        },
        {
            title: 'Programs',
            dividerColor: '#00c39f',
            subRouts: [
                {
                    title: 'ABOUT PROGRAMS',
                },
                {
                    title: 'MOKENLABS',
                },
                {
                    title: 'FUTUREFOUNDERS PROGRAM',
                },
                {
                    title: 'RAISINGRIGHT PROGRAM',
                },
                {
                    title: 'ADVISORS OF TOMORROW PROGRAM',
                }
            ]
        },
        {
            title: 'Events',
            dividerColor: '#263da8',
            subRouts: [
                {
                    title: 'UPCOMING EVENTS',
                    route: '/events'
                },
                {
                    title: 'HOST AN EVENT',

                }, {
                    title: 'GET TICKETS',

                },
            ]
        },
        {
            title: 'Media',
            route: 'media',
            dividerColor: '#ff7d3e',
            subRouts: [
                {
                    title: 'INSIGHTS BY MOKENS',
                },
                {
                    title: 'STARTUPSMART PODCAST',
                }, {
                    title: 'BECOME A HOST',
                },
            ]
        },
    ],
    mainMenuTextStyles: {
        letterSpacing: 3.6,
    },
    topMenuTextStyles: {
        marginRight: 10,
        letterSpacing: 2.8,
    }
}
