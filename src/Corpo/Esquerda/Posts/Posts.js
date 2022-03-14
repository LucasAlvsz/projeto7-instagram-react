import Post from "./Post/Post"
export default function Posts() {
    const post = [{
        usuario: {
            imgUserUrl: "assets/img/meowed.svg",
            nomeUsuario: "meowed"
        },
        conteudo: "assets/img/gato-telefone.svg",
        curtidas: {
            curtidasImgUser: "assets/img/respondeai.svg",
            curtidasNomeUsuario: "respondeai",
            curtidasNum: "101.523"
        }
    }, {
        usuario: {
            imgUserUrl: "assets/img/barked.svg",
            nomeUsuario: "barked"
        },
        conteudo: "assets/img/dog.svg",
        curtidas: {
            curtidasImgUser: "assets/img/adorable_animals.svg",
            curtidasNomeUsuario: "adorable_animals",
            curtidasNum: "99.159"
        }
    }
    ]
    return (
        <div class="posts">
            {post.map(post => {
                return (
                    <Post
                        imgUserUrl={post.usuario.imgUserUrl}
                        nomeUsuario={post.usuario.nomeUsuario}
                        srcConteudo={post.conteudo}
                        curtidasImgUser={post.curtidas.curtidasImgUser}
                        curtidasNomeUsuario={post.curtidas.curtidasNomeUsuario}
                        curtidasNum={post.curtidas.curtidasNum}
                    />
                )
            })
            }
        </div>
    )
}