import React from 'react';
import styled from 'styled-components';
import Layout from './layout.component';
import { GridComponent } from './grid.component';
import { COLORS } from '../styles/config';
import { Box } from '@mui/material';
import Logo from './logo.component';
import Search from './search.component';

import {Loading} from './loading.component';


const CustomHeader = styled('div')`
  background-color: ${COLORS.main};
  background-position: top center;
  background-size: auto;
  background-repeat: no-repeat;
`;

const Header = () => {
  return (
    <header>
      <Loading show={true}/>

      <CustomHeader>
        <Layout>
          <GridComponent>
            <Box display="flex" alignItems="center" justifyContent="space-between" height="56px" gap="26px">
              <Logo />
              <Search />
            </Box>
          </GridComponent>
        </Layout>
      </CustomHeader>
    </header>

  )
}

export default Header;