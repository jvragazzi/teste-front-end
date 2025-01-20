import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductCategoryButtons from "./components/ProductCategoryButtons";
import RelatedProducts from "./components/RelatedProducts";
import BackgroundCard from "./components/BackgroundCard";
import './styles/global.scss';
import Apple from './assets/banner/Apple.png';
import BrandNavigation from "./components/BrandNavigation";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import TrademarkFooter from "./components/TradeMarkFooter";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <ProductCategoryButtons />
      <RelatedProducts showCategories={true} />
      <div className="card-container">
        <BackgroundCard
          title="Parceiros"
          description="Lorem ipsum dolor sit amet, consectetur."
          buttonText="CONFIRA"
          imageUrl={Apple}
        />
        <BackgroundCard
          title="Parceiros"
          description="Lorem ipsum dolor sit amet, consectetur."
          buttonText="CONFIRA"
          imageUrl={Apple}
        />
      </div>
      <RelatedProducts showCategories={false} />
      <div className="card-container">
        <BackgroundCard
          title="Parceiros"
          description="Lorem ipsum dolor sit amet, consectetur."
          buttonText="CONFIRA"
          imageUrl={Apple}
        />
        <BackgroundCard
          title="Parceiros"
          description="Lorem ipsum dolor sit amet, consectetur."
          buttonText="CONFIRA"
          imageUrl={Apple}
        />
      </div>
      <BrandNavigation />
      <RelatedProducts showCategories={false} />
      <Newsletter />
      <Footer />
      <TrademarkFooter />
    </div>
  );
}

export default App;
