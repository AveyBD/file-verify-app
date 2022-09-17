import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if (user || gUser) {
    navigate("/dashboard");
  }

  let signError;

  if (loading || gLoading) {
    return <p>load....</p>;
  }

  if (error || gError) {
    signError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }
  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100 ">
      <div className="px-16 py-6 mt-4 text-left bg-white shadow-lg rounded-3xl">
        <h3 class="text-2xl font-bold text-center text-emerald-500">
          Register to your account
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mt-4">
            <div>
              <label class="block" for="text">
                Your Name
              </label>
              <input
                type="text"
                placeholder="name"
                name="displayName"
                class="w-80 px-4 py-2 mt-2 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("displayName", { required: true })}
              />
            </div>
            <div class="mt-4">
              <label class="block" for="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                class="w-80 px-4 py-2 mt-2 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("email", { required: true })}
              />
            </div>
            <div class="mt-4">
              <label class="block">Password</label>
              <input
                type="password"
                placeholder="password"
                name="password"
                class="w-80 px-4 py-2 mt-2 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("password", { required: true })}
              />
            </div>

            <div class="flex items-baseline justify-between">
              <button
                type="submit"
                class=" btn px-6 py-2 mt-4 text-white bg-teal-600 rounded-lg hover:bg-teal-700"
                value="register"
              >
                Register
              </button>
              <Link
                to={"/login"}
                class="text-sm font-bold text-green-600 hover:underline"
              >
                Already have an account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
