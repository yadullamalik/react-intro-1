import { useState } from "react";
import styles from "./Contact.module.css";

export const ContactCard = ({ name, gmail, phone }) => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
    console.log("show:", show);
  };
  return (
    <div className={styles.main} onClick={handleShow}>
      <div className={styles.img}></div>
      <div>
        <h4>{name}</h4>
        {show ? (
          <p className={styles.p}>{gmail}</p>
        ) : (
          <p className={styles.p}>
            <span>{gmail}</span>
            <br />
            <span>{phone}</span>
          </p>
        )}
      </div>
    </div>
  );
};
