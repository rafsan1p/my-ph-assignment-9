import React, { useEffect, useState } from "react";

const PopularSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./services.json")
        .then((res) => res.json())
        .then((data) => setServices(data))
        .catch((err) => console.log(err));
    }, []);

    console.log(services);

    return (
    <div className="mt-8 px-[145px]">
        <div>
            <h3 className="font-bold text-3xl text-center mb-12">Popular Winter Care Services</h3>
        </div>

        <div className="grid grid-cols-4 gap-10 justify-items-center">
            {
                services.slice(0, 8).map((service) => 
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img className="w-full h-[300px] object-cover"
                            src={service?.image}
                            alt="Shoes"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service?.serviceName}</h2>
                            <div className="flex justify-between">
                                <p>Price: ${service?.price}</p>
                                <p>Rating: {service?.rating} stars</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Veiw Details</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    </div>
    );
};

export default PopularSection;
