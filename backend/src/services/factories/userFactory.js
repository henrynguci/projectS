// src/services/factories/userFactory.js
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

// Danh sách họ phổ biến tiếng Việt
const vietnameseFirstNames = [
  'Nguyễn', 'Trần', 'Lê', 'Phạm', 'Hoàng', 'Huỳnh', 'Phan', 'Vũ', 'Võ', 'Đặng',
  'Bùi', 'Đỗ', 'Hồ', 'Ngô', 'Dương', 'Lý'
];

// Danh sách tên đệm phổ biến tiếng Việt
const vietnameseMiddleNames = [
  'Văn', 'Thị', 'Đức', 'Minh', 'Hoàng', 'Hữu', 'Đình', 'Xuân', 'Quang', 'Thành',
  'Thanh', 'Thúy', 'Thu', 'Ngọc', 'Kim', 'Phương'
];

// Danh sách tên phổ biến tiếng Việt
const vietnameseLastNames = [
  'An', 'Bình', 'Cường', 'Dũng', 'Đức', 'Hùng', 'Huy', 'Khang', 'Long', 'Minh',
  'Nam', 'Phúc', 'Quân', 'Thắng', 'Thiện', 'Trung', 'Tuấn', 'Việt', 'Vũ', 'Xuân',
  'Hương', 'Lan', 'Mai', 'Phương', 'Thảo', 'Trang', 'Vân', 'Yến'
];

const generateVietnameseName = () => {
  const firstName = faker.helpers.arrayElement(vietnameseFirstNames);
  const middleName = faker.helpers.arrayElement(vietnameseMiddleNames);
  const lastName = faker.helpers.arrayElement(vietnameseLastNames);
  return `${firstName} ${middleName} ${lastName}`;
};

const generateStudentEmail = (fullName) => {
  // Chuyển tên thành dạng không dấu để tạo email
  const removeAccents = (str) => {
    return str.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  };

  // Tách tên thành các phần
  const nameParts = fullName.split(' ');
  const lastName = nameParts[nameParts.length - 1];
  const otherNames = nameParts.slice(0, -1);

  // Tạo phần đầu email: lấy chữ cái đầu của các phần tên + tên cuối
  const emailPrefix = otherNames.map(name => removeAccents(name.charAt(0).toLowerCase())).join('')
    + removeAccents(lastName.toLowerCase());

  // Thêm số ngẫu nhiên 6 chữ số
  const randomNum = faker.string.numeric(6);

  return `${emailPrefix}${randomNum}@hcmut.edu.vn`;
};

const createUser = async () => {
  const hashedPassword = await bcrypt.hash('password123', 10);
  const fullName = generateVietnameseName();

  return {
    email: generateStudentEmail(fullName),
    password: hashedPassword,
    full_name: fullName,
    available_a4_pages: faker.number.int({ min: 0, max: 100 }),
    last_modified: faker.date.past(),
    created_at: faker.date.past(),
    updated_at: faker.date.recent()
  };
};

export default createUser;
