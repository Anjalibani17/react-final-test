// import React from "react";
// import { connect } from "react-redux";
// import { setInputData } from "./action";
// import ApiComponent from "./ApiComponent";
// import { API } from "./api";

// const NewUser = ({ inputData, setInputData }) => {
//   const handleChange = (event) => {
//     setInputData(event.target.value);
//   };

//   const handleSubmit = () => {
//     // Handle form submission if needed
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={inputData}
//         onChange={handleChange}
//         placeholder="Enter name here"
//       />
//       <button onClick={handleSubmit}>Submit</button>
//       <API inputData={inputData} /> {/* Use the ApiComponent within the AddUser component */}
//     </>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     inputData: state.inputData,
//   };
// };

// const mapDispatchToProps = {
//   setInputData,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
