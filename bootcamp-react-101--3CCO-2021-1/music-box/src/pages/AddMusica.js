import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import addMusic from '../assets/images/add-music-img.png';
import api from '../api';

function AddMusica() {

    const [musicData, setMusicData] = useState({
        nome: "",
        genero: "",
        ano: "",
        url: ""
    });

    function handle(event){

        const newMusic = {...musicData}
        newMusic[event.target.id] = event.target.value;
        setMusicData(newMusic);
        console.log(newMusic);

    }

    function enviar(event){

        event.preventDefault();
        api.post("/",{
            nome: musicData.nome,
            genero: musicData.genero,
            ano: musicData.ano,
            url: musicData.url
        }).then((resposta)=>{console.log("post:",resposta);})

    }


    return (
        <>
            <NavBar />
            <div className="container">
                <div className="add-music">
                    <form onSubmit={ (event)=>enviar(event) }>
                        <h1>Adicionar</h1>
                        <div>
                            <label>Nome: <input type="text" id="nome" onChange={ (event)=> {handle(event)} }/></label>
                        </div>
                        <div>
                            <label>Genêro: <input type="text" id="genero" onChange={ (event)=>{handle(event) } }/></label>
                        </div>
                        <div>
                            <label>Ano Lançamento:</label>
                            <input type="text" id="ano" onChange={ (event)=>{handle(event) } } />
                        </div>

                        <div>
                            <label> Imagem (url):</label>
                            <input type="text" id="url" onChange={ (event)=>{handle(event) } } />
                        </div>
                        <div>
                            <button className={`btn-green left`} type="submit">Postar</button>
                        </div>
                    </form>
                    <img src={addMusic} alt="" />
                </div>
            </div>

        </>
    )
}

export default AddMusica;