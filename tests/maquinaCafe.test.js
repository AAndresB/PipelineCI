// tests/maquinaCafe.test.js

import { expect } from 'chai';
import { seleccionarVaso, seleccionarAzucar } from '../src/maquinaCafe.js';

describe('Maquina de Café', () => {
  // Pruebas para la función seleccionarVaso
  it('Debería seleccionar un vaso pequeño de 3 Oz', () => {
    const vaso = seleccionarVaso('pequeño');
    expect(vaso).to.equal(3);
  });

  it('Debería seleccionar un vaso mediano de 5 Oz', () => {
    const vaso = seleccionarVaso('mediano');
    expect(vaso).to.equal(5);
  });

  it('Debería seleccionar un vaso grande de 7 Oz', () => {
    const vaso = seleccionarVaso('grande');
    expect(vaso).to.equal(7);
  });

  it('Debería devolver 0 para un tamaño de vaso no válido', () => {
    const vaso = seleccionarVaso('extra-grande');
    expect(vaso).to.equal(0);
  });

  // Pruebas para la función seleccionarAzucar
  it('Debería permitir seleccionar la cantidad de azúcar', () => {
    const azucar = seleccionarAzucar(2);
    expect(azucar).to.equal(2);
  });

  it('Debería devolver 0 para una cantidad de azúcar negativa', () => {
    const azucar = seleccionarAzucar(-1);
    expect(azucar).to.equal(0);
  });

  it('Debería devolver 0 para una cantidad de azúcar no válida', () => {
    const azucar = seleccionarAzucar('mucha');
    expect(azucar).to.equal(0);
  });
});



