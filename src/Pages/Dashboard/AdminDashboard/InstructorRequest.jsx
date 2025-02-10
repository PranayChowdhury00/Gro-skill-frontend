import axios from "axios";
import React, { useEffect, useState } from "react";

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
  console.log(requestInstructor);
  const applyingCandidate = requestInstructor.filter(
    (x) => x.status === "pending"
  );
  console.log("pending one", applyingCandidate);
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
