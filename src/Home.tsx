
import './css/home.css'
import img1 from './assets/back01.jpg'
import img2 from './assets/pokhara parkpg.jpg'

const home = () => {
    return(
        <>
        <div className='home-container'>
            <div className='welcome-text'>
                <p>
                    Welcome to Disneyland Pokhara where fun is <span className='redfont'>"Unlimited"</span>
                </p>
            </div>
            <div className='img1'>
                <img src={img1} alt='Disneyland Pokhara'></img>
            </div>
            <div className='box'>
                <div className='box1'>
                    <h1>Arcade Games</h1>
                    <p>
                        game descriptions.....
                    </p>
                </div>
                <div className='box2'>
                    <h1>Carnival Games</h1>
                    <p>
                        games descriptions......
                    </p>
                </div>
                <div className='box3'>
                    <h1>Indoor Games</h1>
                    <p>
                        board game descriptions.....
                    </p>
                </div>
            </div>
            <div className='img2'>
                <img src={img2} alt='Pokhara Park'></img>
            </div>
        </div>
        </>
    );
}
export default home