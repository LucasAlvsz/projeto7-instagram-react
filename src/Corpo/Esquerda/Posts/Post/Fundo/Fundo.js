import Acoes from "./Acoes"
import Curtidas from "./Curtidas"
export default function Fundo({ curtidasImgUser, curtidasNomeUsuario, curtidasNum }) {
    return (
        <div class="fundo">
            <Acoes />
            <Curtidas
                curtidasImgUser={curtidasImgUser}
                curtidasNomeUsuario={curtidasNomeUsuario}
                curtidasNum={curtidasNum}
            />
        </div>
    )
}