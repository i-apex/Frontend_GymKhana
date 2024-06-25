import './footer.css';
import Logo from '../Assets/e_cell_logo.png'
import facebook_logo from '../Assets/facebook.png'
import instagram_logo from '../Assets/instagram.png'
import linkedin_logo from '../Assets/linkedin.png'
import X_logo from '../Assets/X.png'
import phone_logo from '../Assets/phone.png'
import location_logo from '../Assets/location.png'
import mail_logo from '../Assets/mail.png'

export default function Footer() {
    return (
        <div className="bg-blue-700 p-4 pb-0 text-white" id="footer">
            <div className='md:flex justify-between ml-0'>
                <div className='md:w-1/3 [&>a]:md:text-3xl [&>a]:text-xl [&>a]:pb-2 [&>a]:block '>
                    <h1 className='text-2xl md:text-4xl pb-4 font-extrabold'>Quick links</h1>
                    <a>Events</a>
                    <a>Team</a>
                    <a>Collaborate</a>
                </div>
                <div className='md:w-1/3 my-10 md:my-0 text-center '>
                    <div className='flex justify-center row'>
                        <div className='flex w-fit'>
                            <div className='relative'>
                                {/* <div className='w-20 h-20  relative bg-white rounded-full'></div> */}
                                <div className='mt-[0.75rem] md:mt-0'>
                                    <img src={Logo} className='w-24  z-10'></img>
                                </div>
                            </div>
                            <div className='w-2 rounded-sm mx-4 bg-white'></div>
                            <div>
                                <h1 className='mt-[5%] font-extrabold text-2xl'>Entrepreneurship Cell</h1>
                                <h1 className='font-extrabold text-2xl'>IIT Tirupati</h1>
                            </div>
                        </div>
                        <div className='flex justify-center mt-16 [&>img]:px-2 '>
                            <img src={facebook_logo}></img>
                            <img src={instagram_logo}></img>
                            <img src={X_logo}></img>
                            <img src={linkedin_logo}></img>
                        </div>

                    </div>
                </div >
                <div className='md:w-1/3 relative text-end'>
                    <div className='flex relative col md:justify-end pb-3'>
                        <img src={location_logo} className='h-10 relative top-4'></img>
                        <div className=' text-wrap text-start pl-6 text-2xl w-64'>E-Cell Office, CIF building, IIT Tirupati, AP (517619)</div>
                    </div>
                    <div className='flex relative col md:justify-end pb-3'>
                        <img src={mail_logo} className='h-10 relative -top-1'></img>
                        <div className=' text-wrap pl-6 text-start text-2xl w-64'>ecell@iittp.ac.in</div>
                    </div>
                    <div className='flex relative col md:justify-end pb-2'>
                        <img src={phone_logo} className='h-10 relative -top-1'></img>
                        <div className=' text-wrap pl-6 text-start text-2xl w-64'>+91 7830190433</div>
                    </div>
                </div>
            </div>

            <section className='flex mt-6 justify-between'>
                <div className='inline-block '>
                    <p className=''>Developed by WebOps Team | E-Cell IIT Tirupati</p>
                </div>
                <div className='inline-block text-end'>
                    <p>@ E-cell IIT Tirupati. All Rights Reserved</p>
                </div>
            </section>
        </div>

    )
}