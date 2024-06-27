import backgroundImage from '../assets/maingate.jpg'; 
import './Body.css'
import CardArea from './CardArea';

const Body = () =>{
  return (
    <div>

      
    <div>
      <div className="introimage pt-100" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px', 
        width: '100%' 
      }} ></div>
    </div>

    {/* about us */}

    <div className="d-flex justify-content-center align-items-center vh-60  text-white py-5">
    <div className="custom-container border border-info rounded-3 text-center">
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="text-center">
                            <h2 className="display-5 fw-bold">About Us</h2>
                            <p className="lead">Lorem ipsum dolor, sit amet elit Quamnitm veniam dicta architecto, quos id nemo minima nulla ducimus officiis! Lorem ipsum dolor, sit amet elit Quamnitm veniam dicta architecto.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>

<CardArea></CardArea>

  

    </div>
  )
}
export default Body