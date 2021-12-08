import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Search  from "./Search";

export default function NavBar(){
    return (
        <div>
            <Search/>
            <div><Link to='/bill'>Cuenta</Link></div>
            <Outlet/>
        </div>
    )
}