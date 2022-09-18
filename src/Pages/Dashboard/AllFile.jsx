import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

const AllFile = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Model</th>
              <th>Year</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Pending</td>
              <td className="flex gap-1">
                <span>
                  <BsPencilSquare />
                </span>
                <span>
                  <BsTrash />
                </span>
              </td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Completed</td>
              <td className="flex gap-1">
                <span>
                  <BsPencilSquare />
                </span>
                <span>
                  <BsTrash />
                </span>
              </td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>Rejected</td>
              <td className="flex gap-1">
                <span>
                  <BsPencilSquare />
                </span>
                <span>
                  <BsTrash />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllFile;
