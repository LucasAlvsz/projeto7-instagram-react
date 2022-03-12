import Sugestoes from "./Sugestoes/Sugestoes"
import Usuario from "./Usuario/Usuario"

export default function Sidebar() {
    const usuario = {
        userImgUrl: "assets/img/catanacomics.svg",
        nomeUsuario: "catanacomics",
        apelidoUsuario: "Catana"
    }
    const { userImgUrl, nomeUsuario, apelidoUsuario } = usuario
    return (
        <div class="sidebar">

            <Usuario userImgUrl={userImgUrl} nomeUsuario={nomeUsuario} apelidoUsuario={apelidoUsuario} />
            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}