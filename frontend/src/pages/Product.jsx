import Navbar from "../layouts/Navbar.jsx"

const ProductDetailPage = () => {
  // Hard-coded product data. In a real-world application, this data
  // would likely come from an API based on the product ID
  const product = {
    id: 1,
    name: 'Dell Inspiron 14',
    price: 699,
    imageUrl: 'http://placeimg.com/640/480/tech',
    description: 'Experience the innovative interface of the Touch Bar in the mid 2020 space gray Apple 13.3" MacBook Pro with Retina Display.',
    specs: {
      processor: '10th Gen Intel Core i5-1035G4',
      ram: '8GB 3733 MHz LPDDR4x',
      storage: '256GB SSD',
      display: '14" Full HD',
      os: 'Windows 10'
    },
    reviews: [
      { username: 'John', rating: 5, comment: 'Great laptop!' },
      { username: 'Jane', rating: 4, comment: 'Good performance and value.' },
      // Add more reviews as needed
    ]
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#444' }}>
      <div style={{ display: 'flex', marginBottom: '20px', background: '#fff', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
        <img src={product.imageUrl} alt={product.name} style={{ width: '40%', objectFit: 'cover' }} />
        <div style={{ padding: '20px', width: '60%' }}>
          <h2 style={{ margin: '0 0 15px 0' }}>{product.name}</h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 15px 0' }}>${product.price}</p>
          <p style={{ margin: '0 0 15px 0' }}>{product.description}</p>
          <h4>Specifications:</h4>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li>Processor: {product.specs.processor}</li>
            <li>RAM: {product.specs.ram}</li>
            <li>Storage: {product.specs.storage}</li>
            <li>Display: {product.specs.display}</li>
            <li>OS: {product.specs.os}</li>
          </ul>
          <button style={{ background: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer', width: '100%', marginTop: '20px' }}>Review Now</button>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h4>Reviews:</h4>
        {product.reviews.map((review, index) => (
          <div key={index} style={{ marginBottom: '15px', background: '#f8f8f8', padding: '10px', borderRadius: '5px' }}>
            <h5 style={{ margin: '0 0 5px 0' }}>{review.username} rated it {review.rating} stars</h5>
            <p style={{ margin: '0' }}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductDetailPage;
