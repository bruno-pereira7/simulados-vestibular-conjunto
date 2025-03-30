export interface ICrud<T, ID> {
  create: (data: Partial<T>) => Promise<ID>;
  delete: (id: ID) => Promise<number>;
  findAll: () => Promise<Array<Partial<T>>>;
  findOne: (id: ID) => Promise<Partial<T> | null>;
  update: (id: ID, data: T) => Promise<number>;
}
