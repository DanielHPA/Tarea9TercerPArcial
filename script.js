



// Función que procesa el archivo SQL y lo convierte en JSONfunction convertSQLToJSON() {
  const fileInput = document.getElementById("fileInput");
  const output = document.getElementById("output");

  if (fileInput.files.length === 0) {
    alert("Por favor, sube un archivo SQL.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const sqlContent = event.target.result;

    // Llamada a la función que parseará el archivo SQL y lo convertirá a JSON
    const jsonData = parseSQLToJSON(sqlContent);
    output.textContent = JSON.stringify(jsonData, null, 2); // Mostrar JSON formateado
  };

  reader.readAsText(file);
}

// Función que convierte un SQL de CREATE y INSERT a JSON
function parseSQLToJSON(sql) {
  const jsonResult = {
    "tabla": "",
    "columnas": [],
    "datos": []
  };

  // Extraer el nombre de la tabla
  const createTableMatch = sql.match(/CREATE TABLE\s+`?(\w+)`?\s*\(/i);
  if (createTableMatch) {
    jsonResult.tabla = createTableMatch[1];
  }

  // Extraer las columnas de la tabla
  const columnMatch = sql.match(/\((.*?)\)/s);
  if (columnMatch) {
    const columns = columnMatch[1].split(",").map(col => col.trim().split(" ")[0]);
    jsonResult.columnas = columns;
  }

  // Extraer los valores de los INSERT
  const insertMatches = sql.match(/INSERT INTO\s+`?(\w+)`?\s*\((.*?)\)\s+VALUES\s*\((.*?)\)/gs);
  if (insertMatches) {
    insertMatches.forEach(insert => {
      const valuesMatch = insert.match(/\((.*?)\)/s);
      if (valuesMatch) {
        const values = valuesMatch[1].split(",").map(val => val.trim().replace(/['"]/g, ""));
        jsonResult.datos.push(values);
      }
    });
  }

  return jsonResult;
}
