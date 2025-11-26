import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MdEmail, MdStar, MdCalendarToday, MdAttachMoney } from 'react-icons/md';

const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    const {id} = useParams();
        
    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.log(err));
    }, []);

    const service = services.find(s => s.serviceId == id);
    
    return (
        <div className='min-h-[calc(100vh-200px)] bg-linear-to-br from-slate-50 to-blue-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-5xl mx-auto'>
                <div className='bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden'>
                    {/* Service Image */}
                    <div className='h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden'>
                        <img 
                            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' 
                            src={service?.image} 
                            alt={service?.serviceName} 
                        />
                    </div>

                    {/* Service Content */}
                    <div className='p-4 sm:p-6 lg:p-8'>
                        {/* Category Badge */}
                        <span className='inline-block px-3 sm:px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4'>
                            {service?.category}
                        </span>

                        {/* Service Name */}
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4'>
                            {service?.serviceName}
                        </h1>

                        {/* Description */}
                        <p className='text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed'>
                            {service?.description}
                        </p>

                        {/* Provider Info Card */}
                        <div className='bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6'>
                            <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3'>Service Provider</h3>
                            <div className='space-y-2'>
                                <p className='text-sm sm:text-base text-gray-700 font-semibold'>{service?.providerName}</p>
                                <p className='text-sm sm:text-base text-gray-600 flex items-center gap-2'>
                                    <MdEmail className='text-indigo-600' />
                                    {service?.providerEmail}
                                </p>
                            </div>
                        </div>

                        {/* Info Grid */}
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8'>
                            {/* Price */}
                            <div className='bg-green-50 rounded-xl p-4 text-center'>
                                <MdAttachMoney className='w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2' />
                                <p className='text-gray-600 text-xs sm:text-sm mb-1'>Price</p>
                                <p className='text-xl sm:text-2xl font-bold text-green-600'>${service?.price}</p>
                            </div>

                            {/* Rating */}
                            <div className='bg-yellow-50 rounded-xl p-4 text-center'>
                                <MdStar className='w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 mx-auto mb-2' />
                                <p className='text-gray-600 text-xs sm:text-sm mb-1'>Rating</p>
                                <p className='text-xl sm:text-2xl font-bold text-yellow-600'>{service?.rating} ★</p>
                            </div>

                            {/* Slots */}
                            <div className='bg-blue-50 rounded-xl p-4 text-center'>
                                <MdCalendarToday className='w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2' />
                                <p className='text-gray-600 text-xs sm:text-sm mb-1'>Available Slots</p>
                                <p className='text-xl sm:text-2xl font-bold text-blue-600'>{service?.slotsAvailable}</p>
                            </div>
                        </div>

                        {/* Book Button */}
                        <button className='w-full py-3 sm:py-4 bg-linear-to-r from-blue-500 to-indigo-600 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300'>
                            Book This Service
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;