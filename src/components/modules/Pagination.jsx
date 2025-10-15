import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ page, setPage,loading }) {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((p) => p - 1);
  };

  const nextHandler = () => {
    if (page >= 10) return;
    setPage((p) => p + 1);
  };

  if (loading) {
    return null;
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={previousHandler}
        disabled={page === 1}
      >
        Previous
      </button>

      <p
        className={`${styles.page} ${page === 1 ? styles.active : null}`}
        onClick={() => setPage(1)}
      >
        1
      </p>
      <p
        className={`${styles.page} ${page === 2 ? styles.active : null}`}
        onClick={() => setPage(2)}
      >
        2
      </p>
      <span className={styles.dots}>...</span>

      {page > 2 && page < 9 && (
        <>
          <p className={`${styles.page} ${styles.active}`}>{page}</p>
          <span className={styles.dots}>...</span>
        </>
      )}

      <p
        className={`${styles.page} ${page === 9 ? styles.active : null}`}
        onClick={() => setPage(9)}
      >
        9
      </p>
      <p
        className={`${styles.page} ${page === 10 ? styles.active : null}`}
        onClick={() => setPage(10)}
      >
        10
      </p>

      <button
        className={styles.button}
        onClick={nextHandler}
        disabled={page === 10}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
