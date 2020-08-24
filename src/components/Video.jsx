import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const Video = props => {
  console.log(props.video);
  return (
    <div>
      <iframe
        title={props.video.snippet}
        width="500"
        height="315"
        src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Card style={{ width: "500px" }}>
        <CardContent>
          <Typography>{props.video.snippet.title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Video;
