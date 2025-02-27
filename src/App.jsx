import { useState } from 'react';
import './App.css'
import { FeatureListItem } from './FeatureListItem'
import { TabContent } from './TabContent';
import { UiMoodChange } from './UiMoodChange';


export default function App() {




  const [toggle, setToggle] = useState(1)
  let pageHeader = '';
 
  const [uiMood, updateUiMood] = useState(0)

  if (toggle === 1) {
    pageHeader = "Home"

  } else if (toggle === 2) {
    pageHeader = "Add Record"
  } else if (toggle === 3) {
    pageHeader = "Add Meal"
  } else if (toggle === 4) {
    pageHeader = "Add Member"
  }
  // "main-app_wrapper dark-mood"
  return (
    <>
      <div className={`main-app_wrapper ${uiMood === 1 ? 'dark-mood' : ''}`}>
        <div className="container">
          <div className="app-wrapper">
            <div className="app-row">
              <div className="cal-2">
                <div className="left-bar">
                  <div className="app-logo">
                    <a href="#" className='app-logo'>mess management app</a>
                  </div>
                  <ul className='feature-list'>
                    <FeatureListItem
                      setToggle={setToggle}
                      toggle={toggle}
                    />
                  </ul>
                </div>
              </div>
              <div className="cal-8">
                <div className="right-bar">
                  <div className="content-wrapper">
                    <div className="content-name">
                      <h2>{pageHeader}</h2>
                      <UiMoodChange uiMood={uiMood} updateUiMood = {updateUiMood} />
                    </div>
                    <div className="content-box">
                      <TabContent toggle={toggle} />
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