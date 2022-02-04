import React from "react";

const TypeCard = ({ icon, title, color, click }) => {
  return (
    <div
      onClick={() => click()}
      style={{
        height: "25rem",
        width: "20rem",
        margin: "20px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: `${color}`,
        borderRadius: "1rem",
        cursor: "pointer",
        boxShadow: "2px 5px 12px -2px rgba(0,0,0,0.52)",
      }}
    >
      {/* Icon */}
      <i
        style={{
          display: "flex",
          backgroundColor: "white",
          height: "6rem",
          width: "6rem",
          fontSize: "2rem",
          borderRadius: "8rem",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={icon}
      ></i>
      {/* Heading */}
      <h1
        style={{
          fontFamily: "Poppins",
          fontSize: "1.2rem",
          margin: "1rem 0",
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default TypeCard;
