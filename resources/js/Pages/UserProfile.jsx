import React, { useState } from "react";

//componets
import Navigation from '../components/Navigation';
import Profile from '../components/User-Profile/Profile';
import EditProfile from '../components/User-Profile/EditProfile';
import EditPassword from '../components/User-Profile/EditPassword';
import Footer from '../components/Footer.jsx';

export default function UserProfile() {
    let component;
    const [editing, setEditing] = useState(false);
    const [editingPass, setEditingPass] = useState(false);


    function change() {
        setEditing(!editing);
    }

    function changePassword() {
        setEditingPass(!editingPass);
    }

    if (editingPass == false && editing == false) {
        component = <Profile change={change} changePassword={changePassword} />;
    } else if (editing == true) {
        component = <EditProfile change={change} />;
    } else if (editingPass == true) {
        component = <EditPassword changePassword={changePassword} />;
    }

    return (
        <>
            <Navigation />
            {component}
            <Footer />
        </>
    )
}
