import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import { toast } from 'react-toastify';

function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        const listaFilmes = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(listaFilmes) || [])

    }, []);

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item) => {
            return (item.id !== id)
        });

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
        toast.success("Filme excluído com sucesso!");
    }

    return(
        <div className='meus-filmes'>
            <h1>
                Meus Filmes
            </h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo</span>}

            <ul>
                {filmes.map((filme) => {
                    return (
                        <li key={filme.id}>
                            <span>
                                {filme.title}
                            </span>
                            <button>
                                <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                            </button>
                            <button onClick={() => excluirFilme(filme.id)}>
                                Excluir
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;