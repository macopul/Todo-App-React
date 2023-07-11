import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
  className?: string;
};

const Checkbox = ({ checked, onChange, className }: CheckboxProps) => {
  return (
    <div className={styles["checkbox-wrapper"]}>
      <label className={styles["checkbox-label-wrapper"]}>
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          className={styles["task-item-checkbox"]}
        ></input>
        <div className={styles.checkmark}></div>
      </label>
    </div>
  );
};

export default Checkbox;
