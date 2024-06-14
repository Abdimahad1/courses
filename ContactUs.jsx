import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4 bg-white p-6 rounded shadow-md">
        <div>
          <label className="block mb-2 font-bold" htmlFor="name">Name</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" required />
        </div>
        <div>
          <label className="block mb-2 font-bold" htmlFor="email">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" required />
        </div>
        <div>
          <label className="block mb-2 font-bold" htmlFor="message">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" id="message" rows="4" required></textarea>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
