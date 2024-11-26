import { faker } from '@faker-js/faker';

const FILE_TYPES = ['pdf', 'doc', 'docx'];

const createDocument = () => {
  return {
    document_id: faker.string.uuid(),
    name: faker.system.fileName(),
    file_type: faker.helpers.arrayElement(FILE_TYPES),
    number_of_pages: faker.number.int({ min: 1, max: 100 }),
    created_at: faker.date.past(),
    updated_at: faker.date.recent()
  };
};

export default createDocument;
