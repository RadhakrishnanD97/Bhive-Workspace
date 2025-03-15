
import './SpaceOverviewWidget.scss';
import { WorkspaceI } from './models';
import { useEffect, useState } from 'react';
import { fetchWorkspaces, selectWorkspaces } from "../../redux/workspaceSlice";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from 'react-redux';

function SpaceOverviewWidget() {

    const apiUrl = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch<AppDispatch>();
    const { data, status, error } = useSelector(selectWorkspaces);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchWorkspaces());
        }
    }, [status, dispatch]);

    function openGoogleMaps(url: string | undefined, lat: number, lng: number): void {
        let modifiedURL;
        if (url) {
            modifiedURL = url;
        } else {
            modifiedURL = `https://www.google.com/maps?q=${lat},${lng}`;
        }
        window.open(modifiedURL, "_blank")
    }

    const handleName = (address: string) => {
        if (address.length > 40) {
            return `${address.slice(0, 40)}...`;
        }
        return address;
    }

    const icon = () => (
        <div className='arrow-icon-wrapper'>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976315 11.3166 -0.0976314 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976313 1.70711 0.292893L6.70711 5.29289Z" fill="#263238" />
            </svg>

            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" fillRule="evenodd" clipRule="evenodd" d="M6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976315 11.3166 -0.0976314 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976313 1.70711 0.292893L6.70711 5.29289Z" fill="#263238" />
            </svg>

            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976315 11.3166 -0.0976314 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976313 1.70711 0.292893L6.70711 5.29289Z" fill="#263238" />
            </svg>
        </div>
    )

    const workspace = (value: WorkspaceI) => (
        <div className='workspace' key={value.id}>
            <div className='address-section'>
                <p className='address' title={value.name}>{handleName(value.name)}</p>
                <div className='kilometer-wrapper' onClick={() => openGoogleMaps(value.google_maps_url, value.latitude, value.longitude)}>
                    <img className='image' src='/assets/direction.png' />
                    <p className='kilometer'>6 Kms</p>
                </div>
            </div>

            <div className='workspace-image'>
                <div className='tag'>
                    <img className='tag-image' src='/assets/tag.png' />
                    <span className='tag-name'>Workspace</span>
                </div>
                <img src={`${apiUrl}${value.images[0]}`} />
            </div>

            <div className='pass-details-wrapper'>
                <div className='day-pass'>
                    <div className='details'>
                        <p className='title'>Day Pass</p>
                        <p className='price'>₹ 249<span>/ Day</span></p>
                    </div>
                    {icon()}
                </div>
                <div className='bulk-pass'>
                    <p className='discount'>20% Discount</p>
                    <div className='details'>
                        <p className='title'>Bulk Pass</p>
                        <p className='price'>₹ 2400<span>/ 10 Days</span></p>
                    </div>
                    {icon()}
                </div>
            </div>
        </div>
    )

    return (
        <section className='space-overview-widget'>
            <div className='title-wrapper'>
                <h2 className='section-title'>
                    Our Space Overview
                </h2>
                <svg className='mobile-arrow-navigation' width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z" fill="#FFBB00" />
                </svg>
            </div>
            <div className='widget-wrapper'>
                {
                    data?.map((value: WorkspaceI) => workspace(value))
                }
                {
                    status === 'loading' &&
                    <p className='loading'>Loading...</p>
                }
            </div>
        </section>
    );
}

export default SpaceOverviewWidget;
