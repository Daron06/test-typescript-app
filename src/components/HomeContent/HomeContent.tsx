import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import HomeItems from './HomeItems';
import TwittBlock from '../TwittBlock';

import { useDispatch, useSelector } from 'react-redux';
import { selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRight: 'solid 1px #E6ECF0',
      borderLeft: 'solid 1px #E6ECF0',
    },
    title: {
      padding: 15,
    },

    contentBlock: {
      borderBottom: 'solid 1px #E6ECF0',
    },
    backgroundBorder: {
      backgroundColor: '#E6ECF0',
      height: 13,
    },
  })
);
const HomeContent: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  console.log(tweets);
  {
    if (tweets.length > 0) {
      tweets.map((tweet) => console.log(tweet));
    }
  }
  React.useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <div className={classes.contentBlock}>
        <Typography className={classes.title} variant="h5">
          Главная
        </Typography>
      </div>
      <TwittBlock />
      <div className={classes.backgroundBorder}></div>
      <Grid item>{[tweets.map((tweet) => <div>{tweet.text}</div>)]}</Grid>
    </div>
  );
};

export default HomeContent;
