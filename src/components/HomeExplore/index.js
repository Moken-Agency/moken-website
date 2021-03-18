import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import "./index.scss";
import Text from "../Text";
import Button from "../Button";
import {useHistory} from "react-router-dom";

import {debounce} from "../../constans/helpers";


const HomeExplore = ({
    title = '',
    description = '',
    isComingSoon = false,
    mokenTitle = {
      first: '',
      second: ''
    },
    btnOptions = {
      title: '',
      click: () => {},
        route: '/'
    }
}) => {
    const history = useHistory();

    const ref = useRef(null);

    const [state, setState] = useState({
        friction: 1 / 24,
        offsetX: '',
        offsetY: '',
        transform: `scale(1) perspective(550px)
                  rotateY(0deg)
                  rotateX(0deg)`
    });

    const _mouseMove = useCallback((e) => {
        const {x, width, y, height} = ref.current.getBoundingClientRect();
        let followX = (x + width / 2 - e.clientX ) * 2;
        let followY = (y + height / 2 - e.clientY);
        let xPos = 0,
            yPos = 0;
        xPos +=( (-followX - xPos) * state.friction);
        yPos += (followY - yPos) * state.friction;
        setState((prev) => {
            return {
                ...prev,
                offsetX: xPos,
                offsetY: yPos,
                scale: 'scale(1.03)'
            }
        });
    }, [state.transform]);

    const transform = `${state.scale} perspective(550px)
                  rotateY(${state.offsetX}deg)
                  rotateX(${state.offsetY}deg)`

    useEffect(() => {
        ref.current.addEventListener('mousemove', debounce(_mouseMove, 1000 / 60));
        return  document.removeEventListener('mousemove', _mouseMove);
    }, [])


    return (
    <div
      data-aos="fade-up"
      className={`home-explore-item-container`}
      style={{transform}}
      ref={ref}
      id={'home-explore-item-container'}
      onMouseLeave={  debounce(() => {
          setState({
              offsetX: 0,
              offsetY: 0,
              friction: 1 / 32,
              scale: 'scale(1)'
          })
      }, 50)}
    >
      <Text size={28} type={'kBold'} className={'home-explore-item-title'}>{title}</Text>

      <Text type={'kLight'} size={20} className={'home-explore-item-description'}>{description}</Text>
      <div className={'home-explore-item-moken-title-container'}>
        <Text size={16} type={'kBold'} className={'home-explore-item-moken-title-first'}>{mokenTitle.first}</Text>
        <Text  size={16} type={'kLight'} className={'home-explore-item-moken-title-second'}>{mokenTitle.second}</Text>
      </div>

      <Button size={10} isComingSoon={isComingSoon} className={'home-explore-btn'} title={btnOptions.title} onClick={() => btnOptions.route ? history.push( btnOptions.route) : btnOptions.click}/>
    </div>
  );
};
export default HomeExplore;
