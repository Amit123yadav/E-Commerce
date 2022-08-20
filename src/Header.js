import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className='container main-hero-container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start'>
                            <h1 className='display-2'>Online payment made<br/>easy for you.</h1>
                            <p className='main-hero-para'>Online payments refer to the electronic exchange of currency through the internet. These payments usually consist of the transfer of monetary funds from a customer's bank or debit or credit card account, into the seller's bank account, in exchange for products or services...</p>
                             <h3>Get early access for you</h3>
                             <div className='input-group mt-3'>
                                 <input type='text' placeholder='Enter Your Email' className='rounded-pill w-75 p-2 me-3 form-control-text' />
                             <div className='input-group-button'>Get it now</div>
                             </div>
                        </div>
                        <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-hero-images'>
                                 <img src='./images/1.jpg' alt='load' className='img-fluid'/>
                                 <img src='./images/2.jpg' alt='load' className='img-fluid main-hero-img2'/>
                             </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header