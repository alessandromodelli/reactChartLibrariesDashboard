import Label from '../Label';
import styles from './InputText.module.css'
import React, { ChangeEventHandler } from 'react';


interface Props {
    type: string,
    placeholder: string,
    title: string,
    required: boolean,
    label?: string,
    labelClassName?: string,
        // ref?: React.MutableRefObject<undefined>
        ref?: React.RefObject<HTMLInputElement>,
        onChange?: ChangeEventHandler<HTMLInputElement>
    
}

const InputField = (props: Props) => {
    return (
        <>

            <div className={styles.form_group}>
                {props.label && <Label text={props.label} className={props.labelClassName ?? ""} />}
                <input className={styles.input} title={props.title} type={props.type} placeholder={props.placeholder} ref={props.ref} onChange={props.onChange} />
            </div>

        </>
    );
}

export default InputField;
