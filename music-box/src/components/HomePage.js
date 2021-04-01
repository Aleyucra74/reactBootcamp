import React from 'react';
import indexImg from '../assets/images/index-img.png';

function HomePage() {

    return(
        <div className="container index">
            <div className="index-content">
                <div className="box-text-index">
                    <div className="info-index">
                        <h1>Faça parte do nosso dicionário de música </h1>
                        <h3>Contribua e fique por dentro das novidades  </h3>
                    </div>
                    <div className="img-index"></div>
                    <button className="btn-green">Conhecer agora</button>
                </div>     
                <img src={indexImg} alt="" className="index-img"/>
            </div>  
        </div>
    );

}


export default HomePage;