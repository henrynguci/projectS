export const getFeedbackById = "SELECT * FROM feedbacks f WHERE f.id = $1";
export const getAllFeedbacks = "SELECT * FROM feedbacks";
export const addFeedback = "INSERT INTO feedbacks (message, rating) VALUES ($1, $2)";
export const deleteFeedback = "DELETE FROM feedbacks WHERE id = $1";
