const createFilters = (title, category, ingredients) => {
    let filters = { deleted: "No" };
    if (title) filters.title = { $regex: title, $options: 'i' };
    if (category && [
        "Dulce",
        "Agridulce",
        "Salado",
        "Desayuno/Merienda",
        "Almuerzo",
        "Vegetariano",
        "Carnes",
        "Pasta",
        "Panes",
        "Postres",
        "Para mascotas"
    ].includes(category)) filters.category = category;
    if (ingredients) filters.ingredients = { $regex: ingredients, $options: 'i' };
    return filters;
};

module.exports = {
    createFilters,
}