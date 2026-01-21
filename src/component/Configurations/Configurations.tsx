"use client";

import React from "react";

const Configurations = () => {
  return (
    <section className="w-full bg-[#c7d35b] py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#5b5300] mb-4">
            Configurations & Pricing
          </h2>
          <p className="text-xl text-white">
            Premium Living, Fair Pricing, Exceptional Value
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-bordered align-middle text-center bg-white w-full min-w-[320px] md:min-w-[600px] lg:min-w-[700px]">
            <thead>
              <tr className="bg-[#5b5300] text-white text-sm lg:text-lg">
                <th className="py-4 px-4 md:px-6 md:py-4 text-center font-normal lg:font-semibold">
                  Configuration
                </th>
                <th className="py-4 px-4 md:px-6 md:py-4 text-center font-normal lg:font-semibold">
                  Carpet Area
                </th>
                <th className="py-4 px-4 md:px-6 md:py-4 text-center font-normal lg:font-semibold">
                  Starting Price
                </th>
              </tr>
            </thead>

            <tbody className="text-[#5b5300] text-lg">
              <tr className="border-t">
                <td className="py-2 px-3 md:px-6 md:py-4 text-center font-normal lg:font-medium">
                  2 BHK
                </td>
                <td className="py-2 px-3 md:px-6 md:py-4 text-center">
                  669 – 675
                </td>
                <td className="py-2 px-3 md:px-6 md:py-4 text-center font-semibold">
                  ₹1.80 Cr*
                </td>
              </tr>

              <tr className="border-t bg-[#f8f9ef]">
                <td className="py-2 px-3 md:px-6 md:py-4 text-center font-normal lg:font-medium">
                  2.5 BHK
                </td>
                <td className="py-2 px-3 md:px-6 md:py-4 text-center">
                  883 – 937
                </td>
                <td className="py-2 px-3 md:px-6 md:py-4 text-center font-semibold">
                  ₹2.38 Cr*
                </td>
              </tr>

              <tr className="border-t">
                <td className="py-2 px-3 md:px-6 md:py-4 text-center font-normal lg:font-medium">
                  3 BHK
                </td>
                <td className="py-2 px-3 md:px-6 md:py-4 text-center">
                  1022 – 1047
                </td>
                <td className="py-2 px-3 md:px-6 md:py-4 text-center font-normal lg:font-semibold">
                  ₹2.75 Cr*
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Configurations;
