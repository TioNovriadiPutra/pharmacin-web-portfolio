import React from "react";
import style from "./sectionOne.module.css";

const DatabaseIcon = () => {
    return (
      <div className={style.iconBorder}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0002 10.6665C21.8912 10.6665 26.6668 8.87564 26.6668 6.6665C26.6668 4.45736 21.8912 2.6665 16.0002 2.6665C10.1091 2.6665 5.3335 4.45736 5.3335 6.6665C5.3335 8.87564 10.1091 10.6665 16.0002 10.6665Z"
            stroke="#DDDDDD"
            stroke-width="2"
          />
          <path
            d="M9.3335 14.4556C10.1356 14.6966 11.0326 14.8953 12.0002 15.0421"
            stroke="#DDDDDD"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M26.6668 16C26.6668 18.2092 21.8912 20 16.0002 20C10.1091 20 5.3335 18.2092 5.3335 16"
            stroke="#DDDDDD"
            stroke-width="2"
          />
          <path
            d="M9.3335 23.7891C10.1356 24.0301 11.0326 24.2288 12.0002 24.3756"
            stroke="#DDDDDD"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M26.6668 6.6665V25.3332C26.6668 27.5424 21.8912 29.3332 16.0002 29.3332C10.1091 29.3332 5.3335 27.5424 5.3335 25.3332V6.6665"
            stroke="#DDDDDD"
            stroke-width="2"
          />
        </svg>
      </div>
    );
  };
  
      
  export default DatabaseIcon;