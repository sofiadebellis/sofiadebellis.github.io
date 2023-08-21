import * as React from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  styled
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const StyledAppBar = styled(AppBar)({
  background: '#ffffff',
  color: '#333333',
});

const StyledBoxDrawer = styled(Box)({
  textAlign: 'center'
})

const StyledBoxMain = styled(Box)({
  p: 3
});

const StyledButton = styled(Button)({
  color: '#333333',
  '&:hover': {
    cursor: 'pointer',
    background: '#ffffff',
    color: '#D3A528'
  }
})

const StyledTypographyMain = styled(Typography)({
  fontWeight: 560,
  fontSize: '30px',
  flexGrow: 1,
  display: {
    xs: 'none',
    sm: 'block'
  },
  '&:hover': {
    cursor: 'pointer'
  }
});

const StyledTypography = styled(Typography)({
  fontWeight: 560,
  my: 2,
  paddingTop: '10px',
  paddingBottom: '10px',
  background: '#ffffff',
  color: '#333333',
  '&:hover': {
    cursor: 'pointer',
    color: '#D3A528'
  }
});

const StyledListItemButton = styled(ListItemButton)({
  textAlign: 'center',
  color: '#333333',
  '&:hover': {
    cursor: 'pointer',
    background: '#ffffff',
    color: '#D3A528'
  }
});

const StyledBox = styled(Box)({
  display: 'flex',
});

export default function NavBar (props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <StyledBoxDrawer onClick={handleDrawerToggle}>
      <StyledTypography
      variant="h6"
      aria-label="sofiadebellis"
      id="navlistLogoBtn"
      onClick={() => navigate('/home')}>
        SD
      </StyledTypography>
      <Divider />
      <List>
          <ListItem disablePadding>
            <StyledListItemButton
            aria-label="home"
            id="navlistDashboardBtn"
            onClick={() => navigate('/home')}>
              <ListItemText
              primary='Home.'/>
            </StyledListItemButton>
            <StyledListItemButton
            aria-label="projects"
            id="navlistDashboardBtn"
            onClick={() => navigate('/projects')}>
              <ListItemText
              primary='Projects.'/>
            </StyledListItemButton>
            <StyledListItemButton
            aria-label="resume"
            id="navlistDashboardBtn"
            onClick={() => navigate('/contact')}>
              <ListItemText
              primary='Get in touch.'/>
            </StyledListItemButton>
          </ListItem>
      </List>
    </StyledBoxDrawer>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <StyledBox>
      <CssBaseline />
      <StyledAppBar component="nav" position="fixed" elevation={0}>
        <Toolbar>
          <IconButton
            id="openNavDrawerBtn"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <StyledTypographyMain
            variant="h6"
            component="div"
            aria-label="menu"
            id="navLogoBtn"
            onClick={() => navigate('/home')}
          >
            Sofia De Bellis
          </StyledTypographyMain>
          <Box sx={{ display: { xs: 'none', sm: 'block', padding:'30px' } }}>
              <StyledButton
              aria-label="dashboard"
              id="navDeshboardBtn"
              onClick={() => navigate('/home')}>
                Home.
              </StyledButton>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block', padding:'30px' } }}>
              <StyledButton
              aria-label="dashboard"
              id="navDeshboardBtn"
              onClick={() => navigate('/projects')}>
                Projects.
              </StyledButton>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block', padding:'30px' } }}>
              <StyledButton
              aria-label="resume"
              id="navDeshboardBtn"
              onClick={() => navigate('/contact')}>
                Get in touch.
              </StyledButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Box component="nav">
        <Drawer
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <StyledBoxMain component="main">
        <Toolbar />
      </StyledBoxMain>
    </StyledBox>
    </>
  );
}