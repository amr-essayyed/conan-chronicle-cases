const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Read the source HTML file
const html = fs.readFileSync(path.join(__dirname, '../src/data/page.txt'), 'utf8');
const $ = cheerio.load(html);

const episodes = [];
const seenNumbers = new Set();

// Process each episode row
$('table.wikitable tbody tr').each((i, row) => {
  const cells = $(row).find('td');
  if (cells.length < 8) return; // Skip header rows

  const jpnNumber = $(cells[0]).text().trim();
  const intNumber = $(cells[1]).text().trim();
  const title = $(cells[2]).text().trim();
  const airDate = $(cells[3]).text().trim();
  const mangaSource = $(cells[6]).text().trim();

  // Skip if no episode number or if we've seen this number before
  if (!jpnNumber || jpnNumber === 'Jpn#' || seenNumbers.has(jpnNumber)) return;
  seenNumbers.add(jpnNumber);

  // Determine if it's manga or filler
  const type = mangaSource.includes('TV Original') ? 'filler' : 'manga';

  // Create episode object
  const episode = {
    number: parseInt(jpnNumber),
    title: title,
    airDate: formatDate(airDate),
    type: type,
    synopsis: '', // We'll need to get this from another source
    link: `https://www.detectiveconanworld.com/wiki/${encodeURIComponent(title.replace(/\s+/g, '_'))}`,
    watchLink: `https://aniwatchtv.to/watch/case-closed-${parseInt(jpnNumber)}?ep=${138372 + parseInt(jpnNumber)}`
  };

  episodes.push(episode);
});

// Sort episodes by number
episodes.sort((a, b) => a.number - b.number);

// Generate TypeScript file
const tsContent = `export interface Episode {
  number: number;
  title: string;
  airDate: string;
  type: 'manga' | 'filler';
  synopsis: string;
  storyArc?: string;
  link: string;
  watchLink: string;
}

export const episodes: Episode[] = ${JSON.stringify(episodes, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/episodes.ts'), tsContent);

// Helper function to format date
function formatDate(dateStr) {
  const [month, day, year] = dateStr.split(' ');
  const months = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04',
    'May': '05', 'June': '06', 'July': '07', 'August': '08',
    'September': '09', 'October': '10', 'November': '11', 'December': '12'
  };
  // Remove any commas and pad single digit days
  const cleanDay = day.replace(',', '').padStart(2, '0');
  return `${year}-${months[month]}-${cleanDay}`;
} 