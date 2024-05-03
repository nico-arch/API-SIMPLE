# API SIMPLE: v1 Node.js API

## Description
This Node.js API (v1) serves as the backend for a React.js project, providing endpoints to manage users. It allows you to retrieve all users, add a new user, get a user by ID, update a user, and delete a user.

## React.js Project Link
[SIMPLE-CLIENT Project](https://github.com/nico-arch/SIMPLE-CLIENT)

## Endpoints

### Get All Users
- **Method:** `GET`
- **Endpoint:** `{{url}}/v1/user/all`
- **Description:** Retrieves all users stored in the database.
- **Example Response:**
```json
{
    "status": true,
    "users": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "city": "New York",
            "country": "USA"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane@example.com",
            "city": "London",
            "country": "UK"
        },
        {
            "id": 3,
            "name": "Carlos Ramirez",
            "email": "carlos@example.com",
            "city": "Mexico City",
            "country": "Mexico"
        }
    ]
}
```

### Add a User
- **Method:** `POST`
- **Endpoint:** `{{url}}/v1/user/add`
- **Description:** Adds a new user to the database.
- **Example Request Body:**
```json
{
    "name": "Another User",
    "email": "anotheruser@example.com",
    "city": "Petion City",
    "country": "A country"
}
```
- **Required Fields:** `name`, `email`, `city`, `country`

### Get a User by ID
- **Method:** `GET`
- **Endpoint:** `{{url}}/v1/user/get/:id`
- **Description:** Retrieves a user by their ID.
- **Example Request:** `{{url}}/v1/user/get/1`
- **Example Response:**
```json
{
    "status": true,
    "user": {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "city": "New York",
        "country": "USA"
    }
}
```
- **Required Parameter:** `id`

### Update a User by ID
- **Method:** `PUT`
- **Endpoint:** `{{url}}/v1/user/update/:id`
- **Description:** Updates a user's information based on their ID.
- **Update Schema:** Refer to the `updateUser` schema for validation details.
- **Required Parameter:** `id`
- **Required Fields:** `name`, `city`, `country`

### Delete a User by ID
- **Method:** `DELETE`
- **Endpoint:** `{{url}}/v1/user/delete/:id`
- **Description:** Deletes a user from the database based on their ID.
- **Required Parameter:** `id`

## Contributing
Feel free to contribute to this project by reporting bugs, suggesting enhancements, or submitting pull requests.

## License
This project is licensed under the MIT License.
