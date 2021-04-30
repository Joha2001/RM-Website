import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";
import * as GoIcons from "react-icons/go";
export const NavData = [ //All of the pages to navigate to.
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Visualizations',
        path: '/Visualizations',
        icon: <GoIcons.GoGraph/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/About',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'Documentation',
        path: '/Documentation',
        icon: <HiIcons.HiDocumentText/>,
        cName: 'nav-text'
    },
    {
        title: 'Steam',
        path: '/Steam',
        icon: <FaIcons.FaSteam/>,
        cName: 'nav-text'
    },
    






]