INSERT INTO new_appointments (student_name, parent_name) VALUES ($1, $2) RETURNING student_name, parent_name;
