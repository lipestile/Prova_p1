import Pagina from '@/components/Pagina'
import apiAnimes from '@/services/apiAnimes'
import Link from 'next/link'
import React from 'react'
import { Table } from 'react-bootstrap'
import { FaBeer } from 'react-icons/fa';

const index = ({ animes }) => {
  return (
    <Pagina titulo="Anime">
         <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Detalhes</th>
                            <th>titulo</th>
                            <th>Duração</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animes.map(item => (
                        <tr>
                            <td> <Link className='btn btn-dark' href={'/animes/' + item.mal_id}><FaBeer></FaBeer>_detalhes</Link></td>
                            <td>{item.title}</td>
                            <td>{item.duration}</td>
                            <td>{item.year}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>


    </Pagina>
  )
}

export default index
export async function getServerSideProps(context) {
  const resultado = await apiAnimes.get("/anime")
  const animes = resultado.data.data
  return {
      props: {
        animes
      }, 
  }
}

