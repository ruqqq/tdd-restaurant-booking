import * as uuid from "uuid";
import { Restaurant } from "./restaurant";
import { restaurantRepository } from "./restaurant-repository";
import { validateTableTotalPaxInput } from "./restaurant-validator";
import { Table } from "./table";
import { tableRepository } from "./table-repository";

class RestaurantService {
  async addTable(restaurantId: string, managerId: string, totalPax: number): Promise<Table> {
    validateTableTotalPaxInput(totalPax);

    const restaurant = await restaurantRepository.getById(restaurantId);
    if (!restaurant) {
      throw new Error("Invalid restaurant id");
    }

    const table: Table = {
      id: uuid.v4(),
      restaurantId: restaurantId,
      createdBy: managerId,
      totalPax: totalPax,
    };
    return await tableRepository.create(table);
  }

  async deleteTable(tableId: string): Promise<void> {
    await tableRepository.delete(tableId);
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
