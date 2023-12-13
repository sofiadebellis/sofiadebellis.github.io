import * as React from 'react';
import {
  styled,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Stack
} from '@mui/material';
import NavBar from './Nav';
import Footer from './Footer';
import unsw from '../assets/UNSW.png'
import ursulas from '../assets/ursuals.png'
import usyd from '../assets/usyd.png'
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

const Experience = styled('div')({
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

const Parent = styled('div')({
  flexDirection: 'row',
  maxWidth: '500px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  flexWrap: 'wrap',
  zIndex: 1
});

const Title = styled('div')({
  fontSize: '30px',
  flexDirection: 'row',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  flexWrap: 'wrap',
  zIndex: 1
})

const StyledListItem = styled(ListItem)({
  '&:hover': {
    borderStyle: 'solid',
    borderColor: '#f4f4f4',
    borderRadius: '15px',
    cursor: 'pointer',
    transform: 'scale(1.05)',
  }
})

const educationExperience = [
  {school: unsw, education: 'Bachelor of Computer Science Co-op', term: 'UNSW Sydney (2022 - 2024)'},
  {school: usyd, education: 'National Computer Science Summer School - Embedded Stream (Returner)', term: 'University of Sydney (Jan 2021)'},
  {school: usyd, education: 'High School Fellowship Program - INFO1110', term: 'University of Sydney (Jan 2020 - July 2020)'},
  {school: usyd, education: 'National Computer Science Summer School - Web Stream', term: 'University of Sydney (Jan 2020)'},
  {school: unsw, education: 'Engineering World Health Summer Intensive', term: 'UNSW Sydney (Jan 2022)'},
  {school: ursulas, education: 'High School Certificate', term: 'St Ursula\'s College Kingsgrove (2016 - 2021)'}
];

export default function EducationPg() {
  const particlesInit = React.useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = React.useCallback(async container => {
    await console.log(container);
  }, []);

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
      <Experience>
        <Parent>
          <Title>Experience</Title>
        </Parent>
        <br/>
        <Parent>
          <List>
            <Stack spacing={3}>
            {educationExperience.map((item) => (
             <StyledListItem>
                <ListItemAvatar>
                  <Avatar src={item.school}/>
                </ListItemAvatar>
                <ListItemText
                  primary={item.education}
                  secondary={item.term}
              />
              </StyledListItem>
            ))}
            </Stack>
          </List>
        </Parent>
        

      </Experience>
      <Footer/>
    </>
  )
}
