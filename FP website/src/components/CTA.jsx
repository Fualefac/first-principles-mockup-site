import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Contact us now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <ul>
        <li>nforcheh@gmail.com </li>
        <li>Nforcheh@fpconsultinc</li>
        <li>(416) 881-9887 </li>

        </ul>
      </p>
    </div>


  </section>
);

export default CTA;