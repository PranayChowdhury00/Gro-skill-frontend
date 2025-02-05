import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGoogleplay, SiApple } from 'react-icons/si';
import logo from '/logo.jpg'; // Replace with your logo image

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 ">
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo and description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src={logo} alt="Logo" className="w-40 h-auto mb-4" />
            <p className="text-sm text-gray-300">
              Learn, grow, and enhance your skills with the best instructors in the industry.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-yellow-400 hover:underline">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400 hover:underline">Courses</a></li>
              <li><a href="#" className="hover:text-yellow-400 hover:underline">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul>
              <li><a href="pranaychowdhury00@gmail.com" className="hover:text-yellow-400 hover:underline">pranaychowdhury00@gmail.com</a></li>
              <li><a href="tel:+8801303572144" className="hover:text-yellow-400 hover:underline">+8801303572144</a></li>
            </ul>
          </div>

          {/* Download Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Get the App</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">
                <SiGoogleplay size={40} />
              </a>
              <a href="#" className="hover:opacity-80">
                <SiApple size={40} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full text-center mt-8 bg-blue-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Stay Updated!</h3>
          <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter and get the latest updates directly to your inbox.</p>
          <form className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border-none outline-none w-1/3 md:w-1/4"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md hover:bg-yellow-500 transition-all">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://facebook.com"
            className="text-gray-400 hover:bg-blue-600 p-2 rounded-full transition-all"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:bg-blue-400 p-2 rounded-full transition-all"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-400 hover:bg-pink-500 p-2 rounded-full transition-all"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:bg-blue-700 p-2 rounded-full transition-all"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="mt-12 text-center text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} SkillGrow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
