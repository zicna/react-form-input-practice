import styles from "./SimpleInput.module.css"
const SimpleInput = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name"></label>
          <input type="text" id="name" />
        </div>
        <div className={styles.formGroup}>
            <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default SimpleInput
