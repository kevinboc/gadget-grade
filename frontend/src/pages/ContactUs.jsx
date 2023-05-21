import Navbar from "../layouts/Navbar.jsx";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <body className="bg-gray-200 rounded-lg m-[2%]">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <div>
            <p className="text-gray-700 mb-4">
              We're here to assist you at Gadget Grade! If you have any
              questions, feedback, or inquiries, please don't hesitate to reach
              out to us.
            </p>
            <p className="text-gray-700 mb-4">
              You can contact us through the following channels:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="text-gray-700">Email: info@gadgetgrade.com</li>
              <li className="text-gray-700">Phone: +1 (123) 123-4567</li>
              <li className="text-gray-700">
                Social Media: Follow and message us on Twitter, Facebook, or
                Instagram
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              We strive to respond to all inquiries within 24-48 hours. Please
              provide us with as much detail as possible so that we can assist
              you efficiently.
            </p>
            <p className="text-gray-700 mb-4">
              Thank you for using Gadget Grade. We appreciate your feedback and
              look forward to helping you with your inquiries.
            </p>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ContactUs;
