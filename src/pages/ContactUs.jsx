import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  SendIcon,
  ClockIcon,
} from "lucide-react";

export default function ContactUs() {
  function sendMessage(fromData){
    const data=Object.fromEntries(fromData)
    console.log(data)
    }
  return (
    <section className="bg-gray-50">
      {/* Header */}
      <div className="bg-[#204E67] text-white py-20 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact us</h1>
        <p>Get in touch with us for any enquiries and questions</p>
      </div>
  
  {/* Grid Layout */}
     <div className="p-6 px-4 mx-20 ">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl text-[#204E67] font-bold mb-6">
            Department Information
          </h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start space-x-3">
              <MapPinIcon className="text-[#DD994D] mt-1" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>
                  Space Science and Geospatial Institute <br />
                  Remote Sensing Department <br />
                  Addis Ababa, 4 Kilo <br />
                  Ethiopia
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <PhoneIcon className="text-[#DD994D] mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>
                  Main Office: +251 963 34 23 <br />
                  Department: +251 963 34 23
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MailIcon className="text-[#DD994D] mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>remoteSensing@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <ClockIcon className="text-[#DD994D] mt-1" />
              <div>
                <h3 className="font-semibold">Office Hours</h3>
                <p>
                  Monday–Friday: 8:30 AM – 10:30 PM <br />
                  Saturday–Sunday: Closed
                </p>
              </div>
            </div>

            <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/image/map-location.png"
                alt="Map Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}
