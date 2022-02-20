import React, { useState } from 'react';

import { useBuildContext } from './context/BuildContext';

const NewBuild = () => {
    const buildContext = useBuildContext();

    
    return(
        <div>

            <h1>Start a new build here</h1>
                
            <div className="new-build-links">
                <p>{buildContext}</p>
            </div>

        </div>
    );
}



export default NewBuild;