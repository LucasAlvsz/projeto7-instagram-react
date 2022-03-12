export default function Sugestao({ imgUserUrl, nomeUsuario, statusUsuario }) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={imgUserUrl} />
                <div class="texto">
                    <div class="nome">{nomeUsuario}</div>
                    <div class="razao">{statusUsuario}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}