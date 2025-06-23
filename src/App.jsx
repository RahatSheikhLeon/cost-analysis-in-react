import React from 'react';
import { useState, useEffect  } from 'react';
import './App.css'
import { FeatureListItem } from './FeatureListItem'
// import { TabContent } from './TabContent';
import { UiMoodChange } from './UiMoodChange';
import applogo from '../public/logo2.svg';
import { Home } from "./Home";
import { AddRecord } from "./AddRecord";
import { AddMeal } from "./AddMeal";
import { AddMember } from "./AddMember";
import { Setting } from "./Setting";



import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
  } else if (toggle === 5) {
    pageHeader = "Setting"
  }
  else if (toggle === 6) {
    pageHeader = "Setting"
  }

  const [memberInfo, setMemberInfo] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("memberInfo")) || [];
    setMemberInfo(data);
  }, []);

  useEffect(() => {
    if (memberInfo.length > 0) {
      localStorage.setItem("memberInfo", JSON.stringify(memberInfo));
    }
  }, [memberInfo]);


  const router = createBrowserRouter([
    {
      path: '/',
      element: <> 
        <FeatureListItem
         setToggle={setToggle}
          toggle={toggle}
        /> 
        <Home memberInfo={memberInfo} setToggle={setToggle} />
      </>
    },
    {
      path: '/',
      element: <> <FeatureListItem
        setToggle={setToggle}
        toggle={toggle}
      /><AddRecord memberInfo={memberInfo} setMemberInfo={setMemberInfo} /></>
    },
    {
      path: '/',
      element: <> <FeatureListItem
        setToggle={setToggle}
        toggle={toggle}
      /><AddMeal memberInfo={memberInfo} setMemberInfo={setMemberInfo} /></>
    },
    {
      path: '/',
      element: <> <FeatureListItem
        setToggle={setToggle}
        toggle={toggle}
      /><AddMember memberInfo={memberInfo} setMemberInfo={setMemberInfo} /></>
    },
    {
      path: '/',
      element: <> <FeatureListItem
        setToggle={setToggle}
        toggle={toggle}
      /><Setting memberInfo={memberInfo} setMemberInfo={setMemberInfo} /></>
    },
  ])
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
                    {/* <FeatureListItem
                      setToggle={setToggle}
                      toggle={toggle}
                    /> */}
                     {/* <RouterProvider router={router} />  */}
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
                      {/* <TabContent toggle={toggle} setToggle={setToggle}/> */}
                      <RouterProvider router={router} />
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