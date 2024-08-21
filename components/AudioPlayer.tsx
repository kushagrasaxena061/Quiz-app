// components/AudioPlayer.tsx
import React from 'react';
import ReactPlayer from 'react-player';

interface AudioPlayerProps {
    url: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ url }) => {
    return (
        <div className="w-full max-w-2xl">
            <ReactPlayer
                url={url}
                playing={false} // Don't start automatically
                controls
                width="100%"
                height="50px" // Fit audio controls
                className="rounded-lg shadow-lg"
            />
        </div>
    );
};

export default AudioPlayer;
