import { faker } from "@faker-js/faker";

export const createFakeContact = () => ({
  id: faker.datatype.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});
