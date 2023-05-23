export default `
select
    d.id,
    d.destination_name,
    d.price,
    d.description,
    STRING_AGG(di.image_url,',') AS images
from destination d left join destination_images di on d.id = di.destination_id
WHERE d.id=:destinationId
GROUP BY d.id,
       d.destination_name,
       d.price,
       d.description
order by d.id;
`;
