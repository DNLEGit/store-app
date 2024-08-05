/* Esta funcion recibe products que es el array de los items que estan en el carrito
agarra los precios y los acumula en la variable sum y retorna el total */

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price);
    return sum;

}