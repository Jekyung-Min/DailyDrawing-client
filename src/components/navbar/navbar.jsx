import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../button/button";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = ({
  link,
  accessToken,
  aboutRef,
  partnersRef,
  courseRef,
  portfolioRef,
  setShowSignModal,
}) => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1520) {
      // if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setClick(false);
      setButton(true);
    }
  };

  const scrollToStadium = () => {
    setClick(false);
    window.scroll({
      top: 40,
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    setClick(false);
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToPartners = () => {
    setClick(false);
    partnersRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToCourse = () => {
    setClick(false);
    courseRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollPortfolio = () => {
    setClick(false);
    portfolioRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
          <i className={`fas fa-palette ${styles.fa_palette}`} />
          DailyDrawing
        </Link>
        <div className={styles.icon} onClick={handleClick}>
          <i
            className={
              click
                ? `fas fa-times ${styles.fa_times}`
                : `fas fa-bars ${styles.fa_bars}`
            }
          />
        </div>
        <ul
          className={
            click ? `${styles.menu} ${styles.active}` : `${styles.menu}`
          }
        >
          {link === "listPage" ? (
            <li className={styles.item}>
              <div
                className={styles.link}
                onClick={() =>
                  history.push({
                    pathname: "/",
                    state: {
                      scroll: 1,
                    },
                  })
                }
              >
                About
              </div>
            </li>
          ) : (
            <li className={styles.item}>
              <div className={styles.link} onClick={scrollToStadium}>
                About
              </div>
            </li>
          )}
          {link === "listPage" ? (
            <li className={styles.item}>
              <div
                className={styles.link}
                onClick={() =>
                  history.push({
                    pathname: "/",
                    state: {
                      scroll: 2,
                    },
                  })
                }
              >
                Statistics
              </div>
            </li>
          ) : (
            <li className={styles.item}>
              <div className={styles.link} onClick={scrollToAbout}>
                Statistics
              </div>
            </li>
          )}
          {link === "listPage" ? (
            <li className={styles.item}>
              <div
                className={styles.link}
                onClick={() =>
                  history.push({
                    pathname: "/",
                    state: {
                      scroll: 3,
                    },
                  })
                }
              >
                Partners
              </div>
            </li>
          ) : (
            <li className={styles.item}>
              <div className={styles.link} onClick={scrollToPartners}>
                Partners
              </div>
            </li>
          )}

          <li className={styles.item}>
            <Link
              to="/participate"
              className={styles.link}
              onClick={closeMobileMenu}
            >
              Participate
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/community"
              className={styles.link}
              onClick={closeMobileMenu}
            >
              Community
            </Link>
          </li>
          {accessToken ? (
            <li>
              <Link to="/" className={styles.link_mobile}>
                Sign out
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/" className={styles.link_mobile}>
                Sign in
              </Link>
            </li>
          )}
        </ul>
        {accessToken
          ? button && (
              <div className={styles.login}>
                <Button buttonStyle="two" path="/">
                  Sign out
                </Button>
              </div>
            )
          : button && (
              <div className={styles.login}>
                <Button buttonStyle="two" setShowSignModal={setShowSignModal}>
                  Sign in
                </Button>
              </div>
            )}
      </div>
    </>
  );
};

export default Navbar;
