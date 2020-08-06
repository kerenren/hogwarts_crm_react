import React, { useState } from "react";
import {
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarNav,
  CNavbarBrand,
  CToggler,
  CNavLink,
  CDropdown,
  CForm,
  CInput,
  CButton,
} from "@coreui/react";
import styles from "../styles/NavBar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // path to profile: /students/<string:student_email => user email is required

  return (
    <CNavbar expandable="sm" className={styles.NavBar}>
      <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
      <CNavbarBrand href="/dashboard">Hogwarts CRM</CNavbarBrand>
      <CCollapse show={isOpen} navbar>
        <CNavbarNav>
          <CNavLink href="/dashboard">Home</CNavLink>
          <CNavLink>Profile</CNavLink>
        </CNavbarNav>
        <CNavbarNav className="ml-auto">
          <CForm inline>
            <CInput className="mr-sm-2" placeholder="Search" size="sm" />
            <CButton
              className={styles.SearchBtn}
              type="submit"
            >
              <i className="fas fa-search"></i>
            </CButton>
          </CForm>
          <CDropdown inNav>
            <CDropdownToggle color="primary">Lang</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>EN</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CDropdown inNav>
            <CDropdownToggle color="primary">User</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="/admin/signup">Sign up</CDropdownItem>
              <CDropdownItem href="/admin/log_in">Login</CDropdownItem>
              <CDropdownItem>Logout</CDropdownItem>
              <CDropdownItem href="/admin/edit_student">
                Edit profile
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CNavbarNav>
      </CCollapse>
    </CNavbar>
  );
};

export default Navbar;
