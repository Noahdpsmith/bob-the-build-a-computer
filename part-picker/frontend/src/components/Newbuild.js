import React, { useState } from 'react';
import Ram from './part_components/Ram';
import Motherboard from './part_components/Mobo';
import Gpu from './part_components/Gpu';
import St0rage from './part_components/St0rage';
import Psu from './part_components/Psu';
import Case from './part_components/Case';
import Cooler from './part_components/Cooler';
import Cpu from './part_components/Cpu';
import Fan from './part_components/Fan';

import { useBuildContext } from './context/BuildContext';

const NewBuild = () => {
    const buildContext = useBuildContext();

    const [cpuNameState, setCpuNameState] = useState('Choose your CPU');
    const [cpuLinkState, setCpuLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [gpuNameState, setGPUNameState] = useState('Choose your GPU');
    const [gpuLinkState, setGPUNameLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [ramNameState, setRamNameState] = useState('Choose your RAM');
    const [ramLinkState, setRamLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [moboNameState, setMoboNameState] = useState('Choose your Motherboard');
    const [moboLinkState, setMoboLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [storageNameState, setStorageNameState] = useState('Choose your Storage');
    const [storageLinkState, setStorageLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [psuNameState, setPsuNameState] = useState('Choose your PSU');
    const [psuLinkState, setPsuLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [caseNameState, setCaseNameState] = useState('Choose your Case');
    const [caseLinkState, setCaseLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [coolerNameState, setCoolerNameState] = useState('Choose your Cooler');
    const [coolerLinkState, setCoolerLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [fanNameState, setFanNameState] = useState('Choose your Fan');
    const [fanLinkState, setFanLinkState] = useState('Check links for compatibility with all other parts before purchasing');


    
    return(
        <div>

            <h1>Start a new build here</h1>
                
            <div className='build-container'>

                <div className='build-part-container'>
                    <h2 value='cpu'>CPU</h2>
                    <h3 value={cpuNameState}>{cpuNameState}</h3>
                    <h3 value={cpuLinkState}>{cpuLinkState}</h3>
                </div>
                        <Cpu/>

                <div className='build-part-container'>
                    <h2 value='mobo'>Motherboard</h2>
                    <h3 value={moboNameState}>{moboNameState}</h3>
                    <h3 value={moboLinkState}>{moboLinkState}</h3>
                </div>
                        <Motherboard/>

                <div className='build-part-container'>
                    <h2 value='gpu'>GPU</h2>
                    <h3 value={gpuNameState}>{gpuNameState}</h3> 
                    <h3 value={gpuLinkState}>{gpuLinkState}</h3>                       
                </div>
                        <Gpu/>

                <div className='build-part-container'>
                    <h2 value='ram'>Ram</h2>
                    <h3 value={ramNameState}>{ramNameState}</h3>  
                    <h3 value={ramLinkState}>{ramLinkState}</h3>                      
                </div>
                        <Ram/>

                <div className='build-part-container'>
                    <h2 value='cooler'>Cooler</h2>
                    <h3 value={coolerNameState}>{coolerNameState}</h3>
                    <h3 value={coolerLinkState}>{coolerLinkState}</h3>
                        
                </div>
                        <Cooler/>

                <div className='build-part-container'>
                    <h2 value='storage'>Storage</h2>
                    <h3 value={storageNameState}>{storageNameState}</h3>
                    <h3 value={storageLinkState}>{storageLinkState}</h3>
                </div>
                        <St0rage/>

                <div className='build-part-container'>
                    <h2 value='case'>Case</h2>
                    <h3 value={caseNameState}>{caseNameState}</h3>
                    <h3 value={caseLinkState}>{caseLinkState}</h3>
                </div>
                        <Case/>

                <div className='build-part-container'>
                    <h2 value='psu'>PSU</h2>
                    <h3 value={psuNameState}>{psuNameState}</h3>
                    <h3 value={psuLinkState}>{psuLinkState}</h3>
                </div>
                        <Psu/>

                <div className='build-part-container'>
                    <h2 value='fan'>Fan</h2>
                    <h3 value={fanNameState}>{fanNameState}</h3>    
                    <h3 value={fanLinkState}>{fanLinkState}</h3>
                </div>
                        <Fan/>

            </div>

        </div>
    );
}



export default NewBuild;