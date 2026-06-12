import { useState, useEffect } from 'react';

const Tab = () => {
    const [activeTab, setActiveTab] = useState('Tab1');

    return (
        <section className="p-20">
            <div>
                {/* <button className={`${activeTab==='Tab1'?'border-4 border-red-400 text-4xl':'border-4 border-amber-500'}`} onClick={()=> setActiveTab('Tab1')}>Tab1</button> */}
                <button onClick={() => setActiveTab('Tab1')}>Tab1</button>
                <button onClick={() => setActiveTab('Tab2')}>Tab2</button>
                <button onClick={() => setActiveTab('Tab3')}>Tab3</button>
            </div>
            <div>
                {activeTab === "Tab1" && <p>Contents for Tab One</p>}
                {activeTab === "Tab2" && <p>Contents for Tab Two</p>}
                {activeTab === "Tab3" && <p>Contents for Tab Three</p>}
            </div>
        </section>
    )
}

export default Tab;