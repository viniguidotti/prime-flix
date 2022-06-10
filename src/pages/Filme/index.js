import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css';
import { toast } from 'react-toastify';

function Filme(){
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadFilme(){
            await api.get(`movie/${id}`, {
                params: {
                    api_key: 'a8dcc7670d0c326f01b7099dafa92c9c',
                    language: 'pt-BR'
                }
            }).then((response)=> {
                setFilme(response.data);
                setLoading(false);
            }).catch(()=>{
                navigate("/", { replace: true });
                return;
            })
        }

        loadFilme();

        return () => {
            console.log("COMPONENTE DESMONTADO");
        }

    }, [id, navigate])

    function salvarFilme(){
        const lista = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(lista) || [];

        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id);

        if (hasFilme){
            toast.warn("Este filme já está na sua lista");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));

        toast.success("Filme salvo com sucesso!");

    }

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
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="noreferrer" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                    Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;