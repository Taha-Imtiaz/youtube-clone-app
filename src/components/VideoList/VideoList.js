import React from 'react'
import {Grid} from '@material-ui/core'
import VideoItem from '../VideoItem/VideoItem'

const VideoList = (props) => {
    var {videos, onVideoSelect} = props
    return (
        
           <Grid container spacing = {2}>
           {videos.map((video, id) => <VideoItem key = {id} video = {video} onVideoSelect = {onVideoSelect}/>)}
           </Grid>
        
    )
}

export default VideoList
