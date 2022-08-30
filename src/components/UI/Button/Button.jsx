import React from "react";
import "./Button.scss";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const COLOR = ["primary", "blue", "red", "green", "red-text"];

/**
 * This is a Re-usable button component.
 * It uses the styles from the Button.scss
 * @param {*} param0 it accepets, the type, onClick, buttonStyle, buttonColor, buttonSize and
 * the children that is passed as props for the button tag.
 * @returns it returns a Button component that can be used anywhere needed.
 */
const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn  ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
