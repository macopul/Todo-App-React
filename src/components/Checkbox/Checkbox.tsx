import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
  className?: string;
};

const Checkbox = ({ checked, onChange}: CheckboxProps) => {
  return (
    <div className={styles.CheckboxWrapper}>
      <label className={styles.checkboxLabelWrapper}>
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          className={styles.taskItemCheckbox}
        ></input>
        <div className={styles.checkmark}></div>
      </label>
    </div>
  );
};

export default Checkbox;
