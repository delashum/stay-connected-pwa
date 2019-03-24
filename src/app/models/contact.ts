import { generate_id } from '../helpers';

export interface Contact {
  id: string;
  name: string;
  group: string;
  last_contacted: number;
  frequency: number;
}

export const create_contact = (name: string, frequency: number): Contact => {
  return { name, group: 'default', last_contacted: 0, id: generate_id(), frequency };
};
