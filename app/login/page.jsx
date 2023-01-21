import React from 'react';
import cover from '../../public/assets/images/login-cover.jpg';

function Login() {
  return (
    <div className="w-full h-full flex">
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <h1 className="font-semibold text-2xl pl-4">
          .to
          <span className="text-custom-500">do</span>
        </h1>
        <h1 className="text-3xl mt-6 font-medium tracking-wider">
          Welcome Back!
        </h1>
        <p className="mt-3 text-lg text-base-300">
          Each day I will accomplish one thing on my to do list.
        </p>
        <div className="form mt-12 w-96 flex flex-col gap-4">
          <div className="flex flex-col w-full">
            <div className="group rounded-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-content text-xl mgc_mail_fill z-50" />
              <input
                required
                type="text"
                placeholder="johndoe@thecodeblog.net"
                className="placeholder-base-100 focus:placeholder-base-200 placeholder placeholder:transition-all placeholder:duration-200"
              />
              <span className="bar" />
              <label>Email</label>
            </div>
            <span className="text-red-500 mt-1 ml-4 text-xs">{}</span>
          </div>
          <div className="flex flex-col w-full">
            <div className="group rounded-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-content rotate-45 text-2xl mgc_key_1_line z-50" />
              <input
                required
                type="password"
                placeholder="••••••••••••••••"
                className="placeholder-base-100 focus:placeholder-base-200 placeholder placeholder:transition-all placeholder:duration-200"
              />
              <span className="bar" />
              <label>Password</label>
            </div>
            <span className="text-red-500 mt-1 ml-4 text-xs">{}</span>
          </div>
          <button
            type="button"
            className="btn btn-primary bg-custom-500 border-none hover:bg-custom-600 h-14 mt-4 tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
          >
            Login
            <span className="text-lg mgc_arrow_right_fill z-50" />
          </button>
          <div className="w-full border-b border-base-200 my-4 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 block bg-neutral text-base-300 font-medium">
              OR
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary h-14 border-primary-content text-primary-content hover:bg-primary-content hover:text-neutral flex items-center gap-2"
          >
            <span className="text-lg mgc_google_fill z-50" />
            Continue with Google
          </button>
          <button
            type="button"
            className="btn btn-primary h-14 border-primary-content text-primary-content hover:bg-primary-content hover:text-neutral flex items-center gap-2"
          >
            <span className="text-lg mgc_github_line z-50" />
            Continue with Github
          </button>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center relative">
        <img
          src={cover.src}
          alt="cover"
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-custom-500 opacity-10" />
        <div className="w-full h-full absolute top-0 left-0 bg-neutral opacity-50" />
        <p className="text-primary-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl w-full px-16 isolate tracking-wide">
          <span className="text-[10rem] mgc_quote_left_fill absolute top-0 -translate-y-1/2 left-4 text-primary-content opacity-20 z-[-1]" />
          The trouble is that you think you have time.
          <br />
          <span className="text-2xl font-medium w-full flex justify-end mt-4">
            - Jack Kornfield
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
