import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
    url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
    return (
        <div className="w-full max-w-4xl">
            <ReactPlayer
                url={url}
                controls
                width="100%"
                height="auto"
                className="rounded-lg shadow-lg"
            />
        </div>
    );
};

export default VideoPlayer;
