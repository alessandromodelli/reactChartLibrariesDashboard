import React, { ChangeEventHandler } from "react";
import { JsxElement } from "typescript";
import styles from './Select.module.css'

export interface SelectDataProps {
    value: string,
    text: string
}


export interface SelectProps {
    name: string,
    firstOption?: string,
    selectData: SelectDataProps[]
    style?: string
    ref?: React.RefObject<HTMLSelectElement>,
    onChange?: ChangeEventHandler<HTMLSelectElement>
}



const Select = (props: SelectProps) => {

    return (
        <select className={props.style ? props.style : styles.Select} name={props.name} ref={props.ref} onChange={props.onChange}>
            <option value={"All"}>{props.firstOption ?? "All"}</option>
            {props.selectData?.map((item, index) => {
                return (
                    <option key={index} value={item.value}>{item.text}</option>
                )
            })}
        </select>
    )

}

export default Select;