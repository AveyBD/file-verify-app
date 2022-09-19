import React from "react";
import { FiUpload } from "react-icons/fi";
import { useForm } from "react-hook-form";

const AddFile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, event) => {
    console.log(data);
    const url = `https://fileapppro.herokuapp.com/files`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reset();
      });
    event.preventDefault();
  };

  return (
    <div>
      <button
        class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Add files
      </button>

      <div
        class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-[1127px] mt-16"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header flex items-center justify-between p-4">
          <h5
            class="offcanvas-title mb-0 leading-normal font-semibold text-2xl text-primary
                    "
            id="offcanvasRightLabel"
          >
            Please provide your file details
          </h5>
          <button
            type="button"
            class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body flex-grow p-4 overflow-y-auto flex justify-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 ">
              <div className='block card shadow-xl h-72 bg-cover bg-center bg-[url("/src/image/filebg.jpg.jpg")]'>
                <lavel className="block text-center text-3xl mt-8">
                  Upload your file
                </lavel>
                <input className="mt-10 p-8 ml-20" name="file" type="file" />
              </div>
              <div className="ml-20 mt-6">
                <div>
                  <level className="text-2xl">Title :</level>
                  <input
                    className="ml-8 w-80 px-4 p-1 mt-2 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    name="title"
                    {...register("title", { required: true })}
                    type="text"
                  />
                </div>

                <div>
                  <p className="text-2xl ">Description :</p>
                  <textarea
                    className=" w-[410px] px-4 mt-2 p-1 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    name="description"
                    {...register("description", { required: true })}
                    type="text"
                  />
                </div>
                <div className="block">
                  <level className="text-2xl">Model :</level>
                  <input
                    className="ml-4 w-80 px-4 p-1 mt-2 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    name="model"
                    {...register("model", { required: true })}
                    type="text"
                  />
                </div>
                <div className="block">
                  <level className="text-2xl">Year : </level>
                  <input
                    className="ml-8 w-80 px-4 p-1 mt-2 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    name="year"
                    {...register("year", { required: true })}
                    type="date"
                  />
                </div>
                <div className="btn  btn-primary mt-3 ml-80 flex justify-end">
                  <input
                    type="submit"
                    value="Upload"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                  <FiUpload className="inline-block ml-2 text-xl" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFile;
