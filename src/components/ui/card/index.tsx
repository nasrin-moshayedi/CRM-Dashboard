import "./index.scss";
import type { CardTypes } from "./Card.types";

const Card = ({children, className}: CardTypes) => {
    return(
        <div className={"card " + className}>
            {children}
        </div>
    )
}

export default Card;