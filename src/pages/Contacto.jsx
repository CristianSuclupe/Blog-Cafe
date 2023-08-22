const Contacto = () => {
  return (
    <main className="contenedor">
      <h3 className="centrar-texto">Contacto</h3>
      <div className="contacto-bg"></div>
      <form className="formulario">
        <div className="campo">
          <label className="campo__label" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="campo__field"
            type="text"
            placeholder="Tu nombre"
            id="nombre"
          />
        </div>
        <div className="campo">
          <label className="campo__label" htmlFor="email">
            email
          </label>
          <input
            className="campo__field"
            type="email"
            placeholder="Tu email"
            id="email"
          />
        </div>
        <div className="campo">
          <label className="campo__label" htmlFor="mensaje">
            mensaje
          </label>
          <textarea
            className="campo__field campo__field--textarea"
            id="mensaje"
          ></textarea>
        </div>
        <div className="campo">
          <input type="submit" className="boton boton--primario" />
        </div>
      </form>
    </main>
  );
};

export default Contacto;
