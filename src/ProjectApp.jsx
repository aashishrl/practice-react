import {Routes, Route} from 'react-router-dom';
import MiniEcommerce from './projects/mini-ecommerce/MiniEcommerce';
import ReactBehaviourLab from './projects/react-behaviour-lab/ReactBehaviourLab';
import HookCrashLab from './projects/react-behaviour-lab/HookCrashLab';
import UseEffectBehaviourLab from './projects/react-behaviour-lab/UseEffectBehaviourLab';
import WebSocket from './projects/react-behaviour-lab/WebSocket';
import Parent from './projects/react-behaviour-lab/PropDrilling/Parent';
import ControlPanel from './projects/real-time-dashboard/ControlPanel';
import LiveCounter from './projects/real-time-dashboard/LiveCounter';

const ProjectApp = () =>{
    return (
        <>
            <Routes>
                <Route path="/" element={<LiveCounter/>} />
                <Route path="/" element={<ControlPanel/>} />
                <Route path="/" element={<Parent/>} />
                <Route path="/" element={<WebSocket/>} />
                <Route path="/" element={<UseEffectBehaviourLab/>} />
                <Route path="/" element={<HookCrashLab/>} />
                <Route path="/" element={<ReactBehaviourLab/>} />
                {/* <Route path="/" element={<MiniEcommerce />} /> */}
            </Routes>
        </>
    )
}

export default ProjectApp;