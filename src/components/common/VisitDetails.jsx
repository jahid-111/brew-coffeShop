import React from "react";

export default function VisitDetails() {
  return (
    <div className="w-full md:w-1/2 flex flex-col text-justify">
      <h3 className="text-2xl md:text-3xl mb-6 md:mb-10">COME VISIT US</h3>

      <div className="mb-6 md:mb-10">
        <p>500 TERRY FRANCINE STREET</p>
        <p>SAN FRANCISCO, CA 94158</p>
      </div>

      <div className="mb-6 md:mb-10">
        <p className="mb-2 md:mb-4">MON - FRI: 8AM - 8PM</p>
        <p className="mb-2 md:mb-4">SATURDAY: 9AM - 7PM</p>
        <p>SUNDAY: 9AM - 8PM</p>
      </div>

      <div className="mb-6 md:mb-10">
        <p className="mb-2 md:mb-4">INSTAGRAM</p>
        <p className="mb-2 md:mb-4">FACEBOOK</p>
        <p>TWITTER</p>
      </div>
    </div>
  );
}
