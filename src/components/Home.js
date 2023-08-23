import * as React from 'react';
import { styled } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot 
} from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import NavBar from './Nav';
import Footer from './Footer';
import profilePhoto from '../assets/profile.png'
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';


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
  zIndex: 1,
});

const StyledTimelineContent = styled(TimelineContent)({
  fontFamily: '"Poppins", "Arial", "Helvetica Neue", sans-serif',
  zIndex: 1,
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
  zIndex: 1,
});

const Child = styled('div')({
  width: '50%',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
})

export default function Homepg() {
  const particlesInit = React.useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = React.useCallback(async container => {
    await console.log(container);
  }, []);

  const navigate = useNavigate();

  return (
    <>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            position: 'fixed',
            width: '100%',
            zIndex: -1,
            background: {
              color: '#ffffff'
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#D3A528',
              },
              links: {
                color: '#D3A528',
                distance: 120,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 65,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
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
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined"/>
                 <TimelineConnector />
              </TimelineSeparator>
              <StyledTimelineContent onClick={() => navigate('/experience')}>Experience</StyledTimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined"/>
                 <TimelineConnector />
              </TimelineSeparator>
              <StyledTimelineContent onClick={() => navigate('/education')}>Education</StyledTimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined"/>
                 <TimelineConnector />
              </TimelineSeparator>
              <StyledTimelineContent onClick={() => navigate('/skills')}>Skills</StyledTimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined"/>
                 <TimelineConnector />
              </TimelineSeparator>
              <StyledTimelineContent onClick={() => navigate('/volunteering')}>Volunteering</StyledTimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined"/>
              </TimelineSeparator>
              <StyledTimelineContent onClick={() => navigate('/honors-and-awards')}>Honors & Awards</StyledTimelineContent>
            </TimelineItem>
        </Timeline>
      </Home>
      <Footer/>
    </>
  )
}