import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivateRoutes({
  component: Component,
  isClosed,
  ...rest
}) {
  const isLoggidIn = false;

  if (isClosed && !isLoggidIn) {
    return (
      <Redirect
        to={{ pathname: "/login", state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

PrivateRoutes.defaultProps = {
  isClosed: false,
};

PrivateRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
