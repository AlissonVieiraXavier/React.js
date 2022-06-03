import styles from './cardapio.module.scss';
import logo from 'assets/img/logo.png';
import {GiChickenOven} from 'react-icons/gi';

export default function Cardapio(){
    return(
        <main>
            <nav className={styles.menu}>
              <img className={styles.img} src={logo} alt="logo do flangou"/>
              <h1 className={styles.title}>Flangou Restaurant</h1>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    Especialidade em Frangos <i><GiChickenOven/></i>
                </div>

            </header>
        </main>
    )
}