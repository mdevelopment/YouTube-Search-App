console.log("VIDEO LIST ITEM")
import React from 'react';

//const VideoListItem = (props) => {
//const video = props.video;
//console.log(video);
//BELOW IS THE ES 6 VERSION
const VideoListItem = ({video, onVideoSelect}) => {
const imageUrl = video.snippet.thumbnails.default.url;
const titleUrl = video.snippet.title;

return (

<li onClick={() => onVideoSelect(video)} className="list-group-item">

<div className="video-list media">
<div claseName="media-left">
  <img className="media-object" src={imageUrl} />
</div>

<div className="media-body">
<div className="media-heading">{titleUrl}</div>
</div>
</div>
</li>
 )
};

export default VideoListItem;
