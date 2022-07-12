import { useState } from "react";
import { register } from "../firebase";

const Register = () => {

    // Register State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    // Firebase Submit User Function
    const handleSubmit = async (e) => {
      e.preventDefault();
      const user = await register(email, password);
    }
  return (
    <div className="flex items-center justify-center mx-auto">
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none text-teal-900 bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-teal-600"
          type="text"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="appearance-none text-teal-900 bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-teal-600"
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
        disabled={!email || !password}
          className="flex-shrink-0 disabled:opacity-50 bg-teal-700 hover:bg-teal-900 border-teal-700 hover:border-teal-900 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  </div>
  )
}

export default Register
