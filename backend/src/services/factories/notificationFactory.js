// src/services/factories/notificationFactory.js
import { faker } from '@faker-js/faker';

const createNotification = (userId) => {
  return {
    user_id: userId,
    content: faker.lorem.sentence(),
    sent_time: faker.date.recent(),
    status: faker.helpers.arrayElement(['unread', 'read']),
    created_at: faker.date.past(),
    updated_at: faker.date.recent()
  };
};

export default createNotification;
