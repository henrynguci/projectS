/*
    id unique notnull
    name not null
    file type
    number of page > 0
*/

CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    file_type VARCHAR(10) NOT NULL,
    number_pages INT CHECK(number_pages > 0)
)