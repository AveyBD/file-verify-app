import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import Navbar from "../Shared/Navbar";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/panel";

  if (user) {
    navigate(from, { replace: true });
  }

  let signError;

  if (loading || gLoading) {
    return <Loading />;
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
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-base-100 ">
        <div className="px-16 py-6 mt-4 text-left bg-white shadow-lg rounded-3xl">
          <h3 class="text-2xl font-bold text-center">Login to your account</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mt-4">
              <label class="block" for="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                class="w-80 px-4 py-2 mt-2 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("email", { required: true })}
              />

              <div class="mt-4">
                <label class="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  class="w-80 px-4 py-2 mt-2 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register("password", { required: true })}
                />
              </div>
              <a href="#" class="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
              <div class="flex items-baseline justify-between">
                <button
                  type="submit"
                  value="login"
                  class="btn px-6 py-2 mt-4 text-white bg-teal-600 rounded-lg hover:bg-teal-700"
                >
                  Login
                </button>
                <Link
                  to={"/register"}
                  class="text-sm font-bold text-green-600 hover:underline"
                >
                  Create a account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
