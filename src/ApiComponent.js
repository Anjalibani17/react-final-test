// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { getUsers } from "./api"; // Import the getUsers function from your API file
// // import { setUsers } from "./actions";
// import setUsers from "./action";
// const ApiComponent = ({ users, setUsers }) => {
//   useEffect(() => {
//     // Fetch users from the API when the component mounts
//     getUsers()
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//       });
//   }, [setUsers]);

//   return (
//     <div>
//       <h2>Users:</h2>
//       {users.map((user) => (
//         <div key={user.id}>
//           <p>{user.name}</p>
//           <p>{user.email}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     users: state.users,
//   };
// };

// const mapDispatchToProps = {
//   setUsers,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ApiComponent);
