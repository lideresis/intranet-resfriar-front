import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { BottomNavigation, BottomNavigationAction, useTheme } from '@mui/material';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const BottomNavigator = () => {
  const theme = useTheme();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname || '/');
  const navigate = useNavigate();

  const handleNavigate = (newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        handleNavigate(newValue);
      }}
      showLabels
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        elevation: 10,
        justifyContent: 'center',
        backgroundColor: theme.palette.grey[200]
      }}
    >
      <BottomNavigationAction
        label="Feed"
        value={'/'}
        icon={<HomeIcon />}
        component={Link}
        to={'/'}
        centerRipple
        style={{
          marginRight: -10
        }}
      />
      <BottomNavigationAction label="Aniversários" value={'/'} icon={<FavoriteIcon />} component={Link} to={'/'} centerRipple />
      <BottomNavigationAction label="Pagamento" value={'/'} icon={<AttachMoneyIcon />} component={Link} to={'/'} centerRipple />
      <BottomNavigationAction
        label="Mais"
        value={'/'}
        icon={<MenuIcon />}
        component={Link}
        to={'/'}
        centerRipple
        style={{
          marginLeft: -10
        }}
      />
    </BottomNavigation>
  );
};
