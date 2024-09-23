import CampoTexto from '../CampoTexto/CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Desing',
        'Mobile',
        'Inovação e Gestão'
      ];

      const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Submetido');
      }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preecha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label='Time' itens={times}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    );
}

export default Formulario;