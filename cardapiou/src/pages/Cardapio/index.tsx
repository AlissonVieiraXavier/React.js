import styles from './cardapio.module.scss';
import logo from 'assets/img/logo.png';
import {GiChickenOven} from 'react-icons/gi';
import Buscador from './Buscador';
import { useState } from 'react';
import {MdRestaurantMenu} from 'react-icons/md'

export default function Cardapio(){
    
    const [busca,setBusca] = useState("");

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
            <section className={styles.cardapio}>
                    <h3 className={styles.cardapio__text}>
                        cardapio<i><MdRestaurantMenu/></i>
                    </h3>
                    <Buscador busca={busca} setBusca={setBusca}/>
            </section>
        </main>
    )
}