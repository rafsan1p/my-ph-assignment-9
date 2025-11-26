import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const Services = () => {

    const [services, setServices] = useState([]);
    
        useEffect(() => {
            fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.log(err));
        }, []);

    return (
        <div className="my-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[145px]">
             <div>
            <h3 className="font-bold text-2xl sm:text-3xl text-center mb-8 sm:mb-12">Popular Winter Care Services</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
            {
                services.map((service) => 
                    <motion.div 
                    key={service.serviceId}
                    initial={{ scale: 0.9 }} 
                    animate={{ 
                        scale: 1,
                        transition: { duration: 0.5 } 
                    }} 
                    className="card bg-base-100 w-full max-w-96 shadow-sm">
                        <figure>
                            <img className="w-full h-[250px] sm:h-[300px] object-cover"
                            src={service?.image}
                            alt="Shoes"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-base sm:text-lg">{service?.serviceName}</h2>
                            <div className="flex justify-between text-sm sm:text-base">
                                <p>Price: ${service?.price}</p>
                                <p>Rating: {service?.rating} stars</p>
                            </div>
                            <div className="card-actions justify-end">
                                <Link to={`/details/${service?.serviceId}`}> 
                                    <button className="btn btn-primary btn-sm sm:btn-md">View Details</button> 
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )
            }
        </div>
        </div>
    );
};

export default Services;