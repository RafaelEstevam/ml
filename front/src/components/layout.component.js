import React from 'react';
import styled from 'styled-components';
import { SPECIFICATIONS } from '../styles/config';

const CustomLayout = styled('div')`
  max-width: ${SPECIFICATIONS.width1280};
  margin: 0 auto;
  padding: 0px 52px;
`

const Layout = ({ children, style }) => {
  return (
    <CustomLayout {...{ style }}>
      {children}
    </CustomLayout>
  )
}

export default Layout;