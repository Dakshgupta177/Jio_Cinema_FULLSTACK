
import React, { useEffect, useRef } from 'react';


const YouTubePlayer = ({ videoId }) => {
    const playerRef = useRef(null);
    const [player, setPlayer] = React.useState(null);

    useEffect(() => {
        // Load the YouTube IFrame API script
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        // When the API script is loaded, create the player
        window.onYouTubeIframeAPIReady = () => {
            const newPlayer = new window.YT.Player(playerRef.current, {
                height: '390',
                width: '640',
                videoId: videoId, // Pass in the videoId prop
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
            setPlayer(newPlayer);
        };

        // Clean up the script tag when the component is unmounted
        return () => {
            document.body.removeChild(tag);
        };
    }, [videoId]);

    const onPlayerReady = (event) => {
        event.target.playVideo(); // Autoplay the video when ready
    };

    const onPlayerStateChange = (event) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
            console.log("Video is playing!");
        }
    };

    return <div ref={playerRef} />;
};

export default YouTubePlayer;
