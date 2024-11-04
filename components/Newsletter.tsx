import React from 'react'

const Newsletter = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Stay Updated with Chronicle Line
                    </h2>
                    <p className="text-emerald-100 mb-8">
                        Get the latest stories and updates delivered straight to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-6 py-3 rounded-full text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-grow max-w-md"
                        />
                        <button className="px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-400 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
