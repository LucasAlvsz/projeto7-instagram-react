import Acoes from "./Acoes"
import Usuario from "./Usuario"
export default function Topo({ imgUserUrl, nomeUsuario }) {
    return (
        <div class="topo">
            <Usuario
                imgUserUrl={imgUserUrl}
                nomeUsuario={nomeUsuario}
            />
            <Acoes />
        </div>
    )
}