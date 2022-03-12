export default function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imgUrl} />
            </div>
            <div class="usuario">
                {props.nomeUsuario}
            </div>
        </div>
    )
}