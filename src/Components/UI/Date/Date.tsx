import { ChangeEventHandler, useRef, useState } from "react"
import styles from "./Date.module.css"


interface DateProps {
    id: string
    name: string
    value: string
    min: string
    max: string
    ref: React.RefObject<HTMLInputElement>,
    onChange: ChangeEventHandler<HTMLInputElement>


}



const Date = (props: DateProps) => {

    return (

        <input
            className={styles.dataInput}
            type="date"
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            ref={props.ref}>
            
            
        </input>

    )

}

export default Date