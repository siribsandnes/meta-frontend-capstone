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
    description: "Ristet brød med tomat, hvitløk, basilikum og olivenolje.",
    price: 69,
    img: bruschetta,
  },
  {
    title: "Caprese salat",
    description: "Mozzarella, tomat og fersk basilikum med olivenolje.",
    price: 89,
    img: caprese,
  },
  {
    title: "Risotto ai funghi",
    description: "Kremet risotto med sopp og parmesan.",
    price: 149,
    img: risotto,
  },
  {
    title: "Pizza Margherita",
    description: "Klassisk pizza med tomatsaus, mozzarella og fersk basilikum.",
    price: 159,
  },
  {
    title: "Spaghetti alle vongole",
    description: "Spaghetti med ferske hjerteskjell, hvitløk og persille.",
    price: 169,
  },
  {
    title: "Lasagne al forno",
    description: "Lagvis pasta med kjøttsaus, béchamel og parmesan.",
    price: 159,
  },
  {
    title: "Melanzane alla parmigiana",
    description: "Ovnsbakt aubergine med tomatsaus og parmesan.",
    price: 139,
  },
  {
    title: "Focaccia",
    description: "Luftig brød med olivenolje, rosmarin og havsalt.",
    price: 49,
  },
  {
    title: "Gresk salat",
    description: "Salat med fetaost, oliven, tomat, agurk og rødløk.",
    price: 99,
  },
  {
    title: "Tiramisu",
    description: "Italiensk dessert med mascarpone, kaffe og kakao.",
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
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Specials</h1>
        <Button onClick={handleClick}>See full menu</Button>
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
    </div>
  );
};

export default Specials;
