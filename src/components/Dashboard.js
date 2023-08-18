import { React, useCallback } from 'react';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import Typewriter from 'typewriter-effect';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
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
  color: '#333333'
});

const TextContainer = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
  fontSize: '65px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  zIndex: 1,
});

const Heading = styled('div')({
  alignItems: 'center',
  fontWeight: '600',  
  zIndex: 1,

});

const CustomButton = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
  width: '210px',
  '&:hover': {
    backgroundColor: '#333333',
    border: '1px solid white',
    color: 'white',
  }
});

const Link = styled('a')({
  textDecoration: 'none',
});


export default function Dashboard () {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async container => {
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
              color: '#f8f9fd'
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
                opacity: 0.5,
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
                speed: 3,
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
                value: 0.4,
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
      <Home>
        <TextContainer>
          <Heading>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Hi! I\'m Sofia!')
                  .start();
              }}
              />
          </Heading>
          <Link href='/home'>
          <CustomButton>
            <LightBtn
              name="getStarted"
              id="getStarted"
              onClick={() => (
                navigate('/home')
              )}
              endIcon={<ArrowForwardIcon />}>
              Get to know me
            </LightBtn>
          </CustomButton>
          </Link>
        </TextContainer>
      </Home>
    </>
  )
}