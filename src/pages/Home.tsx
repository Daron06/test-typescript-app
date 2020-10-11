import React from 'react';
import { HomeContent, Navigation, SearchHome } from '../components';

import { Grid, Container, Hidden } from '@material-ui/core';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid container justify="space-between">
          <Grid item md={2} sm={1}>
            <Navigation />
          </Grid>
          <Grid item md={6} sm={11}>
            <HomeContent />
          </Grid>
          <Hidden smDown>
            <Grid item md={3}>
              <SearchHome />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
