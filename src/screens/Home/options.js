import onlineCourses from '../../images/home-online-courses.jpg';
import networking from "../../images/home-networking.jpg";
import resources from "../../images/home-resources.jpg";

export default {
    explores: [
        {
            title: 'Build.',
            description: 'Where founders & startups build, validate & grow.',
            mokenTitle: {
                first: 'moken',
                second: 'agency'
            },
            btnOptions: {
                title: 'EXPLORE AGENCY',
                click: () => {}
            },
            route: '/about-agency'
        },
        {
            title: 'Learn.',
            description: 'Where startups & founders learn & evolve.',
            mokenTitle: {
                first: 'moken',
                second: 'programs'
            },
            btnOptions: {
                title: 'DISCOVER PROGRAMS',
                click: () => {},
                route: '/about-programs'

            }
        },
        {
            title: 'Connect.',
            description: 'Where startups & founders experience & connect.',
            mokenTitle: {
                first: 'moken',
                second: 'events'
            },
            btnOptions: {
                title: 'ENGAGE EVENTS',
                click: () => {},
                route: '/events'

            }
        },
        {
            title: 'Access.',
            description: 'Where founders network, scale & succeed.',
            mokenTitle: {
                first: 'access',
                second: 'bymoken'
            },
            btnOptions: {
                title: 'ACCESS POTENTIAL',
                click: () => {},
                route: '/access'
            }
        },
    ],
    startupsData: [
        {
            title: '4',
            subtitle: 'Unique program streams'
        },
        {
            title: '125+ ',
            subtitle: 'Founders per year impacted'
        }
    ],
    paths: [
        'IDEATE',
        'VALIDATE',
        'BUILD',
        'GROW',
        'SCALE',
    ],
    impacts: [
        {
            title: 'Build your startup.',
            subtitle: 'For Founders & Startups',
            route: '/about-agency'
        },
        {
            title: 'Learn together.',
            subtitle: 'For Students, Founders & Startups',
            route: '/about-programs'
        },
        {
            title: 'Partner with us.',
            subtitle: 'For Solution Providers & Startup Programs',
            route: '/our-partners'
        },
        {
            title: 'Invest with us.',
            subtitle: 'For Investors & Venture Funds',
            route: '/for-investors'
        },
        {
            title: 'Access your potential.',
            subtitle: 'For Students, Founders & Startups',
            route: '/access'
        },
        {
            title: 'Create community.',
            subtitle: 'For Everyone',
            route: '/events'
        },
    ],
    swiperData: [
        {
            backgroundImage: networking,
            title: 'Networking',
            subtitle: 'Groups'
        },
        {
            backgroundImage: onlineCourses,
            title: 'Online',
            subtitle: 'Courses'
        },
        {
            backgroundImage: onlineCourses,
            title: 'Virtual',
            subtitle: 'Events'
        },
        {
            backgroundImage: resources,
            title: 'Online',
            subtitle: 'Resources'
        },

    ]
}
