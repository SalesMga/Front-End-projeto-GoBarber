import React from 'react';
import api from '../../services/api';

function Dashboard() {
    api.get('appointments');
    return <div>Dashboard</div>;
}

export default Dashboard;
