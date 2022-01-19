import { getDataAttrs } from '../../utils/get-data-attrs';
import React from 'react';

const ImageLink = (props) => {
    const proptypes = Object.keys(props).join(',');
    if (props.link) {
        return (
            <a 
                href={props.link} 
                style={{width: props.width ? props.width : null}} 
                {...getDataAttrs(props)}
            >
                <img 
                    class="flex-item" 
                    src={props.image} 
                    alt={props.altText} 
                    style={{ width: props.width, height: props.height }}
                />
            </a>
        );
    } else {

        return (
            <div 
                style={{width: props.width ? props.width : null}} 
                {...getDataAttrs(props)}
            >
                <img 
                    class="flex-item" 
                    src={props.image} 
                    alt={props.altText} 
                    style={{ width: props.width, height: props.height }}
                />
            </div>
        );
    }
};

export default ImageLink;
