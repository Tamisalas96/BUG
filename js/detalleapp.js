function publicarComentario(event) {
    event.preventDefault();
  
    const nombreUsuario = document.querySelector(".form-label.fw-bold").textContent;
    const comentario = document.querySelector("#comentario").value;
    const recomendacionElement = document.querySelector('input[name="flexRadioDefault"]:checked');
    const recomendacion = document.querySelector(`label[for="${recomendacionElement.id}"]`).textContent.trim();
  
    const comentarioElement = document.createElement("div");
    comentarioElement.innerHTML = `
      <strong>${nombreUsuario}</strong>: ${comentario}<br>
      Recomendación: ${recomendacion}
    `;
    document.querySelector("#comentarios").appendChild(comentarioElement);
  
    // Guardar comentario en el localStorage
    const comentarioGuardado = {
      nombre: nombreUsuario,
      comentario: comentario,
      recomendacion: recomendacion
    };
    guardarComentario(comentarioGuardado);
  
    document.querySelector("#comentario").value = "";
    deshabilitarFormulario();
  }
  
  // Obtener comentarios del localStorage
  function obtenerComentariosGuardados() {
    const comentariosGuardados = localStorage.getItem('comentarios');
    return comentariosGuardados ? JSON.parse(comentariosGuardados) : [];
  }
  
  // Guardar comentario en el localStorage
  function guardarComentario(comentario) {
    const comentarios = obtenerComentariosGuardados();
    comentarios.push(comentario);
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
  }
  
  // Mostrar comentarios almacenados en el localStorage
  function mostrarComentariosGuardados() {
    const comentarios = obtenerComentariosGuardados();
    comentarios.forEach(comentario => {
      const comentarioElement = document.createElement("div");
      comentarioElement.innerHTML = `
        <strong>${comentario.nombre}</strong>: ${comentario.comentario}<br>
        Recomendación: ${comentario.recomendacion}
      `;
      document.querySelector("#comentarios").appendChild(comentarioElement);
    });
  }
  
  // Deshabilitar formulario si ya hay un comentario del usuario
  function deshabilitarFormulario() {
    const comentarios = obtenerComentariosGuardados();
    const usuarioLogeado = JSON.parse(sessionStorage.getItem("perfil")) || {};
    const formularioComentario = document.querySelector("#form-comentario");
    if (comentarios.some(comentario => comentario.nombre === usuarioLogeado.email)) {
      formularioComentario.className = "text-center"
      formularioComentario.innerHTML = "<p>Ya has realizado un comentario.</p>";
    }
  }
  
  // Asignar el evento de envío del formulario
  const formularioComentario = document.querySelector("#form-comentario");
  formularioComentario.addEventListener("submit", publicarComentario);
  
  // Mostrar los comentarios almacenados al cargar la página
  mostrarComentariosGuardados();
  deshabilitarFormulario();
  