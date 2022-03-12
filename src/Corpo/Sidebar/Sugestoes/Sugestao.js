export default function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imgUserUrl} />
                <div class="texto">
                    <div class="nome">{props.nomeUsuario}</div>
                    <div class="razao">{props.statusUsuario}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}