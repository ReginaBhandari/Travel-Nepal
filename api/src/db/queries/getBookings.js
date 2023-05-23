export default `
SELECT
    b.id,
    u.name,
    d.destination_name,
    d.price,
    b.start_date,
    b.end_date
FROM bookings b
INNER JOIN users u ON b.booked_by=u.id
LEFT JOIN destination d ON b.destination_id = d.id
order by b.id DESC;
`;
