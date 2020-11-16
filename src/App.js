import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import HeaderMobile from './components/Header/components/HeaderMobile'
import MenuScreen from './screens/MenuScreen'
import Footer from './components/Footer'
import useWindowDimensions from "./hooks/useWindowDimensions";
import Other from './screens/Other';
import BackendDeveloper from "./screens/BackendDeveloper";
import CommunityManager from "./screens/CommunityManager";
import Copywriter from "./screens/Copywriter";
import Designer from "./screens/Designer";
import EmailMarketing from "./screens/EmailMarketing";
import EventCoordinator from "./screens/EventCoordinator";
import IllustratorGraphic from "./screens/IllustratorGraphic";
import FrontendDeveloper from "./screens/FrontEndDeveloper";
import PartnershipManager from "./screens/PartnershipManager";
import PodcastHost from "./screens/PodcastHost";
import SocialMediaManager from "./screens/SocialMediaManager";
import YouTubeHost from "./screens/YouTubeHost";
import Careers from "./screens/Careers";
import Opportunities from "./screens/Opportunities";
import Portfolio from "./screens/Portfolio";
import Events from "./screens/UpcomingEvents";
import TermsAndConditions from "./screens/TermsAndConditions";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Expertise from "./screens/Expertise";
import StartUpSmart from "./screens/StartUpSmart";
import ProductTestingTeam from "./screens/ProductTestingTeam";
import OurPartners from "./screens/OurPartners";
import AboutAgency from "./screens/AboutAgency";
import UpcomingEvents from "./screens/UpcomingEvents";
import Community from "./screens/Community";
import Branding from "./screens/Branding";
import StrategyAdvisory from "./screens/StrategyAdvisory";
import ProgramDrivenMarketing from "./screens/ProgramDrivenMarketing";
import ProductDevelopment from "./screens/ProductDevelopment";
import ProductDesign from "./screens/ProductDesign";
import MarketResearchValidation from "./screens/MarketResearchValidation";
import DesignDevelop from "./screens/DesignDevelop";
import CommunityDevelopment from "./screens/CommunityDevelopment";
import ProductStrategy from "./screens/ProductStrategy";
import PartnershipPrograms from "./screens/PartnershipPrograms";

const TestHome = () => {
    return (
        <div style={{width: '100vw', height: '50vw', backgroundColor: 'red'}}>
            <span>HOME</span>
        </div>
    )
}

const routsWithHeaderFooter = [

    {
        path: "/partnership-programs",
        component: PartnershipPrograms
    },
    {
        path: "/product-strategy",
        component: ProductStrategy
    },
    {
        path: "/community-development",
        component: CommunityDevelopment
    },{
        path: "/design-develop",
        component: DesignDevelop
    },{
        path: "/market-research-validation",
        component: MarketResearchValidation
    },{
        path: "/product-design",
        component: ProductDesign
    },{
        path: "/product-development",
        component: ProductDevelopment
    },
    {
        path: "/program-driven-marketing",
        component: ProgramDrivenMarketing
    },
    {
        path: "/strategy-advisory",
        component: StrategyAdvisory
    },
    {
        path: "/branding",
        component: Branding
    },
    {
        path: "/community",
        component: Community
    },
    {
        path: "/about-agency",
        component: AboutAgency
    },
    {
        path: "/our-partners",
        component: OurPartners
    },
    {
        path: "/product-testing-team",
        component: ProductTestingTeam
    },
    {
        path: "/start-up-smart",
        component: StartUpSmart
    },
    {
        path: "/expertise",
        component: Expertise
    },
    {
        path: "/privacy",
        component: PrivacyPolicy
    },
    {
        path: "/terms",
        component: TermsAndConditions
    },
    {
        path: "/upcoming-events",
        component: UpcomingEvents
    },
    {
        path: "/portfolio",
        component: Portfolio
    },
    {
        path: "/careers",
        component: Careers
    },

    {
        path: "/opportunities",
        component: Opportunities
    },

    {
        path: "/other",
        component: Other
    },

    {
        path: "/community-manager",
        component: CommunityManager
    },
    {
        path: "/copywriter",
        component: Copywriter
    },
    {
        path: "/designer",
        component: Designer
    },
    {
        path: "/email-marketing",
        component: EmailMarketing
    },
    {
        path: "/event-coordinator",
        component: EventCoordinator
    },
    {
        path: "/illustrator-graphic",
        component: IllustratorGraphic
    },
    {
        path: "/frontend-developer",
        component: FrontendDeveloper
    },
    {
        path: "/partnership-manager",
        component: PartnershipManager
    },
    {
        path: "/podcast-host",
        component: PodcastHost
    },
    {
        path: "/social-media-manager",
        component: SocialMediaManager
    },

    {
        path: "/youtube-host",
        component: YouTubeHost
    },
    {
        path: "/backend-developer",
        component: BackendDeveloper
    },
    {
        path: "/",
        component: Opportunities
    },


];
const routsWithoutHeaderFooter = [
    {
        path: "/menuscreen",
        component: MenuScreen
    },

];

function App() {
  const {width} = useWindowDimensions()

  const [isOpen, setIsOpen] = useState(false);


  return (
      <Router>
        <div style={{minHeight: '100vh'}}>
            {/*<MenuScreen isOpen={true} setIsOpen={setIsOpen}/>*/}


          {/*<nav>*/}
          {/*  <ul>*/}
          {/*    <li>*/}
          {/*      <Link to="/">Home</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/about">About</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/users">Users</Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</nav>*/}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  {
                      routsWithoutHeaderFooter.map((route, index) => {
                          return (
                                  <Route
                                      key={'routsWithoutHeaderFooter' + index}
                                      path={route.path}
                                      children={<route.component />}
                                      // render={props => (
                                      //     // pass the sub-routes down to keep nesting
                                      //     <route.component {...props} />
                                      // )}
                                  />
                          )
                      })
                  }
                  {
                      routsWithHeaderFooter.map((route, index) => {
                          return (

                                  <Route
                                      key={'routsWithHeaderFooter' + index}
                                      path={route.path}
                                      // children={<route.component />}
                                      children={props => {
                                          // pass the sub-routes down to keep nesting
                                          return (
                                              <>
                                                  <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
                                                <route.component {...props} />
                                                  <Footer isOpen={isOpen} setIsOpen={setIsOpen}/>
                                              </>
                                          )
                                      }}
                                  />
                          )
                      })
                  }


              </Switch>
        </div>
      </Router>
  );
}

export default App;


// <>
//     {width >= 600 ?
//         <Header isOpen={isOpen} setIsOpen={setIsOpen}/> :
//         <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen}/>
//     }
//     <Route
//         path={route.path}
//         children={<route.component />}
//
//         // render={props => (
//         //     // pass the sub-routes down to keep nesting
//         //     <route.component {...props} />
//         // )}
//     />
//     <Footer isOpen={isOpen} setIsOpen={setIsOpen}/>
// </>
