import { useState } from "react";

const questions = [
  // 1–10: conceptos básicos y DDL/DML
  {
    id: 1,
    text: "¿Qué es una base de datos?",
    options: [
      "Un archivo de texto con datos",
      "Un conjunto organizado de información",
      "Un programa de diseño gráfico"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    text: "¿Qué comando se usa para crear una base de datos en MySQL?",
    options: ["NEW DATABASE", "CREATE DATABASE", "ADD DATABASE"],
    correctIndex: 1
  },
  {
    id: 3,
    text: "¿Qué comando se usa para seleccionar una base de datos antes de trabajar con ella?",
    options: ["USE nombre_bd", "OPEN nombre_bd", "SELECT nombre_bd"],
    correctIndex: 0
  },
  {
    id: 4,
    text: "¿Qué comando crea una tabla?",
    options: ["MAKE TABLE", "CREATE TABLE", "ADD TABLE"],
    correctIndex: 1
  },
  {
    id: 5,
    text: "¿Qué significa PRIMARY KEY?",
    options: [
      "Una clave que puede repetirse en varias filas",
      "Un campo opcional",
      "Un identificador único para cada registro"
    ],
    correctIndex: 2
  },
  {
    id: 6,
    text: "¿Para qué se usa AUTO_INCREMENT?",
    options: [
      "Para incrementar el precio",
      "Para generar números únicos automáticamente en una columna numérica",
      "Para contar filas de la tabla"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    text: "¿Qué es una clave foránea (FOREIGN KEY)?",
    options: [
      "Una clave que identifica de forma única una fila",
      "Una columna que se usa para relacionar una tabla con otra",
      "Una columna que siempre es numérica"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    text: "En una relación 1–N, ¿en qué tabla se coloca la clave foránea?",
    options: [
      "En la tabla del lado 1",
      "En la tabla del lado N (la tabla hija)",
      "En una tabla aparte siempre"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    text: "¿Qué comando se usa para insertar registros en una tabla?",
    options: ["ADD VALUES", "INSERT INTO", "PUT DATA"],
    correctIndex: 1
  },
  {
    id: 10,
    text: "¿Qué comando se usa para modificar registros existentes?",
    options: ["UPDATE", "MODIFY ROW", "CHANGE DATA"],
    correctIndex: 0
  },

  // 11–20: borrar, SELECT, filtros, ordenación, agregación
  {
    id: 11,
    text: "¿Qué hace DELETE FROM tabla WHERE ...?",
    options: [
      "Borra solo los campos indicados",
      "Borra las filas que cumplen la condición",
      "Borra la tabla completa"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    text: "¿Qué hace DROP TABLE nombre_tabla?",
    options: [
      "Borra todas las filas pero mantiene la estructura de la tabla",
      "Borra la tabla completa, estructura y datos",
      "Solo reinicia el AUTO_INCREMENT"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    text: "¿Qué significa SELECT * FROM productos?",
    options: [
      "Selecciona todas las columnas y todas las filas de la tabla productos",
      "Selecciona solo la columna *",
      "Borra todos los productos"
    ],
    correctIndex: 0
  },
  {
    id: 14,
    text: "¿Para qué sirve la cláusula WHERE?",
    options: [
      "Para ordenar los resultados",
      "Para filtrar las filas que cumplen una condición",
      "Para agrupar resultados"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    text: "¿Con qué operador se usa el comodín % para buscar patrones de texto?",
    options: ["IN", "LIKE", "BETWEEN"],
    correctIndex: 1
  },
  {
    id: 16,
    text: "¿Qué hace ORDER BY precio DESC?",
    options: [
      "Ordena los precios de menor a mayor",
      "Ordena los precios de mayor a menor",
      "Ordena aleatoriamente los precios"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    text: "¿Qué devuelve COUNT(*)?",
    options: [
      "La suma de una columna",
      "El número de filas de la consulta",
      "La media de una columna numérica"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    text: "¿Qué hace AVG(precio)?",
    options: [
      "Devuelve el precio máximo",
      "Devuelve el precio mínimo",
      "Devuelve el precio medio de la columna precio"
    ],
    correctIndex: 2
  },
  {
    id: 19,
    text: "¿Qué hace MAX(stock)?",
    options: [
      "Devuelve el valor de stock más alto",
      "Devuelve el valor de stock más bajo",
      "Devuelve la suma de todos los stocks"
    ],
    correctIndex: 0
  },
  {
    id: 20,
    text: "¿Para qué se usa GROUP BY?",
    options: [
      "Para eliminar filas repetidas",
      "Para agrupar filas que comparten el mismo valor en una o varias columnas",
      "Para ordenar alfabéticamente"
    ],
    correctIndex: 1
  },

  // 21–30: HAVING, tipos de relaciones, tipos de datos, joins, vistas
  {
    id: 21,
    text: "¿Cuál es la función principal de HAVING?",
    options: [
      "Filtrar filas antes de agrupar",
      "Filtrar grupos después de aplicar GROUP BY",
      "Ordenar los resultados agrupados"
    ],
    correctIndex: 1
  },
  {
    id: 22,
    text: "En una relación N:M entre productos y pedidos, ¿qué elemento es necesario?",
    options: [
      "Una tabla intermedia que contenga las claves foráneas",
      "Una llave primaria compuesta en pedidos",
      "Un trigger obligatorio"
    ],
    correctIndex: 0
  },
  {
    id: 23,
    text: "¿Qué significado tiene DECIMAL(10,2)?",
    options: [
      "Hasta 10 dígitos enteros y 2 decimales",
      "Hasta 10 dígitos en total, de los cuales 2 son decimales",
      "10 enteros y 2 decimales fijos siempre"
    ],
    correctIndex: 1
  },
  {
    id: 24,
    text: "¿Qué hace la restricción NOT NULL en una columna?",
    options: [
      "Impide que se introduzcan valores repetidos",
      "Impide que la columna quede sin valor (NULL)",
      "Hace que la columna sea clave primaria"
    ],
    correctIndex: 1
  },
  {
    id: 25,
    text: "¿Para qué sirve DEFAULT en la definición de una columna?",
    options: [
      "Para indicar un valor por defecto si no se especifica ninguno",
      "Para obligar a escribir siempre un valor",
      "Para hacer la columna única"
    ],
    correctIndex: 0
  },
  {
    id: 26,
    text: "¿Qué es un tipo ENUM en MySQL?",
    options: [
      "Un tipo numérico",
      "Un tipo de texto limitado a una lista de valores permitidos",
      "Un tipo de fecha"
    ],
    correctIndex: 1
  },
  {
    id: 27,
    text: "¿Qué significa ON DELETE CASCADE en una clave foránea?",
    options: [
      "Que no se puede borrar nada",
      "Que al borrar el registro padre también se borran automáticamente los hijos relacionados",
      "Que se reinicia el AUTO_INCREMENT"
    ],
    correctIndex: 1
  },
  {
    id: 28,
    text: "¿Qué hace un INNER JOIN?",
    options: [
      "Devuelve todas las filas de ambas tablas, tengan relación o no",
      "Devuelve solo las filas donde hay coincidencia en ambas tablas",
      "Devuelve solo la tabla de la izquierda"
    ],
    correctIndex: 1
  },
  {
    id: 29,
    text: "¿Qué característica principal tiene un LEFT JOIN?",
    options: [
      "Solo devuelve filas si hay coincidencia en las dos tablas",
      "Devuelve todas las filas de la tabla izquierda aunque no haya coincidencia en la derecha",
      "Devuelve solo filas sin coincidencia"
    ],
    correctIndex: 1
  },
  {
    id: 30,
    text: "¿Para qué sirve una vista (VIEW)?",
    options: [
      "Para guardar físicamente una copia de los datos",
      "Para guardar una consulta y reutilizarla como si fuera una tabla virtual",
      "Para crear automáticamente copias de seguridad"
    ],
    correctIndex: 1
  },

  // 31–40: vistas, procedures, triggers, permisos, roles
  {
    id: 31,
    text: "¿Qué comando crea una vista?",
    options: ["CREATE VIEW", "NEW VIEW", "MAKE VIEW"],
    correctIndex: 0
  },
  {
    id: 32,
    text: "¿Qué es un procedimiento almacenado (PROCEDURE)?",
    options: [
      "Una tabla temporal",
      "Un conjunto de instrucciones SQL guardadas en el servidor para ejecutarlas cuando se necesite",
      "Una copia de seguridad"
    ],
    correctIndex: 1
  },
  {
    id: 33,
    text: "¿Cómo se ejecuta un procedimiento almacenado sin parámetros?",
    options: [
      "RUN nombre_procedure;",
      "EXEC nombre_procedure;",
      "CALL nombre_procedure();"
    ],
    correctIndex: 2
  },
  {
    id: 34,
    text: "¿Por qué solemos cambiar el DELIMITER al crear un procedure o trigger?",
    options: [
      "Para poder escribir comentarios",
      "Porque dentro del BEGIN...END usamos muchos ; y necesitamos indicar un final de bloque distinto",
      "Para acelerar la ejecución de la consulta"
    ],
    correctIndex: 1
  },
  {
    id: 35,
    text: "¿Qué es un trigger (disparador) en MySQL?",
    options: [
      "Un tipo de índice",
      "Un código que se ejecuta automáticamente cuando ocurre un evento (INSERT, UPDATE, DELETE) en una tabla",
      "Una copia de una tabla"
    ],
    correctIndex: 1
  },
  {
    id: 36,
    text: "En un trigger AFTER DELETE, ¿cómo accedemos a los valores de la fila borrada?",
    options: ["Con NEW.columna", "Con OLD.columna", "No se puede acceder"],
    correctIndex: 1
  },
  {
    id: 37,
    text: "En un trigger BEFORE INSERT, ¿qué registro podemos modificar o consultar?",
    options: ["Solo OLD", "Solo NEW", "OLD y NEW a la vez"],
    correctIndex: 1
  },
  {
    id: 38,
    text: "¿Qué comando de MySQL se usa para dar permisos a un usuario del servidor?",
    options: ["PERMIT", "GRANT", "ALLOW"],
    correctIndex: 1
  },
  {
    id: 39,
    text: "¿Qué comando se usa para quitar permisos a un usuario del servidor MySQL?",
    options: ["REVOKE", "REMOVE", "DROP PERMISSION"],
    correctIndex: 0
  },
  {
    id: 40,
    text: "En tu aplicación web (no en MySQL), el rol 'admin' o 'cliente' suele guardarse:",
    options: [
      "En una columna rol de la tabla usuarios",
      "En el nombre de la base de datos",
      "En el comando GRANT"
    ],
    correctIndex: 0
  },

  // 41–50: integridad, diseño, cláusulas extra, seguridad lógica
  {
    id: 41,
    text: "¿Qué es la integridad referencial?",
    options: [
      "La capacidad de hacer copias de seguridad",
      "El conjunto de reglas que garantiza que las relaciones entre tablas sean coherentes (por ejemplo, que no haya claves foráneas huérfanas)",
      "La ordenación alfabética de las tablas"
    ],
    correctIndex: 1
  },
  {
    id: 42,
    text: "¿Por qué es importante usar claves primarias en las tablas?",
    options: [
      "Porque ayuda a identificar de forma única cada fila y facilita las relaciones entre tablas",
      "Solo para hacer más bonita la tabla",
      "Porque MySQL lo exige en todas las tablas"
    ],
    correctIndex: 0
  },
  {
    id: 43,
    text: "¿Qué comando se usa para modificar la estructura de una tabla (por ejemplo, añadir una columna)?",
    options: ["ALTER TABLE", "CHANGE STRUCTURE", "EDIT TABLE"],
    correctIndex: 0
  },
  {
    id: 44,
    text: "¿Qué hace la restricción UNIQUE?",
    options: [
      "Impide valores NULL",
      "Impide que haya valores repetidos en esa columna",
      "Hace que la columna sea clave foránea"
    ],
    correctIndex: 1
  },
  {
    id: 45,
    text: "¿Qué comando muestra la estructura básica de una tabla (columnas y tipos)?",
    options: ["DESCRIBE nombre_tabla;", "LOOK nombre_tabla;", "INFO nombre_tabla;"],
    correctIndex: 0
  },
  {
    id: 46,
    text: "¿Para qué sirve la cláusula LIMIT en una consulta SELECT?",
    options: [
      "Para cerrar la conexión",
      "Para limitar el número de filas que devuelve la consulta",
      "Para limitar el número de columnas"
    ],
    correctIndex: 1
  },
  {
    id: 47,
    text: "¿Qué hace la expresión precio BETWEEN 10 AND 20?",
    options: [
      "Selecciona precios menores de 10 o mayores de 20",
      "Selecciona precios exactamente iguales a 10 y 20",
      "Selecciona precios entre 10 y 20 (incluidos)"
    ],
    correctIndex: 2
  },
  {
    id: 48,
    text: "¿Qué operador se usa para comprobar si un valor pertenece a una lista concreta?",
    options: ["IN", "LIKE", "EXISTS"],
    correctIndex: 0
  },
  {
    id: 49,
    text: "En una relación 1–1 bien diseñada, lo más habitual es:",
    options: [
      "Que ambas tablas tengan muchas claves foráneas cruzadas",
      "Que una de las tablas tenga una clave foránea única apuntando a la otra",
      "Que no exista ninguna clave foránea"
    ],
    correctIndex: 1
  },
  {
    id: 50,
    text: "En tu frontend (React), ¿para qué sirve tener el rol del usuario en un AuthContext?",
    options: [
      "Para reiniciar la base de datos",
      "Para poder mostrar u ocultar opciones (por ejemplo, menús de admin) según el rol",
      "Para cambiar el tema de colores"
    ],
    correctIndex: 1
  }
];

function TestSQLBasico50() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (qIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null));
    setShowResults(false);
  };

  const correctCount = answers.reduce((acc, ans, index) => {
    if (ans === questions[index].correctIndex) return acc + 1;
    return acc;
  }, 0);

  return (
    <section className="section section--test-sql">
      <article className="card card--test">
        <h2>Test de repaso SQL (50 preguntas tipo test)</h2>
        <p>
          Responde a las siguientes preguntas. Al finalizar, pulsa en{" "}
          <strong>Corregir test</strong> para ver tu puntuación y qué
          respuestas son correctas.
        </p>

        <div className="test-sql__lista">
          {questions.map((q, qIndex) => {
            const userAnswer = answers[qIndex];
            const isCorrect =
              showResults && userAnswer === q.correctIndex;
            const isWrong =
              showResults &&
              userAnswer !== null &&
              userAnswer !== q.correctIndex;

            return (
              <div
                key={q.id}
                className={`test-sql__pregunta ${
                  isCorrect
                    ? "test-sql__pregunta--correcta"
                    : isWrong
                    ? "test-sql__pregunta--incorrecta"
                    : ""
                }`}
              >
                <h3>
                  {qIndex + 1}. {q.text}
                </h3>
                <ul className="test-sql__opciones">
                  {q.options.map((opt, optIndex) => {
                    const optionId = `q${qIndex}_opt${optIndex}`;
                    const isThisCorrect =
                      showResults &&
                      optIndex === q.correctIndex;

                    return (
                      <li
                        key={optionId}
                        className={`test-sql__opcion ${
                          isThisCorrect
                            ? "test-sql__opcion--correcta"
                            : ""
                        }`}
                      >
                        <label htmlFor={optionId}>
                          <input
                            type="radio"
                            id={optionId}
                            name={`q${qIndex}`}
                            value={optIndex}
                            checked={userAnswer === optIndex}
                            onChange={() =>
                              handleAnswerChange(qIndex, optIndex)
                            }
                            disabled={showResults}
                          />
                          <span className="test-sql__opcion-texto">
                            <strong>
                              {String.fromCharCode(65 + optIndex)}){" "}
                            </strong>
                            {opt}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>

                {showResults && (
                  <p className="test-sql__feedback">
                    {isCorrect && "✅ ¡Correcto!"}
                    {isWrong &&
                      `❌ Incorrecto. La respuesta correcta es: ${
                        String.fromCharCode(
                          65 + q.correctIndex
                        )
                      }) ${q.options[q.correctIndex]}`}
                    {!isCorrect &&
                      !isWrong &&
                      "⚠️ No contestada."}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="test-sql__acciones">
          {!showResults && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Corregir test
            </button>
          )}
          {showResults && (
            <>
              <p className="test-sql__resultado">
                Has acertado{" "}
                <strong>
                  {correctCount} de {questions.length}
                </strong>{" "}
                preguntas.
              </p>
              <button
                type="button"
                className="btn"
                onClick={handleReset}
              >
                Reiniciar test
              </button>
            </>
          )}
        </div>
      </article>
    </section>
  );
}

export default TestSQLBasico50;
