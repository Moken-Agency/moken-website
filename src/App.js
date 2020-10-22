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
import MenuScreen from './components/Header/components/MenuScreen'
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

const TestHome = () => {
    return (
        <div style={{width: '100vw', height: '50vw', backgroundColor: 'red'}}>
            <span>HOME</span>
        </div>
    )
}

const routsWithHeaderFooter = [
    {
        path: "/careers",
        component: Careers
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
        path: "/",
        component: BackendDeveloper
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
        <div style={{overflowY: isOpen ? 'hidden' : 'scroll', minHeight: '100vh'}}>
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
                                              {
                                                  width >= 600 ?
                                                  <Header isOpen={isOpen} setIsOpen={setIsOpen}/> :
                                                  <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen}/>
                                              }
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
