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
  async create(table: Table): Promise<Table> {
    this.tables.push(table);
    return table;
  }
}

export const tableRepository = new TableRepository();
