import Acoes from "./Acoes"
export default function Topo({ imgUserUrl, nomeUsuario }) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={imgUserUrl} />
                {nomeUsuario}
            </div>
            <Acoes />
        </div>
    )
}