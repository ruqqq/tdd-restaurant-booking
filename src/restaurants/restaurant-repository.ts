export type RestaurantEntity = {
  id: string;
}

class RestaurantRepository {
  private restaurants: RestaurantEntity[];

  constructor() {
    this.restaurants = [];
  }
  async getById(id: string): Promise<RestaurantEntity | undefined> {
    return this.restaurants.find(r => r.id === id);
  }
  async create(restaurant: RestaurantEntity): Promise<RestaurantEntity> {
    this.restaurants.push(restaurant);
    return restaurant
  }

  async deleteAll(): Promise<void> {
    this.restaurants = [];
  }
}

export const restaurantRepository = new RestaurantRepository();
