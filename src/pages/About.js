import React from 'react';

const About = () => {
    return (
        <div>
            <div className="index-full bg-6">
                <span className="index-topic">Promcord 소개</span>
                <span className="index-desc">Promcord는 Tim23이 만든 디스코드 홍보 서버입니다!<br />편리한 사용법으로 봇만 초대할 줄 아신다면 누구든지 쉽게 홍보가 가능합니다.<br />지금 저희 서버에 오셔서 당신의 서버를 홍보해 보세요!</span>
                <a href="https://discord.com/api/oauth2/authorize?client_id=720567998783684631&permissions=8&scope=bot" className="index-button clip_btn">INVITE NOW</a>
            </div>
        </div>
    );
};

export default About;