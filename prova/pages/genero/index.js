import Pagina from '@/components/Pagina'
import apiAnimes from '@/services/apiAnimes'
import React from 'react'
import { Container } from 'react-bootstrap'

const index = ({generos}) => {
    return (
        <Pagina>
            <Container>
                <ul>
                    {generos.map(item => (
                        <li> {item.name} ({item.count}) </li>
                    ))}
                </ul>
            </Container>

        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {
    const resultado = await apiAnimes.get("/genres/anime")
    const generos = resultado.data.data
    return {
        props: {
        generos
        }, 
    }
  }