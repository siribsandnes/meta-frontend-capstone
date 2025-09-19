import styles from './about.module.css';   
import restaurantImg from '../../assets/restaurant.png'

const About = () => {
    return (
      <section className={styles.container}>
        <div >
          <img src={restaurantImg} alt="Restaurant" />
        </div>

        <div>
          <h1>About Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. We
            are open for lunch and dinner 7 days a week.
          </p>
          <p>
            At Little Lemon, our chefs blend traditional recipes with fresh, local ingredients to create unforgettable flavors. Whether you're celebrating a special occasion or just stopping by for a quick bite, our friendly staff is here to make your experience memorable. Join us for our seasonal specials and discover why Little Lemon is a favorite spot in Chicago!
          </p>
        </div>
      </section>
    );
}

export default About