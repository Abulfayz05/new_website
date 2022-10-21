import React from "react";
import styles from "../styles/AboutOromgoh.module.css"

export default function AboutOromgoh() {
  return (
    <div className={styles.container}>
      <h1>About Oromgoh</h1>
      <p>
        {" "}
        Sun'iy intelektga qiziquvchi yoshlarni qo’llab-quvvatlashga qaratilgan "UzbekVoice AI” oromgohida o'quvchilar zamonaviy texnologiyalar bo‘yicha bilim, ko‘nikmalarga ega bo‘lishadi.
        Siz oromgohdan yangi bilimlarni, foydali tanishuvlarni ottirishingiz, tog'li hududlarda dam olishingiz va UzbekVoice loyihasiga o'z hissangizni qo'shishingiz mumkin bo'ladi.
        Ha aytkancha, oromgohga qatnashish mutlaqo bepul!
      </p>
    </div>
  );
}
