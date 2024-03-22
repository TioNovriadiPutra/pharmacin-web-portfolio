import React from "react";
import style from "./sectionOne.module.css";

const BookIcon = () => {
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
          d="M5.3335 10.6665C5.3335 6.89584 5.3335 5.00917 6.5055 3.8385C7.67616 2.6665 9.56283 2.6665 13.3335 2.6665H18.6668C22.4375 2.6665 24.3242 2.6665 25.4948 3.8385C26.6668 5.00917 26.6668 6.89584 26.6668 10.6665V21.3332C26.6668 25.1038 26.6668 26.9905 25.4948 28.1612C24.3242 29.3332 22.4375 29.3332 18.6668 29.3332H13.3335C9.56283 29.3332 7.67616 29.3332 6.5055 28.1612C5.3335 26.9905 5.3335 25.1038 5.3335 21.3332V10.6665Z"
          stroke="#DDDDDD"
          stroke-width="2"
        />
        <path
          d="M26.5308 21.333H10.5308C9.29083 21.333 8.67083 21.333 8.1615 21.469C7.48324 21.6509 6.86482 22.0081 6.3684 22.5048C5.87198 23.0014 5.51505 23.62 5.3335 24.2983"
          stroke="#DDDDDD"
          stroke-width="2"
        />
        <path
          d="M10.667 9.33301H21.3337M10.667 13.9997H17.3337"
          stroke="#DDDDDD"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};



export default BookIcon;
