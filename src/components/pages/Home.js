import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
 
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
const Home = () => {

  const classes = useStyles();
return (
  <Fragment >
    <div style ={usersStyle}>
    <Search  />
    </div>
    <Users />

     {/* Footer */}
    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Made with <span role="img"> ☕ & 🎶 </span> 
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Ayman A. - 2020
        </Typography>
       
      </footer>
      {/* End footer */}
  </Fragment>
)};

const usersStyle = {
  display: 'grid',
  justifyContent: 'center',
  alignContent: 'center',
  margin: '10% 0 10% 0'
}
export default Home;