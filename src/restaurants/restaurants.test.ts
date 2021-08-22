import { Restaurant } from "./restaurant";
import { restaurantService } from "./restaurant-service";

describe('restaurants', () => {
 describe('restaurant manager can add tables', () => {
   it('should add table to restaurant successfully', async () => {
      const restaurant = await givenARestaurant();

      const newTable = await restaurantService.addTable(restaurant, "manager1", 5);

      expect(newTable.id).toBeDefined();
      expect(newTable.totalPax).toBe(5);
      expect(newTable.restaurantId).toBe(restaurant.id);
      expect(newTable.createdBy).toBe('manager1');
   });
  });
});

async function givenARestaurant(): Promise<Restaurant> {
  return {
    id: "restaurant1",
  };
}
