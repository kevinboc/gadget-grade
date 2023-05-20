import Navbar from "../layouts/Navbar.jsx";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <body class="bg-gray-200 rounded-lg m-[1%] ">
        <div class="container mx-auto p-8 ">
          <h1 class="text-4xl font-bold mb-6 text-center ">Privacy Policy</h1>
          <div class="">
            <div class="mx-auto">
              <p class="text-gray-700 mb-4">
                At Gadget Grade, we take your privacy seriously. We are
                committed to protecting the personal information you provide and
                ensuring that it is handled securely and in accordance with
                applicable data protection laws.
              </p>

              <p class="text-gray-700 mb-4">
                When you use our web application, Gadget Grade, we may collect
                certain information from you. This may include personal
                information such as your name, email address, and any other
                information you voluntarily provide when creating an account or
                submitting a review.
              </p>

              <p class="text-gray-700 mb-4">
                We collect this information to enhance your user experience,
                provide personalized recommendations, and communicate with you
                regarding your account and the services we offer. Rest assured
                that we will not sell, rent, or share your personal information
                with any third parties for marketing purposes without your
                consent.
              </p>

              <p class="text-gray-700 mb-4">
                Please note that when you leave a review on Gadget Grade, it
                will be publicly visible and associated with your username.
                Therefore, exercise caution and avoid sharing any sensitive or
                personally identifiable information in your reviews.
              </p>

              <p class="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information and prevent unauthorized
                access or disclosure. However, please understand that no method
                of transmission over the internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>

              <p class="text-gray-700 mb-4">
                By using Gadget Grade, you consent to the collection, use, and
                storage of your personal information as described in this
                Privacy Policy.
              </p>
              
              <p class="text-gray-700 mb-4">
                If you have any questions or concerns about our Privacy Policy
                or the handling of your personal information, please contact us
                via the "Contact Us" page.
              </p>

            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default PrivacyPolicy;
