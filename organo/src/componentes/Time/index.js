import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
    return (

        (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} value={props.corPrimaria} type='color' className="input-cor" />
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='cc'>
                {props.colaboradores.map(colaborador => <Colaborador 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} 
                    corDeFundo={props.corPrimaria}
                    aoDeletar={props.aoDeletar}
                    />
                )}
            </div>
            
        </section>
    )
}

export default Time;