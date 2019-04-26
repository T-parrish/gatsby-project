import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import styled from 'styled-components'
import { fonts, palette } from '../common/styles'

// eslint-disable-next-line import/no-cycle
import { navState } from '../pages/page-2'

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
  box-shadow: 3px 0px 4px ${palette.blueShadow};
`
const MenuLine = styled.span`
  position: relative;
  width: 20px;
  height: 0.2rem;
  border-radius: 2px;
  background-color: ${palette.whiteText};
  transition: all 0.2s ease-in-out;
  transform-origin: left;
  will-change: transform;
`

const HamburgerMenu = styled.div`
  position: relative;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  z-index: 10;
  ${MenuLine}:nth-child(1) {
    transform: ${props => (props.isActive ? 'rotate(45deg)' : 'rotate(0deg)')};
  }
  ${MenuLine}:nth-child(2) {
    transform: rotate(0deg);
    opacity: ${props => (props.isActive ? 0 : 1)};
  }
  ${MenuLine}:nth-child(3) {
    transform: ${props => (props.isActive ? 'rotate(-45deg)' : 'rotate(0deg)')};
  }
`

const Header = ({ siteTitle }) => {
  const headerNavState = useContext(navState)
  const { vis, toggleVis } = headerNavState

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
      <HamburgerMenu isActive={vis} onClick={() => toggleVis()}>
        <MenuLine />
        <MenuLine />
        <MenuLine />
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
