import React from 'react';

const Guide = () => {
    return (
        <div>
            <div className="index-small bg-5">
                <span className="index-topic">Promcord 사용 가이드</span>
                <span className="index-desc">Promcord를 사용하는 방법을 알려드립니다.</span>
                {/* <a href="/api/copy?data=leven.mcsv.kr" className="index-button clip_btn">COPY LINK</a> */}
            </div>
            <div className="introduce bg-1 cr-0">
                    <div className="container">
                        {/* <div className="left"><span className="cr-1 intro-topic">Promcord 사용 가이드</span><span className="cr-1 intro-desc">Promcord를 사용하는 방법을 알려드립니다.</span></div> */}
                        <iframe className="GuideFrame" title="Promcord 사용 가이드.md" src="/guide/20210326_Final.html" width="100%" height="800vh"></iframe>
                    </div>
                </div>
        </div>
    );
};

export default Guide;