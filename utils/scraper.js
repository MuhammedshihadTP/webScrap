const axios = require('axios');
const cheerio = require('cheerio');

exports.scrapeWebsite = async (domain) => {
  const response = await axios.get(domain);
  const $ = cheerio.load(response.data);

  const wordCount = $('body').text().split(/\s+/).filter(Boolean).length;
  const media = [];
  $('img').each((_, el) => media.push($(el).attr('src')));
  $('video').each((_, el) => media.push($(el).attr('src')));

  return { wordCount, media };
};
