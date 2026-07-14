import type ButtonTypes from "./Button.types";

const Button = ({children, onClick, className}: ButtonTypes) => {
    return(
              <button
          type="button"
          className={className}
          onClick={onClick}
        >
          {children}
                  </button>
    )
}

export default Button;