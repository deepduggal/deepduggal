// A contact form that sends me an email via a proxy services when submitted.
import React from 'react'

export default function ContactForm() {
  return (
    <div className="md:p-4 lg:p-8">
      <h1 className="text-2xl mb-4">Contact Deep</h1>
      <form id="contact" className="flex flex-col" action="mailto:duggald14+deepswebsite@gmail.com" method="POST" enctype="multipart/form-data">
        <label htmlFor="name">Name</label>
        <input className="mb-4 p-2 rounded-md bg-slate-600 text-white" placeholder="Name" type="text" id="name" name="name" required/>
        <label htmlFor="email">Email</label>
        <input className="mb-4 p-2 rounded-md bg-slate-600 text-white" placeholder="Email" type="email" id="email" name="email" required />
        <label htmlFor="message">Message</label>
        <textarea className="mb-4 p-2 rounded-md bg-slate-600 text-white" placeholder="My business needs..." id="message" name="message" required />
        <button className="p-2 rounded-md bg-blue-600 text-white" type="submit">Send</button>
      </form>
    </div>
  )
}
