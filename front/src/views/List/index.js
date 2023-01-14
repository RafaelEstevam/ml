import React, {createContext} from 'react';
import { Box } from '@mui/material';
import Breadcrumb from '../../components/breadcrumb.component';
import ProductsList from '../../components/productslist.component';
import useListHooks from '../../hooks/list.hooks';

export const ListContext = createContext();

const List = () => {

  const { list, handleClick, noResults } = useListHooks();

  const categories = list.categories;
  const products = list.items;
  const signature = list.autor;

  return (
    <ListContext.Provider value={{products, signature, handleClick, noResults, categories}}>
      <Box>
        <Breadcrumb />
        <ProductsList />
      </Box>
    </ListContext.Provider>
  );
}

export default List;