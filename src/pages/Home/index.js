import api from '../../services/api';
import { useEffect, useState } from 'react';

//URL: movie/now_playing?api_key=a8dcc7670d0c326f01b7099dafa92c9c

function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: 'a8dcc7670d0c326f01b7099dafa92c9c',
                    language: 'pt-BR',
                    page: 1
                }
            })

            console.log(response.data.results);

        }

        loadFilmes();

    }, [])

    return(
        <div>
            <h1>
                Bem Vindo á Home
            </h1>
        </div>
    )
}

export default Home;