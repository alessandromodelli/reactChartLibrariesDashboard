import React, { ChangeEventHandler } from "react";
import Date from "..";
import styles from './ComboDate.module.css'
import Label from "../../Label"
import Img from '../../Img'


export interface ComboDateProps {
    idDate1: string
    nameDate1: string
    valueDate1: string
    idDate2: string
    nameDate2: string
    valueDate2: string
    min: string
    max: string
    imgSrc?: string
    labelName: string
    textLabel: string
    altImg?: string
    ref1: React.RefObject<HTMLInputElement>,
    onChangeDate1: ChangeEventHandler<HTMLInputElement>
    ref2: React.RefObject<HTMLInputElement>,
    onChangeDate2: ChangeEventHandler<HTMLInputElement>
}


const ComboDate = (props: ComboDateProps) => {

    return (
        <div className={styles.ContainerComboDate}>


            <div className={styles.icon_container}>
                {typeof props.imgSrc !== 'undefined' &&
                    <Img src={props.imgSrc} className={styles.icon} alt='' />}
            </div>
            <div className={styles.lableDate}>
                <div>
                    <Label className={styles.label} text={props.textLabel} />
                </div>

                <div className={styles.ComboDate}>
                    <Date
                        id={props.idDate1}
                        name={props.nameDate1}
                        value={props.valueDate1}
                        min={props.min}
                        max={props.max}
                        ref={props.ref1}
                        onChange={props.onChangeDate1}
                    />

                    <Date
                        id={props.idDate2}
                        name={props.nameDate2}
                        value={props.valueDate2}
                        min={props.min}
                        max={props.max}
                        ref={props.ref2}
                        onChange={props.onChangeDate2}
                    />

                </div>
            </div>
        </div >
    )

}

export default ComboDate