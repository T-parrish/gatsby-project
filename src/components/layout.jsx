/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { palette } from '../common/styles'
// eslint-disable-next-line import/no-cycle
import { navState } from '../pages/page-2'

import Header from './header'
import './layout.css'

const PageWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transition: all 2s ease-in-out;
  transform: ${props => (props.vis ? 'translateY(0px)' : 'translateY(0px)')};
`

const HiddenNavWrapper = styled.div`
  position: absolute;
  z-index: 5;
  height: 20%;
  width: 100%;
  border-radius: 0px 0px 2px 2px;
  background-color: ${palette.darkBlue};
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 2px 7px 2px ${palette.blueShadow};
  will-change: transform;
  transform: ${props => (!props.vis ? 'translateY(-100%)' : 'translateY(0%)')};
`

const Layout = ({ children }) => {
  const headerNavState = useContext(navState)
  const { vis } = headerNavState
  console.log(vis)
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
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <HiddenNavWrapper vis={vis}>abc 123</HiddenNavWrapper>
          {children}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
