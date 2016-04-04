/**
 * Created by thinhvoxuan on 4/4/16.
 */
import React, {Component} from 'react';

const VideoListItem = ({video, onClickItem}) => {
    const thumbnail = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item" onClick={() => onClickItem(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={thumbnail}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
            Item video
        </li>
    )
}

export default VideoListItem