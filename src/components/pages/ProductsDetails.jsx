import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'components/Api/fetchData';
//import { getProductById } from '../fakeAPI';

export const ProductDetails = () => {
  const { id } = useParams();
  const product = fetchMovieById(id);
  console.log(product);
  return (
    <main>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>Product - - {id}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};
