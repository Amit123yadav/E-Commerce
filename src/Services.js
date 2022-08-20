import React, { useState } from 'react';
import ServicesApi from './workapi/ServicesApi';

const Services = () => {
    const [servicedata, setServiceData] = useState(ServicesApi);
    return (
        <>
            <section className='main-services-container'>
                <div className='container main-service'>
                    <h1 className='main-heading text-center fw-bold'>How to Send Money</h1>
                    <div className='row sub-services-page'>
                        {servicedata.map((curElement) => {
                            const {id,logo,title,info} = curElement;
                            return (
                                <>
                                    <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv' key={id}>
                                        <i className={`fontawesome-style ${logo} `}></i>
                                        <h3 className='sub-heading'>{title}</h3>
                                        <p className='main-hero-para'>{info}</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services