import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => {
  const MainFrame = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  return (
    <Layout>
      <SEO title="Page two" />
      <MainFrame>
        <p>sup wichu</p>
      </MainFrame>

    </Layout>
  )
}

export default SecondPage
