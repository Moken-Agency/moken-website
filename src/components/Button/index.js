import React from "react";
import './index.scss';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Text from "../Text";
import colors from '../../constans/colors';
//type = borderd | unbordered | transparent | innovation

//color = orange-bordered | coral | blue | black | white
const Button = ({
                    type = '',
                    backgroundColor = 'black',
                    textColor=  'white',
                    title = '',
                    containerStyles = {},
                    additionalComponent,
                    imgStyles = {},
                    onClick = () => {},
                    borderType = 'default',
                    size = 16,
                    mobSize = '3vw',
                    className = '',
                    textType = 'semiBold'}) => {
    const {isMobile} = useWindowDimensions();

    const bordersStyles = {
        bordered: {
            border: `1px solid ${colors[textColor]}`,

        },
        borderBottom: {
            border: 0,
            borderBottom: `1px solid ${colors[textColor]}`
        },
        default: {
            border: `1px solid ${colors[backgroundColor]}`,
        }
    };

    return (
        <button className={`button-container ${type} ${className}`}
                onClick={onClick}
                style={{...bordersStyles[borderType], ...containerStyles, backgroundColor: colors[backgroundColor]}}>
            <Text className={``}
                  color={colors[textColor]}
                  size={size} mobSize={mobSize} containerStyles={{justifyContent: 'center'}} textStyles={{whiteSpace: 'nowrap'}} type={textType}>{title}</Text>
            {/*{title}*/}
            {additionalComponent ? additionalComponent() : null}
        </button>
    )
}

export default Button
