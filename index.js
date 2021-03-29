var  container  =  document.getElementById("app");

function  Contador( props ) {

    const [ numero, setNumero ]  =  React.useState(0);

    function  somar() {
        setNumero( numero  +  1 ) ;
        console.log( "add 1 ao nmr = "  +  numero );
    }

    
    function  subtrair() {
        setNumero( numero  -  1 );
        console.log( "sub 1 ao nmr ="  +  numero );
    }


    return (
        <React.Fragment>
            <h1>{ props.titulo }</h1>
            <h2>{ numero }</h2>
            <button  onClick={ somar }> + </ button>
            <button  onClick={ subtrair }> - </button>
        </React.Fragment>
        
    ) ;
}

function  App() {
    return  (
        <React.Fragment>
            <h1> Vote</h1>
            <Contador titulo = "rock"/>
            <Contador titulo = "funk"/>
            <Contador titulo = "pop"/>
        </React.Fragment>        
    ) ;

}

ReactDOM.render( React.createElement( App, null, null ), container );