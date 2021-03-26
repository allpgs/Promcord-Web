import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="index-full">
                <span className="index-topic">Promcord</span>
                <span className="index-desc">Promcord는 자신의 디스코드 서버를 홍보하는 디스코드 봇입니다.<br />Promcord는 여러분의 디스코드 서버를 더 활기차게 만들어 드리려고 노력중입니다.</span>
                <a href="https://discord.com/api/oauth2/authorize?client_id=720567998783684631&permissions=8&scope=bot" className="index-button">INVITE NOW</a>
            </div>
        </div>
    );
};

export default Home;