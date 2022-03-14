import Acoes from "./Acoes"

export default function Fundo({ curtidasImgUser, curtidasNomeUsuario, curtidasNum }) {
    return (
        <div class="fundo">
            <Acoes />
            <div class="curtidas">
                <img src={curtidasImgUser} />
                <div class="texto">
                    Curtido por <strong>{curtidasNomeUsuario}</strong> e <strong>outras {curtidasNum} pessoas</strong>
                </div>
            </div>

        </div>
    )
}