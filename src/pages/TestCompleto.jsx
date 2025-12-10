// src/pages/TestCompleto.jsx
import { useState } from 'react';
import '../styles.css';

export default function TestCompleto() {
  const [respuestas, setRespuestas] = useState({});
  const [testCompletado, setTestCompletado] = useState(false);
  const [puntaje, setPuntaje] = useState(0);

  const preguntas = [
    {
      id: 1,
      pregunta: "¿Cuál es la responsabilidad del Modelo en MVC?",
      opciones: [
        "Manejar las rutas HTTP",
        "Gestionar la interfaz de usuario",
        "Acceso y manipulación de datos",
        "Validar formularios"
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El Modelo se encarga de la lógica de datos: acceso, consultas y manipulación de la información."
    },
    {
      id: 2,
      pregunta: "¿Qué hace un Controlador en la arquitectura MVC?",
      opciones: [
        "Almacenar datos en la base de datos",
        "Muestra la interfaz al usuario",
        "Maneja solo las rutas GET",
        "Recibe peticiones, llama al modelo y devuelve respuestas"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El Controlador actúa como intermediario entre la petición HTTP, el Modelo y la respuesta al cliente."
    },
    {
      id: 3,
      pregunta: "¿En qué carpeta se organizan típicamente los modelos en Node.js?",
      opciones: [
        "/public",
        "/routes",
        "/views",
        "/models"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Por convención, los modelos se guardan en la carpeta /models para mantener un proyecto bien estructurado."
    },
    {
      id: 4,
      pregunta: "¿Qué significa el parámetro :id en la ruta '/productos/:id'?",
      opciones: [
        "Es una ruta fija",
        "Es un comentario",
        "Es un error",
        "Es una variable de ruta"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Los dos puntos (:) indican un parámetro dinámico de ruta, por ejemplo /productos/15, /productos/22, etc."
    },
    {
      id: 5,
      pregunta: "¿Qué método HTTP se usa típicamente para obtener datos?",
      opciones: [
        "DELETE",
        "POST",
        "PUT",
        "GET"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "GET es el método estándar para recuperar datos del servidor sin modificarlos."
    },
    {
      id: 6,
      pregunta: "¿Qué es mysql2 en Node.js?",
      opciones: [
        "Un servidor de base de datos",
        "Una herramienta de diseño",
        "Una nueva versión de MySQL",
        "Una biblioteca para conectar Node.js con MySQL"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "mysql2 es un paquete de Node.js que permite realizar conexiones y consultas a bases de datos MySQL."
    },
    {
      id: 7,
      pregunta: "¿Qué ventaja ofrece usar un pool de conexiones?",
      opciones: [
        "Encrypt automáticamente los datos",
        "Reduce el tamaño de la base de datos",
        "Simplifica las consultas SQL",
        "Mejora el rendimiento reutilizando conexiones"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Un pool mantiene varias conexiones abiertas y las reutiliza, evitando crear y cerrar conexiones continuamente."
    },
    {
      id: 8,
      pregunta: "¿Dónde se almacenan típicamente las credenciales de la base de datos?",
      opciones: [
        "En la base de datos",
        "En un archivo público",
        "En el código fuente",
        "En un archivo .env"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Las credenciales deben ir en variables de entorno (.env) para no exponerlas en el código ni en el repositorio."
    },
    {
      id: 9,
      pregunta: "¿Qué es dotenv en Node.js?",
      opciones: [
        "Un framework web",
        "Una base de datos",
        "Una herramienta de testing",
        "Una biblioteca para cargar variables de entorno"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "dotenv carga las variables definidas en el archivo .env y las expone a través de process.env."
    },
    {
      id: 10,
      pregunta: "¿Qué formato de datos se usa típicamente para comunicación entre frontend y backend?",
      opciones: [
        "XML",
        "TXT",
        "CSV",
        "JSON"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "JSON es el formato estándar ligero y fácil de parsear entre JavaScript frontend y backend."
    },
    {
      id: 11,
      pregunta: "¿Qué método fetch() se usa para enviar datos al servidor?",
      opciones: [
        "fetch(url, { method: 'SEND' })",
        "fetch(url, { method: 'READ' })",
        "fetch(url, { method: 'GET' })",
        "fetch(url, { method: 'POST', body: data })"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Para enviar datos se suele usar POST, incluyendo el body con la información (normalmente en JSON)."
    },
    {
      id: 12,
      pregunta: "¿Para qué se utiliza bcrypt en un sistema de login?",
      opciones: [
        "Para validar rutas protegidas",
        "Para enviar tokens al frontend",
        "Para cifrar toda la base de datos",
        "Para encriptar y verificar contraseñas"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "bcrypt se usa para generar hashes seguros de contraseñas y compararlas sin guardar la contraseña en texto plano."
    },
    {
      id: 13,
      pregunta: "¿Qué papel tiene el JWT en un sistema de autenticación?",
      opciones: [
        "Servir como contraseña",
        "Crear una base de datos",
        "Guardar archivos grandes",
        "Identificar al usuario mediante un token firmado"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El JWT contiene información firmada (por ejemplo, el id del usuario) y sirve como credencial en cada petición."
    },
    {
      id: 14,
      pregunta: "¿Dónde se suele guardar el JWT en el frontend?",
      opciones: [
        "En memoria RAM",
        "En un archivo del servidor",
        "En un archivo .env",
        "En localStorage"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Una opción habitual es guardarlo en localStorage o sessionStorage para reutilizarlo en peticiones posteriores."
    },
    {
      id: 15,
      pregunta: "¿Qué es middleware en Express?",
      opciones: [
        "Una base de datos intermedia",
        "Un tipo de ruta especial",
        "Una librería externa",
        "Funciones que se ejecutan entre la petición y la respuesta"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Los middleware procesan la petición (req) y la respuesta (res) antes de llegar al controlador final."
    },
    {
      id: 16,
      pregunta: "¿Cuál es la estructura de carpetas más recomendada para un proyecto backend?",
      opciones: [
        "frontend/, backend/",
        "src/, test/, build/",
        "Todo en una sola carpeta",
        "config/, models/, controllers/, routes/"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Separar config, models, controllers y routes ayuda a mantener un proyecto escalable y ordenado."
    },
    {
      id: 17,
      pregunta: "¿Por qué es importante separar el modelo del controlador?",
      opciones: [
        "No es importante",
        "Solo por convención",
        "Para hacerlo más complicado",
        "Para mejorar la organización y reutilización de código"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La separación permite reutilizar lógica de datos (modelo) desde distintos controladores y facilita el mantenimiento."
    },
    {
      id: 18,
      pregunta: "¿Qué archivo contiene la configuración de un proyecto Node.js?",
      opciones: [
        "index.html",
        "server.js",
        "config.js",
        "package.json"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "package.json define dependencias, scripts, nombre del proyecto y otra configuración básica de Node."
    },
    {
      id: 19,
      pregunta: "¿Por qué se necesita configurar CORS en un backend?",
      opciones: [
        "Para mejorar la velocidad",
        "Para reducir tamaño de respuestas",
        "Para encriptar datos",
        "Para permitir acceso desde un dominio diferente"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "CORS controla qué orígenes (dominios/puertos) pueden consumir la API, por ejemplo un frontend en 5173 y un backend en 3000."
    },
    {
      id: 20,
      pregunta: "En la UF1846, ¿cuál es la responsabilidad principal de un controlador?",
      opciones: [
        "Validar solo los datos de entrada",
        "Gestionar la conexión con la base de datos",
        "Renderizar vistas HTML",
        "Procesar la petición HTTP y coordinar entre modelo y vista"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El controlador recibe la petición, valida, llama al modelo y prepara la respuesta adecuada."
    },
    {
      id: 21,
      pregunta: "¿Dónde debe implementarse la validación de datos según UF1846?",
      opciones: [
        "Solo en backend",
        "Solo en frontend",
        "En la base de datos",
        "Frontend para UX y backend para seguridad"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Se valida en frontend para avisar al usuario rápido, y en backend para garantizar la seguridad."
    },
    {
      id: 22,
      pregunta: "¿Cuál es el propósito del token JWT en rutas protegidas?",
      opciones: [
        "Guardar imágenes",
        "Enviar estilos CSS",
        "Crear bases de datos",
        "Verificar la identidad del usuario antes de acceder"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El token JWT permite comprobar que el usuario está autenticado antes de permitirle acceder a recursos protegidos."
    },
    {
      id: 23,
      pregunta: "¿Qué ruta se usa comúnmente para comprobar si un usuario está autenticado?",
      opciones: [
        "/public",
        "/token",
        "/auth/signup",
        "/auth/profile"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Una ruta típica es /auth/profile, que devuelve los datos del usuario logueado si el token es válido."
    },
    {
      id: 24,
      pregunta: "¿Qué función debe realizar un servidor Express al iniciar?",
      opciones: [
        "Crear carpetas automáticamente",
        "Renderizar imágenes",
        "Crear estilos CSS",
        "Escuchar un puerto y aceptar peticiones HTTP"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Al arrancar, el servidor debe abrir un puerto (por ejemplo 3000) y quedar escuchando peticiones."
    },
    {
      id: 25,
      pregunta: "¿Qué ocurre si se envía una ruta no definida al servidor?",
      opciones: [
        "Se crea automáticamente",
        "El backend redirige al login",
        "Se convierte en GET",
        "Devuelve error 404"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Si la ruta no existe, lo correcto es responder con un código 404 Not Found."
    },
    {
      id: 26,
      pregunta: "¿Qué middleware se usa para proteger rutas con JWT?",
      opciones: [
        "cors()",
        "express.static()",
        "jsonParser()",
        "authMiddleware o verifyToken"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Un middleware como verifyToken comprueba el JWT y, si es válido, deja pasar la petición al controlador."
    },
    {
      id: 27,
      pregunta: "¿Qué concepto aprendieron al usar localStorage en el Proyecto Bazar?",
      opciones: [
        "Instalación de dependencias",
        "Crear consultas SQL",
        "Uso de variables globales",
        "Persistencia de datos en el navegador"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "localStorage permite mantener datos (como el carrito) incluso al recargar la página o cerrar el navegador."
    },
    {
      id: 28,
      pregunta: "¿Qué flujo aprendieron los alumnos al completar una compra en Bazar?",
      opciones: [
        "Backend → Frontend → Backend",
        "Solo almacenar en localStorage",
        "Frontend → BD → Frontend",
        "Frontend → Backend → BD → Backend → Frontend"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El flujo completo incluye: petición desde el frontend, procesamiento en backend, guardado en BD y respuesta de vuelta al frontend."
    },
    {
      id: 29,
      pregunta: "¿Qué aprendieron al usar mysql2/promise en el proyecto Bazar?",
      opciones: [
        "Crear archivos HTML",
        "Añadir animaciones CSS",
        "Usar APIs externas",
        "Realizar consultas asincrónicas a la base de datos"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La versión con promesas permite usar async/await para escribir código más limpio al consultar la base de datos."
    },
    {
      id: 30,
      pregunta: "¿Qué buena práctica se reforzó al crear controladores en Bazar?",
      opciones: [
        "Incluir lógica en vistas",
        "Trabajar sin errores",
        "Usar solo métodos GET",
        "Separar responsabilidades y usar try/catch"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Cada controlador debe tener responsabilidades claras, validar, llamar al modelo y manejar errores con try/catch."
    },

    // =====================
    // 10 PREGUNTAS NUEVAS: INTEGRACIÓN BACKEND–FRONTEND (sin React)
    // =====================
    {
      id: 31,
      pregunta: "¿Qué es un endpoint en una API?",
      opciones: [
        "El diseño visual de la página",
        "La URL específica donde el frontend hace una petición al backend",
        "Una base de datos",
        "Un componente de interfaz"
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Un endpoint es una dirección concreta (por ejemplo /api/productos) donde el backend expone datos o funcionalidades."
    },
    {
      id: 32,
      pregunta: "¿Cuál es una forma correcta de usar async/await con fetch para obtener datos del backend?",
      opciones: [
        "const datos = fetch(url);",
        "const respuesta = await fetch(url); const datos = await respuesta.json();",
        "await fetch(url).json();",
        "const datos = await fetch.json(url);"
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Primero se espera la respuesta de fetch(url), y después se hace await respuesta.json() para obtener los datos en formato objeto."
    },
    {
      id: 33,
      pregunta: "¿Qué debe hacerse con la respuesta de fetch() antes de usar los datos en el frontend?",
      opciones: [
        "Convertirla con response.json()",
        "Convertirla con response.text() y ya está",
        "Guardar directamente response en una variable",
        "No hace falta hacer nada"
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La respuesta HTTP debe parsearse con response.json() para transformar el cuerpo en un objeto JavaScript utilizable."
    },
    {
      id: 34,
      pregunta: "¿Dónde se suelen guardar en el frontend los datos que llegan del backend para poder utilizarlos en la página?",
      opciones: [
        "En variables globales del navegador sin control",
        "En el DOM directamente, sin usar JavaScript",
        "En un archivo .json en el disco del usuario",
        "En una variable o estructura de datos (array/objeto) gestionada por JavaScript"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Normalmente se guardan en variables, arrays u objetos JavaScript, que luego se usan para pintar la interfaz (listas, tablas, tarjetas, etc.)."
    },
    {
      id: 35,
      pregunta: "¿Qué propiedad de la respuesta de fetch indica si la petición fue correcta (código 2xx)?",
      opciones: [
        "response.error",
        "response.success",
        "response.ok",
        "response.done"
      ],
      respuestaCorrecta: 2,
      explicacion:
        "response.ok es true cuando el código de estado está en el rango 200–299."
    },
    {
      id: 36,
      pregunta: "¿Qué se debe mostrar en la interfaz mientras el frontend espera la respuesta del backend?",
      opciones: [
        "Nada, la pantalla en blanco",
        "Un mensaje o indicador de carga (loading)",
        "Siempre un error",
        "Un alert() bloqueante"
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Es buena práctica mostrar un indicador de carga (loading) para informar al usuario de que se están obteniendo datos."
    },
    {
      id: 37,
      pregunta: "Si el backend devuelve un error 500, ¿qué debería hacer el frontend?",
      opciones: [
        "Ignorarlo y seguir como si nada",
        "Mostrar un mensaje de error al usuario",
        "Cerrar la aplicación",
        "Volver a renderizar sin cambios"
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El frontend debe capturar el error y mostrar un mensaje claro al usuario, sin romper la aplicación."
    },
    {
      id: 38,
      pregunta: "¿Qué encabezado debe incluir el frontend al enviar datos JSON al backend?",
      opciones: [
        "'Accept': 'application/json'",
        "'Content-Type': 'text/plain'",
        "'Content-Type': 'application/json'",
        "'Accept': 'text/html'"
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El header 'Content-Type': 'application/json' indica al backend que el cuerpo de la petición está en formato JSON."
    },
    {
      id: 39,
      pregunta: "¿Qué problema aparece cuando el frontend y el backend están en puertos distintos (por ejemplo 5173 y 3000)?",
      opciones: [
        "No se puede usar JavaScript",
        "No se puede usar Node.js",
        "Aparecen errores de CORS si no se configura",
        "No se puede usar MySQL"
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Cuando los orígenes son distintos, el navegador aplica la política de CORS y bloquea peticiones si el backend no lo permite."
    },
    {
      id: 40,
      pregunta: "En una aplicación Bazar, ¿qué suele hacer el frontend tras recibir la lista de productos del backend?",
      opciones: [
        "Guardarla en un archivo local",
        "Mostrar los productos en tarjetas o una tabla",
        "Reiniciar el servidor",
        "Borrar la respuesta"
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El objetivo típico es pintar esos datos en la interfaz: tarjetas de producto, listas, tablas, etc., para que el usuario los vea."
    }
  ];

  const handleRespuesta = (preguntaId, respuestaIndex) => {
    setRespuestas(prev => ({
      ...prev,
      [preguntaId]: respuestaIndex
    }));
  };

  const calcularPuntaje = () => {
    let puntos = 0;
    preguntas.forEach(pregunta => {
      if (respuestas[pregunta.id] === pregunta.respuestaCorrecta) {
        puntos++;
      }
    });
    return puntos;
  };

  const completarTest = () => {
    const puntajeFinal = calcularPuntaje();
    setPuntaje(puntajeFinal);
    setTestCompletado(true);
  };

  const obtenerColorPuntaje = (puntos) => {
    // 40 preguntas: 80% = 32, 60% = 24
    if (puntos >= 32) return 'success';
    if (puntos >= 24) return 'warning';
    return 'danger';
  };

  return (
    <div className="bloque">
      <header className="bloque-header">
        <h1>🧪 Test Backend: MVC, JWT, Bazar e integración Frontend</h1>
        <p className="bloque-header__descripcion">
          Test de 40 preguntas sobre arquitectura MVC, Node.js, Express, JWT, CORS,
          proyecto Bazar y la integración del backend en el frontend mediante fetch y async/await.
        </p>
      </header>

      <div className="contenedor-test">
        {!testCompletado ? (
          <>
            <div className="info-test">
              <h3>📋 Instrucciones</h3>
              <ul>
                <li>El test contiene 40 preguntas de opción múltiple.</li>
                <li>Cada pregunta tiene 4 opciones, solo una es correcta.</li>
                <li>Puedes cambiar tus respuestas antes de completar el test.</li>
                <li>Al finalizar verás tu puntaje y una explicación de cada pregunta.</li>
                <li>
                  <strong>Enfoque:</strong> Modelo, controlador, rutas, JWT, CORS, Bazar e integración backend–frontend con fetch/async-await.
                </li>
              </ul>

              <div className="progreso-test">
                <p>Progreso: {Object.keys(respuestas).length} / {preguntas.length} preguntas respondidas</p>
                <div className="barra-progreso">
                  <div
                    className="barra-progreso__fill"
                    style={{ width: `${(Object.keys(respuestas).length / preguntas.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="preguntas-container">
              {preguntas.map((pregunta) => (
                <div key={pregunta.id} className="pregunta-card">
                  <h4 className="pregunta-numero">Pregunta {pregunta.id}</h4>
                  <p className="pregunta-texto">{pregunta.pregunta}</p>

                  <div className="opciones-container">
                    {pregunta.opciones.map((opcion, index) => (
                      <label key={index} className="opcion-label">
                        <input
                          type="radio"
                          name={`pregunta-${pregunta.id}`}
                          value={index}
                          checked={respuestas[pregunta.id] === index}
                          onChange={() => handleRespuesta(pregunta.id, index)}
                        />
                        <span className="opcion-texto">{opcion}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="botones-test">
              <button
                className="btn btn-primary"
                onClick={completarTest}
                disabled={Object.keys(respuestas).length < preguntas.length}
              >
                Completar Test
              </button>
            </div>
          </>
        ) : (
          <div className="resultados-test">
            <div className={`puntaje-final puntaje-${obtenerColorPuntaje(puntaje)}`}>
              <h2>🎯 Resultados del Test</h2>
              <div className="puntaje-numero">
                {puntaje} / {preguntas.length}
                <span className="porcentaje">
                  ({Math.round((puntaje / preguntas.length) * 100)}%)
                </span>
              </div>
              <p className="puntaje-mensaje">
                {puntaje >= 32 && "¡Excelente! Dominas muy bien los conceptos de backend e integración con el frontend."}
                {puntaje >= 24 && puntaje < 32 && "¡Buen trabajo! Revisa algunos detalles de integración backend–frontend y manejo de errores."}
                {puntaje < 24 && "Sigue practicando. Repasa el flujo completo: Frontend → fetch → API → BD → respuesta."}
              </p>
            </div>

            <div className="revisión-detallada">
              <h3>📝 Revisión Detallada</h3>

              {preguntas.map((pregunta) => {
                const respuestaUsuario = respuestas[pregunta.id];
                const esCorrecta = respuestaUsuario === pregunta.respuestaCorrecta;

                return (
                  <div
                    key={pregunta.id}
                    className={`revision-pregunta ${esCorrecta ? 'correcta' : 'incorrecta'}`}
                  >
                    <div className="revision-header">
                      <span className="revision-numero">Pregunta {pregunta.id}</span>
                      <span className={`revision-estado ${esCorrecta ? 'estado-correcto' : 'estado-incorrecto'}`}>
                        {esCorrecta ? '✅ Correcta' : '❌ Incorrecta'}
                      </span>
                    </div>

                    <p className="revision-pregunta-texto">{pregunta.pregunta}</p>

                    <div className="revision-respuestas">
                      <div className="respuesta-usuario">
                        <strong>Tu respuesta:</strong>{" "}
                        {respuestaUsuario !== undefined
                          ? pregunta.opciones[respuestaUsuario]
                          : "No respondida"}
                      </div>

                      {!esCorrecta && (
                        <div className="respuesta-correcta">
                          <strong>Respuesta correcta:</strong>{" "}
                          {pregunta.opciones[pregunta.respuestaCorrecta]}
                        </div>
                      )}

                      <div className="explicacion">
                        <strong>Explicación:</strong> {pregunta.explicacion}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="botones-test">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setRespuestas({});
                  setTestCompletado(false);
                  setPuntaje(0);
                }}
              >
                Reiniciar Test
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .contenedor-test {
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
        }

        .info-test {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 25px;
          border-radius: 12px;
          margin-bottom: 30px;
        }

        .info-test h3 {
          margin-top: 0;
          margin-bottom: 15px;
        }

        .info-test ul {
          margin-bottom: 20px;
        }

        .info-test li {
          margin-bottom: 8px;
          padding-left: 10px;
        }

        .progreso-test p {
          margin-bottom: 10px;
          font-weight: 600;
        }

        .barra-progreso {
          background: rgba(255, 255, 255, 0.3);
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
        }

        .barra-progreso__fill {
          background: #4caf50;
          height: 100%;
          transition: width 0.3s ease;
        }

        .preguntas-container {
          display: grid;
          gap: 25px;
          margin-bottom: 30px;
        }

        .pregunta-card {
          background: white;
          border: 2px solid #e1e5e9;
          border-radius: 12px;
          padding: 25px;
          transition: all 0.3s ease;
        }

        .pregunta-card:hover {
          border-color: #667eea;
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.1);
        }

        .pregunta-numero {
          color: #667eea;
          margin: 0 0 15px 0;
          font-size: 1.1em;
          font-weight: 600;
        }

        .pregunta-texto {
          font-size: 1.1em;
          font-weight: 500;
          margin-bottom: 20px;
          line-height: 1.6;
          color: #2c3e50;
        }

        .opciones-container {
          display: grid;
          gap: 12px;
        }

        .opcion-label {
          display: flex;
          align-items: center;
          padding: 12px 15px;
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .opcion-label:hover {
          background: #e3f2fd;
          border-color: #2196f3;
        }

        .opcion-label input[type='radio'] {
          margin-right: 12px;
          transform: scale(1.2);
        }

        .opcion-label input[type='radio']:checked + .opcion-texto {
          font-weight: 600;
          color: #1976d2;
        }

        .opcion-texto {
          flex: 1;
          font-size: 1em;
        }

        .botones-test {
          text-align: center;
          margin: 30px 0;
        }

        .btn {
          padding: 12px 30px;
          border: none;
          border-radius: 8px;
          font-size: 1.1em;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-secondary:hover {
          background: #5a6268;
          transform: translateY(-2px);
        }

        .resultados-test {
          text-align: center;
        }

        .puntaje-final {
          padding: 40px;
          border-radius: 15px;
          margin-bottom: 40px;
          color: white;
        }

        .puntaje-success {
          background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
        }

        .puntaje-warning {
          background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
        }

        .puntaje-danger {
          background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);
        }

        .puntaje-final h2 {
          margin: 0 0 20px 0;
          font-size: 1.8em;
        }

        .puntaje-numero {
          font-size: 3em;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .porcentaje {
          font-size: 0.6em;
          margin-left: 10px;
        }

        .puntaje-mensaje {
          font-size: 1.2em;
          margin: 0;
        }

        .revisión-detallada {
          text-align: left;
        }

        .revisión-detallada h3 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 30px;
          font-size: 1.5em;
        }

        .revision-pregunta {
          background: white;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 20px;
          border-left: 5px solid;
        }

        .revision-pregunta.correcta {
          border-left-color: #4caf50;
          background: linear-gradient(90deg, rgba(76, 175, 80, 0.05) 0%, white 10%);
        }

        .revision-pregunta.incorrecta {
          border-left-color: #f44336;
          background: linear-gradient(90deg, rgba(244, 67, 54, 0.05) 0%, white 10%);
        }

        .revision-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .revision-numero {
          font-weight: 600;
          color: #667eea;
        }

        .revision-estado {
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.9em;
        }

        .estado-correcto {
          background: rgba(76, 175, 80, 0.1);
          color: #2e7d32;
        }

        .estado-incorrecto {
          background: rgba(244, 67, 54, 0.1);
          color: #c62828;
        }

        .revision-pregunta-texto {
          font-weight: 500;
          margin-bottom: 15px;
          color: #2c3e50;
        }

        .revision-respuestas > div {
          margin-bottom: 10px;
        }

        .respuesta-usuario {
          color: #555;
        }

        .respuesta-correcta {
          color: #2e7d32;
          font-weight: 500;
        }

        .explicacion {
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          border-left: 3px solid #667eea;
          margin-top: 10px;
          color: #2c3e50;
        }

        @media (max-width: 768px) {
          .contenedor-test {
            padding: 10px;
          }

          .pregunta-card {
            padding: 20px 15px;
          }

          .puntaje-numero {
            font-size: 2.5em;
          }

          .revision-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
}
