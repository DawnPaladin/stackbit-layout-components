import { getDataAttrs } from '../../utils/get-data-attrs';
import React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import { mapMaxWidthStyles } from '../../utils/map-classes';

const Video = (props) => {
	const width = props.width || "";
	const className = classNames(
		mapMaxWidthStyles(props.styles?.self?.width), 
        props.styles?.self?.padding && mapStyles(props.styles.self.padding),
        'm-auto' /* margin: auto */
	);
	return (<div className={className} {...getDataAttrs(props)}>
		<video
			controls
			width={width}
			src={props.url}
		>
			Can't play video. Your browser may not support embedded video.
		</video>
	</div>)
}

export default Video;