import styles from './testimonial.module.css'
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

interface TestiominalItemProps  {
    name: string,
    testimonial: string

}

const Testimonial = ({ name, testimonial }: TestiominalItemProps) => {
    return (
        <article className={styles.container}>
         <PersonOutlineIcon style={{ fontSize: 50, color: "#495E57" }}/>    
            <h3>{name}</h3>
            <p>{testimonial}</p>
        </article>
    )
}

export default Testimonial