export const getPrintOrderById = "SELECT * FROM print_orders p WHERE p.id = $1";
export const getAllPrintOrders = "SELECT * FROM print_orders";
export const addPrintOrder = "INSERT INTO print_orders (doc_id, Pstatus) VALUES ($1, $2)";
export const deletePrintOrder = "DELETE FROM print_orders WHERE id = $1";
export const updatePrintOrder = "UPDATE print_orders SET end_at = $1, Pstatus = $2 WHERE id = $3"