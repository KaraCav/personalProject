INSERT INTO users (auth_id, name) VALUES ($1, $2) RETURNING auth_id, name;
