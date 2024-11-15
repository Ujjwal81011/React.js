import React from "react";
import plane1 from "../assets/Charter.jpg";
import plane2 from "../assets/Helicopter.webp";
import plane3 from "../assets/Private plane.jpg";
import { IoIosStar } from "react-icons/io";
import { FaPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const plansData = [
  {
    image: plane1,
    title: "Private Charter",
    subtitle: "Charter B1732",
    description:
      "Book a private charter for personalized, luxurious travel. Enjoy flexible schedules, ultimate privacy, and total comfort.",
    price: 370,
    path: "/book",
  },
  {
    image: plane2,
    title: "Helicopter Booking",
    subtitle: "Charter B1732",
    description:
      "Helicopter booking provides quick, flexible travel for short distances. It offers stunning views, privacy, and a convenient way to avoid traffic.",
    price: 270,
    path: "/book",
  },
  {
    image: plane3,
    title: "Private Plane",
    subtitle: "Charter B1732",
    description:
      "A private plane offers flexible travel, letting you fly on your schedule with complete privacy, comfort, and personalized service.",
    price: 320,
    path: "/book",
  },
];

const PlanCard = ({ plan }) => (
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
    <img
      src={plan.image}
      alt={plan.title}
      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
    />
    <div className="flex items-center mt-3">
      <h1 className="font-semibold text-lg md:text-xl text-gray-800">{plan.title}</h1>
      <div className="flex items-center ml-2">
        {[...Array(5)].map((_, index) => (
          <IoIosStar key={index} className="text-xl text-blue-500" />
        ))}
      </div>
    </div>
    <h2 className="text-gray-500 text-md mt-1 px-4">{plan.subtitle}</h2>
    <p className="text-gray-600 text-md mt-2 px-4 text-center">{plan.description}</p>
    <h1 className="text-2xl font-bold mt-3">
      <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        ${plan.price}{" "}
      </span>
      /Hour
    </h1>
    <Link to={plan.path}>
      <button className="bg-blue-600 text-white rounded-full px-6 py-2 mt-3 hover:bg-blue-700 flex items-center justify-center transition-colors duration-200">
        <FaPlane className="mt-1 text-2xl mx-2" />
        Book Now
      </button>
    </Link>
  </div>
);

const Plans = () => (
  <section className="flex w-full pt-10 pb-20 md:px-16 sm:px-10 px-4 flex-col gap-16 justify-center items-center bg-gray-50">
    <div className="flex flex-col w-full items-center text-center">
      <span className="font-semibold text-blue-600 text-lg sm:text-xl md:text-2xl">
        Our Plans
      </span>
      <span className="font-bold text-3xl text-gray-800 mt-1">Flights For Everyone</span>
      <p className="text-center max-w-md mt-4 text-sm sm:text-base md:text-lg">
        Discover the perfect travel experience with our exclusive flight options tailored for everyone.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
      {plansData.map((plan, index) => (
        <PlanCard key={index} plan={plan} />
      ))}
    </div>
  </section>
);

export default Plans;
