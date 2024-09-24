import './CampoTexto.css';

const CampoTexto = (props) => {

    // let valor ='Guilherme';

    const aoDigitando = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitando} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    );
}

export default CampoTexto;