export default function Card({imageUrl, location, googleMapsUrl, title, startDate, endDate, description}) {
    return (
        <div className="card">
            <img src={imageUrl} alt="Place image" className="card-image" />
            <div className="card-info-wrapper">
                <div className="location-wrapper">
                    <i class="fa-sharp fa-solid fa-location-dot fa-2xs"></i>
                    <p>{location}</p>
                    <a className="maps-link" href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className="card-dates">{`${startDate} - ${endDate}`}</p>
                <p className="card-desc">{description}</p>
            </div>
        </div>
    )
}