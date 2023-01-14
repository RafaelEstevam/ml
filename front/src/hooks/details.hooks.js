import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

const useDetailsHooks = () => {

  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchById = async (productId) => {
    try {
      await API.get(`/items/${productId}`).then((response) => {
        setDetails(response.data);
        setIsLoading(false);
      })
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    handleSearchById(id)
  }, [id]);

  return {
    details,
    isLoading
  };

};

export default useDetailsHooks;