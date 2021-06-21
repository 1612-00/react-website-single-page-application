import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './NavBar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Xử lý kiểm tra click vào phần tử
  const handleClick = () => setClick(!click);

  // Xử lý tắt menu cho chế độ mobile
  const closeMobileMenu = () => setClick(false);

  // Khi màn hình nhỏ hơn 960 (điện thoại và tablet) chuyển sang chế độ mobile, 
  // ẩn nút sign-up và hiện menu cho mobile
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Tránh hiện lại button sign-up khi thay đổi chiều rộng màn hình
  useEffect(() => {
    showButton();
  }, [])

  // Thêm sự kiện để ẩn-hiện button sign-in mỗi khi resize màn hình
  window.addEventListener('resize', showButton)

  return (
    <>
    {/* ======================================NAVBAR=========================================== */}
      <nav className="navbar">
        <div className="navbar-container">
        {/* ====================================LOGO========================================= */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        {/* =====================================LINK======================================== */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>
      {/* ===================================BUTTON SIGN UP==================================== */}
          {button && <Button buttonStyle="btn-outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
