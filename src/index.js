import ReactDOM from 'react-dom'
import Navbar from './Navbar/Navbar'
import Corpo from './Corpo/Corpo'
import Mobile from './Mobile/Mobile'

function App() {
    return (
        <div>
            <Navbar />
            <Corpo />
            <Mobile />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"))