/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function MultiActionAreaCard({ type, img, path, texts }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {texts}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={path} style={{ textDecoration: "none" }}>
          <Button size="small" color="primary">
            Click Here
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
