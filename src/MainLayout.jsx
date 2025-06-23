import { Outlet } from 'react-router-dom';
import applogo from '../public/logo2.svg';
import { UiMoodChange } from './UiMoodChange'
import { FeatureListItem } from './FeatureListItem';

const MainLayout = ({ uiMood, updateUiMood, pageHeader, setToggle, toggle }) => {
	return (
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
									<FeatureListItem
										setToggle={setToggle}
										toggle={toggle}
									/>
								</nav>
							</div>
						</div>
						<div className="cal-8">
							<div className="right-bar">
								<div className="content-wrapper">
									<div className="content-name">
										<h2>{pageHeader}</h2>
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
	)
}

export default MainLayout