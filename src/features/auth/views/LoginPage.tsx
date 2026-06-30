import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (nombre === "admin" && password === "1234") {
      localStorage.setItem("isAuth", "true");
      setMensaje("Inicio de sesión correcto");

      setTimeout(() => {
        navigate("/dashboard");
      }, 800);
    } else {
      setMensaje("Usuario o contraseña incorrectos");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#111844] px-6">
      <section className="flex w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="relative hidden w-1/2 overflow-hidden bg-[#4B5694] md:block">
          <div className="absolute -left-28 top-0 h-full w-80 rotate-45 bg-[#7288AE]/50" />
          <div className="absolute -left-10 top-24 h-96 w-96 rotate-45 bg-[#EAE0CF]/30" />
          <div className="absolute bottom-10 left-10 z-10">
            <h1 className="text-5xl font-black tracking-wide text-white">
              INSA<span className="text-[#EAE0CF]">COR</span>
            </h1>
            <p className="mt-3 max-w-xs text-sm text-[#EAE0CF]">
              Sistema de gestión administrativo
            </p>
          </div>
        </div>

        <div className="w-full p-10 md:w-1/2">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#4B5694] text-3xl font-bold text-white shadow-lg">
              👤
            </div>

            <h2 className="text-3xl font-black text-[#111844]">LOGIN</h2>
            <p className="mt-2 text-sm text-slate-500">
              Ingresá con tu usuario y contraseña
            </p>
          </div>

          {mensaje && (
            <div
              className={`mb-5 rounded-xl px-4 py-3 text-sm font-semibold ${
                mensaje.includes("correcto")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {mensaje}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#111844]">
                Usuario
              </label>
              <input
                type="text"
                placeholder="Ingrese usuario"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border-b-2 border-slate-300 px-2 py-3 text-slate-800 outline-none transition focus:border-[#4B5694]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#111844]">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Ingrese contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b-2 border-slate-300 px-2 py-3 text-slate-800 outline-none transition focus:border-[#4B5694]"
              />
            </div>

            <button
              type="submit"
              className="ml-auto block rounded-full bg-[#4B5694] px-10 py-3 text-sm font-bold uppercase text-white shadow-lg transition hover:bg-[#111844] active:scale-95"
            >
              Iniciar Sesion
            </button>
          </form>

          <p className="mt-10 text-center text-xs text-slate-400">
            © 2026 IN.SA.COR. Todos los derechos reservados
          </p>
        </div>
      </section>
    </main>
  );
}
