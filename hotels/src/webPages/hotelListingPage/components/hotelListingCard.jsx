
export let HotelListingCard = ( props ) => {
    return <div>
        <h1>{}</h1>
        <div className="hotel-list-maincontainer">
                        <div className="hotel-list-leftcontainer">
                            <img className="container-image" src={ props.hotelDetailsObj.img } alt="roomimage" />
                        </div>
                        <div className="hotel-list-rightcontainer">
                            <div className="rightcontainer-section1">
                                <article>

                                </article>
                                <article>
                                    <div className="iconcontainer-main">
                                        <div className="iconcontainer hearticon" title="Like"><i className="fas fa-heart fa-xs"></i></div>
                                        <div className="iconcontainer shareicon" title="Share"><i className="fas fa-share-nodes fa-xs"></i></div>
                                    </div>
                                </article>
                            </div>
                            <div className="rightcontainer-section2">
                                <h3>{ props.hotelDetailsObj.name }</h3>
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="location">{ props.hotelDetailsObj.location }</div>


                            </div>
                            <div className="rightcontainer-section3">
                                <p><b className="hotel-pricing">{ props.hotelDetailsObj.price }</b>/day &nbsp<s>$1000</s></p>

                                <button className="Select-room-button" onclick="window.location.href='hotel-details.html'">Select Room</button>
                            </div>
                        </div>
                    </div>
    </div>
}