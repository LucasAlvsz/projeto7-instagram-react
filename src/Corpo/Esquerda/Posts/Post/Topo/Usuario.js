export default function Usuario({ imgUserUrl, nomeUsuario }) {
    return (
        <div class="usuario">
            <img src={imgUserUrl} />
            {nomeUsuario}
        </div>
    )
}