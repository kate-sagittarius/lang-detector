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
    position: 'relative',
    paddingBottom: '48',
  },
  formControl: {
    width: '100%',
  },
  textField: {
    maxWidth: '358px',

    '& label.Mui-focused': {
      color: '#ED7551',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: '#ED7551',
    },
  },
  title: {
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '32px',
    marginBottom: 20,
  },
  button: {
    color: '#ED7551',
    position: 'absolute',
    left: 8,
    bottom: 10,
    fontSize: '14px',
    fontWeight: '500',
  },
});

const Search = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            Would you like to detect language?
          </Typography>
            <TextField
              id="filled-dense-multiline"
              label="Write down the phrase"
              className={classes.textField}
              margin="dense"
              variant="filled"
              multiline
              rows="6"
              color="primary"
              fullWidth
            />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.button}>
          Detect
        </Button>
      </CardActions>
    </Card>
  );
}

export default Search;