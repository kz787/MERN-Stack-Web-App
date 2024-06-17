import Header from "../Component/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: '10px' }}>
        <h2>Explore Our Wide Range of Products</h2>
        <p>
          From cutting-edge smartphones and sleek laptops to innovative accessories, our extensive collection caters to all your electronic needs. We carefully curate our selection to ensure you get the best quality products from top brands at competitive prices.
        </p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Featured Products</h2>
        <p>
          Check out our handpicked selection of featured products, showcasing the best and most popular items in our inventory. Whether you're looking for a powerful new laptop, a sleek smartphone upgrade, or new accessories, you'll find it all here.
        </p>
        
      </div>
    </>
  );
};

export default Home;

