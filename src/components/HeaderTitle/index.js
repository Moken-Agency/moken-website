import React from "react";
import Text from "../Text";
import './index.scss';
// moken: {
//     marginBottom: isMobile ? 48 : '1.4vw',
//         letterSpacing: 4
// },
// working: {
//     marginBottom: isMobile ? 42 : '2.4vw'
//
// },
const HeaderTitle = ({title = '', subtitle = '', description = '', marginBottom = 225 }) => {
    return (
        <div className={'header-title-container'} style={{marginBottom}}>
            <Text size={'.9vw'}
                  mobSize={14}
                  type={'semiBold'}
                  className={'header-title-main-title'}>{title}</Text>
            <Text size={'4.2vw'}
                  mobSize={45}
                  type={'thin'}
                  className={'header-title-subtitle'}>{subtitle}</Text>
            {description ? <Text size={'1.1vw'}
                   mobSize={16}
                   className={'header-title-description'}
                   type={'light'}>{description}</Text> : null}
        </div>
    )
}

export default HeaderTitle;
