import Navbar from "../layouts/Navbar.jsx";
import Hero from "../assets/hero.jpg";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <body className="bg-gray-200 rounded-lg m-[1%]">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="max-w-md">
              <img className="rounded-lg shadow-lg" src={Hero} alt="About Us" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Welcome to Gadget Grade</h2>
              <p className="text-gray-700 mb-4">
                At Gadget Grade, we believe that technology is more than just a collection of
                features. It's an integral part of our lives, impacting how we work, communicate, and experience the world.
                That's why we created Gadget Grade - a platform where users can share their firsthand experiences and leave
                honest reviews about the technologies they've used.
              </p>

              <p className="text-gray-700 mb-4">
                Our mission is to empower individuals with accurate and unbiased information to
                make informed decisions about the gadgets they purchase. Whether you're looking for a new smartphone, laptop,
                or any other tech product, Gadget Grade is here to help you navigate the ever-evolving landscape of
                technology.
              </p>

              <p className="text-gray-700 mb-4">
                With Gadget Grade, you can read reviews from real users who have hands-on
                experience with the devices you're interested in. Get insights into the performance, design, usability, and
                more. Leave your own reviews to contribute to the community and help others make better choices.
              </p>

              <p className="text-gray-700 mb-4">Join our growing community of tech enthusiasts and let's collectively elevate the
                way we evaluate and appreciate technology. Together, we can make more informed decisions and ensure that
                every gadget purchase is a grade-A experience.
              </p>

            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default AboutUs;
