import React from 'react';

/**
 *
 * @param {Object[]} list
 * @param {string} list[].src
 * @param {string} list[].type
 * @param {boolean} autoPlay
 * @param {boolean} loop
 * @param {boolean} muted
 * @param {boolean} preload
 */

const Audio = ({ list, autoPlay, loop, muted, preload }) => {
	return (
		<audio controls autoPlay={autoPlay} loop={loop} muted={muted} preload={preload}>
			{list.map((el) => (
				<source src={el.src} key={el.src} type={el.type} />
			))}
			Your browser does not support the audio element.
		</audio>
	);
};

export default Audio;
