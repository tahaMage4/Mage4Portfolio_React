import React, { useState } from "react";
import "./Services.scss";
import services from "./Services.config";
import Modal from "../Modal/Modal";
import Data from "../Modal/Model.config";

const ServicesProvide = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterdata, setFilterdata] = useState(0);
  // const data = services.map((service) => {
  //   return service.datafilter;
  // });

  const FilterData = (id) => {
    setShowModal(true);
    console.log(id);
    // Data.filter((user, val, id) => user.indexOf(val) == id);
    const dataTest = Data.filter((user) => {
      return user.id === id;
    });
    setFilterdata(dataTest);
    console.log("data-test", dataTest);
  };
  return (
    <>
      <section className="services">
        <h2 className="left-to-right">Services</h2>

        <div className="box-4 bounce-in-top">
          {services.map((servicer) => (
            <div
              onClick={() => FilterData(servicer.id)}
              key={servicer.id}
              className={`box ${servicer.class}`}
            >
              <div className="content">
                <div className="icon">
                  <i>{servicer.icon}</i>
                </div>
                <h3>{servicer.tittle}</h3>
                <p>{servicer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setFilterdata={setFilterdata}
        filterdata={filterdata}
      />
    </>
  );
};

export default ServicesProvide;
