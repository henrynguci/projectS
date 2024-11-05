export const getPageOrderById = "SELECT * FROM page_orders p WHERE p.id = $1";
export const getAllPageOrders = "SELECT * FROM page_orders";
export const addPageOrder = "INSERT INTO page_orders (number_A4pages) VALUES ($1)";
export const deletePageOrder = "DELETE FROM page_orders WHERE id = $1";
