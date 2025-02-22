import { useState } from "react";

import './App.css'
import { FeatureListItem } from "./FeatureListItem"
import { TabContent } from './TabContent'
export default function  App(){

  const [toggle, setToggle] = useState(1);
  return (
    <>
    <div className="container">
      <div className="box">
        <ul className="flex feature-list">
          <FeatureListItem  setToggle = {setToggle} toggle={ toggle} /> 
        </ul>
        <div>
          <TabContent toggle = {toggle}/>
        </div>
      </div>
    </div>
    </>
  )
}