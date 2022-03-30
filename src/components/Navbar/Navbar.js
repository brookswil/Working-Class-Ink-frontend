import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              WORKING CLASS INK 
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>

              <NavItem>
                <NavLinks to='/'>HOME</NavLinks>
              </NavItem>
            
              <NavItem>
                <NavLinks to='/tattoo'>TATTOO</NavLinks>
              </NavItem>
           
              <NavItem>
                <NavLinks to='/piercing'>PIERCING</NavLinks>
              </NavItem>
            
              <NavItem>
                <NavLinks to='/laser'>LASER</NavLinks>
              </NavItem>
           
              <NavItem>
                <NavLinks to='/about'>ABOUT</NavLinks>
              </NavItem>
           
              <NavItem>
                <NavLinks to='/location'>LOCATION</NavLinks>
              </NavItem>
           
              <NavItem>
                <NavLinks to='/contact'>CONTACT</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/employee-portal'>
                    <Button primary>Employee portal</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/employee-portal'>
                    <Button fontBig primary>
                      Employee portal
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn> 
            </NavMenu>     
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;