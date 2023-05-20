import Navbar from "../layouts/Navbar.jsx";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <body class="bg-gray-200 rounded-lg m-[2%]">
        <div class="container mx-auto p-8">
          <h1 class="text-4xl font-bold mb-6">Contact Us</h1>
          <div>
            <p class="text-gray-700 mb-4">
              We're here to assist you at Gadget Grade! If you have any
              questions, feedback, or inquiries, please don't hesitate to reach
              out to us.
            </p>
            <p class="text-gray-700 mb-4">
              You can contact us through the following channels:
            </p>
            <ul class="list-disc list-inside mb-4">
              <li class="text-gray-700">Email: info@gadgetgrade.com</li>
              <li class="text-gray-700">Phone: +1 (123) 123-4567</li>
              <li class="text-gray-700">
                Social Media: Follow and message us on Twitter, Facebook, or
                Instagram
              </li>
            </ul>
            <p class="text-gray-700 mb-4">
              We strive to respond to all inquiries within 24-48 hours. Please
              provide us with as much detail as possible so that we can assist
              you efficiently.
            </p>
            <p class="text-gray-700 mb-4">
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
