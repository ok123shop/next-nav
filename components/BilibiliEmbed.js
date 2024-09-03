// components/BilibiliEmbed.js
import React from 'react';

const BilibiliEmbed = ({ bvid }) => {
    const iframeSrc = `//player.bilibili.com/player.html?bvid=${bvid}&page=1`;
    
    return (
        <div className="video-container">
            <iframe 
                src={iframeSrc}
                scrolling="no"
                border="0"
                frameBorder="no"
                framespacing="0"
                allowFullScreen
                width="100%"
                height="100%"
            ></iframe>
            
            <style jsx>{`
                .video-container {
                    position: relative;
                    padding-bottom: 56.25%;
                    height: 0;
                    overflow: hidden;
                    max-width: 100%;
                    background: #000;
                }

                .video-container iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    );
};

export default BilibiliEmbed;
