import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux"

class PublicRoute extends Component {
    render() {
        if(this.props.logged && this.props.isAdmin) return(<Redirect to="/adminPanel"/>)
        else if (this.props.logged && !this.props.isAdmin) return(<Redirect to="/home"/>)
        return (
            <>
                {
                    // this.props.logged ? this.props.isAdmin ? <Redirect to="/adminPanel"/>:
                    // <Redirect to="/home"/>:
                    <Route {...this.props} />
                }
            </>
        );
    }
}

const mapStateToProps = state =>({
    logged: state.session.logged,
    isAdmin: state.session.isAdmin,
})

export default connect(mapStateToProps)(PublicRoute);