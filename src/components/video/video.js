import React from 'react';

/**
 *
 * @param {string} src
 * @param {string} type
 * @param {boolean} autoPlay
 * @param {boolean} loop
 * @param {boolean} muted
 * @param {boolean} preload
 */

const Video = ({ src, type, autoPlay, loop, muted, preload }) => {
	return (
		<video className='responsive-video' controls autoPlay={autoPlay} loop={loop} muted={muted} preload={preload}>
			<source src={src} type={type} />
		</video>
	);
};

export default Video;
