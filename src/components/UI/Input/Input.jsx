import classes from "./Input.module.scss";

/**
 * This is a resuable input component
 * @param {*} props it accepst label, id,value,type,and onChang.
 * @returns a resuable input tag which uses styles from Input.module.scss
 * it returns a label and input tag
 */
const Input = (props) => {
  return (
    <div className={classes["text-input"]}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
