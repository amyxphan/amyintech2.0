import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 45px;
  display: flex;
  justify-content: right;
  padding-right: 10%;
  z-index: 12;
  position: fixed;
  width: 100%;
  top: 0;
`;

export const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    &.active {
        text-decoration: underline;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: white;
    height: 22px;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -24px;
`;