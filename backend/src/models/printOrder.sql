/*
    Id
    starttime
    endttime
    status
*/

CREATE TABLE print_orders (
    id SERIAL PRIMARY KEY,
	doc_id INTEGER,
    start_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Ho_Chi_Minh'),
    end_at TIMESTAMP,
    Pstatus VARCHAR(10) CHECK (Pstatus IN ('pending', 'completed', 'printing', 'failed')),
    CONSTRAINT fk_customer
        FOREIGN KEY(doc_id)
            REFERENCES documents(id)
            ON DELETE SET NULL
            ON UPDATE CASCADE
)