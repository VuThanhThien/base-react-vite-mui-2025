import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react';
import Footer from '../../core/components/Footer';
import Logo from '../../core/components/Logo';
import SettingsDrawer from '../../core/components/SettingsDrawer';
import { Paper, AppBar, Toolbar, Typography, IconButton } from '@mui/material';

type LandingLayoutProps = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <Paper square>
      <AppBar color='transparent' position='relative'>
        <Toolbar>
          <Logo size={24} sx={{ mr: 2 }} />
          <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
            {import.meta.env.VITE_APP_NAME}
          </Typography>
          <IconButton color='default' aria-label='settings' component='span' onClick={handleSettingsToggle}>
            <SettingsIcon />
          </IconButton>
          <SettingsDrawer onDrawerToggle={handleSettingsToggle} open={settingsOpen} />
        </Toolbar>
      </AppBar>
      <main>{children}</main>
      <Footer />
    </Paper>
  );
};

export default LandingLayout;
