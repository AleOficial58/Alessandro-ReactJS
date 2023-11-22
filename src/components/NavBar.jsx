import React from "react";
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <Flex>
          <Box bg="burlywood" p="4">
            <Link to={"/"}>
              <h3 className="brand">Sistemas</h3>
            </Link>
          </Box>
          <Spacer bg="burlywood" />
          <Box bg="burlywood" p="4">
            <Menu>
              <MenuButton className="menu">
                Secciones
              </MenuButton>
              <MenuList>
                <Link to={`/categoria/${"SIS1"}`}><MenuItem as="a">Sistema I</MenuItem></Link>
                <Link to={`/categoria/${"SIS2"}`}><MenuItem as="a">Sistema II</MenuItem></Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer bg="burlywood" />
          <Box bg="burlywood">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default NavBar;
