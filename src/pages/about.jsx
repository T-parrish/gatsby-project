import React, { useState } from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

import { fonts } from '../common/styles'

import Layout from '../components/layout'
import SEO from '../components/seo'

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
  return (
    <Layout>
      <SEO title="Page two" />
      <MainFrame>
        <SiteHook>Digitally creative & naturally curious</SiteHook>
      </MainFrame>
    </Layout>
  )
}

export default SecondPage
