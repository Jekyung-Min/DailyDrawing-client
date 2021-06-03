import React from "react";
import styles from "./footer_below.module.css";
import { Link } from "react-router-dom";

const FooterBelow = () => {
  return (
    <div className={styles.container}>
      <section className={styles.social_media}>
        <div className={styles.social_wrap}>
          <div>
            <Link to="/" className={styles.social_logo}>
              <i className={`fas fa-palette ${styles.fa_palette}`} />
              DailyDrawing
            </Link>
          </div>
          <div className={styles.web_represent}>
            DailyDrawing © 2021 대표: 민제경 민제현 함민우 백현준
          </div>
          <div className={styles.social_icons}>
            <Link
              className={styles.social_link}
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              className={styles.social_link}
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              className={styles.social_link}
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              className={styles.social_link}
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterBelow;
