import React, { useState } from "react";
import "./styles.scss";
import Text from "../../../components/Text";
import ReactPlayer from "react-player";

const VideoPlayer = ({url = ''}) => {
    const [playing, setPlaying] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [onStart, setOnStart] = useState(false);
  return (
    <div className={"video-player-container"}
         onMouseEnter={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}>
        <div className={`video-container ${url ? '' : 'no-video-container'}`}>
            <button
                data-aos="fade-in"
                className={'pause-btn video-btn-container'}
                style={{display: isHover && onStart ? 'flex' : 'none'}}
                onClick={() => {
                    setPlaying(!playing)
                }}
            >
                {playing ? <Text type={'semiBold'} size={34}>||</Text> :  <div
                    className={'triangle'}
                />}
            </button>
            {url ? <ReactPlayer
                muted
                height={"80vh"}
                width={"100vw"}
                playing={playing}
                onStart={() => setOnStart(true)}
                playIcon={
                    <button
                        data-aos="fade-in"
                        className={'video-btn-container'}
                        onClick={() => setPlaying(!playing)}
                    >
                        <div
                            className={'triangle'}
                        />
                    </button>
                }
                light="https://previews.123rf.com/images/illdirection/illdirection1603/illdirection160300030/55596780-path-with-landscape-background.jpg"
                url={url}
            /> :   <button
                data-aos="fade-in"
                className={'video-btn-container'}
                onClick={() => setPlaying(!playing)}
            >
                <Text type={'semiBold'} size={16} textStyles={{ letterSpacing: 4}}>
                    COMING
                    SOON
                </Text>

            </button>}
        </div>

    </div>
  );
};

export default VideoPlayer;
