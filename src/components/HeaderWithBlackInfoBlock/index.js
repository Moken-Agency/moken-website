import React from "react";
import Text from "../Text";
import './index.scss';
import ProgramDetails from "../../screens/Programs/components/ProgramDetails";
// moken: {
//     marginBottom: isMobile ? 48 : '1.4vw',
//         letterSpacing: 4
// },
// working: {
//     marginBottom: isMobile ? 42 : '2.4vw'
//
// },
const HeaderWithBlackInfoBlock = ({title = '', subtitle = '', description = '', marginBottom = 225, blackInfoData }) => {
    return (
        <div className={'header-black-container'} style={{marginBottom}}>
           <div className={'header-black-title-container'}>
               <Text size={'.9vw'}
                     mobSize={14}
                     animationType={'fade-in'}
                     type={'semiBold'}
                     className={'header-black-main-title'}>{title}</Text>
               <Text size={'4.2vw'}
                     mobSize={45}
                     animationType={'fade-in'}
                     type={'thin'}
                     className={'header-black-subtitle'}>{subtitle}</Text>
               {description ? <Text size={'1.1vw'}
                                    mobSize={16}
                                    animationType={'fade-in'}
                                    className={'header-black-description'}
                                    type={'light'}>{description}</Text> : null}
           </div>
            <ProgramDetails options={blackInfoData} />

        </div>
    )
}

export default HeaderWithBlackInfoBlock;
