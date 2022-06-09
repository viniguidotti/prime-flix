import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './popular.css';

function Populares(){
    const [filmesPopulares, setFilmesPopulares] = useState([]);

    useEffect(() => {
        async function loadFilmesPopulares(){
            const response = await api.get("movie/popular", {
                params: {
                    api_key: 'a8dcc7670d0c326f01b7099dafa92c9c',
                    language: 'pt-BR',
                    page: 1
                }
            })

            setFilmesPopulares(response.data.results);
        }

        loadFilmesPopulares();

    }, [])

    return(
        <div className='container'>
            <div className='lista-filmes-populares'>
                {filmesPopulares.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Populares;