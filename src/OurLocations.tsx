
import './css/ourlocations.css'

import Pkrbbsm from './assets/pokhara bbsm.jpeg'
import pkrdisneyland from './assets/pokhara parkpg.jpg'
import damak from './assets/dhamak bbsm).jpeg'
import birtamod from './assets/birtamod.jpeg'
import hey from './assets/v10044g50000cgdv9trc77uaclmtgj4g.mp4'

function OurLocations(){
    return(
    <>
    <div className='locations-container'>
        <h1 className='locations-title'>Our Locations</h1>
        <div className='wholesection'>
            <div className='location-card'>
                <img src={pkrdisneyland} alt='Pokhara Disneyland'/>
                <div className='location-content'>
                    <h2>Pokhara Disneyland</h2>
                    <p>Located at the main tourism center of Pokhara city, with running carnival games like...., and added much descriptions too</p>
                </div>
            </div>

            <div className='location-card'>
                <img src={Pkrbbsm} alt='Bhatbhateni Pokhara'/>
                <div className='location-content'>
                    <h2>Bhatbhateni Pokhara</h2>
                    <p>descriptions like indoor games, carnival games, since 20</p>
                </div>
            </div>

            <div className='location-card'>
                <img src={birtamod} alt='Birtamod'/>
                <div className='location-content'>
                    <h2>Birtamod</h2>
                    <p>descriptions</p>
                </div>
            </div>

            <div className='location-card'>
                <img src='' alt='Kathmandu'/>
                <div className='location-content'>
                    <h2>Kathmandu</h2>
                    <p>descriptions</p>
                </div>
            </div>

            <div className='location-card'>
                <img src={damak} alt='Damak'/>
                <div className='location-content'>
                    <h2>Damak</h2>
                    <p>descriptions</p>
                </div>
            </div>

            <div className='location-card'>
                <video src={hey} controls muted loop autoPlay playsInline />
                <div className='location-content'>
                    <h2>location title</h2>
                    <p>descriptions</p>
                </div>
            </div>

            <div className='location-card'>
                <img src='' alt='Location'/>
                <div className='location-content'>
                    <h2>location title</h2>
                    <p>descriptions</p>
                </div>
            </div>
        </div>
    </div>
    </>);
}
export default OurLocations;