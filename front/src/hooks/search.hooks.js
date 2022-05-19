import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const SearchHooks = () => {
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