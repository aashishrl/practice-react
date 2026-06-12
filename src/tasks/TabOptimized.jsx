import {useState, useEffect} from 'react';
const TabOptimized = () =>{
    
    const tabs = [
        {id: 'tab1', label: "Tab 1", content: "This is Tab 1 Content"},
        {id: 'tab2', label: "Tab 2", content: "This is Tab 2 Content"},
        {id: 'tab3', label: "Tab 3", content: "This is Tab 3 Content"},
    ]

    const [activeTab, setActiveTab] = useState(tabs[0].id)
    
    return (
        <section className="p-20">
            <h1>Hello World </h1>
            <div>
                {tabs.map((tab)=>{
                    return (
                        <button onClick = {()=>setActiveTab(tab.id)} key={tab.id}>{tab.label}</button>
                    )
                })}
            </div>
            <div>
                {tabs.find(tab=> activeTab===tab.id).map(e=>(
                    <p>{e.content}</p>
                ))}
            </div>
        </section>
    )
}
export default TabOptimized;