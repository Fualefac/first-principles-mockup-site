import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Why Choose Us<br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      <li>Extensive experience as a statistical consultant, researcher, and educator. </li>
      <li>Proven ability to work with diverse clients and industries. </li>
      <li>Strong track record of successful research projects and publications. </li>
      <li>Multilingual capabilities for effective communication and collaboration. </li>
      </p>


    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;