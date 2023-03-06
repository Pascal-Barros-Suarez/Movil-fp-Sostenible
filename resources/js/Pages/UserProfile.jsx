import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

//componets
import Navigation from '../components/Navigation';
import Profile from '../components/User-Profile/Profile';
import EditProfile from '../components/User-Profile/EditProfile';
import EditPassword from '../components/User-Profile/EditPassword';
import Footer from '../components/Footer.jsx';

export default function UserProfile() {
    let component;
    const { flash } = usePage().props;
    const [editing, setEditing] = useState(false);
    const [editingPass, setEditingPass] = useState(false);

    function dibujaflash() {
        let message = flash.success ? <h3 className="h-100 m-0 bg-success fa fa-flash">{flash.success}</h3> : '';
        flash.success = null;
        return message;
    }

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
        component = <EditPassword />;
    }

    return (
        <>
            <Navigation />
            {dibujaflash()}
            {component}
            <Footer />
        </>
    )
}
