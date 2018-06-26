import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

class Developer extends Component {

  viewProfile = (e, to) => {
    e.preventDefault();
    window.location.href = `/developers/${to}`;
  }

  render(){
    const { classes, theme, developer } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="headline">{developer.name}</Typography>
              <Typography variant="subheading" color="textSecondary">
                @{developer.username}
            </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Button variant="contained" color="primary" onClick={e => this.viewProfile(e, developer.username)}>{"View Profile"}</Button>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/220px-Cat03.jpg"}
            title={developer.name}
          />
        </Card>
      </div>
    );
  }

}

Developer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Developer);
