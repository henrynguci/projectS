import pool from '../../config/db.js';
import createDocument from '../factories/documentFactory.js';
import { faker } from '@faker-js/faker';

const seedDocuments = async (count = 100) => {
  try {
    console.log(`🌱 Seeding ${count} documents...`);
    const insertPromises = [];
    faker.seed(Date.now());
    for (let i = 0; i < count; i++) {
      faker.seed(Math.floor(Math.random() * 1000000) + i);
      const documentData = createDocument();
      const insertPromise = pool.query(`
        INSERT INTO documents (document_id, name, file_type, number_of_pages, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6)
      `, [
        documentData.document_id,
        documentData.name,
        documentData.file_type,
        documentData.number_of_pages,
        documentData.created_at,
        documentData.updated_at
      ]);

      insertPromises.push(insertPromise);
    }
    await Promise.all(insertPromises);

    console.log('✅ Documents seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding documents:', error);
    throw error;
  }
};
export default seedDocuments;
