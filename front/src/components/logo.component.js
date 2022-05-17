import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Logo_ML.png';
import { Link } from 'react-router-dom';

const CustomLogo = styled(Link)`
  background: url(${logo});
  background-size: auto;
  background-position: center;
  height: 36px;
  min-width: 53px;
  overflow: hidden;
  display: block;
  text-indent: -999px;
`

const Logo = () => {
  return (
    <CustomLogo to="/">
      Mercado Livre
    </CustomLogo>
  )
}

export default Logo;