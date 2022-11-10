import { useEffect } from "react"
import './AccommodationDetails.css'
import data from "./AccommodationDetails.props"

const AccommodationDetails = () => {
    useEffect(() => {
        console.log(data.data.results)
    }, [])

    const cancellationOptions = Object.freeze({
        FREE_CANCELLATION: "Free cancellation",
        NOT_REFUNDABLE: "Not refundable"
    })

    return (
        <div className="Accommodations">
            {data.data.results.map((item, index) => (
                <div key={item.id} className="Accommodation">
                    <div className="Accommodation-image">
                        <div className="Accommodation-image-tag">{item?.offer?.promotion?.title}</div>
                        <img src={`${item?.property?.previewImage?.url}&temp=${item.id}`} alt="previewImage" />
                    </div>
                    <div className="Accommodation-details">
                        <h3>{item.property?.title}</h3>
                        <div>
                            {item.property?.address && Array.isArray(item.property?.address) ?
                                <span>{item.property.address.join(", ")}</span> : null}
                        </div>
                        <div className="Accommodation-details-offer">{item.offer?.name}</div>
                        <div className="Accommodation-details-cancellation">
                            {cancellationOptions[item.offer?.cancellationOption?.cancellationType]}
                        </div>
                    </div>
                    <div className="Accommodation-price">
                        <span style={{ fontSize: "small", marginTop: "auto" }}>
                            <b>1</b> night total ({item.offer?.displayPrice?.currency})
                        </span>
                        <div style={{ fontSize: "xx-large" }}>
                            <sup style={{ fontSize: "large" }}>$</sup>{item.offer?.displayPrice?.amount}
                        </div>
                        {item.offer?.savings && <h3 style={{ color: "red", margin: 0 }}>
                            {`Save $${item.offer.savings.amount}`}<sup>~</sup>
                        </h3>}
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default AccommodationDetails
