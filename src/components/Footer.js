import * as React from 'react';
import {
  Box,
  styled, 
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const StyledBox = styled(Box)({
  pb: 7,
  position: 'fixed',
  display: 'flex',
  bottom: '20px', 
  left: 0, 
  right: '20px',
  justifyContent: 'flex-end',
})

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  '&:hover': {
    color: '#D3A528',
    cursor: 'pointer',
  }
})

export default function Footer() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  });

  return (
    <StyledBox ref={ref}>
        <BottomNavigation>
          <a href="https://www.linkedin.com/in/sofiadebellis/">
            <StyledBottomNavigationAction label="Linkedin" icon={<LinkedInIcon />}/>
          </a>
          <a href="https://github.com/sofiadebellis">
            <StyledBottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
          </a>
          <a href="mailto:sofia.debellis23@gmail.com">
            <StyledBottomNavigationAction label="Email" icon={<MailOutlineIcon />} />
          </a>
        </BottomNavigation>
    </StyledBox>
  );
}