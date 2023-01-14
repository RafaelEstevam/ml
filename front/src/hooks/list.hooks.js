import { useState, useEffect, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { DefaultContext } from "../services/context";

import API from '../services/api';

import {setCategoriesOnLocalStorage} from '../services/localStorage';

const useListHooks = () => {
  const history = useNavigate();
  const {setLoading} = useContext(DefaultContext);

  const [list, setList] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState({});

  const handleSearch = async (search) => {
    setLoading({type: "show"});
    try {
      await API.get(`/items?Q=${search}`).then((response) => {
        setList(response.data)
      });
    } catch (e) {
      console.log(e.message)
      setNoResults(true);
    }finally{
      setLoading({type: "hide"});

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