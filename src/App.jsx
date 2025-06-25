
// import { TabContent } from './TabContent';
import { useState, useEffect } from 'react';
import { Layout } from './Layout';
import { Home } from "./Home";
import { AddRecord } from "./AddRecord";
import { AddMeal } from "./AddMeal";
import { AddMember } from "./AddMember";
import { Setting } from "./Setting";




import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MemberDetails } from './MemberDetails';
import { getAllData, setAllData } from './utils';

export default function App() {

	const [memberInfo, setMemberInfo] = useState([]);
	useEffect(() => {
		setMemberInfo(getAllData());
	}, []);

	useEffect(() => {
		if (memberInfo.length > 0) {
			setAllData( memberInfo );
		}
	}, [memberInfo]);


	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/member/:id',
					element: <MemberDetails />,
				},
				{
					path: '/add-record',
					element: <AddRecord memberInfo={memberInfo} setMemberInfo={setMemberInfo} />,
				},
				{
					path: '/add-meal',
					element: <AddMeal memberInfo={memberInfo} setMemberInfo={setMemberInfo} />,
				},
				{
					path: '/add-member',
					element: <AddMember memberInfo={memberInfo} setMemberInfo={setMemberInfo} />
				},
				{
					path: '/setting',
					element: <Setting memberInfo={memberInfo} setMemberInfo={setMemberInfo} />
				},
				{
					path: '/*',
					element: <>404 Not Found</>
				},
			]
		}
	])
	return <RouterProvider router={router} />
}