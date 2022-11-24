import { useState } from 'react'
import './App.css'
import data from "./App.props"
import logo from '../logo.png'
import AccommodationDetails from '../features/accommodation/details/AccommodationDetails'

const App = (props) => {
    const [accommodations, setAccommodations] =
        useState(data?.data?.results && Array.isArray(data.data.results) ?
            data.data.results.sort((a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount) : [])

    const {
        excludeRatings = false
    } = props

    const handleSorting = e => {
        switch (e.target.value) {
            case "high-low-price":
                setAccommodations([...accommodations].sort((a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount))
                break
            case "low-high-price":
                setAccommodations([...accommodations].sort((a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount))
                break
            case "high-low-rating":
                setAccommodations([...accommodations].sort((a, b) => b.property.rating.ratingValue - a.property.rating.ratingValue))
                break
            case "low-high-rating":
                setAccommodations([...accommodations].sort((a, b) => a.property.rating.ratingValue - b.property.rating.ratingValue))
                break
            default:
                break
        }
    }

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
                            onChange={handleSorting}
                        >
                            <option value={"high-low-price"}>Price (high-low)</option>
                            <option value={"low-high-price"}>Price (low-high)</option>
                            <option value={"high-low-rating"}>Rating (high-low)</option>
                            <option value={"low-high-rating"}>Rating (low-high)</option>
                        </select>
                    </div>
                </div>
                <AccommodationDetails
                    data={accommodations}
                    excludeRatings={excludeRatings} />
            </div>
        </div>
    )
}

export default App
