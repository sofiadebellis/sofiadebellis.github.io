import * as React from 'react';
import {
  styled,
  Divider,
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
})

const StyledListItem = styled(ListItem)({
  '&:hover': {
    borderStyle: 'solid',
    borderColor: '#f4f4f4',
    borderRadius: '15px',
    cursor: 'pointer',
    transform: 'scale(1.1)',
  }
})

export default function Education() {
  return (
    <>
      <NavBar/>
      <Experience>
        <Parent>
          <Title>Education</Title>
        </Parent>
        <br/>
        <Divider/>
        <Parent>
          <List>
            <Stack spacing={3}>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={unsw}/>
                </ListItemAvatar>
                <ListItemText
                  primary="Bachelor of Computer Science"
                  secondary="UNSW Sydney (2022 - 2024)"
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