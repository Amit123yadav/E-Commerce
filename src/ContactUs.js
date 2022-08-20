import React from 'react'

const ContactUs = () => {
    return (
        <>
            <section>
                <div className='container contactus-page'>
                    <div className='row sub-container-page'>
                        <div className='col-12 col-lg-12 sub-leftside-page'>
                            <div className='row main-leftside-page'>
                                <div className='col-12 col-lg-5 leftside-page'>
                                    <h1 className='main-heading fw-bold'>
                                        Connect With Our <br/> Sales Team.
                                    </h1>
                                    <p className='main-hero-para'>
                                        Online Payments Refer To The Electronic Exchange Of Currency Through The Internet. These Payments Usually Consist Of The Transfer Of Monetary Funds
                                    </p>
                                    <figcaption>
                                        <img src='./images/img3.jpg' alt='' className='img-fluid' />
                                    </figcaption>
                                </div>
                                <div className='col-12 col-lg-7 rightside-contact-page'>
                                    <form method='post'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-right-inner'>
                                                <input type='text' name='' id='' placeholder='First Name ' className='form-control' />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-right-inner'>
                                                <input type='text' name='' id='' placeholder='Last Name ' className='form-control' />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-right-inner'>
                                                <input type='text' name='' id='' placeholder='Phone Number ' className='form-control' />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-right-inner'>
                                                <input type='text' name='' id='' placeholder='Your Email' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-12 contact-right-inner'>
                                                <input type='text' name='' id='' placeholder='Add Address' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-12 contact-right-inner'>
                                                <input type='text' name='' id='' placeholder='Enter your Message' className='form-control' />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style ">
                                            <input class="form-check-input" type="checkbox" value="" 
                                            id="flexCheckChecked" />
                                            <label class="form-check-label" className='main-hero-para'>
                                            Online Payments Refer To The Electronic Exchange Of Currency Through The Internet.
                                            </label>
                                        </div>
                                        <button type='submit' className='btn w-100'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs