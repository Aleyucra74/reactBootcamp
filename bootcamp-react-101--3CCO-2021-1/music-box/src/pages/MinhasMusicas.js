import React, { useEffect, useState } from 'react';
import CardMusica from '../components/CardMusica';
import NavBar from '../components/NavBar';
import Button from '../components/Button';

import api from '../api';

function MinhasMusicas() {

    const [musicas, setMusicas] = useState([]);

    useEffect(() => {
        
        async function getAllMusicas() {
            const resposta = await api.get("/");

            console.log(resposta.data);

            setMusicas(resposta.data);
        }
                
        getAllMusicas();

    },[]);

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="filter">
                    {/* adicionar button com filho, lado e destino aqui! */}
                    <Button lado="right" destino="/add-musica">Adicionar</Button>
                    {/* adicionar button com filho, lado e destino aqui! */}
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">

                {
                    musicas.map((musica) => (
                        <CardMusica url={musica.url} nome={musica.nome} genero={musica.genero} ano={musica.ano}/>
                    ))
                }

                <CardMusica nome="Assalto ao Trap" genero="Trap" ano="2020"/>

                <CardMusica nome="Hatsune Miku" genero="jpop" ano="2020" />

                <CardMusica nome="Melhor eu ir" genero="Pagode" ano="2015" />

                <CardMusica nome="Na sua estante" genero="Emoxinho :3" ano="2000"/>

                </div>
            </div>
        </>
    );
}

export default MinhasMusicas;