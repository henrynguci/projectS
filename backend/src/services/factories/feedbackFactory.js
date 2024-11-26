// src/services/factories/feedbackFactory.js
import { faker } from '@faker-js/faker';

const createFeedback = (userId) => {
  return {
    user_id: userId,
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    rating: faker.number.int({ min: 1, max: 5 }),
    submission_date: faker.date.recent(),
    created_at: faker.date.past(),
    updated_at: faker.date.recent()
  };
};

export default createFeedback;
