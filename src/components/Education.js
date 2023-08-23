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
import ursulas from '../assets/ursuals.png'
import unsw from '../assets/UNSW.png'
import usyd from '../assets/usyd.png'

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
    transform: 'scale(1.05)',
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
                  primary="Bachelor of Computer Science Co-op"
                  secondary="UNSW Sydney (2022 - 2024)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={usyd}/>
                </ListItemAvatar>
                <ListItemText
                  primary="National Computer Science Summer School - Embedded Stream (Returner)"
                  secondary="University of Sydney (Jan 2021)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={usyd}/>
                </ListItemAvatar>
                <ListItemText
                  primary="High School Fellowship Program - INFO1110"
                  secondary="University of Sydney (Jan 2020 - July 2020)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={usyd}/>
                </ListItemAvatar>
                <ListItemText
                  primary="National Computer Science Summer School - Web Stream"
                  secondary="University of Sydney (Jan 2020)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={unsw}/>
                </ListItemAvatar>
                <ListItemText
                  primary="Engineering World Health Summer Intensive"
                  secondary="UNSW Sydney (Jan 2022)"
                />
              </StyledListItem>
              <StyledListItem>
                <ListItemAvatar>
                <Avatar src={ursulas}/>
                </ListItemAvatar>
                <ListItemText
                  primary="High School Certificate"
                  secondary="St Ursula's College Kingsgrove (2016 - 2021)"
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