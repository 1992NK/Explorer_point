import styles from "./header.module.css";

const HeaderActions = ({ onMenuOpen }) => {
  return (
    <div className={styles.actions}>
      <button className={styles.iconButton} type="button" aria-label="Search">
        <svg viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7"></circle>
          <path d="M20 20L16.2 16.2"></path>
        </svg>
      </button>

      <button className={styles.iconButton} type="button" aria-label="Wishlist">
        <svg viewBox="0 0 24 24">
          <path d="M20.8 4.6C18.7 2.5 15.3 2.5 13.2 4.6L12 5.8L10.8 4.6C8.7 2.5 5.3 2.5 3.2 4.6C1.1 6.7 1.1 10.1 3.2 12.2L12 21L20.8 12.2C22.9 10.1 22.9 6.7 20.8 4.6Z"></path>
        </svg>
      </button>

      <button className={`${styles.iconButton} ${styles.menuButton}`} type="button" aria-label="Open menu" onClick={onMenuOpen}>
        <svg viewBox="0 0 24 24">
          <path d="M4 6H20"></path>
          <path d="M4 12H20"></path>
          <path d="M4 18H20"></path>
        </svg>
      </button>
    </div>
  );
};

export default HeaderActions;