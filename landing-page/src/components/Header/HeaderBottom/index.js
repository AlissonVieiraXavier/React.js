import Button from '../../Button';
import styles from './index.module.css'


export default function HeaderBottom({ img, alt }) {
  return (
    <div className={styles.header_bottom}>

      <div className={styles.header_bottom_div_texto}>
          <h1 className={styles.header_bottom_div_texto_title}>Seminário de Marketing Digital com Camila Freitas</h1>
          <p className={styles.header_bottom_div_texto_p}> Descubra os segredos do marketing digital</p>
          <div className="header_bottom_div_texto_button"></div>
          <div> <Button titulo="Reservar meu lugar"/></div>
      </div>
      <div className={styles.header_bottom_div_img}>
        <img className={styles.img}src={img} alt={alt} />
      </div>

    </div>
  );
}
