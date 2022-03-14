import Sugestao from "./Sugestao"
import Titulo from "./Titulo"
export default function Sugestoes() {
    const sugestao = [{
        usuario: {
            imgUserUrl: "assets/img/bad.vibes.memes.svg",
            nomeUsuario: "bad.vibes.memes",
            statusUsuario: "Segue você"
        }
    }, {
        usuario: {
            imgUserUrl: "assets/img/chibirdart.svg",
            nomeUsuario: "chibirdart",
            statusUsuario: "Segue você"
        }
    }, {
        usuario: {
            imgUserUrl: "assets/img/razoesparaacreditar.svg",
            nomeUsuario: "razoesparaacreditar",
            statusUsuario: "Novo no Instagram"
        }
    }, {
        usuario: {
            imgUserUrl: "assets/img/adorable_animals.svg",
            nomeUsuario: "adorable_animals",
            statusUsuario: "Segue você"
        }
    }, {
        usuario: {
            imgUserUrl: "assets/img/smallcutecats.svg",
            nomeUsuario: "smallcutecats",
            statusUsuario: "Segue você"
        }
    }]
    return (
        <div class="sugestoes">
            <Titulo />
            {sugestao.map(sugestao => {
                return (
                    <Sugestao
                        imgUserUrl={sugestao.usuario.imgUserUrl}
                        nomeUsuario={sugestao.usuario.nomeUsuario}
                        statusUsuario={sugestao.usuario.statusUsuario}
                    />
                )
            })
            }
        </div >
    )
}