import React, { useState } from 'react';
import Image from 'next/image';
import ContactImage from '@/public/contactus.jpg'; 
import FAQ from '@/app/components/FAQ'; // Make sure to adjust the path as necessary

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScZn5TtwUYvY1IaCtGq0IG2ZZveYsU4rMYf3TY779AA8FlV2A/formResponse';

const ContactUs: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [qualification, setQualification] = useState('');
  const [countryToStudy, setCountryToStudy] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('entry.1916632914', firstName);
    formData.append('entry.884871759', lastName); 
    formData.append('entry.968078730', email); 
    formData.append('entry.960625179', address); 
    formData.append('entry.1685875135', country); 
    formData.append('entry.565529439', message); 
    formData.append('entry.1174432540', qualification); 
    formData.append('entry.744504829', countryToStudy);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      setFormSubmitted(true);
      // Clear the form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
      setQualification('');
      setCountryToStudy('');
      setAddress('');
      setCountry('');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col gap-4 items-center justify-center bg-cream p-8 rounded-md">
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2 px-4">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          {formSubmitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 mb-4 rounded-md text-center">
              Your message has been sent. We'll get in touch with you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-2">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-2">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address" className="mb-2">
                Address:
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="country" className="mb-2">
                Country:
              </label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2">
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-md p-2 h-32"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="qualification" className="mb-2">
                Type of Qualification you have:
              </label>
              <input
                type="text"
                id="qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="countryToStudy" className="mb-2">
                Country to Study Abroad Choice:
              </label>
              <input
                type="text"
                id="countryToStudy"
                value={countryToStudy}
                onChange={(e) => setCountryToStudy(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
          <Image src={ContactImage} alt="Contact" className="w-full rounded-md" />
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default ContactUs;
