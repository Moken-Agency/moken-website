import React, {useCallback, useEffect, useRef, useState} from "react";
import "./index.scss";
import Text from "../../../../components/Text";
import {debounce} from "../../../../constans/helpers";

const TitleSubDescRounded = ({
  title = "",
  subtitle = "",
  description = "",
}) => {

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
    }, []);


  return (
    <div className={"title-sub-desc-rounded-container"}
         style={{transform}}
         ref={ref}
         onMouseLeave={  debounce(() => {
             setState({
                 offsetX: 0,
                 offsetY: 0,
                 friction: 1 / 32,
                 scale: 'scale(1)'
             })
         }, 50)}>
      <Text
        className={"title-sub-desc-rounded-title"}
        size={14}
        type={"kMedium"}
      >
        {title}
      </Text>
      <Text
        className={"title-sub-desc-rounded-subtitle"}
        size={30}
        type={"kLight"}
      >
        {subtitle}
      </Text>
      <Text
        className={"title-sub-desc-rounded-description"}
        size={13}
        type={"kLight"}
      >
        {description}
      </Text>
    </div>
  );
};

export default TitleSubDescRounded;
