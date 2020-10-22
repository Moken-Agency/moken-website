import React from 'react';
import Text from '../../../../../Text';

const styles = {
    mainTitle: {
        color: 'white',
        // letterSpacing: 4
    },
    routs: {
        color: 'white',
        // letterSpacing: 4
    }
}

const MenuScreenBottomColumn = ({title = '', routs = []}) => {
    return (
        <div>
            <Text size={20} type={'semiBold'} textStyles={styles.mainTitle} containerStyles={{marginBottom: 65}}>{title}</Text>
            {
                routs.map(({title}, index) => {
                    return (
                        <Text size={18}
                              textStyles={styles.routs}
                              containerStyles={{marginBottom: 10, marginRight: 100}}
                              type={'light'}
                              key={'MenuScreenBottomColumnRouts' + index}>{title}</Text>
                    )
                })
            }
        </div>
    )
}

export default MenuScreenBottomColumn
