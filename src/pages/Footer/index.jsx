import { ReactComponent as Logo } from '../../assets/img/Logo.svg';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={`${styles.root} container`}>
      <button>
        <Logo className={styles.logo} />
      </button>
      <menu className={styles.menu}>
        <button className={styles.menuBtn}>Обо мне</button>
        <button className={styles.menuBtn}>Обучение</button>
        <button className={styles.menuBtn}>Портфолио</button>
        <button className={styles.menuBtn}>Услуги</button>
        <button className={styles.menuBtn}>Обратная связь</button>
        <button className={styles.menuBtn}>Контакты</button>
      </menu>
      <ul className={styles.linkList}>
        <li className={styles.linkItem}>
          <a className={styles.linkItem} target="_blank" href="https://xn--80aapampemcchfmo7a3c9ehj.xn--p1ai/assets/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf">Политика конфиденциальности </a>
        </li>
        <li className={styles.linkItem}>
          <a href="#">разработка сайтов</a>
        </li>
      </ul>
    </footer>
  );
};