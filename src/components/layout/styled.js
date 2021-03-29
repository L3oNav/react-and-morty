import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Header = styled.header`
  display: flex;
  justify-content: center;
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Anchor = styled(Link)`
  text-decoration: none;
  color: #000000;
  :hover {
    color: #f7391d;
  }
`
