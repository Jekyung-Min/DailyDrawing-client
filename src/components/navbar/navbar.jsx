import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { signOut } from "../../actions";

const URL = process.env.REACT_APP_SERVER_URL;
const Navbar = ({
  link,
  aboutRef,
  partnersRef,
  setShowSignModal,
  setShowProfileModal,
  setShowParticipateModal,
}) => {
  const userInfo = useSelector(state => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [accessToken, setAccessToken] = useState(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    setAccessToken(userInfo.accessToken);
  });

  const showButton = () => {
    if (window.innerWidth <= 1623) {
      // if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setClick(false);
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

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

  const handleBtnLogOut = async () => {
    if (accessToken) {
      try {
        await axios.get(`${URL}/sign/out`, {
          headers: { authorization: `Bearer ${accessToken}` },
        });
        dispatch(signOut());
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
          <i className={`fas fa-palette ${styles.fa_palette}`} />
          DailyDrawing
        </Link>
        {accessToken ? (
          <div className={`${styles.user} ${styles.userbox_react}`}>
            <img
              src={`${URL}/profile/get/${userInfo.profileImg}`}
              className={styles.user_Img}
              onClick={() => {
                setShowProfileModal(true);
              }}
            />
            <span className={styles.user_nick}>{userInfo.nickname}</span>
          </div>
        ) : null}
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
              to="/community"
              className={styles.link}
              onClick={closeMobileMenu}
            >
              Community
            </Link>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              onClick={() => {
                if (accessToken) {
                  setShowParticipateModal(pre => !pre);
                  closeMobileMenu();
                } else {
                  setShowSignModal(pre => !pre);
                  closeMobileMenu();
                }
              }}
            >
              Participate
            </a>
          </li>
          {accessToken ? (
            <li>
              <button
                to="/"
                className={styles.link_mobile}
                onClick={handleBtnLogOut}
              >
                Sign out
              </button>
            </li>
          ) : (
            <li>
              <button
                className={styles.link_mobile}
                onClick={() => {
                  setShowSignModal(true);
                  closeMobileMenu();
                }}
              >
                Sign in
              </button>
            </li>
          )}
        </ul>
        {accessToken
          ? button && (
              <div className={styles.user}>
                <img
                  src={`${URL}/profile/get/${userInfo.profileImg}`}
                  className={styles.user_Img}
                  onClick={() => {
                    setShowProfileModal(true);
                  }}
                />
                <span className={styles.user_nick}>{userInfo.nickname}</span>
                <button className={styles.btn_logout} onClick={handleBtnLogOut}>
                  Sign Out
                </button>
              </div>
            )
          : button && (
              <div className={styles.login}>
                <button
                  className={styles.btn_logout}
                  onClick={() => {
                    setShowSignModal(true);
                  }}
                >
                  Sign In
                </button>
              </div>
            )}
      </div>
    </>
  );
};

export default Navbar;
