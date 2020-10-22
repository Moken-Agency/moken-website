import React, {useState} from 'react';
import './styles.scss';
import Text from '../../../../components/Text';
import { useHistory } from "react-router-dom";


const titleStyles = {
    whiteSpace: 'noWrap'
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

const ColumnTextComponent = ({title, handleOnClick, index}) => {

    const [color, setColor] = useState( 'black');
    const onMouseEnter = () => {
        setColor('grey')
    }
    const onMouseLeave = () => {
        setColor('black')
    }
    return (
        <Text key={'column menu' + index + title} textStyles={{...routeStyle, color}}
              type={'light'}
              size={'.75vw'}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              containerStyles={containerRouteStyle} onClick={handleOnClick}>{title}</Text>
    )
}

const ColumnMenu = ({routes = [], title}) => {



    const handleOnClick = (route) => {
        console.log('Go to ' + route);
    }

    return (
        <div className={'column-menu-container'}>
            <Text type={'thin'} size={'1.9vw'} textStyles={titleStyles} containerStyles={containerTitleStyles}>{title}</Text>
            {
                routes.map(({title, route}, index) => {
                    return <ColumnTextComponent key={index + 'ColumnTextComponent'} handleOnClick={handleOnClick}
                                                title={title} route={route}/>
                })
            }
        </div>
    )
}

export default ColumnMenu
