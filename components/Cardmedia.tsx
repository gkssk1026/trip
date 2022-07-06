import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MediaCard() {
  return (
    <>
      <>
        <Card sx={{ maxWidth: 345 }}>
          <Typography gutterBottom variant="h5" component="div">
            제주도
          </Typography>
          <Typography variant="body2" color="text.secondary">
            3,150여 개의 여행상품
          </Typography>
          <CardMedia
            component="img"
            height="140"
            image="img/jeju.jpg"
            alt="jeju"
          />
          <CardContent></CardContent>
          <CardActions>
            <Button size="small">둘러보기</Button>
          </CardActions>
        </Card>
      </>
      <CardMedia />
    </>
  );
}
