import React from'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  card: {
    maxWidth: 402,
    height: 320,
  },
  title: {
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '32px',
    marginBottom: 20,
  },
  resultWrapper: {
    width: '100%',
    padding: '24px 0 6px',
    height: 248,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  answer: {
    fontSize: '28px',
    marginTop: 24,
    fontWeight: '400',
  },
  accuracy: {
    alignSelf: 'flex-start',
    color: '#FC7753',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: '500',
  }
});

const Result = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            The phrase is probably written in…
          </Typography>
          <div className={classes.resultWrapper}>
            <Typography gutterBottom variant="h6" component="h2" className={classes.answer}>
              Danish
            </Typography>
            <Typography gutterBottom variant="h6" component="h2" className={classes.accuracy}>
              Accuracy: 100%
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Result;