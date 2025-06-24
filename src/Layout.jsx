import applogo from '../public/logo2.svg';
import { FeatureListItem } from './FeatureListItem'
import './App.css'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { UiMoodChange } from './UiMoodChange';
export function Layout() {
    const [uiMood, updateUiMood] = useState(0)
    return (
        <>
            <div className={`main-app_wrapper ${uiMood === 1 ? 'dark-mood' : ''}`}>
                <div className="container">
                    <div className="app-wrapper">
                        <div className="app-row">
                            <div className="cal-2">
                                <div className="left-bar">
                                    <div className="app-logo-wrapper">
                                        <img src={applogo} alt="App Logo" />
                                        <a href="#" className='app-logo'>mes manager</a>
                                    </div>
                                    <nav className='feature-list'>
                                        <FeatureListItem />
                                    </nav>
                                </div>
                            </div>
                            <div className="cal-8">
                                <div className="right-bar">
                                    <div className="content-wrapper">
                                        <div className="content-name">
                                            <h2> </h2>
                                            <UiMoodChange uiMood={uiMood} updateUiMood={updateUiMood} />
                                        </div>
                                        <div className="content-box">
                                            <Outlet />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}