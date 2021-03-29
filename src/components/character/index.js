import React from 'react'
import Typography from '../typography'
import PropTypes from 'prop-types'
import { Container, Img } from './styles'

const Character = ({ image, origin, name, status, species }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Img src={image} />
      <Container>
        <Typography type="h3">{name}</Typography>
        <Typography>{species}</Typography>
        <Typography type="h5">{origin.name}</Typography>
        <Typography>{status}</Typography>
      </Container>
    </div>
  )
}

Character.propTypes = {
  image: PropTypes.string,
  origin: PropTypes.object,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
}

export default Character
