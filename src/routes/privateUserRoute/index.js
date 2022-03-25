import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux"

class PrivateUserRoute extends Component {
    render() {
        return (
            <>
                {
                    this.props.logged && !this.props.isAdmin?
                        <Route {...this.props} />
                        :
                        <Redirect to="/"/>
                }
            </>
        );
    }
}

const mapStateToProps = state =>({
    logged: state.session.logged,
    isAdmin: state.session.isAdmin,
})

export default connect(mapStateToProps)(PrivateUserRoute);