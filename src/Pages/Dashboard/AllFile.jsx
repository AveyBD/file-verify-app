import React, { useEffect, useState } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
import AddFile from "./AddFile";


const AllFile = () => {
  const [allFiles,setAllFiles] = useState([])
  useEffect(()=>{
    const url = `http://localhost:5000/files`
    fetch(url, {
        method: 'GET',
        headers:{
          "content-type": "application/json",
        }
    })
    .then(res => res.json())
    .then(data => setAllFiles(data))
  },[])
  const handleDelete = id => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {

    if (result.value) {
        const url = `http://localhost:5000/files/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = allFiles.filter(product => product._id !== id);
                setAllFiles(remaining)
            })


    }
    if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
})
}
  return (
    <div>
      <div className="flex justify-end mb-5">
        <AddFile/>
      </div>
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
            {
              allFiles.map((file,index) => 
                <tr>
              <th>{index+1}</th>
              <td>{file.title}</td>
              <td>{file.model}</td>
              <td>{file.year}</td>
              <td>Pending</td>
              <td className="flex gap-1">
                <span>
                  <BsPencilSquare />
                </span>
                <span>
                  <BsTrash onClick={() => handleDelete(file._id)}/>
                </span>
              </td>
            </tr>
                )
            }
            {/* <!-- row 2 --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllFile;
