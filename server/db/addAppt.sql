INSERT INTO my_appts(student_name, appt_date, appt_time, hours)
VALUES($1, $2, $3, $4);
SELECT * FROM my_appts;