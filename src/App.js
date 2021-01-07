import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import Searchbar from "./components/Searchbar/Searchbar";
import VideoList from "./components/VideoList/VideoList";
import VideoDetail from "./components/VideoDetail/VideoDetail";

class App extends Component {
  state = {
    videos : [],
    selectedVideo : null
  }
  componentDidMount = () => {
    this.handleSubmit("pdf generation with react and node")
  };
  
  handleSubmit = async (searchTerm) =>{
   const response =  await youtube.get('search', {
    params : {
      //same as writing part = snippet as query string at the end of base url
      part: 'snippet',
      maxResults: 5,
      // key: 'AIzaSyCQDLt8AQ0YmTbqVKEhKSKwCDphSNkfMYI',
      key: 'AIzaSyD4XvZ7yLgMDtBHXraX82KZ42QKtpMMLm0',
      q: searchTerm
  }})
   this.setState({
     videos:response.data.items,
     selectedVideo: response.data.items[0]
    })
  }
  onVideoSelect = (video) => {
this.setState({
  selectedVideo: video
})
  }
  render() {
    var {selectedVideo,videos} = this.state
    return (
     
        <Grid container spacing={10} justify="center">
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <Searchbar onFormSubmit = {this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video = {selectedVideo} />
              </Grid>
              <Grid item xs={4}>
              <VideoList videos = {videos} onVideoSelect = {this.onVideoSelect}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    
    );
  }
}

export default App;
