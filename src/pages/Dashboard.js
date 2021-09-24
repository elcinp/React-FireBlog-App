import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div>
            <h2>Dashboard page</h2>
        </div>
    )
}

export default Dashboard
