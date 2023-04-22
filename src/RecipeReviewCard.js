import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';




export default function RecipeReviewCard() {
 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Dog 1"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.dog.ceo/breeds/eskimo/n02109961_5554.jpg"
        alt="dog1"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Please like me
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       
      </CardActions>
    </Card>
  );
}