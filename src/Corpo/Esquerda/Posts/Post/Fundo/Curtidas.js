export default function Curtidas({ curtidasImgUser, curtidasNomeUsuario, curtidasNum }) {
    return (
        <div class="curtidas">
            <img src={curtidasImgUser} />
            <div class="texto">
                Curtido por <strong>{curtidasNomeUsuario}</strong> e <strong>outras {curtidasNum} pessoas</strong>
            </div>
        </div>
    )
}