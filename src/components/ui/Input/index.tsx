import "./index.scss";
import type { InputTypes } from "./Input.types";

const Input = ({children, className}: InputTypes) => {
    return(
        <input className={"input " + className} placeholder={children}>
        </input>
    )
}

export default Input;