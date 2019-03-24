import { generate_id } from '../helpers';

export interface ContactGroup {
  id: string;
  name: string;
}

export const create_group = (name: string): ContactGroup => {
  return { name, id: generate_id() };
};
