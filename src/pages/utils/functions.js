const createFilters = (title, category, ingredients) => {
    let filters = { deleted: "no" };
    if (title) filters.title = { $regex: title, $options: 'i' };
    if (category && [
        "Dulce",
        "Salado",
        "Vegetariano",
        "Pasta",
        "Desayuno/Merienda",
        "Almuerzo",
        "Para mascotas"
    ].includes(category)) filters.category = category;

    
    if (ingredients) filters.ingredients = { $regex: ingredients, $options: 'i' };

    return filters; 
};

// const userFilters = (name, status, type) => {
//     const filters = {};
//     if (name) filters.name = { [Op.iLike]: `%${name}%` };
//     if (status) filters.status = status;
//     if (type) filters.type = type;
//     return filters;
// };

// const eliminarRepetidos = (array) => {
//     const sinRepetidos = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (!sinRepetidos.includes(element)) {
//             sinRepetidos.push(element);
//         }
//     }
//     return sinRepetidos;
// };

module.exports = {
    createFilters,
    setOrder
}