import { tableRepository } from "./table-repository";
import { RestaurantEntity, restaurantRepository } from "./restaurant-repository";
import { restaurantService } from "./restaurant-service";

describe('restaurants', () => {
 describe('restaurant manager can add tables', () => {
   beforeEach(async () => {
     await restaurantRepository.deleteAll();
     await tableRepository.deleteAll();
   });

   it('should insert table to repository', async () => {
      const restaurantEntity = await givenARestaurant();

      const table = await restaurantService.addTable(restaurantEntity.id, "manager1", 5);

      expect(table.id).toBeDefined();
      expect(table.totalPax).toBe(5);
      expect(table.restaurantId).toBe(restaurantEntity.id);
      expect(table.createdBy).toBe('manager1');
   });

   it('should add table to restaurant', async () => {
      const restaurantEntity = await givenARestaurant();

      const table = await restaurantService.addTable(restaurantEntity.id, "manager1", 5);

      const restaurant = (await restaurantService.getRestaurant(restaurantEntity.id))!;
      expect(restaurant.tables.length).toBe(1);
      expect(restaurant.tables[0]).toBe(table);
   });
  });
});

async function givenARestaurant(): Promise<RestaurantEntity> {
  return await restaurantRepository.create({
    id: "restaurant1",
  });
}
