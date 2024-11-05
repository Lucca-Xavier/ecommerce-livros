import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isAdmin, setIsAdmin] = React.useState(false); // Estado para definir o papel
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const role = isAdmin ? "admin" : "user"; // Define o papel com base na checkbox

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });

      if (response.ok) {
        console.log("Sucesso ao registrar");
        navigate("/");
      } else {
        const data = await response.json();
        console.error("Erro ao registrar:", data.error);
      }
    } catch (error) {
      console.error("Erro ao registrar:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="w-2/5 mx-auto mt-64 bg-gray-100 p-8 rounded-lg"
      >
        <h1 className="mb-8 text-2xl font-bold text-center">Registrar</h1>

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
          <label>Registrar como Admin</label>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-emerald-600 text-white rounded-lg py-2"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;
