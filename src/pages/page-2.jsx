import React, { useState } from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

import { fonts } from '../common/styles'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const navState = React.createContext()

const MainFrame = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SiteHook = styled.h1`
  font-family: ${fonts.headerFont};
  text-align: center;
  margin: 0px 50px;
`

const SecondPage = () => {
  const [vis, setVis] = useState(false)
  const context = {
    vis,
    toggleVis: () => setVis(!vis),
  }
  return (
    <navState.Provider value={context}>
      <Layout>
        <SEO title="Page two" />
        <MainFrame>
          <SiteHook>Digitally creative & naturally curious</SiteHook>
        </MainFrame>
      </Layout>
    </navState.Provider>
  )
}

export default SecondPage
