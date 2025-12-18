import React from 'react'

const ConectSection = () => {
    return (
        <div>
            <section className="bg-red-50 py-12 px-4 lg:px-24">
                <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">
                    Contact Us
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <form className="bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Message</label>
                            <textarea
                                placeholder="Your Message"
                                className="w-full border border-gray-300 rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md transition"
                        >
                            Send Message
                        </button>
                    </form>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold text-red-700 mb-4">Get in Touch</h3>
                        <p className="text-gray-700 mb-2">
                            <span className="font-medium">Phone:</span> +8801234-567890
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-medium">Email:</span> info@blooddonation.com
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium">Address:</span>Dhaka, Bangladesh
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ConectSection
