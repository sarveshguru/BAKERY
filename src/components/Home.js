import React from 'react'
import FootBar from './FootBar'
import Navbar from './Navbar'

const Home = () => {

    return (
        <>
            <Navbar />

            {/*crousal*/}

            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Stores-and-Offers/Product-Assortment/DFB/Bakery/Bakery-Hero-img-1392x464.jpg?rev=20cd3d9ccad343d5a6781d92bd201232&w=1392&webp=1&hash=9BD4BC2896F013A98BBAA010204942F5" class="d-block w-100" alt="..." /><h1 className='heading-line'>THE REAL TASTE</h1><button type="button" class="btnn">Order Now</button>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://img.freepik.com/free-photo/chef-dusting-flour-dough_23-2148742188.jpg?w=1060&t=st=1667397063~exp=1667397663~hmac=fe3cb82699e33add8e391b87e869a3d6fef6089e6d06779c596b051b9fa4b673" class="d-block w-100" alt="..." /><h1 className='heading-line'>BAKERS DELIGHT</h1><button type="button" class="btnn">Order Now</button>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2021-08/high-hydration-whole-wheat-sourdough.jpg?itok=65cK4fUI" class="d-block w-100" alt="..." /><h1 className='heading-line'>PINCH OF PERFECT
                        </h1><button type="button" class="btnn">Order Now</button>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* traditional to mordern section*/}
            <div className='bg sec1'>
                <div className='container'>
                    <div className='r'>
                        <div className='box-1'>
                            <h2><span className='b'>TRADITIONAL</span> <span className='a'>RECIPES</span> <br /><span className='a'>MADE</span>  <span className='b'>MODERN</span></h2><br />
                            <p>Lorem ipsum dolor sit amet, reque adipisci at vix. Vim tale hinc doming eu, dolore virtute argumentum ad sit. Laboramus similique eos ut, ad perfecto vituperata sed.</p>
                        </div>
                        <div className='box-2'>
                            <img src='https://panaderia.qodeinteractive.com/wp-content/uploads/2019/07/h-6-single-image-1.jpg' alt='as' />
                        </div>
                        <div className='box-3'>
                            <img src='https://panaderia.qodeinteractive.com/wp-content/uploads/2019/03/h-6-single-image-2.jpg' alt='sa' />
                        </div>
                        <div className='clearfix'></div>
                    </div>
                </div>
            </div>

            {/*cake*/}

            <div class="container-a cake-img">
                <div className='sec1 des'>
                    <div class="row">
                        <div class="col">
                            <img className='span4img-responsive center-block d-block mx-auto so' src='https://bhopalbakehouse.com/cake-delivery-in-bhopal/assets/images/pic-6-1.webp' alt='as' />
                        </div>
                        <div class="col">
                            <h2 className='des-head'>Designer Cakes</h2>
                            <p className='des-text'>
                            bhopal bakehouse & cafe offers<br/> designer and custom cake delivery in<br/> Bhopal for themed cakes for any<br/> special occasion.<br/><br/>

                             If you are looking for exquisite cakes<br/> that offer a sensation rich in both<br/> flavour and design, we are your brand<br/> of choice in the city.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* traditional to mordern section*/}

            <div className='r1 sec1'>
                <div className='cent'>
                    <form className='container'>
                        <h3>CUSTOMIZE YOUR CAKE</h3>
                        <div>
                            <input type='text' id='fname' name='fname' placeholder='Full Name' required />

                            <input type='tel' id='phone' name='phone' placeholder='Phone No.' required />
                        </div>

                        <div>
                            <input type='email' id='email' name='email' placeholder='Email ID' required />
                        </div>

                        <div>
                            <input type='text' id='address' name='address' placeholder='Address' required />
                        </div>

                        <div>
                            <textarea id="detail" name="detail" rows="8" cols="50" placeholder='Detail' />
                        </div>

                        <div>
                            <label>Date & Time of Delivery</label>
                            <input type="datetime-local" id="datetime" name="datetime" required />
                        </div>

                        <div className='btnn2'>
                            <input type="submit" value="Submit" id='submit' />
                        </div>
                    </form>
                </div>
            </div>
            <FootBar />
        </>
    )
}

export default Home
