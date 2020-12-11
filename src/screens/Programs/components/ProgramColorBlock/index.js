import ColorBlock from "../../../../components/ColorBlock";
import React from "react";
import './index.scss';

const ProgramColorBlock = ({title = '',
                               subtitle = '',
                               withIcon = true,
                               type='thin',
                               size = 30 }) => (<ColorBlock   title={title}
                                                              subtitle={subtitle}
                                                              backgroundColor={'black'}
                                                              className={'program-color-block'}
                                                              withIcon={withIcon}
                                                              type={type}
                                                              size={size}/>)

export default ProgramColorBlock;
