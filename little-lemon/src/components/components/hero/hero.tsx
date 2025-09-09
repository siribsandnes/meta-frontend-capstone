import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import styles from "./hero.module.css";
import lemonImg from "../../../assets/littleLemon.png";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/reservation");
  };
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <div className={styles.about}>
          <h1>Little lemon</h1>
          <h2>Chicago</h2>
          <p>
            Duis tincidunt imperdiet rutrum. Aliquam malesuada nisl id auctor
            fermentum. Morbi sagittis elit eget velit placerat, nec convallis
            tortor rutrum. Etiam pharetra elit id urna egestas pellentesque.
            Nunc et orci in magna sodales dapibus sed vitae dolor. Suspendisse
            posuere laoreet arcu eu luctus. Mauris tellus nulla, imperdiet sed
            purus eget, scelerisque hendrerit risus. Praesent quis maximus odio.
          </p>
        </div>

        <Button onClick={handleClick}>Reserve a table</Button>
      </div>
      <div className={styles.imgSection}>
        <img className={styles.img} src={lemonImg} alt="Little Lemon" />
      </div>
    </div>
  );
};

export default Hero;
