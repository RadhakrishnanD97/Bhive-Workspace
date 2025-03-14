import './WorkplaceAmenities.scss';

interface AmenitiesI {
    image: string,
    text: string
}

function WorkplaceAmenities() {

    const data: AmenitiesI[] = [
        {
            image: '/assets/communityEvents.png',
            text: 'Community Events'
        },
        {
            image: '/assets/gym.png',
            text: 'Gym Facilities'
        },
        {
            image: '/assets/wifi.png',
            text: 'High-Speed WiFi'
        },
        {
            image: '/assets/tea.png',
            text: 'Cafe & Tea Bar'
        },
        {
            image: '/assets/affordable.png',
            text: 'Affordable'
        },
        {
            image: '/assets/lounges.png',
            text: 'Comfort Lounges'
        },
        {
            image: '/assets/booking.png',
            text: 'Quick Booking'
        },
        {
            image: '/assets/sports.png',
            text: 'Sports Area'
        }
    ]

    const amenities = (value: AmenitiesI) => (
        <div className='amenities' key={value.text}>
            <img className='image' src={value.image} alt={value.text} />
            <span className='text'>{value.text}</span>
        </div>
    )

    return (
        <section className="workplace-amenities">
            <h2 className='section-title'>
                Why Choose us?
            </h2>
            <div className='amenities-wrapper'>
                {
                    data?.map((value: AmenitiesI) => amenities(value))
                }
            </div>
        </section>
    );
}

export default WorkplaceAmenities;
