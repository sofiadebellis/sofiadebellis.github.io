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

export default function AwardsPg() {
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
          <Title>Honours & Awards</Title>
        </Parent>
        <br/>
        <Parent>
          <List>
            <Stack spacing={3}>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={unsw}/>
                </ListItemAvatar>
                <ListItemText
                  primary="UNSW Co-op Scholarship"
                  secondary="UNSW Sydney (2022 - 2024)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={usyd}/>
                </ListItemAvatar>
                <ListItemText
                  primary="7NEWS young Achiever Awards"
                  secondary="University of Sydney (2021)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={usyd}/>
                </ListItemAvatar>
                <ListItemText
                  primary="ADF Future Innovators Award"
                  secondary="University of Sydney (2021)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={usyd}/>
                </ListItemAvatar>
                <ListItemText
                  primary="Amaroo Award"
                  secondary="University of Sydney (2021)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={unsw}/>
                </ListItemAvatar>
                <ListItemText
                  primary="Westpac Youth Impact Challenge"
                  secondary="UNSW Sydney (2021)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={ursulas}/>
                </ListItemAvatar>
                <ListItemText
                  primary="Young Women in Public Affairs"
                  secondary="St Ursula's College Kingsgrove (2010 & 2021)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={ursulas}/>
                </ListItemAvatar>
                <ListItemText
                  primary="Bean Awards - STEM Category"
                  secondary="St Ursula's College Kingsgrove (2021)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={ursulas}/>
                </ListItemAvatar>
                <ListItemText
                  primary="Lions Youth of the Year"
                  secondary="St Ursula's College Kingsgrove (2021)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={ursulas}/>
                </ListItemAvatar>
                <ListItemText
                  primary="Platinum Community service"
                  secondary="St Ursula's College Kingsgrove (2021)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={ursulas}/>
                </ListItemAvatar>
                <ListItemText
                  primary="Bayside Council Student of Excellence"
                  secondary="St Ursula's College Kingsgrove (2019)"
                />
              </StyledListItem>
            </Stack>
          </List>
        </Parent>
        

      </Experience>
      <Footer/>
    </>
  )
}