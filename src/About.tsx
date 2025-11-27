
import './css/aboutus.css'

function aboutus(){
    return(
        <>
        <div className='about-container'>
            <div className='about-intro'>
                <h1>About Disneyland</h1>
                <p>labeled descriptions</p>
            </div>
        
            <div className='team-section'>
                <h1>Meet Our Team</h1>
                <div className='team-grid'>
                    <div className='team-member'>
                        <img src="" alt="Team member"/>
                        <h2>Name</h2>
                        <p>descriptions</p>
                    </div>

                    <div className='team-member'>
                        <img src="" alt="Team member"/>
                        <h2>Name</h2>
                        <p>descriptions</p>
                    </div>

                    <div className='team-member'>
                        <img src="" alt="Team member"/>
                        <h2>Name</h2>
                        <p>descriptions</p>
                    </div>

                    <div className='team-member'>
                        <img src="" alt="Team member"/>
                        <h2>Name</h2>
                        <p>descriptions</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default aboutus