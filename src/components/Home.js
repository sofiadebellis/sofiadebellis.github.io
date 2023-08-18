import { React } from 'react';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
import NavBar from './Nav';

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

export default function Homepg () {

  return (
    <>
      <Home>
        <NavBar></NavBar>
      </Home>
    </>
  )
}