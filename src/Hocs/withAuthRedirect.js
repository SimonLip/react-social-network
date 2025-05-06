import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const withAuthRedirect = (Component) => {
  let mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };

  const RedirectComponent = (props) => {
    if (!props.isAuth) {
      return <Navigate to="/login" replace />;
    }
    return <Component {...props} />;
  };

  return connect(mapStateToProps)(RedirectComponent);
};

export default withAuthRedirect;

