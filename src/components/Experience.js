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
import optiver from '../assets/Optiver.jpg'
import atlassian from '../assets/Atlassian.png'
import unsw from '../assets/UNSW.png'
import rev from '../assets/rev.png'
import codecamp from '../assets/codecamp.png'
import connectedcode from '../assets/connectedcode.png'
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
});

const StyledListItem = styled(ListItem)({
  '&:hover': {
    borderStyle: 'solid',
    borderColor: '#f4f4f4',
    borderRadius: '15px',
    cursor: 'pointer',
    transform: 'scale(1.05)',
  }
});


const workExperience = [
  {company: atlassian, role: 'Fullstack Software Engineering Intern', term: 'Atlassian (Sep 2023 - Jan 2024)'},
  {company: unsw, role: 'Casual Academic and Course Admin', term: 'UNSW Sydney (May 2022 - Current)'},
  {company: optiver, role: 'Future Focus program', term: 'Optiver (Sep 2022)'},
  {company: rev, role: 'Fullstack Software Engineering Intern', term: 'Revolutionise Sport (Nov 2022 - Feb 2023)'},
  {company: unsw, role: 'Student Ambassador', term: 'UNSW Sydney (May 2022 - Current)'},
  {company: codecamp, role: 'Head Teacher', term: 'Code Camp (Aug 2019 - Sep 2023)'},
  {company: connectedcode, role: 'Tutor', term: 'ConnectEd Code (Mar 2022 - Current)'}
]

export default function ExperiencePg() {
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
            {workExperience.map((item) => (
             <StyledListItem>
                <ListItemAvatar>
                  <Avatar src={item.company}/>
                </ListItemAvatar>
                <ListItemText
                  primary={item.role}
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
