/**
 * Delete existing entries and seed values for `destinations`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('destination')
    .del()
    .then(() => {
      return knex('destination').insert([
        {
          destination_name: 'Kathmandu',
          description:
            'Kathmandu, the largest city of Nepal, is the political as well as cultural capital of the country. Kathmandu is a city where ancient traditions rub shoulders with the latest technological advances. However, it is the grandeur of the past that enchants the visitor whose gaze may linger on an exquisitely carved wooden window frame, an 18th century bronze sculpture or the spiritually uplifting temple or stupa. Like any big city, Kathmandu has seen rapid expansion in the last decade, but despite the hustle and bustle so typical of metropolitan cities, its people remain as refreshingly friendly as ever. Retaining its ancient traditions, Kathmandu is blessed by a Living Goddess and is enriched by endless ceremonial processions and events that take to the streets every now and then with throngs of devotees seeking blessings. These religious festivals are steeped in legends and are quite a spectacle with chariot processions and masked dancers often possessed by the spirits of deities. ',
          price: '3000',
        },
        {
          destination_name: 'Chitwan',
          description:
            'Chitwan literally means “heart of the jungle”. The popular Inner Terai valley gets its name from Chitrasen, the Tharu King, who once ruled here. In the southwest corner of Bagmati Province, Chitwan lies between foothills of the Himalaya, the Mahabharat and Siwalik ranges. The region called Chitra Ban in earlier references used to be dense forest abounding in wild animals and resorted by recluse sages meditating deep in the forests.In recent years Chitwan National Park tops the list of things to do in Asia. It is an exciting jungle experience with - jungle safaris, birdwatching, canoe rides and numerous other nature and jungle activities. While the jungles are teeming with wild animals like tigers, leopards and rhinos, along the marshes and rivers are gharial and marsh mugger crocodiles basking in the sun. ',
          price: '4000',
        },
        {
          destination_name: 'Bandipur',
          description:
            'The hilltop settlement of Bandipur, predominantly a Newar town with its age-old flavor still intact is well preserved and invites travelers to experience its unique offerings: rich hill culture, mountain views, and hiking.  Bandipur has retained its age-old cultural attributes - temples, shrines, sacred caves, innumerable festivals, and a Newari architecture. Popular attractions of Bandipur are the hills that are ideal for hiking along trails that pass through tribal villages, verdant forests, and hilltop shrines that once doubled as forts; it is also the home to Asia\'s second largest and Nepal\'s largest cave Siddha Gufa; Bandipur Tundikhel; Thani Mai Temple located at the top of the hill that provides the visitors with a stunning 360 degree view of the town of Bandipur, Annapurna range and the hills that surround it.',
          price: '3000',
        },
        {
          destination_name: 'Pokhara',
          description:
            'Pokhara\'s tranquil beauty has been the subject of inspiration for many travel writers. Its pristine air, spectacular backdrop of snowy peaks, blue lakes and surrounding greenery make it \'the jewel in the Himalaya\', a place of remarkable natural disposition. With the magnificent Annapurna range forming the backdrop and the serenity of the Cluster of 9 Lakes with three major ones - Phewa, Rupa and Begnas - Pokhara is a great destination for a weekend getaway as well as a long relaxing holiday. Pokhara Valley, gateway to the Annapurna region where many a trekker finds his Shangri-la, sits high on the list of \'must visit\' places in Nepal.Pokhara once lay on the important trade route between India and Tibet. To this day, mule trains set up camps on the city outskirts, bringing goods from remote Himalayan regions including Mustang. Gurungs and Magars, who have earned world-wide fame as fierce Gurkha warriors, are predominant here. Thakalis, indigenous of the Thak Khola region of Mustang, are known for their entrepreneurship and run tea houses along the trek routes in the Annapurna region. The Pokhara is best known for the stunning view of the Annapurna range. It is perhaps one of the few places on earth from where mountains above 6,000 m can be seen unobstructed from an altitude of 800 m within the distance of 28 km. ',
          price: '5000',
        },
        {
          destination_name: 'Everest',
          description:
            'The Everest region in Nepal is more than just climbing and trekking, it is a life-changing experience and some see it as a journey close to achieving Nirvana. Located in the northeastern province of Nepal, this region is in a world of its own with vast glaciers, icefalls, the highest mountains, deep valleys, precarious settlements, and hardy people challenging the harshest conditions thrown at them by nature in the thin air of high altitude.Passing through legendary Sherpa villages, the trek is a mix of deep cultural and spiritual experiences and physical challenges that test your strength and endurance. Buddhist lamas, monks and nuns led by Rinpoches (reincarnate at mas) serve the predominantly Sherpa communities from their gompas (monasteries).The journey to Everest or Everest Base Camp begins with a dramatic flight from Kathmandu to Lukla, after which you hike up the Everest region to reach your destination in the Himalayas. However, for die-hard lovers of trekking, there is another switchback starting from Jiri through the mid-hills of Solu, an ethnically diverse section of the trek rich',
          price: '10000',
        },
        {
          destination_name: 'Lumbini',
          description:
            'Lumbini is the Buddha\'s birthplace, one of the world\'s most important spiritual sites and attracts Buddhist pilgrims from around the world. Today you can visit over twenty-five Buddhist monasteries built by diverse countries from Vietnam to France, study Buddhism, meditate and visit the birthplace within the sacred Mayadevi Gardens. Mayadevi Temple is the most sacred site in the Lumbini Garden where archaeologists have identified the exact spot where Lord Buddha was born. Inscriptions on the Ashoka Pillar nearby also refer to the spot as his birthplace. It is said that the newly born Prince Siddhartha (later became the Buddha) took his first seven steps and delivered his peace message to humanity here.The birth took place in the beautiful Sal grove, which is now the focal point of the Lumbini Garden. Mayadevi, the Queen of Shakya King Suddhodhana of Kapilvastu, while passing through the Lumbini Garden, on the day of  Baishakha Purnima (full moon day of May in 623 BC) took a bath in the the Sacred Pond Pushkarini and soon after gave birth to Prince Siddhartha.  ',
          price: '4000',
        },
      ]);
    });
}
