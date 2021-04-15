import React from 'react';
import NavBar from '../components/NavBar';
import CardMusicBox from '../components/CardMusicbox';

function MinhasMusicas() {
    return (
        <>
            <NavBar />
            <body>
                <div className="container">
                    <div className="filter">
                        <button className="btn-green right">Adicionar</button>
                    </div>
                </div>
                <div className="container">
                    <div className="music-boxes">

                        <CardMusicBox 
                            nome="alo"
                            genero="pop"
                            ano="132"
                        />

                    </div>

                </div>

            </body>

        </>
    );
}

export default MinhasMusicas;