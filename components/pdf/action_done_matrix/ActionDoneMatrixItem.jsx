import React from "react";
import styles from "./ActionDoneMatrix.module.css";

export default function ActionDoneMatrixItem({
  value,
  actionTaken,
  pageNumber,
  remarks,
}) {
  return (
    <tr className={styles["c5"]}>
      <td className={(styles["custom-td"], styles["c19"])}>
        <span className={styles["c1"]}>{value}</span>
      </td>
      <td className={(styles["custom-td"], styles["c20"])}>
        <span className={styles["c1"]}>{actionTaken}</span>
      </td>
      <td className={(styles["custom-td"], styles["c7"])}>
        <span className={styles["c1"]}>{pageNumber}</span>
      </td>
      <td className={(styles["custom-td"], styles["c14"])}>
        <span className={styles["c1"]}>{remarks}</span>
      </td>
    </tr>
  );
}
