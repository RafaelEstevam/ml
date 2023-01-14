import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setShowLoading } from '../store/store';

import API from '../services/api';

import {setCategoriesOnLocalStorage} from '../services/localStorage';

const useListHooks = () => {
  const reduxDispatch = useDispatch();
  const history = useNavigate();

  const [list, setList] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState({});

  const handleSearch = async (search) => {
    reduxDispatch(setShowLoading({ show: true }))

    try {
      await API.get(`/items?Q=${search}`).then((response) => {
        setList(response.data)
      });
    } catch (e) {
      console.log(e.message)
      setNoResults(true);
    }finally{
      reduxDispatch(setShowLoading({ show: false }))
    }
  }

  const handleClick = (product) => {

    setProduct({ item: product, categories: list.categories })
    setCategoriesOnLocalStorage(list.categories);

    history(`/items/${product.id}`);
  }

  useEffect(() => {
    const search = searchParams.get('Search');
    handleSearch(search);
  }, [searchParams]);

  useEffect(() => {
    if(list?.items?.length === 0){
      setNoResults(true);
    }
  }, [list])

  return {
    list,
    setList,
    handleClick,
    noResults,
    product
  }
};

export default useListHooks;