import Button from '../../Button';
import styles from './index.module.css'
import {MdChair} from 'react-icons/md'


export default function HeaderBottom({ img, alt }) {
  return (
    <div className={styles.header_bottom}>

      <div className={styles.header_bottom_div_texto}>
          <h1 className={styles.header_bottom_div_texto_title}>Seminário de Marketing Digital com Camila Freitas</h1>
          <p className={styles.header_bottom_div_texto_p}> Descubra os segredos do marketing digital</p>
          <div className={styles.header_bottom_div_texto_button1}><Button titulo="Reservar meu lugar" icon={<MdChair/>}/></div>

      </div>
      <div className={styles.header_bottom_div_img}>
        <img className={styles.img}src={img} alt={alt} />
      </div>

    </div>
  );
}
