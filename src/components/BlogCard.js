import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { AuthContext } from "../contexts/AuthContext";
import {useFetch} from "../helpers/functions"

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  blogContainer: {
    backgroundImage: `url(${"https://picsum.photos/1200/900"})`,
    backgroundSize: "100% 100%",
    height: "100vh",
  },
  link: {
    textDecoration: "none",
  },
});

export default function BlogCard() {
  const { currentUser, setBlogCard } = useContext(AuthContext);
  const { blogList } = useFetch();
  const classes = useStyles();

  const handleBlogDetail = (item) => {
    setBlogCard(item);
    console.log(item);
  };

  return (
    <Grid container spacing={0} className={classes.blogContainer}>
      {blogList.map((item) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <div style={{ padding: "40px" }}>
              <Card key={item.id}>
                <CardHeader title={item.title} subheader={item.id} />
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt={item.image}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.content?.length < 200
                      ? item.content
                      : item.content.slice(0, 200) + "..."}
                  </Typography>
                </CardContent>
                <Link
                  className={classes.link}
                  to={currentUser ? `/blog/${item.id}` : "/login"}
                >
                  <Button
                    variant="contained"
                    onClick={() => handleBlogDetail(item)}
                  >
                    Read More
                  </Button>
                </Link>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}
