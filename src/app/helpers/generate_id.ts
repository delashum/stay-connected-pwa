export const generate_id = (length: number = 10) => {
  let id = '';
  for (let i = 0; i < Math.ceil(length / 10); i++) {
    id += rand_string();
  }
  return id.substr(0, length);
};

const rand_string = () =>
  Math.random()
    .toString(36)
    .slice(2);
