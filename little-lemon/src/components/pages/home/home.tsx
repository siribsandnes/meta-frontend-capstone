import Hero from "../../components/hero/hero";
import Specials from "../../components/specials/specials";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Specials />
    </div>
  );
};
export default Home;
