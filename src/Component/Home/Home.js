import React from 'react';
import CustomReview from '../CustomReview/CustomReview';
import './Home.css';

const Home = () => {
    return (
      <div className="mt-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <div className="p-5 lg:mt-10">
            <h1 className="text-3xl font-bold px-10">Bechelor Platter</h1>
            <h1 className="text-3xl pt-5 px-10 font-bold text-indigo-600">
              The Blue Hill
            </h1>
            <p className="flex justify-center text-justify px-10 pt-5">
              You can buy food online from this website. You can buy food by pressing few clicks or a convenient phone
              call. Please order now your best platter.
            </p>
            <button className="mt-5 mx-10 bg-indigo-200 rounded p-3 font-bold">
              Live Demo
            </button>
          </div>
          <div>
            <img
              className="mx-10 img-size"
              src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="
              alt="Bechelor Platter"
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <CustomReview />
        </div>
      </div>
    );
};

export default Home;