# tdd-restaurant-booking

## Background
SoulFood is a popular chain of restaurant with more than 20 outlets across Agropura.
Due to covid-imposed restrictions, they have decided to build an online table booking system for their restaurants for their customers.

## COVID Restrictions
- Vaccinated: 5 pax, children under 12 does not count towards the number
- PET/Recently recovered: 3 pax, no childrens
- Unvaccinated: 2 pax, no childrens

## User Stories

### As a restaurant brand owner, I want to add restaurant outlets so that they can be used on the website by customers and manager

```
Given a restaurant brand owner
When he adds a restaurant outlet
Then the outlet should be visible to restaurant managers and customers
```

### As a restaurant manager, I want to be add tables to my restaurant so that they are available for customers to book

```
Given a restaurant manager
When he adds table to his restaurant
Then the table should be listed for the restaurant
```

### As a restaurant manager, I want to view a listing of all tables in my restaurant so that I can select the table to remove

```
Given a restaurant manager
When he requests to view the tables for the restaurant
Then he would get the list of tables for the restaurant
```

### As a restaurant manager, I want to be remove tables from my restaurant so that they are no longer available for customers to book

```
Given a restaurant manager is on the manager site
When he removes a table from the restaurant
Then the table should no longer be listed for the restaurant
And the existing bookings for the table should remain valid
```

### As a customer, I want to book a table slot so that I can dine-in with my family and friends

```
Given a customer visits the website
Then he should be able to see a list of restaurants

Given a customer is browsing the website
When he chose a restaurant, specify total pax and selects a time slot
Then he should be able to see which tables are available

Given a customer has selected a restaurant, total pax an available time slot
When he chose a table
Then the system will assign the table to him for the slot
And he should be informed of the confirmation of the booking
```

### As a customer, I want to cancel my booking slot so that I can inform the restaurant to release the booking slot

```
Given a customer is on the website to look for his bookings
When he cancels the booking
Then the system should release the table/slot for other customers to book
And he should be informed of the successful cancellation
```
