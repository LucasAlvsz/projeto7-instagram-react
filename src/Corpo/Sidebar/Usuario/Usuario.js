export default function Usuario({userImgUrl, nomeUsuario, apelidoUsuario}){
    return (
        <div class="usuario">
                <img src={userImgUrl} />
                <div class="texto">
                    <strong>{nomeUsuario}</strong>
                    {apelidoUsuario}
                </div>
            </div>
    )
}