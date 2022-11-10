import './App.css'
import logo from '../logo.png'
import AccommodationDetails from '../features/accommodation/details/AccommodationDetails'

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="App-features">
                <AccommodationDetails />
            </div>
        </div>
    )
}

export default App
