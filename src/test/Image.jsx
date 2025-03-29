import React from "react";

const ResponsiveImage = ({ src, alt, width, height, className, ...props }) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ paddingTop: `${(height / width) * 100}%` }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        fill={true}
        className="w-full h-full object-cover"
        // quality="100"
        placeholder="blurred"
        {...props}
      />
    </div>
  );
};

export default ResponsiveImage;
