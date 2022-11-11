import './AccommodationDetails.css'
import StarRatings from 'react-star-ratings'

const AccommodationDetails = (props) => {

    const {
        excludeRatings = false
    } = props

    const cancellationOptions = Object.freeze({
        FREE_CANCELLATION: "Free cancellation",
        NOT_REFUNDABLE: "Not refundable"
    })

    return (
        <div className="Accommodations">
            {props.data?.map((item, index) => (
                <div key={item.id} className="Accommodation">
                    <div className="Accommodation-image">
                        <div className="Accommodation-image-tag">{item?.offer?.promotion?.title}</div>
                        <img src={`${item?.property?.previewImage?.url}&temp=${item.id}`} alt="previewImage" />
                    </div>
                    <div className="Accommodation-details-wrapper">
                        <div className="Accommodation-details">
                            <div className="Accommodation-details-title">
                                <h3>{item.property?.title}</h3>
                                {!excludeRatings && item.property?.rating?.ratingValue && <div className="Accommodation-details-title-icons">
                                    {item.property.rating.ratingType === "star" && <StarRatings
                                        rating={item.property.rating.ratingValue}
                                        starDimension="16px"
                                        starSpacing="2px"
                                        starRatedColor="rgb(251, 203, 59)"
                                    />}
                                    {item.property.rating.ratingType === "self" && <StarRatings
                                        rating={item.property.rating.ratingValue}
                                        starDimension="16px"
                                        starSpacing="2px"
                                        starRatedColor="rgb(251, 203, 59)"
                                        svgIconPath="M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Z"
                                        svgIconViewBox="0 0 24 24"
                                    />}
                                </div>}
                            </div>
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
                </div>
            ))
            }
        </div>
    )
}

export default AccommodationDetails
