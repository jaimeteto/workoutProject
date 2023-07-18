import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Page from './page1'
import {useNavigate, Link} from "react-router-dom";
import {BrowserRouter,Route, Routes} from "react-router-dom";





export default function FixedBottomNavigation() {
  let navigate = useNavigate();
const routeChange = () =>{ 
    let path = `/page`; 
    navigate(path);
  }
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(messageExamples);



  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {messageExamples.map(({ primary, secondary, person }, index) => (
          <ListItem button onClick = {routeChange} key={index + person}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
          
          
        ))}
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
      <Routes>
        <Route path = "./page1" element = {<Page />} />
      </Routes>
    </Box>
  );
}

const messageExamples = [
  {
    primary: 'In Gym ',
    secondary:'5 workouts that require gym equipment',
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Minimal Equipment',
    secondary: `5 workouts that do not require gym equipment`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'Back Day',
    secondary: '5 Back workouts',
    person: '/static/images/avatar/2.jpg',
  },

];