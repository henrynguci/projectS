/*
    id
    rating (number 1 - 5)
    submission date
*/

CREATE TABLE feedbacks (
    id SERIAL PRIMARY KEY,
    message TEXT,
    rating SMALLINT CHECK(rating >= 1 AND rating <= 5),
    submission_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Ho_Chi_Minh')
)
