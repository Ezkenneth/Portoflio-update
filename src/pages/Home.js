import React from "react";

import HomeCard from "../components/HomeCard";
import SubCard from "../components/SubCard";
import BioCard from "../components/BioCard";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ListDivider from '../components/ListDivider';
import Typography from '@material-ui/core/Typography';

function Home() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}> 
            <HomeCard />
          </Grid>
          <Grid item xs={6}>
            <SubCard />
          </Grid>
          <Grid item xs={6}>
            <BioCard />
          </Grid>
          <Grid item xs={6}>
            <ListDivider />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">Languages</Typography>
                <hr />
              </Grid>
             
              <Grid item xs={12}>
                <Typography variant="li">HTML</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="li">CSS</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="li">JavaScript</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="li">Node.Js</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      
    </div>
  );
}

export default Home;
