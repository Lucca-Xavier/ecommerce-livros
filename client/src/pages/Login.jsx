import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isAdmin, setIsAdmin] = React.useState(false); 
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, isAdmin }),
      });

      const data = await response.json();
      if (response.ok) {

        navigate("/userhome")
        console.log("Token:", data.token); 
      } else {
        alert(data.error || "Erro no login");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="w-2/5 mx-auto mt-64 bg-gray-100 p-8 rounded-lg">
        <h1 className="mb-8 text-2xl font-bold text-center">Login</h1>

        <div className="mb-6">
          <p className="mb-2">E-mail:</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 px-2 py-1 w-full rounded"
            type="email"
            name="email"
            value={email}
          />
        </div>

        <div className="mb-6">
          <p className="mb-2">Senha:</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-200 px-2 py-1 w-full rounded"
            type="password"
            name="password"
            value={password}
          />
        </div>

        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
            className="mr-2"
          />
          <label>Admin</label>
        </div>

        <button type="submit" className="w-full mt-6 bg-emerald-600 text-white rounded-lg py-2 mb-4">
          Login
        </button>

        <span className="">
          Ainda não tem uma conta? {'  '}
          <Link to='/register' className="text-emerald-700">Registre-se</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
