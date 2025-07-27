
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [ensName, setEnsName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (ensName.endsWith(".eth")) {
      setLoggedIn(true);
    } else {
      alert("Por favor ingresa un nombre ENS válido (terminado en .eth)");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-black text-white">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        oio.eth Poker 🎲
      </motion.h1>

      {!loggedIn ? (
        <div className="w-full max-w-md p-4 bg-white text-black rounded">
          <p className="text-lg font-semibold text-center">
            Inicia sesión con tu ENS
          </p>
          <input
            type="text"
            placeholder="ej. juan.eth"
            value={ensName}
            onChange={(e) => setEnsName(e.target.value)}
            className="w-full p-2 border rounded my-2"
          />
          <button onClick={handleLogin} className="w-full p-2 bg-blue-600 text-white rounded">
            Entrar
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Bienvenido, {ensName} 👋
          </h2>
          <p>Estás dentro del lobby principal.</p>
        </motion.div>
      )}
    </main>
  );
}

export default App;
