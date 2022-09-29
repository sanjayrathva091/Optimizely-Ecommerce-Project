import "./Home.css";

const Home = () => {
  return (
    <div>
      <Section01 />
    </div>
  );
};

export default Home;

const Section01 = () => {
  return (
    <section className="section01">
      <div>
        <h1>Unlock digital potential</h1>
        <p>
          Creating digital experiences that transform your company takes
          data-driven decisions, continued experimentation and constant
          invention. Optimizely Digital Experience Platform helps you unlock
          your digital potential.
        </p>
      </div>
      <div className="sec01img">
        <img
          src="https://www.optimizely.com/contentassets/9c67aa9eed2e4b6fa8b8a802b673fb5e/homepage_illustration_new.svg"
          alt="sec01-img"
        />
      </div>
    </section>
  );
};
