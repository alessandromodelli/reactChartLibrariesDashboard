import styles from './Img.module.css'

interface Props {
    src?: string,
    containerStyle?: string,
    className: string,
    alt: string,
    overlayImg?: string
    onClick?: () => void
}

const Img = (props: Props) => {
    return (
        <>
            <div className={props.containerStyle} onClick={props.onClick}>
                <img src={props.src} className={props.className} alt={props.alt}></img>
                {props.overlayImg && <>
                    <div className={styles.overlay}>
                        <img src={props.overlayImg} className={styles.overlayIcon}/>
                    </div>
                </>}
            </div>
        </>
    )
}

export default Img