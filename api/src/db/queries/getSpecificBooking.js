export default `
SELECT
    b.booked_by ,
    b.id,
    b.start_date,
    b.end_date,
    avg(d.price)  as price,
    string_agg(d.destination_name,',')  as destination_name
FROM bookings b
LEFT JOIN destination d ON b.destination_id = d.id
WHERE b.booked_by=:bookedBy
group by b.id
order by b.id DESC;
`;
