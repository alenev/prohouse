import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import WalletConnect from "../walletConnect/index";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useMain } from "../../context/mainContext";
const logoLight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAdCAYAAACDgbNCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARwSURBVHgB7VntVRs7EB3eef/ZVwFLBYEKslQQXgVZVwBUEFNBTAU4FQQq8KYChwq8qYBNBcpc6yoosuSsv8Ase8+ZI3s1mpE00nzsiqwBY8wnkPR4O1CD50pT84QZnkmPbkONfK70SMLvksYHldKjm1DjfuZNn/o3nZ5gxr4+DHQJgZsfLeEb9mGgQwjdfAv+Pgx0ASk332JcHwZeMzzDj2RNeGFgKD32FgfhAzXYZN5xcHAmGwBeQ5umrRzlL7T5uITlQelO5dWyI+gcMm0+47fqGSzhK7V5r3SvfHfSFcD47gA8pxzmDG2ws3DCsDXHX/jGXfBs/8j+oVI6DuhU6Yb9Q3qJHhviX9lDJFz7pRr9SNtzUsVktFD6roQxpdI7seHmyg2kO3d9QKP0bRcum3M693T9wFxVVxXwgQfzQihrgr6MMhp/jjz0HzguKTuQ8Y780PFA/loSk5+8sNufLOFxieRtMGZo/nztbLwxF8aWqw7+75lZfGn1x/jEPKJu39hvHr4eX9ctDeLvj4l5MW8es4jsR6514smfBrJPzFPV9UjembfmE/C1vvncJCRDWaR7sMtEjPqh1yWED0E3nuNk/y/WC+QcU2ozcn3uFnlrwc3AQTqL6CskjaMIP3KRoVgPNHC3kbq+ivU8Gee4Erj2If+e+nttbFV2oXQpNiTm1If2SnlHHi94sG4chuNV3H4hdrOwuU3wHDSW7SA3i4nUIXXnYjc3dNd4fuxtimsv2F757hN8qgPZPG5AAUNHXOeq3q9kO/BlURcOF24xXpwd6bMfsj0Mxe6Hs4nbp7FveM5lxMOBfSnXifnnbvIUNJPtIldKZfSVxL1MKo7N3Zv2jcMOxFmd/73YjSgo28e1pPHByQa4D6AmFn89XfBQOAhjWQEcj/lgX+C2K7GX8BvaQOd7b15lRNwh23wfE75KKVZjN2Fi5KGWNJp1+lTXMNVHY5+sIm9FZLH5qF4YHDcbBi7Euvp5DqLNdXABClIMc77XlO2vAxgjQ8xMHJwjj29TPbKmrjzCGztYwtDl5y2FWG9QUg68yk+y34RuP8Smdb5byAUzyt8kdgG1vCy+sF0II8x4S/7dqOSjsSuxNzamy4WWWp7Ci0taPwa8eSjD2I9sEyZsTmfNcHbKRwXbsZPrVwD+XIx9hb+S23eG/k9sfeli0UDir2UrWR43nwM4+YjPl8zecRiwDtS+JXmut+RpsA9T6sKmP3i6Lj1dbh9x4OaHgpcF8fuQ87qTp/kBldiqBLzwIPd8nnF9jgc2qZQH64RNpswVao+35P+bhRWYRH2OzTOJunQbMC3q/CVjbpfwoHoYm0VMw4TIbF7np3RNTLyeRxyfBbzIyDP+ngWyJxHZqONvTXDLE7JdzZ+Dp/WHHU4efWexjPY1wFhXj02qD3b/gQi6GupqWsxLWvJCdi4t12G8SuSv8s0L3fwez499/LDT45nQG/8Nozf+G0Zv/DeMVJ1/Ekn6MunRKcSMf5/gRYmAlw+19OgEfgGVH5i3bhqFlwAAAABJRU5ErkJggg==";

function NavBar() {
  const { theme } = useMain();
  const logoSrc = theme === "lightTheme" ? logoLight : logo;
  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img className="logo" src={logoSrc} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Marketplace</Nav.Link>
            <Nav.Link href="#action2" className="px-lg-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#action3">Developers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center order navbar-icons-row">
          <span className="line d-lg-inline-block d-none"></span>
          <ThemeToggle />
          <i className="fa-regular fa-heart"></i>
          <WalletConnect />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
