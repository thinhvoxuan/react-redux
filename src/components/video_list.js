/**
 * Created by thinhvoxuan on 4/4/16.
 */
import React, {Component} from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((item) => {
        return <VideoListItem onClickItem={props.onSelectVideo} key={item.etag} video={item} />
    })
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}


export default VideoList;