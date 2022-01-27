import React from 'react';
import styled from '@emotion/styled';

const ErrorMsg = styled.div`
  background-color: #b7322c;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  font-weight: 700;
  padding: 15px;
  text-transform: uppercase;
  text-align: center;

`

const Error = ({children}) => {
  return <ErrorMsg>{children}</ErrorMsg>;
};

export default Error;
