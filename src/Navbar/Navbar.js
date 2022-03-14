import Logo from "./Logos/Logo"
import LogoMobile from "./Logos/LogoMobile"
import InstagramMobile from "./Logos/InstagramMobile"
import Pesquisa from "./Pesquisa/Pesquisa"
import Icones from "./Icones/Icones"
import IconesMobile from "./Icones/IconesMobile"
export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <Logo />
        <LogoMobile />
        <InstagramMobile />
        <Pesquisa />
        <Icones />
        <IconesMobile />
      </div>
    </div>
  )
}