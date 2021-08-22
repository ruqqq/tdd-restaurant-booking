describe('restaurants', () => {
 describe('restaurant manager can add tables', () => {
   it('should add table to restaurant successfully', () => {
      const restaurant = givenARestaurant();

      const newTable = restaurantService.addTable(restaurant, "manager1", 5);

      expect(newTable.id).toBeDefined();
      expect(newTable.totalPax).toBe(5);
      expect(newTable.restaurantId).toBe(restaurant.id);
      expect(newTable.createdBy).toBe('manager1');
   });
  });
});

async function givenARestaurant(): Promise<Restaurant> {
  return {};
}
