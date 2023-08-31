import styles from './Button.module.css';
import Img from '../Img';


interface Props {
    name: string,
    className: string,
    iconStart?: string,
    iconEnd?: string,
    iconStartClassName?:string,
    iconEndClassName?:string,
    onClick: (e: any) => void
    typeSubmit?: "button" | "submit" | "reset"
}


const Button = (props: Props) => {
    return (

        <>
            <button type={props.typeSubmit ?? 'button'} name={props.name} className={props.className} onClick={props.onClick}>
                <div className={styles.content}>
                    {typeof props.iconStart !== undefined && <Img alt='' className={props.iconStartClassName ? props.iconStartClassName : ""} src={props.iconStart} />}
                    {props.name}
                    {typeof props.iconEnd !== undefined && <Img alt='' className={props.iconEndClassName ? props.iconEndClassName : ""} src={props.iconEnd} />}
                </div>
            </button>
        </>

    )

}


export default Button