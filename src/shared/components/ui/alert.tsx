type AlertProps = {
  mensaje: string;
  tipo: "exito" | "error";
};

function credenciales({ mensaje, tipo }: AlertProps) {
  return (
    <div
      className={`
        mb-5 rounded-lg border p-3 text-center font-medium
        ${
          tipo === "exito"
            ? "border-green-300 bg-green-100 text-green-700"
            : "border-red-300 bg-red-100 text-red-700"
        }
      `}
    >
      {mensaje}
    </div>
  );
}

export default credenciales;
