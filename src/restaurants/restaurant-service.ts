import { Restaurant } from "./restaurant";
import { restaurantRepository } from "./restaurant-repository";
import { Table } from "./table";
import { tableRepository } from "./table-repository";

class RestaurantService {
  async addTable(restaurantId: string, managerId: string, totalPax: number): Promise<Table> {
    const table: Table = {
      id: '1234',
      restaurantId: restaurantId,
      createdBy: managerId,
      totalPax: totalPax,
    };
    return await tableRepository.create(table);
  }

  async getRestaurant(id: string): Promise<Restaurant | undefined> {
    const tables = await tableRepository.getByRestaurantId(id);
    const restaurant = await restaurantRepository.getById(id);
    return restaurant ? {
      ...restaurant,
      tables,
    } : undefined;
  }
}

export const restaurantService = new RestaurantService();
