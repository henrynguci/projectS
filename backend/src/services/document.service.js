export const getDocumentById = "SELECT * FROM documents d WHERE d.id = $1";
export const getDocuments = "SELECT * FROM documents";
export const addDocument = "INSERT INTO documents (name, file_type, number_pages) VALUES ($1, $2, $3)";
export const deleteDocument = "DELETE FROM documents WHERE id = $1";
export const updateDocument = "UPDATE documents SET name = $1, file_type = $2, number_pages = $3 WHERE id = $4"