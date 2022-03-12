export default function Story({ imgUrl, nomeUsuario }) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={imgUrl} />
            </div>
            <div class="usuario">
                {nomeUsuario}
            </div>
        </div>
    )
}