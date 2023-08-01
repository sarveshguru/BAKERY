import React from 'react'
import FootBar from './FootBar'
import FoodList from './FoodList'
import Navbar from './Navbar'

const About = () => {
    return (
        <>
            <Navbar />
            <div className='bg-main'>
                <div className='chef'>
                    <div className='about-bg'>
                        <h5 className='chef-line'>Meet Chef</h5>
                        <p className='chef-text'>NESAR AHMAD NOORULLAH was a young boy from Azamgarh in<br /> Uttar Pradesh who left home in search of life. Studying hotel<br /> management in Kolkata pushed him toward his dreams<br /> of joining the kitchen. What followed was an array of<br /> enriching experiences in Kolkata, Bhutan, Bangalore, Jaipur,<br /> South Africa and Delhi.<br /><br />

                            He made his way through jobs as a baker and arrived in Bhopal<br /> to head bhopal bakehouse & cafe and create a new<br /> mark of class in baking. He is treating Bhopal to the most<br /> delectable dessert experience and has introduced new<br /> varieties that the City hasn't tasted before.</p>
                    </div>
                </div>
                <div className='cake top-near'>
                    <h5 className='cake-head'>A Cake that's as unique as you are!</h5>
                    <p className='cake-text'>Bhopal Bakehouse & cafe is a High-end, Luxury, and Premium patisserie and bakery specializing<br /> in contemporary pastries, bread, and uniquely designed creations.<br /><br />

                        Defined by the values of Jehan Numa Group of Hotels, bbc was started in August 2017 with a<br /> vision to bring high-end cakes, desserts, and bread to the city of Bhopal and Central India, we<br /> are now offering cake delivery in Bhopal. </p>
                </div>

                <div class="container cake-img">
                    <div class="row">
                        <div class="col">
                            <img className='span4img-responsive center-block d-block mx-auto si' src='https://bhopalbakehouse.com/cake-delivery-in-bhopal/assets/images/pic-3-1.webp' alt='as' />
                        </div>
                        <div class="col">
                            <img className='img-responsive center-block d-block mx-auto si' src='https://bhopalbakehouse.com/cake-delivery-in-bhopal/assets/images/pic-4-1.webp' alt='as' />
                        </div>
                        <div class="col">
                            <img className='img-responsive center-block d-block mx-auto si' src='https://bhopalbakehouse.com/cake-delivery-in-bhopal/assets/images/pic-5-1.webp' alt='as' />
                        </div>
                    </div>
                </div>

                <div className='cake top-near'>
                    <h5 className='cake-head'>Celebration Cakes</h5>
                    <p className='cake-text'>We offer cake delivery in Bhopal for birthday parties, engagements or weddings, or any sort of<br /> celebration that just might be better off with our luxury and premium cakes and<br /> mini creations.

                    </p>
                </div>

                <div class="container cake-img">
                    <div class="row">
                        <div class="col">
                            <img className='span4img-responsive center-block d-block mx-auto si' src='https://bhopalbakehouse.com/cake-delivery-in-bhopal/assets/images/pic-7-1.webp' alt='as' />
                        </div>
                        <div class="col">
                            <img className='img-responsive center-block d-block mx-auto si' src='https://bhopalbakehouse.com/cake-delivery-in-bhopal/assets/images/pic-8.webp' alt='as' />
                        </div>
                        <div class="col">
                            <img className='img-responsive center-block d-block mx-auto si' src='https://bhopalbakehouse.com/cake-delivery-in-bhopal/assets/images/pic-9-1.webp' alt='as' />
                        </div>
                    </div>
                </div>

                <div className='cake top-near'>
                    <h5 className='cake-head'>Corporate Gifting</h5>
                    <p className='cake-text'>Whether you need a special gift, a customized Indulgence Box<br /> with your company logo, a box of luxury cupcakes, or urgent<br /> cake delivery in Bhopal to your client, we can do it!

                    </p>
                </div>

                <div class="container cake-img">
                    <div class="row">
                        <div class="col">
                            <img className='span4img-responsive center-block d-block mx-auto si' src='https://bhopalbakehouse.com/cake-delivery-in-bhopal/assets/images/pic-8-1.webp' alt='as' />
                        </div>
                        <div class="col">
                            <img className='img-responsive center-block d-block mx-auto si' src='https://bhopalbakehouse.com/cake-delivery-in-bhopal/assets/images/pic-11.webp' alt='as' />
                        </div>
                        <div class="col">
                            <img className='img-responsive center-block d-block mx-auto si' src='https://bhopalbakehouse.com/cake-delivery-in-bhopal/assets/images/ezgif.com-gif-maker.webp' alt='as' />
                        </div>
                    </div>
                    <div class="row top-near-a bottom-near">
                        <div class="col">
                            <img className='span4img-responsive center-block d-block mx-auto si' src='https://bhopalbakehouse.com/cake-delivery-in-bhopal/assets/images/ezgif.com-gif-maker-1-1.webp' alt='as' />
                        </div>
                        <div class="col">
                            <img className='img-responsive center-block d-block mx-auto si' src='https://bhopalbakehouse.com/cake-delivery-in-bhopal/assets/images/ezgif.com-gif-maker-2-1.webp' alt='as' />
                        </div>
                        <div class="col">
                            <img className='img-responsive center-block d-block mx-auto si' src='https://bhopalbakehouse.com/cake-delivery-in-bhopal/assets/images/ezgif.com-gif-maker-3-1.webp' alt='as' />
                        </div>
                    </div>
                </div>
                <FoodList />
                <FootBar />
            </div>

        </>
    )
}

export default About
