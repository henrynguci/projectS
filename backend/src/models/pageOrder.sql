/*
    Id
    transactionTime
    Number of A4 page
*/
CREATE TABLE page_orders (
    id SERIAL PRIMARY KEY,
    transaction_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Ho_Chi_Minh'),
    number_A4pages INTEGER
)