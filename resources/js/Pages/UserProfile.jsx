import React, { useState, useEffect } from "react";
//componets
import Navigation from '../components/Navigation';
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';
import Footer from '../components/Footer.jsx';

export default function UserProfile() {
    let component;
    const [editing, setEditing] = useState(false);

    function change() {
        setEditing(!editing);
    }

    component = editing ?
        <EditProfile change={change} /> :
        <Profile change={change} />;


    return (
        <>
            <Navigation />
            {component}
            <Footer />
        </>
    )
}
