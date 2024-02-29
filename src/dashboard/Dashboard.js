import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header";
import headerItems from "../utils/header-items";

import './Dashboard.css';
// import react from 'react';

export default function DashBoard() {
    return (
        <div className="dashboard">
            <div className="header">
                <Header items={headerItems} />
            </div>

            <div className="main-content">

            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}