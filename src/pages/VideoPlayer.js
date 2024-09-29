import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';

const DisplayVideo = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [expirationTime, setExpirationTime] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const {id, category} = useParams(); 
  const videoRef = useRef(null);

  // console.log(id, category);

  // const fetchVideoException = async () => {
  //   const response = await fetch(`http://localhost:4000/dev/videos/${category}/video-exception/${id}`, {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   });

  //   const data = await response.json();
  //   console.log(data);

  //   try {
  //     if (response.status === 200) {
  //       setVideoUrl(data.video_link);
  //       setExpirationTime(Date.now() + 3 * 60 * 1000); // 3 minutes
  //     } else {
  //       setErrorMessage('Error fetching video URL');
  //       console.log('Failed to fetch video URL');
  //     }
  //   } catch (error) {
  //     setErrorMessage('Error fetching video URL');
  //     console.error('Error fetching video URL', error);
  //   }
  // };

  // const fetchVideoUrl = async () => {
  //   const response = await fetch(`http://localhost:4000/dev/videos/${category}/video/${id}`, {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   });

  //   const data = await response.json();
  //   console.log(data);

  //   try {
  //     if (response.status === 401 && category === 'introduction') {
  //       fetchVideoException();
  //     } else if (response.status === 200) {
  //       setVideoUrl(data.video_link);
  //       setExpirationTime(Date.now() + 3 * 60 * 1000); // 3 minutes
  //     } else {
  //       setErrorMessage('Error fetching video URL');
  //       console.log('Failed to fetch video URL');
  //     }
  //   } catch (error) {
  //     setErrorMessage('Error fetching video URL');
  //     console.error('Error fetching video URL', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchVideoUrl();
  // }, [id]); // Fetch URL when component mounts or when `id` changes

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //       if ((Date.now() >= expirationTime - 2 * 60 * 1000) && !errorMessage) { // 2 minutes before expiration
  //         fetchVideoUrl().then(() => {
  //           if (videoRef.current) {
  //             const isPlaying = !videoRef.current.paused && !videoRef.current.ended;
  //             const currentTime = videoRef.current.currentTime;
  
  //             videoRef.current.pause();
  //             videoRef.current.oncanplay = () => {
  //               videoRef.current.currentTime = currentTime;
  //               if (isPlaying) {
  //                 videoRef.current.play();
  //               }
  //               videoRef.current.oncanplay = null;
  //             };
  
  //             videoRef.current.src = videoUrl;
  //             videoRef.current.load();
  //           }
  //         });
  //       }
  //     }, 60 * 1000); // Check every minute

  //   return () => clearInterval(intervalId);
  // }, [expirationTime, videoUrl]); // Check for expirationTime and videoUrl changes


  return (
    <div style={{ position: 'relative', width: '600px' }}>
      {videoUrl ? (
        <video ref={videoRef} controls width="600">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <video controls width="600">
          <p>Your browser does not support the video tag.</p>
        </video>
      )}
      {errorMessage && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            zIndex: 1,
          }}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default DisplayVideo;