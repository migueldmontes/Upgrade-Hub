const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];
let totalPrecio = 0;
let mediaProducto = 0;
for (let i = 0; i < products.length; i++) {
    totalPrecio = totalPrecio + products[i].sellCount;
    
}

mediaProducto = totalPrecio / products.length;

console.log(totalPrecio);
console.log(mediaProducto);