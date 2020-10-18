import React from 'react';
import './styles.scss';
import Text from '../../../../components/Text';

const titleStyles = {
    fontSize: 30,
    // lineHeight: 35,
};

const containerTitleStyles ={
    marginBottom: 35
}

const routeStyle = {
    marginBottom: '1vw',
    cursor: 'pointer'
}

const containerRouteStyle = {
    marginBottom: '0.5vw'
}

const ColumnMenu = ({routes = [], title}) => {
   const handleOnClick = (route) => {
       console.log('Go to ' + route);
   }
    return (
        <div className={'column-menu-container '}>
            <Text textStyles={titleStyles} containerStyles={containerTitleStyles}>{title}</Text>
            {
                routes.map(({title, route}, index) => {
                    return (
                        <Text key={'column menu' + index + title} textStyles={routeStyle}
                              containerStyles={containerRouteStyle} onClick={() => handleOnClick(route)}>{title}</Text>
                    )
                })
            }
        </div>
    )
}

export default ColumnMenu
