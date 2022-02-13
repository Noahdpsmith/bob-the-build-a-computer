import React from 'react';
import { Link, Route } from 'react-router-dom';
// import Cpu from './part_components/Cpu';
// import Ram from './part_components/Ram';
// import Motherboard from './part_components/Mobo';
// import Gpu from './part_components/Gpu';
// import St0rage from './part_components/St0rage';
// import Psu from './part_components/Psu';
// import Case from './part_components/Case';
// import Cooler from './part_components/Cooler';
// import Accessories from './part_components/Accessories';
// import Fan from './part_components/Fan';


const Parts = () => {

    return(
        <div>
            
               {/* <Route exact path='/parts/cpu' component={Cpu} /> */}
               {/* <Route exact path='/parts/ram' component={Ram} /> */}
               {/* <Route exact path='/parts/motherboard' component={Motherboard} /> */}
               {/* <Route exact path='/parts/gpu' component={Gpu} /> */}

                 {/* note: storage is spelled with a '0' rather than an 'o' to prevent react from trying to implement local-storage or other types of storage */}
                 {/* storage component will be for hdd and ssd */}

               {/* <Route exact path='/parts/storage' component={St0rage} /> */}
               {/* <Route exact path='/parts/psu' component={Psu} /> */}
               {/* <Route exact path='/parts/case' component={Case} /> */}
               {/* <Route exact path='/parts/cooler' component={Cooler} /> */}
               {/* <Route exact path='/parts/accessories' component={Accessories} /> */}
               {/* <Route exact path='/parts/fan' component={Fan} /> */}

               {/* start the component here, dont mess with the routing */}

              <Link to='/parts/cpu'>CPU</Link>
              {/* link to test the component routing */}

        </div>
    );
}



export default Parts;