import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-setting">
                <div className="container"><NavLink className="navbar-brand" to="/"><img className="logo" alt="logo" src="/logo1024.png" height="30px" /><span className="navbar-main">Promcord</span></NavLink><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><NavLink exact className="nav-link" to="/">홈 <span className="sr-only">(current)</span></NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/about">소개 <span className="sr-only">(current)</span></NavLink></li>
                        <li className="nav-item"><a className="nav-link" href="https://discord.com/api/oauth2/authorize?client_id=720567998783684631&permissions=8&scope=bot">초대 <span className="sr-only">(current)</span></a></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/guide">가이드 <span className="sr-only">(current)</span></NavLink></li>
                        <li className="nav-item"><a className="nav-link" href="https://discord.gg/2tbXMMF">디스코드 <span className="sr-only">(current)</span></a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;