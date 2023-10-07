import styles from './Certificados.module.css'

import certificados from './certificados.json'

import { AiFillStar } from 'react-icons/ai'

export default function Certificados() {
    function render() {
        return certificados.map((curso, i) => {
            return (
                <div className={styles.area} key={i}>
                    <a href={curso.url} target="_blank">
                        <h2 className={styles.curso}>{curso.curso}</h2>
                        <div className={styles.local}>
                            <span className={styles.escola}>
                                {curso.escola}
                            </span>
                            <span>
                                {curso.star ? <AiFillStar size={20} /> : ''}
                            </span>
                        </div>
                    </a>
                </div>
            )
        })
    }

    return <div className={styles.container}>{render()}</div>
}
