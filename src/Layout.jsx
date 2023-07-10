import Header from "../src/Components/header";
import Footer from "../src/Components/footer";

const LayoutWrapper = (BaseComponent) => (props) => {
  return (
    <div>
      <Header/>
      <BaseComponent />
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
