import "./index.scss";
import type { CardTypes } from "./Card.types";

const Card = ({children}: CardTypes) => {
    return(
        <div className="card">
            {children}
        </div>
    )
}

export default Card;