import Sugestoes from "./Sugestoes/Sugestoes"
import Usuario from "./Usuario/Usuario"
import Links from "./Links"
import Copyright from "./Copyright"
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
            <Links />
            <Copyright />
        </div>
    )
}