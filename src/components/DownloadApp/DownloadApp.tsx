import './DownloadApp.scss';

function DownloadApp() {
    return (
        <section className="download-app-wrapper">
            <h2 className='section-title'>
                Download our app now
            </h2>
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
