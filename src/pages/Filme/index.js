import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css';

function Filme(){
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            const response = await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'a8dcc7670d0c326f01b7099dafa92c9c',
                    language: 'pt-BR'
                }
            }).then((response)=> {
                console.log(response);
                setFilme(response.data);
                setLoading(false);
            }).catch(()=>{
                console.log("Filme não encontrado")
            })
        }

        loadFilme();

        return () => {
            console.log("COMPONENTE DESMONTADO");
        }

    }, [])

    if (loading) {
        return(
            <div className='loading-filme-info'>
                <h2>
                    Carregando detalhes do filme...
                </h2>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className='area-buttons'>
                <button>Salvar</button>
                <button>
                    <a href={filme.homepage}>
                    Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;