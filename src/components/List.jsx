import React, { useEffect, useState } from "react";
import Video from "./Video";
import youtube from "../api/youtube";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    width: 200,
    maxHeight: 250,
    height: 200,
  },
  media: {
    height: 140,
  },
});
const List = props => {
  const classes = useStyles();

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSlectedVideo] = useState([]);
  const List = videos.map(video => {
    return (
      <Grid
        item
        key={video.id.videoId}
        md={3}
        sx={12}
        onClick={() => setSlectedVideo(video)}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={video.snippet.thumbnails.high.url}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {video.snippet.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });
  console.log(selectedVideo);
  useEffect(() => {
    const search = async () => {
      const key = "AIzaSyD0jOvl2s9pOmgPESB8bD4YCeYHpKft4yw";
      let res = await youtube.get("/search", {
        params: {
          q: props.term,
          part: "snippet",
          type: "video",
          maxResults: 15,
          key: key,
        },
      });
      setVideos(res.data.items);
    };
    search();
  }, [props.term]);
  console.log(selectedVideo);
  let list = "";

  if (selectedVideo.length === 0) {
    list = (
      <Grid container direction="row" style={{ marginTop: "20px" }}>
        <Grid item md={1} sm={1}></Grid>
        <Grid container item md={10} sm={10} spacing={2} xs={12}>
          {List}
        </Grid>
        <Grid item md={1} sm={1}></Grid>
      </Grid>
    );
  } else {
    list = (
      <Grid container direction="row" style={{ marginTop: "20px" }}>
        <Grid item md={1} sm={1}></Grid>
        <Grid container item md={11} sm={10} spacing={2} xs={12}>
          <Grid item md={8}>
            <Video video={selectedVideo}></Video>
          </Grid>
          <Grid item container direction="column" spacing={2} md={3}>
            {List}
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return <>{list}</>;
};

export default List;
