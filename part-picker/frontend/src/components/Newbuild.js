import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Ram from './part_components/Ram';
// import Motherboard from './part_components/Mobo';
// import Gpu from './part_components/Gpu';
// import St0rage from './part_components/St0rage';
// import Psu from './part_components/Psu';
// import Case from './part_components/Case';
// import Cooler from './part_components/Cooler';
// import Cpu from './part_components/Cpu';
// import Fan from './part_components/Fan';

// import { useBuildContext } from './context/BuildContext';

const NewBuild = () => {
    // const buildContext = useBuildContext();

    const [buildData, setBuildData] = useState([]);
    useEffect(() => {
        axios.get('//set-api-link-here')
        .then(res => {
            console.log(res)
            setBuildData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    const cpuArray = buildData.filter(part => part.type === 'cpu');
    const gpuArray = buildData.filter(part => part.type === 'gpu');
    const ramArray = buildData.filter(part => part.type === 'ram');
    const storageArray = buildData.filter(part => part.type === 'storage');
    const psuArray = buildData.filter(part => part.type === 'psu');
    const caseArray = buildData.filter(part => part.type === 'case');
    const coolerArray = buildData.filter(part => part.type === 'cooler');
    const fanArray = buildData.filter(part => part.type === 'fan');
    const motherboardArray = buildData.filter(part => part.type === 'mobo');

    const testArray = [
        {
            name: 'test1',
            type: 'cpu',
            link: 'test1',
        },
        {
            name: 'test2',
            type: 'cpu',
            link: 'test2',
        },
        {
            name: 'test3',
            type: 'cpu',
            link: 'test3',
        }
    ];

    const [showCpu, setShowCpu] = useState(false);
    const [showRam, setShowRam] = useState(false);
    const [showGpu, setShowGpu] = useState(false);
    const [showStorage, setShowStorage] = useState(false);
    const [showPsu, setShowPsu] = useState(false);
    const [showCase, setShowCase] = useState(false);
    const [showCooler, setShowCooler] = useState(false);
    const [showFan, setShowFan] = useState(false);
    const [showMobo, setShowMobo] = useState(false);


    const [cpuNameState, setCpuNameState] = useState('Choose your CPU');
    const [cpuLinkState, setCpuLinkState] = useState('Check links for compatibility with all other parts before purchasing');
    const [gpuNameState, setGpuNameState] = useState('Choose your GPU');
    const [gpuLinkState, setGpuLinkState] = useState('Check links for compatibility with all other parts before purchasing');
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
                    <button onClick={() => setShowCpu(true)}>Choose Part</button>
                </div>
                    <div style={{ display: showCpu ? "block" : "none"}}>
                        {cpuArray.map((data) => {
                            return(
                                <div>
                                    <h3>{data.name}</h3>
                                    <h3>{data.type}</h3>
                                    <h3>{data.link}</h3>
                                    <button onClick={() => {
                                        setCpuNameState(data.name);
                                        setCpuLinkState(data.link);
                                        setShowCpu(false);
                                    }}>Choose Part</button>
                                </div>
                            )
                        })}
                    </div>
                        {/* <Cpu/> */}

                <div className='build-part-container'>
                    <h2 value='mobo'>Motherboard</h2>
                    <h3 value={moboNameState}>{moboNameState}</h3>
                    <h3 value={moboLinkState}>{moboLinkState}</h3>
                    <button onClick={() => setShowMobo(true)}>Choose Part</button>
                </div>
                    <div style={{ display: showMobo ? "block" : "none"}}>
                        {motherboardArray.map((data) => {
                            return(
                                <div>
                                    <h3>{data.name}</h3>
                                    <h3>{data.type}</h3>
                                    <h3>{data.link}</h3>
                                    <button onClick={() => {
                                        setMoboNameState(data.name);
                                        setMoboLinkState(data.link);
                                        setShowMobo(false);
                                    }}>Choose Part</button>
                                </div>
                            )
                        })}
                    </div>
                        {/* <Motherboard/> */}

                <div className='build-part-container'>
                    <h2 value='gpu'>GPU</h2>
                    <h3 value={gpuNameState}>{gpuNameState}</h3> 
                    <h3 value={gpuLinkState}>{gpuLinkState}</h3>      
                    <button onClick={() => setShowGpu(true)}>Choose Part</button>                 
                </div>
                    <div style={{ display: showGpu ? "block" : "none"}}>
                        {gpuArray.map((data) => {
                            return(
                                <div>
                                    <h3>{data.name}</h3>
                                    <h3>{data.type}</h3>
                                    <h3>{data.link}</h3>
                                    <button onClick={() => {
                                        setGpuNameState(data.name);
                                        setGpuLinkState(data.link);
                                        setShowGpu(false);
                                    }}>Choose Part</button>
                                </div>
                            )
                        })}
                    </div>
                        {/* <Gpu/> */}

                <div className='build-part-container'>
                    <h2 value='ram'>Ram</h2>
                    <h3 value={ramNameState}>{ramNameState}</h3>  
                    <h3 value={ramLinkState}>{ramLinkState}</h3>       
                    <button onClick={() => setShowRam(true)}>Choose Part</button>               
                </div>
                    <div style={{ display: showRam ? "block" : "none"}}>
                        {ramArray.map((data) => {
                            return(
                                <div>
                                    <h3>{data.name}</h3>
                                    <h3>{data.type}</h3>
                                    <h3>{data.link}</h3>
                                    <button onClick={() => {
                                        setRamNameState(data.name);
                                        setRamLinkState(data.link);
                                        setShowRam(false);
                                    }}>Choose Part</button>
                                </div>
                            )
                        })}
                    </div>
                        {/* <Ram/> */}

                <div className='build-part-container'>
                    <h2 value='cooler'>Cooler</h2>
                    <h3 value={coolerNameState}>{coolerNameState}</h3>
                    <h3 value={coolerLinkState}>{coolerLinkState}</h3>
                    <button onClick={() => setShowCooler(true)}>Choose Part</button>
                </div>
                    <div style={{ display: showCooler ? "block" : "none"}}>
                        {coolerArray.map((data) => {
                            return(
                                <div>
                                    <h3>{data.name}</h3>
                                    <h3>{data.type}</h3>
                                    <h3>{data.link}</h3>
                                    <button onClick={() => {
                                        setCoolerNameState(data.name);
                                        setCoolerLinkState(data.link);
                                        setShowCooler(false);                                        
                                    }}>Choose Part</button>
                                </div>
                            )
                        })}
                    </div>
                        {/* <Cooler/> */}

                <div className='build-part-container'>
                    <h2 value='storage'>Storage</h2>
                    <h3 value={storageNameState}>{storageNameState}</h3>
                    <h3 value={storageLinkState}>{storageLinkState}</h3>
                    <button onClick={() => setShowStorage(true)}>Choose Part</button>
                </div>
                    <div style={{ display: showStorage ? "block" : "none"}}>
                        {storageArray.map((data) => {
                            return(
                                <div>
                                    <h3>{data.name}</h3>
                                    <h3>{data.type}</h3>
                                    <h3>{data.link}</h3>
                                    <button onClick={() => {
                                        setStorageNameState(data.name);
                                        setStorageLinkState(data.link);
                                        setShowStorage(false);
                                    }}>Choose Part</button>
                                </div>
                            )
                        })}
                    </div>
                        {/* <St0rage/> */}

                <div className='build-part-container'>
                    <h2 value='case'>Case</h2>
                    <h3 value={caseNameState}>{caseNameState}</h3>
                    <h3 value={caseLinkState}>{caseLinkState}</h3>
                    <button onClick={() => setShowCase(true)}>Choose Part</button>
                </div>
                    <div style={{ display: showCase ? "block" : "none"}}>
                        {caseArray.map((data) => {
                            return(
                                <div>
                                    <h3>{data.name}</h3>
                                    <h3>{data.type}</h3>
                                    <h3>{data.link}</h3>
                                    <button onClick={() => {
                                        setCaseNameState(data.name);
                                        setCaseLinkState(data.link);
                                        setShowCase(false);
                                    }}>Choose Part</button>
                                </div>
                            )
                        })}
                    </div>
                        {/* <Case/> */}

                <div className='build-part-container'>
                    <h2 value='psu'>PSU</h2>
                    <h3 value={psuNameState}>{psuNameState}</h3>
                    <h3 value={psuLinkState}>{psuLinkState}</h3>
                    <button onClick={() => setShowPsu(true)}>Choose Part</button>
                </div>
                    <div style={{ display: showPsu ? "block" : "none"}}>
                        {psuArray.map((data) => {
                            return(
                                <div>
                                    <h3>{data.name}</h3>
                                    <h3>{data.type}</h3>
                                    <h3>{data.link}</h3>
                                    <button onClick={() => {
                                        setPsuNameState(data.name);
                                        setPsuLinkState(data.link);
                                        setShowPsu(false);
                                    }}>Choose Part</button>
                                </div>
                            )
                        })}
                    </div>
                        {/* <Psu/> */}

                <div className='build-part-container'>
                    <h2 value='fan'>Fan</h2>
                    <h3 value={fanNameState}>{fanNameState}</h3>    
                    <h3 value={fanLinkState}>{fanLinkState}</h3>
                    <button onClick={() => setShowFan(true)}>Choose Part</button>
                </div>
                    <div style={{ display: showFan ? "block" : "none"}}>
                        {fanArray.map((data) => {
                            return(
                                <div>
                                    <h3>{data.name}</h3>
                                    <h3>{data.type}</h3>
                                    <h3>{data.link}</h3>
                                    <button onClick={() => {
                                        setFanNameState(data.name);
                                        setFanLinkState(data.link);
                                        setShowFan(false);
                                    }}>Choose Part</button>
                                </div>
                            )
                        })}
                    </div>
                        {/* <Fan/> */}

            </div>
                        <button>Save Build</button>
        </div>
    );
}



export default NewBuild;

// format for all the parts to be displayed in the dropdown menu

//  <div style={{ display: showCpu ? "block" : "none"}}>
//                         {testArray.map((data) => {
//                             return(
//                                 <div>
//                                     <h3>{data.name}</h3>
//                                     <h3>{data.type}</h3>
//                                     <h3>{data.link}</h3>
//                                 </div>
//                             )
//                         })}
//                     </div> 