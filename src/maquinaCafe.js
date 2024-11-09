// src/maquinaCafe.js

// Función para seleccionar el tamaño del vaso
export function seleccionarVaso(tamaño) {
  const tamaños = {
    pequeño: 3,
    mediano: 5,
    grande: 7
  };
  return tamaños[tamaño] || 0;
}

// Función para seleccionar la cantidad de azúcar
export function seleccionarAzucar(cucharadas) {
  if (typeof cucharadas !== 'number' || cucharadas < 0) {
    return 0; // Devuelve 0 si la cantidad no es válida
  }
  return cucharadas;
}

  