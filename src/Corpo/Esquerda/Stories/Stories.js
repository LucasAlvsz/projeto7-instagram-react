import Story from "./Story"
import Setinha from "./Setinha"
export default function Stories() {
    const story = [{
        imgUrl: "assets/img/9gag.svg",
        nomeUsuario: "9gag"
    }, {
        imgUrl: "assets/img/meowed.svg",
        nomeUsuario: "meowed"
    }, {
        imgUrl: "assets/img/barked.svg",
        nomeUsuario: "barked"
    }, {
        imgUrl: "assets/img/nathanwpylestrangeplanet.svg",
        nomeUsuario: "nathanwpylestrangeplanet"
    }, {
        imgUrl: "assets/img/wawawicomics.svg",
        nomeUsuario: "wawawicomics"
    }, {
        imgUrl: "assets/img/respondeai.svg",
        nomeUsuario: "respondeai"
    }, {
        imgUrl: "assets/img/filomoderna.svg",
        nomeUsuario: "filomoderna"
    }, {
        imgUrl: "assets/img/memeriagourmet.svg",
        nomeUsuario: "memeriagourmet"
    }]

    return (
        <div class="stories">
            {story.map(story => <Story imgUrl={story.imgUrl} nomeUsuario={story.nomeUsuario} />)}
            <Setinha />
        </div>
    )
}