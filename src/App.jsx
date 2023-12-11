import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Skeleton,
  Slider,
  Stack,
  Typography
} from '@mui/material';
import { ThumbDown, ThumbUp } from '@mui/icons-material';
import mltLogo from './assets/mlt-logo.png';
import './App.css';
import textConstants from './constants/text';

function App() {
  const [count, setCount] = useState(0);
  const [calculating, setCalculating] = useState(false);

  const [gender, setGender] = useState(0);
  const [age, setAge] = useState(15);
  const [cityZone, setCityZone] = useState(0);
  const [motherEducation, setMotherEducation] = useState(0);
  const [fatherEducation, setfatherEducation] = useState(0);
  const [educationalSupport, setEducationalSupport] = useState(0);
  const [privateClasses, setPrivateClasses] = useState(0);
  const [internetAccess, setInternetAccess] = useState(0);
  const [dating, setDating] = useState(0);
  const [freeTime, setFreeTime] = useState(0);
  const [friends, setFriends] = useState(0);
  const [alcoholWeek, setAlcoholWeek] = useState(1);
  const [alcoholWeekend, setAlcoholWeekend] = useState(1);

  function handlePredicitonButtonClick(e) {
    e.preventDefault();
  
    setCalculating(true);
  
    setTimeout(() => {
      setCalculating(false);
      setCount(count + 1);
    }, 1500);
  };

  const educationSliderMarks = [
    {label: 'e', value: 0},
    {label: 'm', value: 1},
    {label: 'r', value: 2},
    {label: 'y', value: 3},
    {label: 'u', value: 4},
  ];

  const qualitativeSliderMarks = [
    {label: '', value: 1},
    {label: '', value: 2},
    {label: '', value: 3},
    {label: '', value: 4},
    {label: '', value: 5},
  ];
  
  const ammounteSliderMarks = [
    {label: '', value: 1},
    {label: '', value: 2},
    {label: '', value: 3},
    {label: '', value: 4},
    {label: '', value: 5},
  ];

  return (
    <Container maxWidth="lg" sx={{ display: "flex", "flex-direction": "column" }}>
      <img src={mltLogo} alt="MLT Logo" id="logo" />
      <Divider sx={{ my: 5 }} />
      <Grid container spacing={8}>
        <Grid item xs={6} >
          <Stack direction="column" spacing={5}>
            <FormControl>
              <FormLabel id="gender-radio">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="gender-radio"
                defaultValue={gender}
                name="gender-radio"
                row
              >
                <FormControlLabel value="0" control={<Radio />} label="Female" />
                <FormControlLabel value="1" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
            <FormControlLabel
              label="Age (years)"
              labelPlacement="start"
              control={<Slider aria-label="age" valueLabelDisplay="on" step={1} min={15} max={25} defaultValue={age} />}
            />
            <FormControl>
              <FormLabel id="zone-radio">City zone</FormLabel>
              <RadioGroup
                aria-labelledby="zone-radio"
                defaultValue={cityZone}
                name="zone-radio"
                row
              >
                <FormControlLabel value="0" control={<Radio />} label="Urban" />
                <FormControlLabel value="1" control={<Radio />} label="Rural" />
              </RadioGroup>
            </FormControl>
            <FormControlLabel
              label="Mother education"
              labelPlacement="start"
              control={<Slider aria-label="med" valueLabelDisplay="on" label step={1} min={0} max={4} defaultValue={motherEducation} marks={educationSliderMarks} />}
            />
            <FormControlLabel
              label="Father education"
              labelPlacement="start"
              control={<Slider aria-label="fed" valueLabelDisplay="on" label step={1} min={0} max={4} defaultValue={fatherEducation} marks={educationSliderMarks} />}
            />
            <FormControl>
              <FormLabel id="edusup-radio">Has educational support</FormLabel>
              <RadioGroup
                aria-labelledby="edusup-radio"
                defaultValue={educationalSupport}
                name="edusup-radio"
                row
              >
                <FormControlLabel value="1" control={<Radio />} label="Yes" />
                <FormControlLabel value="0" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="classes-radio">Takes private classes</FormLabel>
              <RadioGroup
                aria-labelledby="classes-radio"
                defaultValue={privateClasses}
                name="classes-radio"
                row
              >
                <FormControlLabel value="1" control={<Radio />} label="Yes" />
                <FormControlLabel value="0" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="internet-radio">Has internet access</FormLabel>
              <RadioGroup
                aria-labelledby="internet-radio"
                defaultValue={internetAccess}
                name="internet-radio"
                row
              >
                <FormControlLabel value="1" control={<Radio />} label="Yes" />
                <FormControlLabel value="0" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="dating-radio">Is in a relationship</FormLabel>
              <RadioGroup
                aria-labelledby="dating-radio"
                defaultValue={dating}
                name="dating-radio"
                row
              >
                <FormControlLabel value="1" control={<Radio />} label="Yes" />
                <FormControlLabel value="0" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <FormControlLabel
              label="Free time quality"
              labelPlacement="start"
              control={<Slider aria-label="freetime" valueLabelDisplay="on" label step={1} min={0} max={4} defaultValue={freeTime} marks={qualitativeSliderMarks} />}
            />
            <FormControlLabel
              label="Social interaction (friends)"
              labelPlacement="start"
              control={<Slider aria-label="friends" valueLabelDisplay="on" label step={1} min={0} max={4} defaultValue={friends} marks={qualitativeSliderMarks} />}
            />
            <FormControlLabel
              label="Alcohol consumption during the week"
              labelPlacement="start"
              control={<Slider aria-label="alcohol1" valueLabelDisplay="on" label step={1} min={1} max={5} defaultValue={alcoholWeek} marks={ammounteSliderMarks} />}
            />
            <FormControlLabel
              label="Alcohol consumption during the weekend"
              labelPlacement="start"
              control={<Slider aria-label="alcohol2" valueLabelDisplay="on" label step={1} min={1} max={5} defaultValue={alcoholWeekend} marks={ammounteSliderMarks} />}
            />
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
