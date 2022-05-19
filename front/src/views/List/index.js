import React from 'react';
import { Box } from '@mui/material';
import Breadcrumb from '../../components/breadcrumb.component';
import ProductsList from '../../components/productslist.component';
import ListHooks from '../../hooks/list.hooks';

const List = () => {

  const { list, handleClick } = ListHooks();
  const categories = list.categories;
  const products = list.items;
  const signature = list.autor;

  return (
    <>
      <Box>
        <Breadcrumb {...{ categories }} />
        <ProductsList {...{ products, signature, handleClick }} />
      </Box>
    </>
  );
}

export default List;