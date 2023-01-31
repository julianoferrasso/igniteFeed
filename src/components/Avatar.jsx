import styles from './Avatar.module.css'

// props recebida por desetruturação, o igual tem função de criar um valor dafult // 
export function Avatar({hasBorder = true, src}) {
    return (
        <img 
            src={src} alt='' 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        />
    )
}