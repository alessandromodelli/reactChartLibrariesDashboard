import React, { ChangeEventHandler } from "react";

import styles from './ComboSelect.module.css'

import { SelectDataProps } from "../../Select/Select";

import Select from "..";
import Label from '../../Label'
import Img from '../../Img'


export interface ComboSelectProps {
    imgSrc?: string
    altImg?: string
    textLabel: string
    nameSelect: string
    selectData: SelectDataProps[]
    firstOption?: string
    ref?: React.RefObject<HTMLSelectElement>,
    onChange?: ChangeEventHandler<HTMLSelectElement>
}



const ComboSelect = (props: ComboSelectProps) => {

    return (

        <div className={styles.ContainerComboSelect}>
            {typeof props.imgSrc !== 'undefined' &&
                <div className={styles.icon_container}>
                    <Img src={props.imgSrc} className={styles.icon} alt='{props.altImg}' />
                </div>}
            <div className={styles.couple}>
                <div>
                    <Label className={styles.label} text={props.textLabel} />
                </div>

                <div className={styles.ComboSelect}>
                    
                    {props.firstOption ? <Select name={props.nameSelect} selectData={props.selectData} firstOption={props.firstOption} ref={props.ref} onChange={props.onChange}/> 
                    : <Select name={props.nameSelect} selectData={props.selectData} ref={props.ref} onChange={props.onChange}/>}
                </div>
            </div>
        </div>

    )

}
export default ComboSelect