import * as React from 'react';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
import NavBar from './Nav';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Home = styled('div')({
  backgroundColor: 'white',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100vw',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  fontFamily: '"Poppins", "Arial", "Helvetica Neue", sans-serif',
  color: '#333333',
  // margin: '100px'
});

const DarkBtn = styled(Button)({
  marginTop: '35px',
  background: '#333333',
  border: 'none',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '20px',
  paddingRight: '20px',
  borderRadius: '50px',
  color: '#white',
  width: '100%',
})

const LightBtn = styled(DarkBtn)({
  background: 'none',
  color: '#333333',
  border: '1px solid #333333',
  borderRadius: '50px',
  width: '100px',
  '&:hover': {
    backgroundColor: '#333333',
    border: '1px solid white',
    color: 'white',
  }
});

const experience = [
  {
    label: 'Select campaign settings',
    year: '2022- C',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    year: '2022- C',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    year: '2022- C',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function Homepg () {

  return (
    <>
      <NavBar/>
      <Home>
        <Timeline position="alternate">
          {experience.map((e, index) => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined"/>
                { index !== experience.length - 1 ? <TimelineConnector /> : <></>}
              </TimelineSeparator>
              <TimelineContent>{e.label}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Home>
    </>
  )
}