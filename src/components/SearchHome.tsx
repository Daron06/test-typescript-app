import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Grid, IconButton, Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    searchRoot: {
      backgroundColor: theme.palette.grey[500],
      marginTop: 15,
      borderRadius: 50,
    },
    search: {
      position: 'relative',

      backgroundColor: 'rgb(230, 236, 240)',
      border: '1px solid transparent',
      borderRadius: 16,

      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',

      '&:focus-within': {
        backgroundColor: '#fff',
        border: '1px solid rgb(29, 161, 242)',
        '& svg': {
          color: theme.palette.primary.main,
        },
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& svg': {
        color: theme.palette.grey[500],
      },
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
    trends: {
      marginTop: 20,

      borderRadius: 16,
      backgroundColor: '#F5F8FA',
      '&>div': {
        border: '10px solid transparent',
      },
    },
    trendsTitle: {
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
      color: 'rgb(20, 23, 26)',
      fontWeight: 800,
      fontSize: 19,
    },
    trendsItem: {
      backgroundColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: '#EDF0F2',
      },
    },
    more: {
      borderBottomRightRadius: 16,
      borderBottomLeftRadius: 16,

      cursor: 'pointer',
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: '#EDF0F2',
      },
    },
    small: {
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
      color: 'rgb(101, 119, 134)',
      fontWeight: 400,
      fontSize: 13,
    },
    normal: {
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
      color: 'rgb(20, 23, 26)',
      fontWeight: 'bold',
      fontSize: 15,
    },
  })
);

const InputSearchHome = () => {
  const classes = useStyles();
  return (
    <div className={classes.searchRoot}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          fullWidth
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </div>
  );
};
const SearchHome = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputSearchHome />
      <div className={classes.trends}>
        <Grid
          justify="space-between"
          alignItems="center"
          container
          direction="row"
        >
          <Grid item>
            <Typography className={classes.trendsTitle}>
              Trends for you
            </Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <SettingsIcon color="primary" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container direction="column" className={classes.trendsItem}>
          <Grid
            justify="space-between"
            alignItems="center"
            container
            direction="row"
          >
            <Typography className={classes.small}>Тренды России</Typography>
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
          </Grid>
          <Grid item className={classes.normal}>
            #ReactTheBest
          </Grid>
          <Grid item className={classes.small}>
            1.323 твита
          </Grid>
        </Grid>
        <Grid container direction="column" className={classes.trendsItem}>
          <Grid
            justify="space-between"
            alignItems="center"
            container
            direction="row"
          >
            <Typography className={classes.small}>Тренды России</Typography>
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
          </Grid>
          <Grid item className={classes.normal}>
            #Friendly Material ui
          </Grid>
          <Grid item className={classes.small}>
            1.100 твита
          </Grid>
        </Grid>
        <Grid item className={classes.more}>
          <Typography>Show more</Typography>
        </Grid>
      </div>
    </div>
  );
};

export default SearchHome;
