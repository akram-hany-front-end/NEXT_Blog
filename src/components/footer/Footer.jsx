import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2026 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
<Image src="/1.png" width={15} className={styles.icon}  height={15} alt="Lama Dev Facebook icon"/>        
<Image src="/2.png" width={15} className={styles.icon}  height={15} alt="Lama Dev  icon"/>        
<Image src="/3.png" width={15} className={styles.icon}  height={15} alt="Lama Dev icon"/>        
<Image src="/4.png" width={15} className={styles.icon}  height={15} alt="Lama Dev icon"/>        
      </div>
    </div>
  );
};

export default Footer;
