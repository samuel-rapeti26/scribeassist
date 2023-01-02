function Login() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
      <form
        className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
        action=""
      >
        <label className="font-semibold text-xs" for="usernameField">
          Nuance ID
        </label>
        <input
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="text"
        />
        <label className="font-semibold text-xs mt-3" for="passwordField">
          Password
        </label>
        <input
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="password"
        />
        <a
          href="./dashboard"
          className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
        >
          Login
        </a>
        <div className="flex mt-6 justify-center text-xs">
          <a href="#" className="text-blue-400 hover:text-blue-500">
            Forgot Password
          </a>
          <span className="mx-2 text-gray-300">/</span>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
