
import React, { useEffect, useRef } from 'react';


const YouTubePlayer = ({ videoId }) => {
    const playerRef = useRef(null);
    const [player, setPlayer] = React.useState(null);

    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        window.onYouTubeIframeAPIReady = () => {
            const newPlayer = new window.YT.Player(playerRef.current, {
                height: '390',
                width: '640',
                videoId: videoId,
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
            setPlayer(newPlayer);
        };

        return () => {
            document.body.removeChild(tag);
        };
    }, [videoId]);

    const onPlayerReady = (event) => {
        event.target.playVideo();
    };

    const onPlayerStateChange = (event) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
            console.log("Video is playing!");
        }
    };

    return <div ref={playerRef} />;
};

export default YouTubePlayer;
