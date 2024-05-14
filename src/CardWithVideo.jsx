import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import ReactPlayer from "react-player/lazy";
import { getDateToday } from './Helper';
import { useState } from 'react';
import { Collapse } from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandMoreContent from './ExpandMoreContent';

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

const CardWithVideo = ({
  title,
  videoURL,
  templeName = ''
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSharing = async () => {
    if (navigator.share) {
      try {
        await navigator
          .share({
            url: "https://psychic-funicular-5rp7p4xjq7436rv-3000.app.github.dev/",
            title: "Sanatan Darshan",
            text: "Watch live streaming of many sanatan temples with one single app. Stay blessed."
          })
          .then(() =>
            console.log("Hooray! Your content was shared to tha world")
          );
      } catch (error) {
        console.log(`Oops! I couldn't share to the world because: ${error}`);
      }
    } else {
      // fallback code
      console.log(
        "Web share is currently not supported on this browser. Please provide a callback"
      );
    }
  };

  return (
    <Card style={{ color: '#3e2200', marginBottom: '30px' }}>
      <ReactPlayer
        url={videoURL}
        loop={true}
        controls={true}
        width={"100%"}
        playbackRate={1}
        muted={false}
      // light={SomnathTemple}
      />

      <CardContent
        style={{ padding: '0' }}
      >
        <CardHeader
          titleTypographyProps={{ variant: 'h6' }}
          title={title}
          subheader={getDateToday()}
        />
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandCircleDownIcon fontSize='large' />

        </ExpandMore>
        <span
          style={{
            fontSize: '18px',
            margin: '0 20px 0 5px'
          }}
          onClick={handleExpandClick}
        >
          Click for more details
        </span>
        <IconButton
          aria-label="share"
          onClick={handleSharing}
        >
          <ShareIcon />
          <span style={{
            fontSize: '18px',
            margin: '0 0 0 5px'
          }}>Share</span>
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <ExpandMoreContent templeName={templeName} />
      </Collapse>
    </Card>
  );
}

export default CardWithVideo;
