import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';


let Alert_component = ({ text, ...props }) => {
  return (
    <Alert variant="danger" {...props} dismissible>
      <Alert.Heading>Wystąpił błąd!</Alert.Heading>
      <p>{text}</p>
    </Alert>
  );
};

Alert_component.propTypes = {
  text: PropTypes.string.isRequired
}

export default Alert_component;
