import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux"

class PrivateAdminRoute extends Component {
    render() {
        return (
            <>
                {
                    this.props.isAdmin && this.props.logged ?
                        <Route {...this.props} />
                        :
                        <Redirect to="/"/>
                }
            </>
        );
    }
}


const mapStateToProps = state =>({
    isAdmin: state.session.isAdmin,
    logged: state.session.logged,
})

export default connect(mapStateToProps)(PrivateAdminRoute);