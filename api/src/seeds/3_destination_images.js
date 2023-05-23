/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('destination_images')
    .del()
    .then(() => {
      return knex('destination_images').insert([
        {
          image_url:
            'https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2F0aG1hbmR1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          destination_id: 1,
        },
        {
          image_url:
            'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2F0aG1hbmR1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          destination_id: 1,
        },
        {
          image_url:
            'https://images.unsplash.com/photo-1579863834020-2a9366e128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          destination_id: 2,
        },
        {
          image_url:
            'https://images.unsplash.com/photo-1622599357169-7fb71842c008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          destination_id: 2,
        },
        {
          image_url:
            'https://images.unsplash.com/photo-1641720370581-71cfdf96e7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          destination_id: 3,
        },
        {
          image_url:
            'https://images.unsplash.com/photo-1540883214770-08e60a9bfd97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFuZGlwdXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=870&q=80',
          destination_id: 3,
        },
        {
          image_url:
            'https://images.unsplash.com/photo-1576948187290-457c015b3bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          destination_id: 4,
        },
        {
          image_url:
            'https://images.unsplash.com/photo-1540961018629-a53dfce2fb66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          destination_id: 4,
        },
        {
          image_url:
            'https://images.unsplash.com/photo-1561355167-4eac6650cbeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGV2ZXJlc3R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
          destination_id: 5,
        },
        {
          image_url:
            'https://cdn.pixabay.com/photo/2019/12/13/08/21/gokyo-ri-4692458_960_720.jpg',
          destination_id: 5,
        },
        {
          image_url:
            'https://images.unsplash.com/photo-1616166831783-f239fea49bdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bHVtYmluaXxlbnwwfDB8MHx8&auto=format&fit=crop&w=870&q=80',
          destination_id: 6,
        },
        {
          image_url:
            'https://images.unsplash.com/photo-1609229697690-19be28cbd055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          destination_id: 6,
        },
      ]);
    });
}
