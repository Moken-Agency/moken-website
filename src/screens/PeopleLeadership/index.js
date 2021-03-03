import React from "react";
import "./index.scss";
import HeaderTitle from "../../components/HeaderTitle";
import HostImage from "../../images/careers-header.jpg";
import Title from "../../components/Title";
import Text from "../../components/Text";
import options from "./options";
import People from "./People";
import Input from "../../components/Input";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import TitleSubDescription from "../../components/TitleSubDescription";
import OpportunitiesPeopleLeadershipEmailComponent from "../../components/OpportunitiesPeopleLeadershipEmailComponent";
import ImageBlock from "../../components/ImageBlock";
import PeopleLeaderShipImage from '../../images/people-leadershiping.png';
import PeopleLeaderShipFooterImage from '../../images/people-leadership-footer.png';
import partners from '../../images/partners'


const PeopleLeadership = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"people-leadership-container"}>
      <HeaderTitle
        title={"PEOPLE & LEADERSHIP"}
        subtitle={"Working on what matters, together."}
        description={
          "Looking for an opportunity to take your career forwards, send your portfolio to" +
          " careers@mokengroup.com"
        }
      />
      <ImageBlock url={PeopleLeaderShipImage}/>
      {/*<img src={HostImage} className={"people-leadership-image"} />*/}

      <TitleSubDescription
        title={"TEAM MOKEN"}
        subtitleClassName={'people-leadership-team-subtitle'}
        descriptionClassName={'people-leadership-team-description'}
        subtitle={`Two founders. Twenty-eight team members. Six countries. Seventeen cities. Fourteen advisors. One integrated team.`}
        description={`A team that thrives on trust. We may be small, but we’re a global and powerful team of creators,
         who have a passion for what we do. We start each day with new ideas, help each other grow, and learn from one another.
          Each aspect of our work is perfected to the extent that allows us to support the reputation of a trusted 
          partner and consitently raises the bar driving our ambition higher and higher.`}
        containerStyles={{marginBottom: 150}}
      />
      <div style={{marginBottom: 150}}>
          {options.peopleGroups.map((people, index) => (
              <People {...people} peopleIndex={index} />
          ))}
      </div>


      <TitleSubDescription
        title={"OUR EXTENDED TEAM"}
        subtitle={"Growing together through collaboration."}
        // containerStyles={{marginBottom: '8vw'}}
      />

      <div className={"people-images-container"}>
        {options.partners.map(({image, width, height}, index) => (
            <div className={'people-images-item'}>
                <img src={image}  key={"corporation" + index} />
            </div>
        ))}
      </div>

        <OpportunitiesPeopleLeadershipEmailComponent
            title={'JOIN THE TEAM'}
            subtitle={"We have something for everyone."}
            description={`Our goal is to deliver amazing experiences that make people talk, and build strategic value
             for brands, tech, entertainment, arts & culture. The Moken team is growing at a rapid pace, to stay in
              the loop on additional ways to connct join our mailing list to never miss a beat.`}
            imgURL={PeopleLeaderShipFooterImage}
        />


    </div>
  );
};

export default PeopleLeadership;
