import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import HackathonSelector from './HackathonSelector';
import Tags from "../ProfileEdit/Tags";
import axios from 'axios';
import querystring from 'querystring';
import SERVER_URL from '../../utils/constants';

import Results from './Results'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    backgroundColor: "#fff",
    margin: "0 auto",
    borderRadius: "20px",
    padding: "2% 0"
  },
  heading:{
    marginLeft: "25px"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Want to team up for a Hackathon ?', 'Specify Similary Check options'];
}



export default function SearchBar() {
  const [hackFilter, setHackFilter] = React.useState("yes");
  const [stackFilter,setStackFilter] = React.useState("yes");
  const [reqStack,setReqStack] = React.useState([]);

  const [results, setResults] = React.useState([]);
  const [loaded, setLoaded] = React.useState('inactive');

  function changeHackFilter(e){
      setHackFilter(e.target.value);
  }
  function changeStackFilter(e){
    setStackFilter(e.target.value);
}

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (<div>
                <RadioGroup aria-label="Hack-Filter" name="Hack-Filter" value={hackFilter} onChange={changeHackFilter}>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <HackathonSelector disable={hackFilter==="no"?true:false} hackChoice={hackChoice} setHackChoice={setHackChoice}/>
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </div>);
      case 1:
        return (<div>
          <RadioGroup aria-label="Stack-Filter" name="Stack-Filter" value={stackFilter} onChange={changeStackFilter}>
            <FormControlLabel value="yes" control={<Radio />} label="Similar to my own Tech Stack" />
            <FormControlLabel value="no" control={<Radio />} label="Specify a Tech Stack" />
            <Tags tags={reqStack} setTags={setReqStack} disable={stackFilter==="yes"?true:false}  />
          </RadioGroup>
        </div>);
      default:
        return 'Unknown step';
    }
  }

  

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [hackChoice, setHackChoice] = React.useState({name:""});
  const [resultMessage,setResultMessage] = React.useState("");
 

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep === 1)
      getResults();
  };

  async function getResults(){
    setLoaded('loading');
    var hackathon = {};
    if(hackFilter === 'yes')
    {
      hackathon = hackChoice;
      console.log(hackathon);
    }
    const res = await axios.post(`${SERVER_URL}/similarusers`, querystring.stringify({data:JSON.stringify(hackathon), techStack:reqStack, stackFilter: stackFilter}), {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      credentials: 'include',
      withCredentials: true
    });
    setResults(res.data);
    if(res.data.length===0){
      setResultMessage("No Results Found");
    }
    setLoaded('loaded')
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setResultMessage("");
  };

  return (
    <div className={classes.root + " connect-user-container"}>
      <h1 className={classes.heading}>Connect To A User</h1>
      <Stepper style={{margin:"auto"}} activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Search' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper style={{width:"80%", margin:"auto"}} square elevation={0} className={classes.resetContainer}>
          <Typography >{loaded==='loading'?"Fetching Results ...":""} </Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
      <Results resultMessage={resultMessage} loaded={loaded} results={results}/>
    </div>
  );
}