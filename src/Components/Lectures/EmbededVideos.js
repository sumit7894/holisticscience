import React from 'react';
import './embededvideos.css'

const EmbededVideos = () => {
  return (
    <div className="lecture-container">
      <h1>Trending YouTube Lectures</h1>
      <div className="lecture-grid">
        {/* YouTube Embeds */}
        <div className="lecture-item">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/_uQbCuwk0Io?si=weQATtxFlDG2mvsr"
            title="Lecture 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="lecture-item">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Q2X5pbnwga4?si=oWZZ4yaN_XU57jaT"
            title="Lecture 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="lecture-item">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/man7iADwNnk?si=pAz0dMWQkiOPidUA"
            title="Lecture 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="lecture-item">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/x1Y08TidvXI?si=caZNyRN3zXT9Rl2M"
            title="Lecture 4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EmbededVideos;
