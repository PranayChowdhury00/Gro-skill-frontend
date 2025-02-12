import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const InstructorRequest = () => {
  const [requestInstructor, setRequestInstructor] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getInstructor")
      .then((result) => {
        setRequestInstructor(result.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
//   console.log(requestInstructor);
  const applyingCandidate = requestInstructor.filter(
    (x) => x.status === "pending"
  );
//   console.log("pending one", applyingCandidate);

const deleteInstructorRequest = (id) => {
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
        axios
          .delete(`http://localhost:5000/deleteInstructorRequest/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            // Remove the deleted instructor from the state
            setRequestInstructor((prev) => prev.filter((inst) => inst._id !== id));
          })
          .catch((err) => {
            console.error(err);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error"
            });
          });
      }
    });
  };
  const handelUpdateTheRole = (id) => {
    axios
      .patch(`http://localhost:5000/updateTheUsrRole/${id}`, { status: "confirm" })
      .then((response) => {
        if (response.data.success) {
          Swal.fire({
            title: "Updated!",
            text: "The user role has been updated.",
            icon: "success"
          });
  
          // Update UI instantly
          setRequestInstructor((prev) =>
            prev.map((inst) =>
              inst._id === id ? { ...inst, status: "confirm" } : inst
            )
          );
        } else {
          Swal.fire({
            title: "Error!",
            text: response.data.message,
            icon: "error"
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong.",
          icon: "error"
        });
      });
  };
  
  return (
    <div>
      <h1 className="text-3xl font-medium">
        Instructor Request({applyingCandidate.length})
      </h1>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Resume</th> {/* Add resume column */}
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applyingCandidate.map((instructor) => (
                <tr key={instructor._id}>
                  <td>{instructor.name}</td>
                  <td>{instructor.email}</td>
                  <td>
                    {instructor.resume ? (
                      <a
                        href={instructor.resume}
                        download={instructor.resume}
                        className="btn btn-primary"
                      >
                        Download Resume
                      </a>
                    ) : (
                      "No Resume"
                    )}
                  </td>
                  <td>{instructor.status}</td>
                  <td>
                    <button onClick={()=>deleteInstructorRequest(instructor._id)} className="p-2 bg-red-500 rounded mr-4">
                      <img
                        className="w-7 filter invert"
                        src="/close.png"
                        alt=""
                      />
                    </button>
                    <button onClick={()=>handelUpdateTheRole(instructor._id)} className="p-2 bg-green-500 rounded">
                      <img
                        className="w-7 filter invert"
                        src="/check.png"
                        alt=""
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstructorRequest;
