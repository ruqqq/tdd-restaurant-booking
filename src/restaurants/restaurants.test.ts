import { tableRepository } from "./table-repository";
import { RestaurantEntity, restaurantRepository } from "./restaurant-repository";
import { restaurantService } from "./restaurant-service";
import * as uuid from "uuid";

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

   it('should generate uuid v4 for table id', async () => {
      const restaurantEntity = await givenARestaurant();

      const table = await restaurantService.addTable(restaurantEntity.id, "manager1", 5);

      expect(uuid.validate(table.id)).toBeTruthy();
      expect(uuid.version(table.id)).toBe(4);
   });

   it('should add table to restaurant', async () => {
      const restaurantEntity = await givenARestaurant();

      const table = await restaurantService.addTable(restaurantEntity.id, "manager1", 5);

      const restaurant = (await restaurantService.getRestaurant(restaurantEntity.id))!;
      expect(restaurant.tables.length).toBe(1);
      expect(restaurant.tables[0]).toBe(table);
   });

   it('should throw error if restaurant is not found', async () => {
      expect(
        restaurantService.addTable("invalidId", "manager1", 5)
      ).rejects.toThrow("Invalid restaurant id");
   });

   describe('validations', () => {
     it('totalPax should not be 0', async () => {
      const restaurantEntity = await givenARestaurant();

      expect(
        restaurantService.addTable(restaurantEntity.id, "manager1", 0)
      ).rejects.toThrow("totalPax should not be 0");
     });

     it('totalPax should not be less than 0', async () => {
      const restaurantEntity = await givenARestaurant();

      expect(
        restaurantService.addTable(restaurantEntity.id, "manager1", -1)
      ).rejects.toThrow("totalPax should not be < 0");
     });
   });
  });
});

async function givenARestaurant(): Promise<RestaurantEntity> {
  return await restaurantRepository.create({
    id: "restaurant1",
  });
}
