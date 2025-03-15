import './DownloadApp.scss';

function DownloadApp() {
    return (
        <section className="download-app-wrapper">
            <div className='title-wrapper'>
                <h2 className='section-title'>
                    Download our app now
                </h2>
                <svg className='mobile-arrow-navigation' width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z" fill="#FFBB00" />
                </svg>
            </div>
            <div className='section-wrapper'>
                <img className='download-phone' src='/assets/download-phone.png' />
                <div className='clearfix'></div>
                <div className='store'>
                    <p className='content'>
                        Boost your productivity with the BHIVE Workspace app. Elevate your workspace,
                        collaborate efficiently, and unlock exclusive perks.
                    </p>
                    <div className='store-wrapper'>
                        <a href='https://play.google.com/store/apps/details?id=com.bhive.workspace&pcampaignid=web_share' target='_blank'>
                            <img className='google-play' src='/assets/google-play.png' />
                        </a>
                        <a href='https://apps.apple.com/in/app/bhive-workspace/id6463923684' target='_blank'>
                            <img src='/assets/play-store.png' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DownloadApp;
