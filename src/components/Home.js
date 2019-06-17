import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Search from './Search';


const useStyles = makeStyles(theme => ({
  homeWrapper: {
    minHeight: 'calc(100vh - 180px)',
    padding: '24px 24px 80px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeWrapper}>
      <Search/>
    </div>
  )
}

export default Home;