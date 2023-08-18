import { React } from 'react';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import DrawerAppBar from './Nav';

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


export default function Homepg () {

  return (
    <>
      <Home>
        <DrawerAppBar></DrawerAppBar>
      </Home>
    </>
  )
}