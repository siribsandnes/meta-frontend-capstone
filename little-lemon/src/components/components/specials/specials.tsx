import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import SpecialItem from "./specialItem/specialItem";
import styles from "./specials.module.css";
import bruschetta from "../../../assets/bruschetta.png";
import caprese from "../../../assets/caprese.png";
import risotto from "../../../assets/risotto.png";

const dishes = [
  {
    title: "Bruschetta",
    description: "Toasted bread with tomato, garlic, basil and olive oil.",
    price: 69,
    img: bruschetta,
  },
  {
    title: "Caprese Salad",
    description: "Mozzarella, tomato and fresh basil with olive oil.",
    price: 89,
    img: caprese,
  },
  {
    title: "Risotto ai funghi",
    description: "Creamy risotto with mushrooms and parmesan.",
    price: 149,
    img: risotto,
  },
  {
    title: "Pizza Margherita",
    description: "Classic pizza with tomato sauce, mozzarella and fresh basil.",
    price: 159,
  },
  {
    title: "Spaghetti alle vongole",
    description: "Spaghetti with fresh clams, garlic and parsley.",
    price: 169,
  },
  {
    title: "Lasagne al forno",
    description: "Layered pasta with meat sauce, béchamel and parmesan.",
    price: 159,
  },
  {
    title: "Melanzane alla parmigiana",
    description: "Oven-baked eggplant with tomato sauce and parmesan.",
    price: 139,
  },
  {
    title: "Focaccia",
    description: "Airy bread with olive oil, rosemary and sea salt.",
    price: 49,
  },
  {
    title: "Greek Salad",
    description: "Salad with feta cheese, olives, tomato, cucumber and red onion.",
    price: 99,
  },
  {
    title: "Tiramisu",
    description: "Italian dessert with mascarpone, coffee and cocoa.",
    price: 79,
  },
];

const specials = dishes.slice(0, 3);

const Specials = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Specials</h1>
        <Button color="primary" onClick={handleClick}>See full menu</Button>
      </div>
      <div className={styles.specialsList}>
        {specials.map((dish) => (
          <SpecialItem
            key={dish.title}
            price={dish.price}
            title={dish.title}
            description={dish.description}
            img={<img className={styles.img} src={dish.img} alt={dish.title} />}
          />
        ))}
      </div>
    </section>
  );
};

export default Specials;
