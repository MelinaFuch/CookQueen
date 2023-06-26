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

module.exports = {
    createFilters,
}