import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState<string | null>(null);

  const cerrarSesion = () => {
    localStorage.removeItem("isAuth");
    navigate("/");
  };

  const menus = [
    {
      nombre: "Misceláneas",
      opciones: [
        { nombre: "Zonas", ruta: "/miscelaneas/zonas" },
        { nombre: "Zonas Comerciales", ruta: "/miscelaneas/zonacomercial" },
      ],
    },
    {
      nombre: "Órdenes",
      opciones: [
        { nombre: "Clientes", ruta: "/ordenes/clientes" },
        { nombre: "Direcciones de entrega", ruta: "/ordenes/direcciones" },
        { nombre: "Puntos de carga", ruta: "/ordenes/puntodecarga" },
        { nombre: "Hoja de Ruta", ruta: "/ordenes/hojaruta" },
        { nombre: "Retira Cliente", ruta: "/ordenes/retiracliente" },
        { nombre: "Pedidos Pendientes", ruta: "/ordenes/pedidospendientes" },
        { nombre: "Reportes", ruta: "/ordenes/reportes" },
      ],
    },
    {
      nombre: "Items",
      opciones: [
        { nombre: "Marcas", ruta: "/items/marcas" },
        { nombre: "Modelos", ruta: "/items/modelos" },
      ],
    },
    {
      nombre: "Transporte",
      opciones: [
        { nombre: "Transportes", ruta: "/transporte" },
        { nombre: "Sujetos", ruta: "/transporte/sujetos" },
        { nombre: "Unidades", ruta: "/transporte/unidades" },
      ],
    },
    {
      nombre: "Tarifas",
      opciones: [
        { nombre: "Cuadro Tarifario", ruta: "/tarifas/cuadro" },
        { nombre: "Tarifas", ruta: "/tarifas" },
      ],
    },
    {
      nombre: "Cobranzas",
      opciones: [
        { nombre: "Cobradores", ruta: "/cobranzas/cobradores" },
        { nombre: "Planillas", ruta: "/cobranzas/planillas" },
        { nombre: "Recibos", ruta: "/cobranzas/recibos" },
      ],
    },
  ];

  return (
    <header className="mb-1 bg-[#111844] px-6 py-4 shadow-xl">
      <div className="flex items-center justify-between">
        <button onClick={() => navigate("/dashboard")} className="text-left">
          <h1 className="text-3xl font-black tracking-wide text-white">
            INSA<span className="text-[#EAE0CF]">COR</span>
          </h1>
        </button>

        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-[#7288AE] px-4 py-2 text-sm font-semibold text-[#EAE0CF] hover:border-[#EAE0CF] hover:text-white">
            Administrador
          </button>

          <button
            onClick={() => navigate("/ordenes/pedidospendientes")}
            className="rounded-xl bg-[#4B5694] px-4 py-2 text-sm font-semibold text-white hover:bg-[#7288AE]"
          >
            Órdenes pendientes
          </button>

          <button
            onClick={cerrarSesion}
            className="rounded-xl border border-red-400/50 px-4 py-2 text-sm font-semibold text-red-300 hover:bg-red-500/10"
          >
            Salir
          </button>
        </div>
      </div>

      <nav className="mt-4 flex flex-wrap items-center gap-2 border-t border-[#4B5694] pt-3">
        {menus.map((menu) => (
          <div key={menu.nombre} className="relative">
            <button
              onClick={() =>
                setMenuAbierto(menuAbierto === menu.nombre ? null : menu.nombre)
              }
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                menuAbierto === menu.nombre
                  ? "bg-[#EAE0CF] text-[#111844]"
                  : "text-[#EAE0CF] hover:bg-[#4B5694] hover:text-white"
              }`}
            >
              {menu.nombre}
            </button>

            {menuAbierto === menu.nombre && (
              <div className="absolute left-0 top-11 z-50 w-64 overflow-hidden rounded-xl border border-[#7288AE] bg-[#111844] shadow-2xl">
                {menu.opciones.map((opcion) => (
                  <button
                    key={opcion.nombre}
                    onClick={() => {
                      navigate(opcion.ruta);
                      setMenuAbierto(null);
                    }}
                    className="w-full px-5 py-3 text-left text-sm font-medium text-[#EAE0CF] hover:bg-[#4B5694] hover:text-white"
                  >
                    {opcion.nombre}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
