import React from 'react';

const withUser = (WrappedComponent) => {
  return (props) => {
    const token = localStorage.getItem('auth_token');
    return <WrappedComponent {...props} userToken={token} />;
  };
};

export default withUser;
