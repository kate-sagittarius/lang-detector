import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
  socialWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  socialLink: {
    textDecoration: 'none',
    color: '#1B1E1E',
    padding: '6px',
    margin: '0 16px',
  },
}));

const Social = () => {
  const classes = useStyles();

  return (
    <div className={classes.socialWrapper}>
      <IconButton
        href="https://github.com/kate-sagittarius"
        target="_blank"
        rel="noopener"
        className={classes.socialLink}
      >
        <FontAwesomeIcon icon={faGithub} />
      </IconButton>
      <IconButton
        href="https://github.com/kate-sagittarius"
        target="_blank"
        rel="noopener"
        className={classes.socialLink}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </IconButton>
      <IconButton
        href="https://github.com/kate-sagittarius"
        target="_blank"
        rel="noopener"
        className={classes.socialLink}
      >
        <FontAwesomeIcon icon={faFacebook} />
      </IconButton>
      <IconButton
        href="https://github.com/kate-sagittarius"
        target="_blank"
        rel="noopener"
        className={classes.socialLink}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </IconButton>
    </div>
  );
};

export default Social;
