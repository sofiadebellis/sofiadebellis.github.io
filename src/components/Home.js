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
import Footer from './Footer';

const Home = styled('div')({
  backgroundColor: 'white',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100vw',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  fontFamily: '"Poppins", "Arial", "Helvetica Neue", sans-serif',
  color: '#333333',
});

const StyledTimelineItem = styled(TimelineItem)({
  '&:hover': {
    cursor: 'pointer',
    color: '#D3A528',
  }
});

const experience = [
  {
    label: 'Experience',
  },
  {
    label: 'Education',
  },
  {
    label: 'Skills'
  },
  {
    label: 'Volunteering',
  },
  {
    label: 'Honors & awards'
  }
];

export default function Homepg () {

  return (
    <>
      <NavBar/>
      <Home>
        <Timeline position="alternate">
          {experience.map((e, index) => (
            <StyledTimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined"/>
                { index !== experience.length - 1 ? <TimelineConnector /> : <></>}
              </TimelineSeparator>
              <TimelineContent>{e.label}</TimelineContent>
            </StyledTimelineItem>
          ))}
        </Timeline>
      </Home>
      <Footer/>
    </>
  )
}