import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'
import { FeatureListItem } from './FeatureListItem'
// import { TabContent } from './TabContent';
import { UiMoodChange } from './UiMoodChange';

import { Home } from "./Home";
import { AddRecord } from "./AddRecord";
import { AddMeal } from "./AddMeal";
import { AddMember } from "./AddMember";
import { Setting } from "./Setting";



import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import MainLayout from './MainLayout';
import RecordLayout from './RecordLayout';

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
			element: <MainLayout uiMood={uiMood} updateUiMood={updateUiMood} setToggle={setToggle} toggle={toggle} />,
			children: [
				{
					path: '/',
					element: <Home memberInfo={memberInfo} setToggle={setToggle} pageHeader={pageHeader} />
				},
				{
					path: '/add-record',
					element: <><RecordLayout /></>,
					children: [
						{
							path: '/add-record',
							index: true,
							element: <><AddRecord memberInfo={memberInfo} setMemberInfo={setMemberInfo} /></>,
						},
						{
							path: '/add-record/records',
							element: <><h1>Hello Records</h1></>
						},
					]
				},
				{
					path: '/add-meal',
					element: <><AddMeal memberInfo={memberInfo} setMemberInfo={setMemberInfo} /></>
				},
				{
					path: '/add-member',
					element: <><AddMember memberInfo={memberInfo} setMemberInfo={setMemberInfo} /></>
				},
				{
					path: '/settings',
					element: <><Setting memberInfo={memberInfo} setMemberInfo={setMemberInfo} /></>
				},
			]
		}
	]);


	return (
		<RouterProvider router={router} />
	)
}