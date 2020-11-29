import PropTypes from 'prop-types';

const Product = ({ product }) => {
  // object destructuring
  const { name, price, image } = product;
  return (
    <div className="shadow-lg">
      <img className="w-full h-32 rounded-t-lg" src={image} alt={name} />
      <div className="p-4 bg-white rounded-b-lg">
        <p className="text-xs font-semibold">
          {name} - ${price}
        </p>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product;
