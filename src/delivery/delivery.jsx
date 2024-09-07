import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './delivery.css'

const steps = ['Delivery details', 'Payment method', 'Order'];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const open=()=>{
    alert('order had been placed succefully')
  }

  // Render step-specific content
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        /*delivery details*/
        return <Typography>
          <div>
            <h2>Address Details</h2>
            <form className='forms'>
              <label>Country</label>
              <br></br>
              <input className='textbox' type='text' placeholder='country' required/>
              <br></br>
              <label>State</label>
              <br></br>
              <input className='textbox' placeholder='state'  type='text' required/>
              <br></br>
              <label>First Name</label>
              <br></br>
              <input className='textbox' placeholder='First Name' type='text' required/>
              <br></br>
              <label>Last Name</label>
              <br></br>
              <input className='textbox' placeholder='Last Name' type='text' required/>
              <br></br>
              <label>Mobile Number</label>
              <br></br>
              <input className='textbox' placeholder='Mobile Number' type='text' required/>
              <br></br>
              <label>Pincode</label>
              <br></br>
              <input className='textbox' placeholder='Pincode' type='text' required/>
              <br></br>
              <label>Flat, House no., Building, Company, Apartment</label>
              <br></br>
              <input  className='textbox' placeholder='Flat, House no., Building, Company, Apartment' required type='text'/>
              <br></br>
              <label>Area, Street, Sector, City</label>
              <br></br>
              <input className='textbox' placeholder='Area, Street, Sector, City<' type='text' required/>
              <br></br>
              <label>Landmark</label>
              <br></br>
              <input className='textbox' placeholder='Landmark' type='text'  onClick={handleNext} required/>
              <br></br>
              <br></br>
              <input  className='submit'  onClick={handleNext} type='submit'/>
            </form>
          </div>

        </Typography>;
      case 1:
        /*payment method*/
        return <Typography>

          <div >
            <h2>Payment Method</h2>
            <div className='payment'>
                <div className='radio' onClick={handleNext}>
                  <input onClick={open}type='radio' />
                </div>
                <div>
                  <p>Cash on Delivery/Pay on Delivery</p>
                </div>
            </div>
          </div>
        </Typography>;
      case 2:
        return <Typography>
          <h2>order had been placed succefully </h2>
        </Typography>;
      default:
        return null;
    }
  };

  return (
    <div className='s1'>
      <Box classname='header'>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* Render the content based on the active step */}
              {renderStepContent(activeStep)}

              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                
                
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </div>
  );
}
