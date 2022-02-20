import React, { useState } from 'react';
import Ram from './part_components/Ram';
import Motherboard from './part_components/Mobo';
import Gpu from './part_components/Gpu';
import St0rage from './part_components/St0rage';
import Psu from './part_components/Psu';
import Case from './part_components/Case';
import Cooler from './part_components/Cooler';
// import Accessories from './part_components/Accessories';
import Fan from './part_components/Fan';

import { useBuildContext } from './context/BuildContext';

const NewBuild = () => {
    const buildContext = useBuildContext();

    const [cpuNameState, setCpuNameState] = useState('CPU');
    const [cpuLinkState, setCpuLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [gpuNameState, setGPUNameState] = useState('GPU');
    const [gpuLinkState, setGPUNameLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [ramNameState, setRamNameState] = useState('RAM');
    const [ramLinkState, setRamLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [moboNameState, setMoboNameState] = useState('Motherboard');
    const [moboLinkState, setMoboLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [storageNameState, setStorageNameState] = useState('Storage');
    const [storageLinkState, setStorageLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [psuNameState, setPsuNameState] = useState('PSU');
    const [psuLinkState, setPsuLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [caseNameState, setCaseNameState] = useState('Case');
    const [caseLinkState, setCaseLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [coolerNameState, setCoolerNameState] = useState('Cooler');
    const [coolerLinkState, setCoolerLinkState] = useState('Check links for compatibility with all other parts before purchasing');


    
    return(
        <div>

            <h1>Start a new build here</h1>
                
            <div className='build-container'>
                <div className='build-part-container'>
                    
                </div>
            </div>

        </div>
    );
}



export default NewBuild;