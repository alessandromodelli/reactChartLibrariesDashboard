import React from "react";
import Label from "../Label";
import styles from "./CheckBox.module.css"

export interface CheckboxData {
    id?: string,
    name: string,
    for?: string
    className?: string,
    textLable: string,
    classNameLable: string,
    value?: string


}




const Checkbox = (props: CheckboxData) => {
    return (
        <div className={styles.container}>
            <input type="checkbox" id={props.id} name={props.name} value={props.value} className={typeof props.className !== undefined ? props.className : ""}/>
            <Label className={props.classNameLable} text={props.textLable} />
        </div>




    )

}

export default Checkbox