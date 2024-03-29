import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

import { DefaultContext } from "../services/context";

const useDetailsHooks = () => {

  const {loading, setLoading} = useContext(DefaultContext);
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const handleSearchById = async (productId) => {
    setLoading({type: "show"});
    try {
      await API.get(`/items/${productId}`).then((response) => {
        setDetails(response.data);
      })
    } catch (e) {
      console.log(e.message)
    }finally{
      setLoading({type: "hide"});
    }
  }

  useEffect(() => {
    handleSearchById(id)
  }, [id]);

  return {
    details,
    loading
  };

};

export default useDetailsHooks;