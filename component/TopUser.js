import React from "react";
import styles from "../styles/Topuser.module.css";
import Image from "next/image";
export default function TopUser() {
  return (
    <div className={styles.content}>
      <h3>Yetakchi a'zolar</h3>
      <p>
        10 Dekabar 2021 yilda end 3ta faol a'zolarimiz sovga va sovrinlar
        beriladi. Noutbook, plansjet va smartwatch. Qatnashing va yutib oling.
        To'liq ma'lumot
      </p>
      <div className={styles.grid}>

          <h4>Top voice acting users</h4>
          <h4>Top listeners</h4>
        <div className={styles.card}>
          <div className={styles.item}>
            <div className={styles.block}>
              <Image src="/leader.png" width={72} height={72} alt="Leader" />
              <h4>Wade Warren</h4>
            </div>
            <span>20 000</span>
          </div>
        </div>
        <div className={styles.card}>
        <div className={styles.item}>
            <div className={styles.block}>
              <Image src="/leader.png" width={72} height={72} alt="Leader" />
              <h4>Wade Warren</h4>
            </div>
            <span>20 000</span>
          </div>
        </div>
        <div className={styles.card}>
        <div className={styles.item}>
            <div className={styles.block}>
              <Image src="/leader.png" width={72} height={72} alt="Leader" />
              <h4>Wade Warren</h4>
            </div>
            <span>20 000</span>
          </div>
        </div>
        <div className={styles.card}>
        <div className={styles.item}>
            <div className={styles.block}>
              <Image src="/leader.png" width={72} height={72} alt="Leader" />
              <h4>Wade Warren</h4>
            </div>
            <span>20 000</span>
          </div>
        </div>
        <div className={styles.card}>
        <div className={styles.item}>
            <div className={styles.block}>
              <Image src="/leader.png" width={72} height={72} alt="Leader" />
              <h4>Wade Warren</h4>
            </div>
            <span>20 000</span>
          </div>
        </div>
        <div className={styles.card}>
        <div className={styles.item}>
            <div className={styles.block}>
              <Image src="/leader.png" width={72} height={72} alt="Leader" />
              <h4>Wade Warren</h4>
            </div>
            <span>20 000</span>
          </div>
        </div>
        <a href="#">Barchasini ko'rish</a>
          <a href="#">Barchasini ko'rish</a>
      </div>
    </div>
  );
}