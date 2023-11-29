import React from 'react'

const ContactForm = () => {
  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
        <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
            <form>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="w-full rounded border border-gray-300 px-[14px] py-3 text-base font-primary text-Blue3 outline-none focus:border-gray-400"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="email"
                        placeholder="Your email"
                        name="email"
                        className="w-full rounded border border-gray-300 px-[14px] py-3 text-base font-primary text-Blue3 outline-none focus:border-gray-400"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="tel"
                        placeholder="Your phone"
                        name="phone"
                        className="w-full rounded border border-gray-300 px-[14px] py-3 text-base font-primary text-Blue3 outline-none focus:border-gray-400"
                    />
                </div>
                <div className="mb-6">
                    <textarea
                        rows="6"
                        placeholder="Your Message"
                        name="datails"
                        className="w-full resize-none rounded border border-gray-300 px-[14px] py-3 text-base font-primary text-Blue3 outline-none focus:border-gray-400"
                        defaultValue=""
                    />
                </div>
                <div>
                    <button
                    type="submit"
                    className="w-full rounded border border-gray-400 bg-Blue1 p-3 text-white transition hover:bg-opacity-90 font-primary"
                    >
                        Send Message
                    </button>
                </div>    
            </form>
        </div>
    </div>
  )
}

export default ContactForm