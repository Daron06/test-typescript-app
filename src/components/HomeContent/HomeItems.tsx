import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import RepeatIcon from '@material-ui/icons/Repeat';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgb(245, 248, 250)',
      },
    },
    rootSecondary: {
      paddingTop: 13,
      borderBottom: '1px #E6ECF0 solid',
      flexWrap: 'nowrap',
    },
    rootContent: {
      borderRight: '15px solid transparent',
      borderLeft: '15px solid transparent',
    },

    avatar: {
      marginLeft: 10,

      width: theme.spacing(6),
      height: theme.spacing(6),
    },

    buttonGroup: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    avatarMargin: {},
  })
);

export default function HomeItems() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid className={classes.rootSecondary} container>
        <Grid className={classes.avatarMargin} item>
          <Avatar
            alt="avatar"
            aria-label="recipe"
            className={classes.avatar}
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </Grid>
        <Grid item className={classes.rootContent}>
          <Typography>
            <b>Название группы </b>
            <span>@тэг группы</span>
            <span> * 1m</span>
          </Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions className={classes.buttonGroup} disableSpacing>
            <div>
              <IconButton aria-label="messages">
                <ChatBubbleOutlineIcon />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton aria-label="repeat">
                <RepeatIcon />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton aria-label="share">
                <SystemUpdateAltIcon />
              </IconButton>
              <span>1</span>
            </div>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
