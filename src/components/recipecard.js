// RecipeReviewCard.js

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeReviewCard = ({ image, title, content }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Card image"
        sx={{ height: '300px', width: '100%', objectFit: 'cover' }}
      />
      <CardContent className='bg-customSkin flex gap-10'>
        <h2 className='text-xl text-customBlue flex items-center justify-center text-center'>{title}</h2>
        <CardActions disableSpacing className='bg-customSkin'>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className='bg-customSkin text-customBlue'>
          {content.map((paragraph, index) => (
            <Typography paragraph key={index}>{paragraph}</Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RecipeReviewCard;
