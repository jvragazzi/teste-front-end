import '../styles/Banner.scss';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <h2 className="banner__title">Venha conhecer nossas <br /> promoções</h2>
        <p className="banner__subtitle"><span>50% Off</span> nos produtos</p>
        <button className="banner__button">Ver produto</button>
      </div>
    </section>
  );
};

export default Banner;
