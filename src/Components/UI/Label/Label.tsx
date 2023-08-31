import styles from './Label.module.css';
import React from "react";

interface LabelProps {
    text: string,
    className: string,
}

const Label = (props: LabelProps) => {
    return (

        <label className={props.className}>{props.text}</label>
    )
}

export default Label;
