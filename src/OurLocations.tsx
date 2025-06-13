
import './css/ourlocations.css'

import Pkrbbsm from './assets/pokhara bbsm.jpeg'
import pkrdisneyland from './assets/pokhara parkpg.jpg'
import damak from './assets/dhamak bbsm).jpeg'
import birtamod from './assets/birtamod.jpeg'
import hey from './assets/v10044g50000cgdv9trc77uaclmtgj4g.mp4'

function OurLocations(){
    return(
    <>
    <div className='wholesection'>
        <div>
            <img src={pkrdisneyland}/>
            <h1>Pokhara Disneyland</h1>
            <p>Located at the main tourism center of Pokhara city, with running carnival games like...., and added much descriptions too</p>
        </div>

        <div>
            <img src={Pkrbbsm}/>
            <h1>Bhatbhateni Pokhara</h1>
            <p>descriptions like indoor games, carnival games, since 20</p>
        </div>

        <div>
            <img src={birtamod}/>
            <h1>Birtamod</h1>
            <p>descriptions</p>
        </div>

        <div>
            <img src=''/>
            <h1>Kathmandu</h1>
            <p>descriptions</p>
        </div>

        <div>
            <img src={damak}/>
            <h1>Damak</h1>
            <p>descriptions</p>
        </div>

        <div>
            <img src={hey}/>
            <h1>location title</h1>
            <p>descriptions</p>
        </div>

        <div>
            <img src=''/>
            <h1>location title</h1>
            <p>descriptions</p>
        </div>

    </div>
    </>);
}
export default OurLocations;