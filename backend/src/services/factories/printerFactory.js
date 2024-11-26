import { faker } from '@faker-js/faker';

const PRINTER_BRANDS = ['HP', 'Canon', 'Epson', 'Brother', 'Xerox'];
const CAMPUSES = ['Main Campus', 'North Campus', 'South Campus'];
const BUILDINGS = ['Library', 'Engineering', 'Science', 'Arts', 'Business'];
const STATES = ['active', 'inactive', 'maintenance'];

const createPrinter = () => {
  const brand = faker.helpers.arrayElement(PRINTER_BRANDS);

  return {
    name: `${brand} Printer ${faker.string.alphanumeric(4)}`,
    brand,
    model: `${brand}-${faker.string.alphanumeric(6)}`,
    state: faker.helpers.arrayElement(STATES),
    campus: faker.helpers.arrayElement(CAMPUSES),
    building: faker.helpers.arrayElement(BUILDINGS),
    room: `${faker.string.alpha(1)}-${faker.number.int({ min: 100, max: 999 })}`,
    created_at: faker.date.past(),
    updated_at: faker.date.recent()
  };
};

export default createPrinter;
