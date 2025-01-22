// components/FeaturesTable.js
import React from "react";

const FeaturesTable = ({ featuresData }) => {
  return (
    <div className=" features-section mb-6">
      <h4 className="">COMPARE</h4>
      <table className="pricing-table w-full ">
        <thead className="pricing-table-headers">
          <tr className="">
            <th className="p-4 uppercase">THE FEATURES</th>
            <th className="p-4 uppercase">Basic</th>
            <th className="p-4 uppercase">Pro</th>
            <th className="p-4 uppercase">Business</th>
          </tr>
        </thead>
        <tbody>
          {featuresData.map((item, index) => (
            <tr key={index} className="pricing-table-row">
              <td className=" p-4 text-left ">{item.feature}</td>
              <td className=" text-center p-4 check-container ">
                {item.basic && <img src="../check.svg" alt="check" />}
              </td>
              <td className=" text-center p-4 check-container">
                {item.pro && <img src="../check.svg" alt="check" />}
              </td>
              <td className=" text-center p-2  check-container">
                {item.business && <img src="../check.svg" alt="check" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturesTable;
