import * as React from 'react';
import { styled } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import NavBar from './Nav';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Footer from './Footer';
import profilePhoto from '../assets/profile.png'


const Home = styled('div')({
  backgroundColor: 'white',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100vw',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  fontFamily: '"Poppins", "Arial", "Helvetica Neue", sans-serif',
  color: '#333333',
  marginTop: '50px',
});

const StyledTimelineContent = styled(TimelineContent)({
  fontFamily: '"Poppins", "Arial", "Helvetica Neue", sans-serif',
  color: '#333333',
  '&:hover': {
    cursor: 'pointer',
    color: '#D3A528',
  }
})

const Parent = styled('div')({
  flexDirection: 'row',
  maxWidth: '800px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  flexWrap: 'wrap',
});

const Child = styled('div')({
  width: '50%',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center'
})


const experience = [
  { label: 'Experience' },
  { label: 'Education' },
  { label: 'Skills' },
  { label: 'Volunteering' },
  { label: 'Honors & awards' }
];

export default function Homepg () {

  return (
    <>
      <NavBar/>
      <Home>
        <Parent>
            <Child>
              <img alt="profile img" src={profilePhoto}></img>
            </Child>
            <Child>
              Hi! I’m Sofia! A second-year UNSW Computer Science Co-op scholar with a keen interest in computer science, front end development and UI/UX. 
            </Child>
        </Parent>
        <Timeline position="alternate">
          {experience.map((e, index) => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined"/>
                { index !== experience.length - 1 ? <TimelineConnector /> : <></>}
              </TimelineSeparator>
              <StyledTimelineContent>{e.label}</StyledTimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Home>
      <Footer/>
    </>
  )
}