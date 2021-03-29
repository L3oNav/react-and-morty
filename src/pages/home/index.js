import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { useParams } from 'react-router-dom'
import Character from '../../components/character'

const Home = () => {
  let { id } = useParams()
  const [character, setCharacter] = useState({})
  const [route, setRoute] = useState(id)

  useEffect(async () => {
    const getCharacter = async () => {
      await axios
        .get(`https://rickandmortyapi.com/api/character/${id || 1}`)
        .then((response) => response.data)
        .then((json) => setCharacter(json))
    }
    await getCharacter()
  }, [route])

  if (
    character &&
    Object.keys(character).length !== 0 &&
    character.constructor === Object
  ) {
    return (
      <Container>
        <Character {...character} />
      </Container>
    )
  } else {
    return 'loading...'
  }
}

export default Home
