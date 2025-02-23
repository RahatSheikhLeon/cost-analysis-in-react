
import './App.css'

import { FeatureListItem } from './FeatureListItem'

export default function App() {
  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <div className="app-row">
            <div className="cal-2">
              <div className="left-bar">
                <div className="app-logo">
                  <a href="#">APP LOGO</a>
                </div>
                <ul className='feature-list'>
                  <FeatureListItem />
                </ul>
              </div>
            </div>
            <div className="cal-8">
              <div className="right-bar">
                <div className="content-wrapper">
                  <div className="content-name">
                    
                  </div>
                  <div className="content-box">
                    content
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