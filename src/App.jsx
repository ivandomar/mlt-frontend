import { useState } from 'react';
import { Button, Container, Divider, Grid, Skeleton, Stack, Typography } from '@mui/material';
import { ThumbDown, ThumbUp } from '@mui/icons-material';
import mltLogo from './assets/mlt-logo.png';
import './App.css';
import textConstants from './constants/text';

function App() {
  const [count, setCount] = useState(0);
  const [calculating, setCalculating] = useState(false);

  function handlePredicitonButtonClick(e) {
    e.preventDefault();
  
    setCalculating(true);
  
    setTimeout(() => {
      setCalculating(false);
      setCount(count + 1);
    }, 1500);
  };

  return (
    <Container maxWidth="lg" sx={{ display: "flex", "flex-direction": "column" }}>
      <img src={mltLogo} alt="MLT Logo" id="logo" />
      <Divider sx={{ my: 3 }} />
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Stack direction="row" justifyContent="center">
            <a href="https://vitejs.dev" target="_blank">
              <img src={mltLogo} className="logo" alt="Vite logo" />
            </a>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            {
              calculating ? (
                <>
                  <Skeleton variant="rounded" width="60%" height={400} />
                  <Skeleton variant="text" width="90%" sx={{ fontSize: '2rem' }} />
                </>
              ) : count ? 
                count % 2 ? (
                  <>
                    <ThumbUp color="success" sx={{ fontSize: 400 }} />
                    <Typography variant="body1" align="center">
                      Such data would lead to a successful academic performance!
                    </Typography>
                  </>
                ) : (
                  <>
                    <ThumbDown color="warning" sx={{ fontSize: 400 }} />
                    <Typography variant="body1" align="center">
                      With those values, the student probably would have a faulting academic performance...
                    </Typography>
                  </>
                ) : (
                <Typography variant="h4" component="h1">
                  Fill in the dimensions and press <b>{textConstants.predictionButtonLabel}</b> to enroll your data for analysis
                </Typography>
              ) 
            }
            <Divider sx={{ my: 4 }} />
            <Button variant="contained" size="large" fullWidth onClick={handlePredicitonButtonClick} disabled={calculating}>
              {textConstants.predictionButtonLabel}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
