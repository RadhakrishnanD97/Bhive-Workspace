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
            <div className='title-wrapper'>
                <h2 className='section-title'>
                    Why Choose us?
                </h2>
                <svg className='mobile-arrow-navigation' width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z" fill="#FFBB00" />
                </svg>
            </div>
            <div className='amenities-wrapper'>
                {
                    data?.map((value: AmenitiesI) => amenities(value))
                }
            </div>
        </section>
    );
}

export default WorkplaceAmenities;
