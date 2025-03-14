import './Content.scss';

function Content() {
    return (
        <section className="content">
            <div className='title-wrapper'>
                <img src='/assets/diagnol.png' className='diagnol-image' />
                <h1 className='title'>
                    Host your meeting with world-class amenities. Starting at <span>₹199/-!</span>
                </h1>
            </div>
            <div className='video-wrapper'>
                <video className='content-video' src='/assets/content-video.mp4' autoPlay loop muted/>
                <img src='/assets/diagnol.png' className='diagnol-image' />
            </div>
        </section>
    );
}

export default Content;
