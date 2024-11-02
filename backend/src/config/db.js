import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    password: 'postgresql',
    host: 'localhost',
    port: 5432,
    database: 'SPSS'
});

export default pool;
