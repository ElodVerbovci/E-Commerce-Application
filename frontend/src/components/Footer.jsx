import { FaLinkedin, FaInstagram ,FaFacebook , FaYoutube , FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-gray-200 py-16 px-4 text-gray-800">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
     
        <div className="max-w-[1240px] w-full ml-12">
          <h1 className="text-3xl font-bold text-[#2E8B57] font-mono"><span className="text-[#000]">The</span>Storefront</h1>
          <p className="py-4 font-FiraCode text-black">
            We deliver High Quality clothes of different Brands and Styles
          </p>
          <div className="flex space-x-4 my-6 text-[#2E8B57]">
            <a
              href="https://github.com/ElodVerbovci"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/elod-verbovci-534541254"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaTwitterSquare size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/elod-verbovci-534541254"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/elod-verbovci-534541254"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaYoutube size={30} />
            </a>
          </div>
        </div>

     
        <div className="mt-10 lg:mt-0 lg:ml-auto lg:mr-10 w-full lg:w-[40%] mr-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Subscribe to Our Newsletter</h2>
          <form className="flex flex-col sm:flex-row items-start sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E8B57] mb-4 sm:mb-0 sm:mr-4"
            />
            <button
              type="submit"
              className="px-6 py-2 cursor-pointer bg-[#2E8B57] text-white rounded-md hover:bg-[#256d47] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
