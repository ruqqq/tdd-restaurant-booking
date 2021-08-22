import { Restaurant } from "./restaurant";
import { Table } from "./table";
import { tableRepository } from "./table-repository";

class RestaurantService {
  async addTable(restaurant: Restaurant, managerId: string, totalPax: number): Promise<Table> {
    const table: Table = {
      id: '1234',
      restaurantId: restaurant.id,
      createdBy: managerId,
      totalPax: totalPax,
    };
    return await tableRepository.create(table);
  }
}

export const restaurantService = new RestaurantService();
