import React from "react";
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon, ClockIcon } from "lucide-react";

export default function ContactUs() {
  function sendMessage(formData) {
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <section className="bg-gray-50">
      {/* Header */}
      <div className="bg-secondary text-white py-20 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg lg:text-xl">Get in touch with us for any enquiries and questions</p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
        {/* Department Info */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl text-secondary font-bold mb-6">Department Information</h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start space-x-3">
              <MapPinIcon className="w-6 h-6 text-primary mt-1" />
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
              <PhoneIcon className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>
                  Main Office: +251 963 34 23 <br />
                  Department: +251 963 34 23
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MailIcon className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>remoteSensing@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <ClockIcon className="w-6 h-6 text-primary mt-1" />
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

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl text-secondary font-bold mb-6">Send Us a Message</h2>
          <form
            className="flex flex-col space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(new FormData(e.target));
              e.target.reset();
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DD994D]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DD994D]"
              required
            />
            <select
              name="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DD994D]"
              required
            >
              <option value="">Select Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Student Information">Student Information</option>
              <option value="Consultancy Service">Consultancy Service</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DD994D]"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-primary transition duration-300"
            >
              Send Message <SendIcon size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
