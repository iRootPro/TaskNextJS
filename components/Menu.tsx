import Link from "next/Link";
import styles from './../styles/menu.module.css'

export default function Menu() {
    return (
        <div className={styles.wrap}>
            <Link href={'/'}><a>Главная</a></Link>
            <Link href={'/articles'}><a>Статьи</a></Link>
        </div>
    )
}
