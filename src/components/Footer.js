import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SocialIcons from './SocialIcons';


const useStyles = makeStyles(theme => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  footerSocial: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#CEE7E6',
    height: 80,
    padding: 16,
    boxSizing: 'border-box',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
  },
  footerCredits: {
    backgroundColor: '#ED7551',
    color: '#fefefe',
    padding: 8,
    textAlign: 'center',
    boxSizing: 'border-box',
    height: 37,
    lineHeight: '1.5',
    fontSize: '14px',
  },
}));


const Footer = () => {
  const classes = useStyles();
  
  return (
    <footer className={classes.footer}>
      <div className={classes.footerSocial}>
        <Typography variant="subtitle1" className={classes.title}>
          Get connected with us on social networks!
        </Typography>
        <div className={classes.footerSocialButtons}>
          <SocialIcons/>
        </div>
      </div>
      <div className={classes.footerCredits}>
        {'©2019'} <strong>by Kate Zakhobaiko</strong>
      </div>
    </footer>
  )
}

export default Footer;