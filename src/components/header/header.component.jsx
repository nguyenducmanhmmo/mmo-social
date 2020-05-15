import React from 'react'
import './header.styles.scss'


const Header = () => (
    <div className="header">
        <div className="header-content">
            <div className="app-title">
                MmoFeed
            </div>
            <div className="header-right-side">
                <div className="header-info">
                <svg width="75" height="7"><rect width="100%" height="100%" style={{ fill: "#8075a4" }}></rect></svg>
                <svg width="40" height="7"  style={{ float: "right" }}><rect width="100%" height="100%" style={{ fill: "#a4a4a4" }}></rect></svg>

                </div>
                <div className="user-avatar">
                    <img src="https://justmonk.github.io/react-news-feed-spa-demo/img/user-avatar.jpg" alt="user-avatar" />
                </div>
            </div>
        </div>
    </div>
)

export default Header;