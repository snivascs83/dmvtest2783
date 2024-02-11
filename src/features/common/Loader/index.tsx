import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#3C5564] bg-opacity-60">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 250 250"
        fill="none"
        color="#FFFFFF"
        style={{ animation: "spin 600ms linear infinite" }}
      >
        <defs>
          <linearGradient id="spinner-secondHalf">
            <stop offset="0%" stopOpacity="0" stopColor="#FEC84B" />
            <stop offset="100%" stopOpacity="0.5" stopColor="#FEC84B" />
          </linearGradient>
          <linearGradient id="spinner-firstHalf">
            <stop offset="0%" stopOpacity="1" stopColor="#FEC84B" />
            <stop offset="100%" stopOpacity="0.5" stopColor="#FEC84B" />
          </linearGradient>
        </defs>

        <g style={{ transform: "translate(25px, 25px)" }} strokeWidth="15">
          <path
            stroke="url(#spinner-secondHalf)"
            d="M 4 100 A 96 96 0 0 1 196 100"
          />
          <path
            stroke="url(#spinner-firstHalf)"
            d="M 196 100 A 96 96 0 0 1 4 100"
          />

          <path
            stroke="#FEC84B"
            strokeLinecap="round"
            d="M 4 100 A 96 96 0 0 1 4 98"
          />
          <path
            stroke="#FEC84B"
            strokeLinecap="round"
            d="M 4 100 A 96 96 0 0 1 4 98"
          />
        </g>
      </svg>
    </div>
  );
};

export default Loader;
