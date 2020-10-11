import React from 'react';

import {
  Button,
  Hidden,
  IconButton,
  List,
  Typography,
} from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SubjectIcon from '@material-ui/icons/Subject';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ListItem from '@material-ui/core/ListItem';
import SendIcon from '@material-ui/icons/Send';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import TwittBlock from './TwittBlock';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: -10,
    },
    navItem: {
      cursor: 'pointer',
    },
    button: {
      borderRadius: 9999,
      color: 'black',
      padding: 10,

      '&:hover': {
        color: theme.palette.primary.main,
      },

      '& svg': {
        width: 30,
        height: '1.75rem',
      },
      '& p': {
        textTransform: 'none',
        fontWeight: 800,
        fontSize: 20,
      },
    },
    buttonTwitt: {
      color: '#fff',
      '&:focus': {
        color: '#fff',
      },
    },
    buttonActive: {
      color: theme.palette.primary.main,
    },
    modal: {
      border: '0',
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'center',
      paddingTop: '5%',
    },
    paper: {
      maxWidth: '80vw',
      maxHeight: '90vh',
      minWidth: 600,
      borderRadius: 15,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const Navigation = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <List
        className={classes.root}
        component="nav"
        aria-label="main mailbox folders"
      >
        <ListItem className={classes.navItem}>
          <Hidden mdUp>
            <IconButton>
              <HomeIcon color="secondary" className={classes.button} />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Button
              className={classes.button}
              color="secondary"
              startIcon={<HomeIcon />}
            >
              <Typography component="p">Home</Typography>
            </Button>
          </Hidden>
        </ListItem>
        <ListItem className={classes.navItem}>
          <Hidden mdUp>
            <IconButton>
              <SearchIcon className={classes.button} />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Button className={classes.button} startIcon={<SearchIcon />}>
              <Typography component="p">Поиск</Typography>
            </Button>
          </Hidden>
        </ListItem>
        <ListItem className={classes.navItem}>
          <Hidden mdUp>
            <IconButton>
              <NotificationsIcon className={classes.button} />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Button
              className={classes.button}
              startIcon={<NotificationsIcon />}
            >
              <Typography component="p">Оповещение</Typography>
            </Button>
          </Hidden>
        </ListItem>
        <ListItem className={classes.navItem}>
          <Hidden mdUp>
            <IconButton>
              <MailOutlineIcon className={classes.button} />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Button className={classes.button} startIcon={<MailOutlineIcon />}>
              <Typography component="p">Сообщения</Typography>
            </Button>
          </Hidden>
        </ListItem>
        <ListItem className={classes.navItem}>
          <Hidden mdUp>
            <IconButton>
              <BookmarkBorderIcon className={classes.button} />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Button
              className={classes.button}
              startIcon={<BookmarkBorderIcon />}
            >
              <Typography component="p">Закладки</Typography>
            </Button>
          </Hidden>
        </ListItem>
        <ListItem className={classes.navItem}>
          <Hidden mdUp>
            <IconButton>
              <SubjectIcon className={classes.button} />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Button className={classes.button} startIcon={<SubjectIcon />}>
              <Typography component="p">Список</Typography>
            </Button>
          </Hidden>
        </ListItem>
        <ListItem className={classes.navItem}>
          <Hidden mdUp>
            <IconButton>
              <PeopleAltIcon className={classes.button} />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Button className={classes.button} startIcon={<PeopleAltIcon />}>
              <Typography component="p">Люди</Typography>
            </Button>
          </Hidden>
        </ListItem>
        <Hidden smDown>
          <Button
            className={`${classes.button} ${classes.buttonTwitt}`}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleOpen}
          >
            Твитнуть
          </Button>
        </Hidden>
        <Hidden mdUp>
          <ListItem className={classes.navItem}>
            <IconButton onClick={handleOpen}>
              <SendIcon color="secondary" />
            </IconButton>
          </ListItem>
        </Hidden>
      </List>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <IconButton onClick={handleClose}>
              <CloseIcon color="primary" />
            </IconButton>
            <TwittBlock />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Navigation;
