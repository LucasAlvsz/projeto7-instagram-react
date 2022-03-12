import Sugestao from "./Sugestao"
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
        < div class="sugestoes" >
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestao.map(sugestao => <Sugestao imgUserUrl={sugestao.usuario.imgUserUrl} nomeUsuario={sugestao.usuario.nomeUsuario} statusUsuario={sugestao.usuario.statusUsuario} />)}

        </div >
    )
}