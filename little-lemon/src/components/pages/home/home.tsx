import About from "../../about/about";
import Hero from "../../components/hero/hero";
import Specials from "../../components/specials/specials";
import Testimonials from "../../components/testimonials/testimonials";

import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </div>
  );
};
export default Home;
