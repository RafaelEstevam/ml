import React from 'react';
import { Box } from '@mui/material';
import Breadcrumb from '../../components/breadcrumb.component';
import ProductsList from '../../components/productslist.component';

const List = () => {
  return (
    <>
      <Box>
        <Breadcrumb />
        <ProductsList />
      </Box>
    </>
  );
}

export default List;