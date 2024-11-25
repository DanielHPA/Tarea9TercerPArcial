
function parseSQLToJSON(sql) {
  const jsonResult = {};
  
  
  const statements = sql.split(/;\s*/).map(statement => statement.trim()).filter(Boolean);

  let counter = 1;  

 
  statements.forEach(statement => {
    const insertMatch = statement.match(/INSERT INTO\s+`?(\w+)`?\s*\((.*?)\)\s+VALUES\s*\((.*?)\)/is);
    
    if (insertMatch) {
      const tableName = insertMatch[1];  
      const columnas = insertMatch[2].split(",").map(col => col.trim()); 
      const valuesString = insertMatch[3];

      // Dividir las filas por "),(" y procesarlas
      const values = valuesString.split(/\),\s*\(/).map(valSet => 
        valSet.split(",").map(val => val.trim().replace(/['"]/g, "")) 
      );

      
      if (!jsonResult[tableName]) {
        jsonResult[tableName] = {};
      }

      
      values.forEach((row, index) => {
        const rowObject = {};

        
        columnas.forEach((col, colIndex) => {
          rowObject[col] = row[colIndex]; 
        });

       
        jsonResult[tableName][`columna_${counter++}`] = rowObject;
      });
    }
  });

  return jsonResult;
}

