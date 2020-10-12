import React from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../api';
import Error from '../Components/Helper/Error';
import Loading from '../Components/Helper/Loading';
import useFetch from '../Hooks/useFetch';
import ProductEditing from './ProductEditing';

const UpdateProduct = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  console.log(data);

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    const { url, options } = getProduct(id, token);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <ProductEditing data={data} />
      </section>
    );
  else return null;
};

export default UpdateProduct;
