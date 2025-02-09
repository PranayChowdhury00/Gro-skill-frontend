import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Cart = () => {
  const {user}=useContext(AuthContext);
  const [items, setItems] = useState([]);

  // Fetch cart items from the backend
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cartItem/${user.email}`)
      .then((result) => {
        setItems(result.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts
  
  const handelDelete = (id) => {
    // Show confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with the deletion
        axios
          .delete('http://localhost:5000/deleteCart', {
            data: { id } // Send the id in the request body as data
          })
          .then((response) => {
            // Show success alert after deletion
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success"
            });
  
            // Remove the deleted item from the state
            setItems((prevItems) => prevItems.filter((item) => item._id !== id));
          })
          .catch((err) => {
            console.error(err.message);
            // Show error alert if deletion fails
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Failed to delete item",
              showConfirmButton: false,
              timer: 1500
            });
          });
      }
    });
  };
  



  return (
    <div className="max-w-7xl mx-auto py-20">
      <h1 className="text-3xl font-semibold py-5">Your Cart items({items.length})</h1>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table Header */}
            <thead>
              <tr>
                
                <th>Course Name</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
    
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.course.image} // Assuming course image is stored in item.course.image
                            alt="Course Image"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.course.courseName}</div> {/* Display course name */}
                        {/* <div className="text-sm opacity-50">{item.course.instructor}</div> */}
                      </div>
                    </div>
                  </td>
                  <td>  <div className=" font-medium">{item.course.instructor}</div></td>
                  <td>${item.course.price.toFixed(2)}</td> {/* Display course price */}
                  <th>
                   <Link to='/payment'>
                   <button className="btn btn-success mr-5">Bye</button>
                   </Link>
                    <button onClick={()=>handelDelete(item._id)} className="btn bg-red-500 ">Delete</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
