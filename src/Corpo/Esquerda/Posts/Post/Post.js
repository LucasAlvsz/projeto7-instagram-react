import Topo from "./Topo/Topo";
import Conteudo from "./Conteudo"
import Fundo from "./Fundo/Fundo"
export default function Post({ imgUserUrl, nomeUsuario, srcConteudo, curtidasImgUser, curtidasNomeUsuario, curtidasNum }) {
    return (
        <div class="post">
            <Topo
                imgUserUrl={imgUserUrl}
                nomeUsuario={nomeUsuario}
            />
            <Conteudo
                srcConteudo={srcConteudo}
            />
            <Fundo
                curtidasImgUser={curtidasImgUser}
                curtidasNomeUsuario={curtidasNomeUsuario}
                curtidasNum={curtidasNum}
            />
        </div>
    )
}

