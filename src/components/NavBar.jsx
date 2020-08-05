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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CNavbar expandable="sm" color="info">
      <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
      <CNavbarBrand>Hogwarts CRM</CNavbarBrand>
      <CCollapse show={isOpen} navbar>
        <CNavbarNav>
          <CNavLink>Home</CNavLink>
          <CNavLink>Profile</CNavLink>
        </CNavbarNav>
        <CNavbarNav className="ml-auto">
          <CForm inline>
            <CInput className="mr-sm-2" placeholder="Search" size="sm" />
            <CButton color="light" className="my-2 my-sm-0" type="submit">
              Search
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
              <CDropdownItem>Sign up</CDropdownItem>
              <CDropdownItem>Login</CDropdownItem>
              <CDropdownItem>Logout</CDropdownItem>
              <CDropdownItem>Edit profile</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CNavbarNav>
      </CCollapse>
    </CNavbar>
  );
};

export default Navbar;
