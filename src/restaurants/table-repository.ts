import { Table } from "./table";

class TableRepository {
  private tables: Table[];

  constructor() {
      this.tables = [];
  }
  async getAll(): Promise<Table[]> {
    return this.tables;
  }
  async getById(id: string): Promise<Table | undefined> {
    return this.tables.find(r => r.id === id);
  }

  async getByRestaurantId(id: string): Promise<Table[]> {
    return this.tables.filter(r => r.restaurantId === id);
  }

  async create(table: Table): Promise<Table> {
    this.tables.push(table);
    return table;
  }

  async deleteAll(): Promise<void> {
    this.tables = [];
  }
}

export const tableRepository = new TableRepository();
