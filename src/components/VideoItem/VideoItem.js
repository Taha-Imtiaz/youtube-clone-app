import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
const VideoItem = (props) => {
  var { video, onVideoSelect } = props;
  return (
    
      <Grid item xs={12}>
        <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick = {()=> onVideoSelect(video)}>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt="thumbnail"
            width = "50%"
            height = "100%"
            style={{ marginRight: "20px" }}
          />
          <Typography variant="subtitle1">
            <b>{video.snippet.title}</b>
          </Typography>
        </Paper>
      </Grid>
   
  );
};

export default VideoItem;
