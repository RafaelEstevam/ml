import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import API from '../services/api';
const DetailsHooks = () => {

  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const product = useSelector(state => state.product.value);

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
    product,
    isLoading
  };

};

export default DetailsHooks;