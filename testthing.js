
const axios = require('axios');

/// YOUR ROUTES GO HERE!
axios({
    url: "https://api-v3.igdb.com/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': "ff39cd10fb80e5920517d94fa9b2f558"
    },
    data: "fields name; limit 10;"  })
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.error(err);
  });


