SELECT * FROM users WHERE auth_id = $1;
INSERT INTO "users" (auth_Id, name) VALUES ($1, $2) RETURNING auth_id, name;
