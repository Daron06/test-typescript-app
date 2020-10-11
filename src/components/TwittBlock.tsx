import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Avatar, Button, Grid, IconButton, InputBase } from '@material-ui/core';

import GifIcon from '@material-ui/icons/Gif';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    circle: { position: 'relative', paddingRight: 10 },
    circlePrimal: {
      color: theme.palette.primary.main,
      position: 'relative',
      zIndex: 2,
    },
    circleSecondary: {
      color: 'gray',
      opacity: '.2',
      position: 'absolute',
      zIndex: 1,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    field: { marginTop: 15, marginLeft: 10, paddingBottom: 15 },
    fieldBlock: {
      marginBottom: 20,

      paddingLeft: 15,
      maxWidth: '100%',
      minWidth: 550,
    },
    textField: {
      marginBottom: 20,
      paddingTop: 15,
      border: 0,
    },
    popup: {
      paddingBottom: 10,
      borderBottom: 'solid 2px #E6ECF0',
    },
    popupItem: {
      color: theme.palette.primary.main,
      textTransform: 'none',
      fontWeight: 900,
      borderRadius: 16,
    },
    avatar: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginTop: 5,
    },
    button: {
      color: '#fff',
      borderRadius: 9999,
    },
  })
);

const TwittBlock = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const MAX_SYMBOLS = 280;
  let calcInterest = Math.round((value.length / MAX_SYMBOLS) * 100);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Grid className={classes.field} container direction="row">
      <Grid item>
        <Avatar
          alt="avatar"
          aria-label="recipe"
          className={classes.avatar}
          src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80"
        />
      </Grid>
      <Grid item className={classes.fieldBlock}>
        <InputBase
          className={classes.textField}
          value={value}
          onChange={handleChange}
          fullWidth
          inputProps={{ 'aria-label': 'naked' }}
          multiline
          placeholder="What's happening?"
          onFocus={() => setVisiblePopup(true)}
        />
        {visiblePopup && (
          <Grid className={classes.popup}>
            <Button className={classes.popupItem} startIcon={<PublicIcon />}>
              Everyone can reply
            </Button>
          </Grid>
        )}
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="space-between"
        >
          <Grid item>
            <IconButton>
              <CropOriginalIcon color="primary" />
            </IconButton>
            <IconButton>
              <GifIcon color="primary" />
            </IconButton>
            <IconButton>
              <EqualizerIcon color="primary" />
            </IconButton>
            <IconButton>
              <SentimentSatisfiedIcon color="primary" />
            </IconButton>
            <IconButton>
              <CalendarTodayIcon color="primary" />
            </IconButton>
          </Grid>

          <Grid item>
            <Grid container alignItems="center" direction="row">
              {value.length > 0 && (
                <Grid item className={classes.circle}>
                  <CircularProgress
                    size={30}
                    className={classes.circlePrimal}
                    variant="static"
                    value={calcInterest >= 100 ? 100 : calcInterest}
                    style={calcInterest >= 100 ? { color: 'red' } : undefined}
                  />
                  <CircularProgress
                    size={30}
                    className={classes.circleSecondary}
                    variant="static"
                    value={100}
                  />
                </Grid>
              )}
              <Grid item>
                <Button
                  className={classes.button}
                  disabled={value.length > MAX_SYMBOLS}
                  color="primary"
                  variant="contained"
                >
                  твитнуть
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default TwittBlock;
