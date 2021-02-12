import React from "react";
import './index.scss';

const Social = ({icon, link, type = 'white', containerStyles = {} }) => {
  return (
    <div className={`advisor-social ${type + '-socials'}`} style={containerStyles} onClick={() => window.open(link, '_blank')}>
        <img src={icon} style={{width: '100%', height: '100%'}}/>
    </div>
  );
};

export default Social;
