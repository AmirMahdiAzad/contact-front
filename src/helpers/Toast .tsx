import React, { useState, useEffect } from "react";

const Toast = ({ text, status }) => {
  // اگر status برابر 201 بود سبز، در غیر این صورت قرمز
  const bgColor = status === 201 ? "bg-green-500" : "bg-red-500";

  return (
    <div className="fixed top-5 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <div
        className={`transform transition-all duration-500 ease-out px-6 py-3 rounded-lg shadow-lg text-white font-medium ${bgColor} pointer-events-auto animate-fade-in-down`}
      >
        {text}
      </div>
    </div>
  );
};

export default Toast;
