/* eslint-disable import/no-cycle */
/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { Link } from 'gatsby'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'
import { palette, fonts } from '../common/styles'

import Header from './header'
import './layout.css'

const Navlink = styled(Link)`
  position: relative;
  font-size: 1.2rem;
  color: ${palette.whiteText};
  text-decoration: none;
  font-family: ${fonts.headerFont};
  will-change: transform;
  text-shadow: 1px 1px 3px ${palette.blueShadow};
  transform: ${props => (props.hovered ? 'scale(1.25)' : 'scale(1)')};
  transition: all 0.3s ease-in-out;
  padding: 5px 10px;
  overflow: hidden;
`

const HiddenNavWrapper = styled.div`
  position: absolute;
  z-index: 5;
  min-height: 30%;
  width: 100%;
  border-radius: 0px 0px 2px 2px;
  background-color: ${palette.darkBlue};
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 3px 0px ${palette.blueShadow};
  will-change: transform;
  transform: ${props => (!props.vis ? 'translateY(-100%)' : 'translateY(0%)')};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const LineAnimation = styled.div`
  position: relative;
  z-index: 8;
  height: 0.07rem;
  width: 100%;
  box-shadow: 0px 1px 3px 0px ${palette.blueShadow};
  will-change: transform;
  transform: ${props => (props.hovered ? 'translateX(0%)' : 'translateX(-150%)')};
  transition: all 0.2s ease-in-out;
  background-color: ${palette.whiteText};
`

export const navState = React.createContext()

const Layout = ({ children }) => {
  const routes = ['/', '/about/', '/blog/']
  const pageNames = ['Home', 'About', 'Blog']

  const [vis, setVis] = useState(false)
  const context = {
    vis,
    toggleVis: () => setVis(!vis),
  }
  const [hovered, setHovered] = useState(new Array(routes.length).fill(0))

  const handleLinkHover = index => {
    setHovered(
      hovered.map((link, idx) => {
        return idx === index ? 1 : 0
      })
    )
  }

  const handleMouseOff = index => {
    setHovered(
      hovered.map((link, idx) => {
        return idx === index && 0
      })
    )
  }

  const menuLinks = routes.map((route, idx) => {
    return (
      <React.Fragment>
        <Navlink
          onMouseOver={() => handleLinkHover(idx)}
          onMouseLeave={() => handleMouseOff(idx)}
          onFocus="none"
          hovered={hovered[idx] === 1}
          to={route}
        >
          {pageNames[idx]}
          <LineAnimation hovered={hovered[idx] === 1} />
        </Navlink>
      </React.Fragment>
    )
  })

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <navState.Provider value={context}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <HiddenNavWrapper vis={vis}>{menuLinks}</HiddenNavWrapper>
          {children}
        </navState.Provider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
