import { useState } from 'react';
import './App.css'
import { FeatureListItem } from './FeatureListItem'
import { TabContent } from './TabContent';
export default function App() {

  const [toggle, setToggle] = useState(1)
  let pageHeader = '';

  if (toggle === 1) {
    pageHeader = "Home"

  } else if (toggle === 2) {
    pageHeader = "Add Record"
  } else if (toggle === 3) {
    pageHeader = "Add Meal"
  } else if (toggle === 4) {
    pageHeader = "Add Member"
  }

  return (
    <>

      <div className="container">
        <div className="app-wrapper">
          <div className="app-row">
            <div className="cal-2">
              <div className="left-bar">
                <div className="app-logo">
                  <a href="#" className='app-logo'>APP LOGO</a>
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
                  </div>
                  <div className="content-box">
                    <TabContent toggle = {toggle} />
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