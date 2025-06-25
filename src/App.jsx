
// import { TabContent } from './TabContent';
import { useState, useEffect } from 'react';
import { Layout } from './Layout';
import { Home } from "./Home";
import { AddRecord } from "./AddRecord";
import { AddMeal } from "./AddMeal";
import { AddMember } from "./AddMember";
import { Setting } from "./Setting";




import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {

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
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home memberInfo={memberInfo} />,
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

      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}