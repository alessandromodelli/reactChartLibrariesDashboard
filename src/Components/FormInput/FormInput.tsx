import React from 'react'
import styles from './FormInput.module.css'
import Button from '../UI/Button'

interface FormInputProps{
    handleOnChange: (e: any) => void
    handleOnSubmit: (e: any) => void
}

const FormInput = (props: FormInputProps) => {
    return (
        <div >
            <form className={styles.form}>
                <input
                    type={"file"}
                    id={"csvFileInput"}
                    className={styles.inputBtn}
                    accept={".csv"}
                    onChange={props.handleOnChange}
                />

                <Button name={'Import CSV'} className={styles.importBtn} typeSubmit='submit' onClick={(e) => {
                        props.handleOnSubmit(e);
                    }} />
            </form>
        </div>
    )
}

export default FormInput
