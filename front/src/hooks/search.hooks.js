import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setShowLoading } from '../store/store';
const SearchHooks = () => {
  const reduxDispatch = useDispatch();
  const history = useNavigate();
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    history(`/items?Search=${search}`)
  }

  return {
    search,
    setSearch,
    handleSubmit
  }
};

export default SearchHooks;