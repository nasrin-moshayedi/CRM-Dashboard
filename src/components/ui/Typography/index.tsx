import type TpographyPropsss from "./Typography.types";
import "./style.scss";

const Typography = ({className, children}: TpographyPropsss) => {
    return(
        <p className={className}>{children}</p>
    )
}

export default Typography;