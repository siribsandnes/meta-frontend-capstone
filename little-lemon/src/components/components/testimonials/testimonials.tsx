
import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import Testimonial from "./testimonial/testimonial";
import styles from "./testimonials.module.css"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const testimonials = [
  {
    name: "Peter Peterson",
    testimonial: '"Very friendly staff and great food!"',
  },
  {
    name: "John Johnson",
    testimonial: '"Fast and delicious food"',
  },
  {
    name: "Sarah Silver",
    testimonial: '"Best place I have ever eaten!"',
  },
  {
    name: "Kate Karlsen",
    testimonial: '"Great food!"',
  },
];


const Testimonials = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/rating");
    };
    return (
      <section className={styles.container}>
        <div className={styles.header}>
          <h1>Testimonials</h1>
        </div>
        <div className={styles.testimonialsContainer}>
          {testimonials.map((testimonial) => (
            <Testimonial
              name={testimonial.name}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <Button color="secondary" onClick={handleClick}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              Give us a rating
              <ArrowForwardIcon />
            </div>
          </Button>
        </div>
      </section>
    );
}

export default Testimonials;