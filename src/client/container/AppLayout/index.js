import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppHeader from '../AppHeader/index';
import AppDrawer from '../AppDrawer/index';

const styles = (theme) => ({});

class AppLayout extends Component {
    state = {
        drawer: false,
    }
    
    openDrawer = () => {
        this.setState({drawer: true});
    }

    closeDrawer = () => {
        this.setState({drawer: false})
    }

    render(){
        const { classes, children } = this.props;
        const { drawer } = this.state;
        console.log(drawer);

        return (
            <div className={classes.root}>
            <AppHeader openDrawer = {this.openDrawer} />
            <AppDrawer 
              open={drawer} 
              openDrawer={this.openDrawer} 
              closeDrawer = {this.closeDrawer} 
            />
            {children}
            </div>
        );
    }
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppLayout);
