import { useEffect, useState } from 'react'
import './App.css'
import data from "./App.props"
import logo from '../logo.png'
import AccommodationDetails from '../features/accommodation/details/AccommodationDetails'

const App = (props) => {
    const [sortBy, setSortBy] = useState("high-low")
    const [accommodations, setAccommodations] = useState(data?.data?.results)

    const {
        excludeRatings = false
    } = props

    useEffect(() => {
        if (Array.isArray(accommodations) && accommodations.length > 0) {
            var currAccommodations = [...accommodations]

            if (sortBy === "high-low")
                setAccommodations(currAccommodations.sort((a, b) => b.offer?.displayPrice?.amount - a.offer?.displayPrice?.amount))
            else
                setAccommodations(currAccommodations.sort((a, b) => a.offer?.displayPrice?.amount - b.offer?.displayPrice?.amount))
        }
    }, [accommodations, sortBy])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="App-features">
                <div className="App-filters">
                    <div>
                        <b>{accommodations?.length || 0}</b>&nbsp;
                        <span style={{ fontStyle: "italic" }}>hotels in <b>Sydney</b></span>
                    </div>
                    <div>
                        <span style={{ fontWeight: "bold" }}>Sort by</span>&nbsp;&nbsp;
                        <select
                            style={{ padding: "0 0.5rem" }}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value={"high-low"}>Price (high-low)</option>
                            <option value={"low-high"}>Price (low-high)</option>
                        </select>
                    </div>
                </div>
                <AccommodationDetails data={accommodations} excludeRatings={excludeRatings} />
            </div>
        </div>
    )
}

export default App
