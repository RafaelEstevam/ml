import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setProduct } from '../store/store';

import API from '../services/api';

const ListHooks = () => {
  const reduxDispatch = useDispatch();
  const [list, setList] = useState('');
  const [searchParams] = useSearchParams();
  const history = useNavigate();

  const handleSearch = async (search) => {
    try {
      await API.get(`/items?Q=${search}`).then((response) => {
        setList(response.data)
      });
    } catch (e) {
      console.log(e.message)
    }
  }

  const handleClick = (product) => {
    reduxDispatch(setProduct({ item: product, categories: list.categories }))
    history(`/items/${product.id}`);
  }

  useEffect(() => {
    const search = searchParams.get('Search');
    handleSearch(search);
  }, [searchParams]);

  return {
    list,
    setList,
    handleClick
  }
};

export default ListHooks;