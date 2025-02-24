import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function ChaptersSection() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
     
    });
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
            data-aos="fade-down" // AOS animation
          >
            Our Chapters Statistics
          </h1>
          <p
            className="lg:w-2/3 mx-auto leading-relaxed text-base"
            data-aos="fade-down" // AOS animation
            data-aos-delay="200" // Delay animation
          >
            Discover essential member statistics for our chapters
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          {/* First Statistic Card */}
          <motion.div
            className="p-4 md:w-1/3 sm:w-1/2 w-full h-56"
            data-aos="fade-right" // AOS animation
            whileHover={{ scale: 1.05 }} // Framer Motion hover effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="border-2 border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 px-4 py-6 rounded-lg h-full">
              <svg fill="#6183d1" className=" text-indigo-500 mb-3 inline-block" width="72px" height="72px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M39 2.03125C38.738281 2.0625 38.503906 2.199219 38.34375 2.40625L35.40625 6.09375C34.835938 5.378906 33.972656 4.90625 33 4.90625L29 4.90625C27.6875 4.90625 26.566406 5.765625 26.125 6.9375L16.4375 6.9375C14.8125 4.5625 12.082031 3 9 3C4.042969 3 0 7.042969 0 12C0 15.082031 1.5625 17.8125 3.9375 19.4375C3.949219 19.445313 3.957031 19.460938 3.96875 19.46875C3.96875 19.480469 3.96875 19.488281 3.96875 19.5L14.75 39.9375L6.875 39.9375C5.226563 39.9375 3.9375 41.359375 3.9375 43L3.9375 49C3.933594 49.28125 4.046875 49.554688 4.246094 49.753906C4.445313 49.953125 4.71875 50.066406 5 50.0625L39 50.0625C39.28125 50.066406 39.554688 49.953125 39.753906 49.753906C39.953125 49.554688 40.066406 49.28125 40.0625 49L40.0625 43C40.0625 41.359375 38.773438 39.9375 37.125 39.9375L29.90625 39.9375L16.96875 17.0625L26.125 17.0625C26.566406 18.234375 27.6875 19.09375 29 19.09375L33 19.09375C33.972656 19.09375 34.835938 18.621094 35.40625 17.90625L38.34375 21.59375C38.636719 21.960938 39.148438 22.066406 39.5625 21.84375L49.46875 16.4375C49.882813 16.214844 50.074219 15.730469 49.929688 15.285156C49.78125 14.835938 49.339844 14.5625 48.875 14.625C48.753906 14.644531 48.636719 14.6875 48.53125 14.75L39.375 19.78125L36.09375 15.625L36.09375 8.40625L39.375 4.25L48.53125 9.25C48.835938 9.457031 49.230469 9.472656 49.550781 9.292969C49.871094 9.113281 50.0625 8.769531 50.042969 8.402344C50.027344 8.035156 49.804688 7.710938 49.46875 7.5625L39.5625 2.15625C39.390625 2.058594 39.195313 2.015625 39 2.03125 Z M 9 5C11.480469 5 13.664063 6.28125 14.90625 8.21875C14.917969 8.238281 14.925781 8.261719 14.9375 8.28125C14.957031 8.324219 14.976563 8.367188 15 8.40625C15.023438 8.472656 15.054688 8.535156 15.09375 8.59375C15.109375 8.621094 15.140625 8.628906 15.15625 8.65625C15.175781 8.6875 15.195313 8.71875 15.21875 8.75C15.722656 9.71875 16 10.828125 16 12C16 13.160156 15.714844 14.257813 15.21875 15.21875C15.210938 15.230469 15.195313 15.238281 15.1875 15.25C15.175781 15.269531 15.164063 15.292969 15.15625 15.3125C15.152344 15.320313 15.160156 15.335938 15.15625 15.34375C15.132813 15.363281 15.113281 15.382813 15.09375 15.40625C15.027344 15.492188 14.976563 15.585938 14.9375 15.6875C14.925781 15.71875 14.914063 15.75 14.90625 15.78125C13.664063 17.71875 11.480469 19 9 19C5.125 19 2 15.875 2 12C2 8.125 5.125 5 9 5 Z M 9 6.34375C8.933594 6.34375 8.878906 6.371094 8.8125 6.375C8.75 6.390625 8.683594 6.410156 8.625 6.4375C5.707031 6.644531 3.34375 9.03125 3.34375 12C3.34375 15.101563 5.898438 17.65625 9 17.65625C12.101563 17.65625 14.65625 15.101563 14.65625 12C14.65625 9.042969 12.308594 6.660156 9.40625 6.4375C9.394531 6.4375 9.386719 6.40625 9.375 6.40625C9.304688 6.386719 9.230469 6.378906 9.15625 6.375C9.101563 6.375 9.054688 6.34375 9 6.34375 Z M 29 7.09375L33 7.09375C33.511719 7.09375 33.90625 7.488281 33.90625 8L33.90625 16C33.90625 16.511719 33.511719 16.90625 33 16.90625L29 16.90625C28.488281 16.90625 28.09375 16.511719 28.09375 16L28.09375 8C28.09375 7.488281 28.488281 7.09375 29 7.09375 Z M 8.9375 8.34375C8.957031 8.34375 8.980469 8.34375 9 8.34375C11.015625 8.34375 12.65625 9.984375 12.65625 12C12.65625 14.015625 11.015625 15.65625 9 15.65625C6.984375 15.65625 5.34375 14.015625 5.34375 12C5.34375 10.003906 6.949219 8.378906 8.9375 8.34375 Z M 17.5 9.0625L25.90625 9.0625L25.90625 14.9375L17.5 14.9375C17.820313 14.011719 18 13.03125 18 12C18 10.96875 17.820313 9.988281 17.5 9.0625 Z M 15.375 18.3125L27.59375 39.9375L16.96875 39.9375L6.84375 20.71875C7.539063 20.890625 8.253906 21 9 21C11.496094 21 13.742188 19.960938 15.375 18.3125 Z M 6.875 42.0625L16.09375 42.0625C16.34375 42.167969 16.625 42.167969 16.875 42.0625L37.125 42.0625C37.558594 42.0625 37.9375 42.4375 37.9375 43L37.9375 47.9375L6.0625 47.9375L6.0625 43C6.0625 42.4375 6.441406 42.0625 6.875 42.0625Z"></path></g></svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
              <p className="leading-relaxed">RAS Members</p>
            </div>
          </motion.div>

          {/* Second Statistic Card */}
          <motion.div
            className="p-4 md:w-1/3 sm:w-1/2 h-56 w-full"
            data-aos="fade-up" // AOS animation
            whileHover={{ scale: 1.05 }} // Framer Motion hover effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="border-2 border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 px-4 py-6 rounded-lg h-full">
               <svg width="72px" height="72px" className=" text-indigo-500 mb-3 inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 5.25C2 3.45507 3.45507 2 5.25 2H16.75C18.5449 2 20 3.45507 20 5.25V8.00934C19.4951 7.95675 18.9878 7.99076 18.5 8.10566V7H3.5V16.75C3.5 17.7165 4.2835 18.5 5.25 18.5H13.2347L12.7935 19.2641C12.6577 19.4994 12.5652 19.7477 12.5135 20H5.25C3.45507 20 2 18.5449 2 16.75V5.25ZM5.25 3.5C4.2835 3.5 3.5 4.2835 3.5 5.25V5.5H18.5V5.25C18.5 4.2835 17.7165 3.5 16.75 3.5H5.25Z" fill="#6183d1"></path> <path d="M19.8565 9C19.6411 8.98005 19.4255 8.9803 19.2123 9C18.1194 9.10098 17.0907 9.71296 16.5002 10.7357C15.7915 11.9632 15.9109 13.4415 16.685 14.5239L13.6595 19.7641C13.6153 19.8407 13.5788 19.9196 13.5499 20C13.3149 20.6516 13.5724 21.3977 14.1933 21.7562C14.8908 22.1589 15.7828 21.9199 16.1855 21.2224L19.2166 15.9724C20.5321 16.0903 21.8586 15.4548 22.5624 14.2357C23.3244 12.916 23.1291 11.3063 22.1921 10.2105L20.5417 13.0691C20.2195 13.6271 19.506 13.8183 18.948 13.4961C18.39 13.1739 18.1988 12.4604 18.521 11.9024L20.1714 9.04377C20.0667 9.0243 19.9616 9.00974 19.8565 9Z" fill="#6183d1"></path> <path d="M15.1652 13.5745C14.9952 12.8933 14.9834 12.1718 15.1463 11.4698L12.8579 9.17831C12.6628 8.98291 12.3462 8.98269 12.1508 9.17782C11.9554 9.37295 11.9552 9.68953 12.1503 9.88493L14.7934 12.5316L12.1503 15.1783C11.9552 15.3737 11.9554 15.6903 12.1508 15.8854C12.3462 16.0805 12.6628 16.0803 12.8579 15.8849L15.1652 13.5745Z" fill="#6183d1"></path> <path d="M9.85672 9.88537C10.0521 9.69021 10.0523 9.37363 9.85711 9.17826C9.66196 8.98289 9.34538 8.98271 9.15001 9.17787L6.14664 12.1779C6.05275 12.2717 6 12.3989 6 12.5316C6 12.6643 6.05276 12.7916 6.14665 12.8854L9.15001 15.8854C9.34538 16.0805 9.66196 16.0803 9.85711 15.885C10.0523 15.6896 10.0521 15.373 9.85672 15.1779L7.2075 12.5316L9.85672 9.88537Z" fill="#6183d1"></path> </g></svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
              <p className="leading-relaxed">CS Members</p>
            </div>
          </motion.div>

          {/* Third Statistic Card */}
          <motion.div
            className="p-4 md:w-1/3 sm:w-1/2 h-56 w-full"
            data-aos="fade-left" // AOS animation
            whileHover={{ scale: 1.05 }} // Framer Motion hover effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="border-2 border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 px-4 py-6 rounded-lg h-full">
            <svg width="64px" height="64px"  className=" text-indigo-500 mb-3 inline-block" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon fill="var(--ci-primary-color, #6183d1)" points="459.26 96 328 225.697 328 96 293.45 96 229.01 161.128 251.638 183.756 296 138.92 296 228.118 333.314 265.433 464 136.303 464 396.118 496 428.118 496 416 496 96 459.26 96" className="ci-primary"></polygon> <polygon fill="var(--ci-primary-color, #6183d1)" points="168 16 88 16 83.882 16 168 100.118 168 16" className="ci-primary"></polygon> <rect width="32" height="32" x="136" y="304" fill="var(--ci-primary-color, #6183d1)" className="ci-primary"></rect> <rect width="32" height="32" x="136" y="376" fill="var(--ci-primary-color, #6183d1)" className="ci-primary"></rect> <rect width="32" height="32" x="216" y="304" fill="var(--ci-primary-color, #6183d1)" className="ci-primary"></rect> <rect width="32" height="32" x="216" y="376" fill="var(--ci-primary-color, #6183d1)" className="ci-primary"></rect> <rect width="32" height="32" x="296" y="376" fill="var(--ci-primary-color, #6183d1)" className="ci-primary"></rect> <path fill="var(--ci-primary-color, #6183d1)" d="M38.627,16H16V496H496V473.373ZM48,464V70.627l88,88V248h32V190.627L441.373,464Z" className="ci-primary"></path> </g></svg>   
              <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
              <p className="leading-relaxed">IAS Members</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}