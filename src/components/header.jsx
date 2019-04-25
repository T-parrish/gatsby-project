import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

import styled, { keyframes } from 'styled-components'
import { fonts, palette } from '../common/styles'

const pulse = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(130deg);
}
`

const HeaderTitle = styled.h1`
  font-family: ${fonts.highlightFont};
`

const HeaderWrapper = styled.header`
  position: relative;
  height: 80px;
  background: linear-gradient(123deg, ${palette.darkBlue}, ${palette.lightBlue});
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  align-items: center;
`
const MenuLine = styled.span`
  position: relative;
  width: 20px;
  height: 4px;
  border-radius: 3px;
  background-color: ${palette.whiteText};
  transition: all .2s ease-in-out;
  transform-origin: center;
  &:nth-child(1) {
    transform: ${props =>
      props.isActive ? 'translateY(.5rem) rotate(135deg)' : 'rotate(0deg) translate(0px)'};
  }
  &:nth-child(2) {
    transform: rotate(0deg);
    opacity: ${props => (props.isActive ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${props =>
      props.isActive ? 'translateY(-.5rem) rotate(-135deg)' : 'rotate(0deg) translate(0px)'};
  }
`

const HamburgerMenu = styled.div`
  position: relative;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  z-index: 10;
`

const Header = ({ siteTitle }) => {
  const [openBurger, setOpenBurger] = useState(false)

  useEffect(() => {
    console.log(openBurger)
    return () => {}
  }, [openBurger])

  return (
    <HeaderWrapper>
      <HeaderTitle style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            position: 'relative',
            textDecoration: 'none',
            zIndex: '10',
            cursor: 'pointer',
            color: `${palette.whiteText}`,
          }}
        >
          {siteTitle}
        </Link>
      </HeaderTitle>
      <HamburgerMenu onClick={() => setOpenBurger(!openBurger)}>
        <MenuLine isActive={openBurger} lineKey={0} />
        <MenuLine isActive={openBurger} lineKey={1} />
        <MenuLine isActive={openBurger} lineKey={2} />
      </HamburgerMenu>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
