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
import { useQuery} from '@apollo/client';
import { useMutation } from '@apollo/client';
// import { ADD_BUILD } from '../utils/mutations';
import { QUERY_PARTS } from '../utils/queries';
// import { useBuildContext } from './context/BuildContext';
import Styled from 'styled-components';

const NewBuild = () => {
    // const buildContext = useBuildContext();

    // const [buildData, setBuildData] = useState([]);
    // useEffect(() => {
    //     axios.get('//set-api-link-here')
    //     .then(res => {
    //         console.log(res)
    //         setBuildData(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, []);

    



    const { data } = useQuery(QUERY_PARTS);
    const parts = data?.Parts || [];

    const cpuArray = parts.filter(part => part.type === 'cpu');
    const gpuArray = parts.filter(part => part.type === 'gpu');
    const ramArray = parts.filter(part => part.type === 'ram');
    const storageArray = parts.filter(part => part.type === 'storage');
    const psuArray = parts.filter(part => part.type === 'psu');
    const caseArray = parts.filter(part => part.type === 'case');
    const coolerArray = parts.filter(part => part.type === 'cooler');
    const fanArray = parts.filter(part => part.type === 'fan');
    const motherboardArray = parts.filter(part => part.type === 'mobo');

    const [newBuildArray, setNewBuildArray] = useState([]);
    const onClickArray = (data) => {
        setNewBuildArray(arr => [...arr, data])
    }

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

    // const [addNewBuild, { error } ] = useMutation(ADD_BUILD);
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await addBuild({
    //             variables: {

    //             }
    //         })
    //     }
    // }

    const dummyArray = [
        {
            name: 'CPU',
            type: 'cpu',
            link: 'https://www.amazon.com/Intel-Core-i7-9750H-Processor-LGA-1151-Socket-1151/dp/B07XJZQW3P/ref=sr_1_1?keywords=intel+core+i7&qid=1589737983&sr=8-1',

        },
        {
            name: 'cpu',
            type: 'cpu',
            link: 'https://www.amazon.com/AMD-Radeon-RX-580-Graphics-Card-8GB/dp/B07XJZQW3P/ref=sr_1_1?keywords=amd+radeon+rx+580&qid=1589737983&sr=8-1',
        }
    ]
    
    return(
        <div>
            <Title>
            Start a new build here
            </Title>
            <BuildContainer>

                <PartContainer>
                    <PartName value='cpu'>CPU</PartName>
                    <PartLink value={cpuNameState}>{cpuNameState}</PartLink>
                    <h3 value={cpuLinkState}>{cpuLinkState}</h3>
                    <StyledButtonOne onClick={() => setShowCpu(true)}>Choose Part</StyledButtonOne>
                </PartContainer>
                    <div style={{ display: showCpu ? "block" : "none"}}>
                        {cpuArray.map((data) => {
                            return(
                                <HiddenDiv>
                                    <InnerDiv>{data.name}</InnerDiv>
                                    <InnerDiv>{data.type}</InnerDiv>
                                    <InnerDiv>{data.link}</InnerDiv>
                                    <StyledButtonOne onClick={() => {
                                        setCpuNameState(data.name);
                                        setCpuLinkState(data.link);
                                        setShowCpu(false);
                                        {onClickArray(data)}
                                    }}>Choose Part</StyledButtonOne>
                                </HiddenDiv>
                            )
                        })}
                    </div>
                        {/* <Cpu/> */}

                <PartContainer>
                    <PartName value='mobo'>Motherboard</PartName>
                    <PartLink value={moboNameState}>{moboNameState}</PartLink>
                    <h3 value={moboLinkState}>{moboLinkState}</h3>
                    <StyledButtonOne onClick={() => setShowMobo(true)}>Choose Part</StyledButtonOne>
                </PartContainer>
                    <div style={{ display: showMobo ? "block" : "none"}}>
                        {motherboardArray.map((data) => {
                            return(
                                <HiddenDiv>
                                    <InnerDiv>{data.name}</InnerDiv>
                                    <InnerDiv>{data.type}</InnerDiv>
                                    <InnerDiv>{data.link}</InnerDiv>
                                    <StyledButtonOne onClick={() => {
                                        setMoboNameState(data.name);
                                        setMoboLinkState(data.link);
                                        setShowMobo(false);
                                        {onClickArray(data)}
                                    }}>Choose Part</StyledButtonOne>
                                </HiddenDiv>
                            )
                        })}
                    </div>
                        {/* <Motherboard/> */}

                <PartContainer>
                    <PartName value='gpu'>GPU</PartName>
                    <PartLink value={gpuNameState}>{gpuNameState}</PartLink> 
                    <h3 value={gpuLinkState}>{gpuLinkState}</h3>      
                    <StyledButtonOne onClick={() => setShowGpu(true)}>Choose Part</StyledButtonOne>                 
                </PartContainer>
                    <div style={{ display: showGpu ? "block" : "none"}}>
                        {gpuArray.map((data) => {
                            return(
                                <HiddenDiv>
                                    <InnerDiv>{data.name}</InnerDiv>
                                    <InnerDiv>{data.type}</InnerDiv>
                                    <InnerDiv>{data.link}</InnerDiv>
                                    <StyledButtonOne onClick={() => {
                                        setGpuNameState(data.name);
                                        setGpuLinkState(data.link);
                                        setShowGpu(false);
                                        {onClickArray(data)}
                                    }}>Choose Part</StyledButtonOne>
                                </HiddenDiv>
                            )
                        })}
                    </div>
                        {/* <Gpu/> */}

                <PartContainer>
                    <PartName value='ram'>Ram</PartName>
                    <PartLink value={ramNameState}>{ramNameState}</PartLink>  
                    <h3 value={ramLinkState}>{ramLinkState}</h3>       
                    <StyledButtonOne onClick={() => setShowRam(true)}>Choose Part</StyledButtonOne>               
                </PartContainer>
                    <div style={{ display: showRam ? "block" : "none"}}>
                        {ramArray.map((data) => {
                            return(
                                <HiddenDiv>
                                    <InnerDiv>{data.name}</InnerDiv>
                                    <InnerDiv>{data.type}</InnerDiv>
                                    <InnerDiv>{data.link}</InnerDiv>
                                    <StyledButtonOne onClick={() => {
                                        setRamNameState(data.name);
                                        setRamLinkState(data.link);
                                        setShowRam(false);
                                        {onClickArray(data)}
                                    }}>Choose Part</StyledButtonOne>
                                </HiddenDiv>
                            )
                        })}
                    </div>
                        {/* <Ram/> */}

                <PartContainer>
                    <PartName value='cooler'>Cooler</PartName>
                    <PartLink value={coolerNameState}>{coolerNameState}</PartLink>
                    <h3 value={coolerLinkState}>{coolerLinkState}</h3>
                    <StyledButtonOne onClick={() => setShowCooler(true)}>Choose Part</StyledButtonOne>
                </PartContainer>
                    <div style={{ display: showCooler ? "block" : "none"}}>
                        {coolerArray.map((data) => {
                            return(
                                <HiddenDiv>
                                    <InnerDiv>{data.name}</InnerDiv>
                                    <InnerDiv>{data.type}</InnerDiv>
                                    <InnerDiv>{data.link}</InnerDiv>
                                    <StyledButtonOne onClick={() => {
                                        setCoolerNameState(data.name);
                                        setCoolerLinkState(data.link);
                                        setShowCooler(false);    
                                        {onClickArray(data)}                                    
                                    }}>Choose Part</StyledButtonOne>
                                </HiddenDiv>
                            )
                        })}
                    </div>
                        {/* <Cooler/> */}

                <PartContainer>
                    <PartName value='storage'>Storage</PartName>
                    <PartLink value={storageNameState}>{storageNameState}</PartLink>
                    <h3 value={storageLinkState}>{storageLinkState}</h3>
                    <StyledButtonOne onClick={() => setShowStorage(true)}>Choose Part</StyledButtonOne>
                </PartContainer>
                    <div style={{ display: showStorage ? "block" : "none"}}>
                        {storageArray.map((data) => {
                            return(
                                <HiddenDiv>
                                    <InnerDiv>{data.name}</InnerDiv>
                                    <InnerDiv>{data.type}</InnerDiv>
                                    <InnerDiv>{data.link}</InnerDiv>
                                    <StyledButtonOne onClick={() => {
                                        setStorageNameState(data.name);
                                        setStorageLinkState(data.link);
                                        setShowStorage(false);
                                        {onClickArray(data)}
                                    }}>Choose Part</StyledButtonOne>
                                </HiddenDiv>
                            )
                        })}
                    </div>
                        {/* <St0rage/> */}

                <PartContainer>
                    <PartName value='case'>Case</PartName>
                    <PartLink value={caseNameState}>{caseNameState}</PartLink>
                    <h3 value={caseLinkState}>{caseLinkState}</h3>
                    <StyledButtonOne onClick={() => setShowCase(true)}>Choose Part</StyledButtonOne>
                </PartContainer>
                    <div style={{ display: showCase ? "block" : "none"}}>
                        {caseArray.map((data) => {
                            return(
                                <HiddenDiv>
                                    <InnerDiv>{data.name}</InnerDiv>
                                    <InnerDiv>{data.type}</InnerDiv>
                                    <InnerDiv>{data.link}</InnerDiv>
                                    <StyledButtonOne onClick={() => {
                                        setCaseNameState(data.name);
                                        setCaseLinkState(data.link);
                                        setShowCase(false);
                                        {onClickArray(data)}
                                    }}>Choose Part</StyledButtonOne>
                                </HiddenDiv>
                            )
                        })}
                    </div>
                        {/* <Case/> */}

                <PartContainer>
                    <PartName value='psu'>PSU</PartName>
                    <PartLink value={psuNameState}>{psuNameState}</PartLink>
                    <h3 value={psuLinkState}>{psuLinkState}</h3>
                    <StyledButtonOne onClick={() => setShowPsu(true)}>Choose Part</StyledButtonOne>
                </PartContainer>
                    <div style={{ display: showPsu ? "block" : "none"}}>
                        {psuArray.map((data) => {
                            return(
                                <HiddenDiv>
                                    <InnerDiv>{data.name}</InnerDiv>
                                    <InnerDiv>{data.type}</InnerDiv>
                                    <InnerDiv>{data.link}</InnerDiv>
                                    <StyledButtonOne onClick={() => {
                                        setPsuNameState(data.name);
                                        setPsuLinkState(data.link);
                                        setShowPsu(false);
                                        {onClickArray(data)}
                                    }}>Choose Part</StyledButtonOne>
                                </HiddenDiv>
                            )
                        })}
                    </div>
                        {/* <Psu/> */}

                <PartContainer>
                    <PartName value='fan'>Fan</PartName>
                    <PartLink value={fanNameState}>{fanNameState}</PartLink>    
                    <h3 value={fanLinkState}>{fanLinkState}</h3>
                    <StyledButtonOne onClick={() => setShowFan(true)}>Choose Part</StyledButtonOne>
                </PartContainer>
                    <div style={{ display: showFan ? "block" : "none"}}>
                        {fanArray.map((data) => {
                            return(
                                <HiddenDiv>
                                    <InnerDiv>{data.name}</InnerDiv>
                                    <InnerDiv>{data.type}</InnerDiv>
                                    <InnerDiv>{data.link}</InnerDiv>
                                    <StyledButtonOne onClick={() => {
                                        setFanNameState(data.name);
                                        setFanLinkState(data.link);
                                        setShowFan(false);
                                        {onClickArray(data)}
                                    }}>Choose Part</StyledButtonOne>
                                </HiddenDiv>
                            )
                        })}
                    </div>
                        {/* <Fan/> */}

            </BuildContainer>
                        <ButtonDiv>
                        <StyledButtonTwo>Save Build</StyledButtonTwo>
                        </ButtonDiv>
                        {/* testing the ability to push to this array so we can access it later */}
                        {/* <div>{newBuildArray.map( e =>
                            <div>{ e._id }</div>
                            
                            )}
                        </div> */}
            
        </div>
    );
}



export default NewBuild;

const Title = Styled.div `
    font-size: 2rem;
    margin: 1rem;
    text-align: center;
`
const BuildContainer = Styled.div `
    background-color: #282838;
    width: 75%;
    margin: 0 auto;
    border-radius: 15px;
    padding: 1rem .75rem;
`
const PartContainer = Styled.div `
    display: flex;
    font-size: 1rem;
    align-items: center;
    justify-content: space-between;
    margin: .5rem;
    border-bottom: 2px solid white;
    padding: 0;
    `
const PartName = Styled.h3 `
    width: 12ch;
    /* border: 1px solid white; */
    font-size: 1.25rem;
    text-align: left;
`
const PartLink = Styled.h3 `
    width: 25ch;
    font-size: 1.25rem;
    text-align: left;
`
const StyledButtonOne = Styled.button `
    font-size: 1.25rem;
    background-color: transparent;
    background-repeat:no-repeat;
    border: none;
    color: white;
    text-align: left;
    white-space: nowrap;
    &:hover {
        border-bottom: 1px solid white;
    border-radius: 3px;
    }
`
const HiddenDiv = Styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    `
const InnerDiv = Styled.div `
    font-size: 1rem;
    /* border: 1px solid white; */
    min-width: 20ch;
`

const StyledButtonTwo = Styled.button `
    font-size: 2rem;
    background-color: transparent;
    background-repeat:no-repeat;
    border: none;
    color: white;
    text-align: center;
    margin: 3rem auto;
    
    &:hover {
        border-bottom: 1px solid white;
        border-radius: 5px;
    }
`
const ButtonDiv = Styled.div `
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

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

// testing the array to store all the data
// newBuildArray.push(data);
// console.log(newBuildArray);