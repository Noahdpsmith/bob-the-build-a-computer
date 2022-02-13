import React from 'react';
import { Link, Route } from 'react-router-dom';

const Parts = () => {

    return(
        <div>
            
               <Route path='/cpu' component={Cpu} />
               <Route path='/ram' component={Ram} />
               <Route path='/motherboard' component={Motherboard} />
               <Route path='/gpu' component={Gpu} />
                 {/* note: storage is spelled with a '0' rather than an 'o' to prevent react from trying to implement localstorage or other types of storage */}
                 {/* storage component will be for hdd and ssd */}
               <Route path='/storage' component={St0rage} />
               <Route path='/psu' component={Psu} />
               <Route path='/case' component={Case} />
               <Route path='/cooler' component={Cooler} />
               <Route path='/accessories' component={Accessories} />
               <Route path='/fan' component={Fan} />

        </div>
    );
}



export default Parts;