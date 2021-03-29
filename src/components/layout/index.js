import React from 'react'
import PropTypes from 'prop-types'
import { Header, Menu, Anchor } from './styled.js'
import { Container } from 'react-bootstrap'
import Typography from '../typography'

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <Typography type="h1">&#8226;The Rick and Morty&#8226;</Typography>
      </Header>
      <Menu>
        <Anchor to="/">Characters</Anchor>
        <Anchor to="/episodies">Episodes</Anchor>
        <Anchor to="/locations">Locations</Anchor>
      </Menu>
      {children}
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout
