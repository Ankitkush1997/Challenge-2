import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-inner">
        <div>
          <h2>Hello From home page</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            voluptatibus nostrum, perferendis quae asperiores necessitatibus,
            quaerat molestias reprehenderit repudiandae nemo culpa earum velit
            at! Quae at nemo error voluptates amet.
          </p>
        </div>

        <div className="side-image-container">
          <img
            className="side-image-right"
            src="../../../assets/illust.png"
            alt="image"
          />
          <img
            className="side-image-left"
            src="../../../assets/big_c.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
