export default function Post({ imgUserUrl, nomeUsuario, conteudo, curtidasImgUser, curtidasNomeUsuario, curtidasNum }) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={imgUserUrl} />
                    {nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={conteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={curtidasImgUser} />
                    <div class="texto">
                        Curtido por <strong>{curtidasNomeUsuario}</strong> e <strong>outras {curtidasNum} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}