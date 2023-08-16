import rankingYear from './ranking_year.js';

const chartContainer = document.querySelector('.ranking__container');

const uniqueYears = new Set();

rankingYear.forEach((data) => {
  uniqueYears.add(data.year);
});

uniqueYears.forEach((year) => {
  const yearCircle = document.createElement('div');
  yearCircle.classList.add('ranking__circle');
  yearCircle.dataset.year = year;

  const yearText = document.createElement('span');
  yearText.classList.add('ranking__circle-text');
  yearText.textContent = year;

  const rankedCountries = document.createElement('div');
  rankedCountries.classList.add('ranking__circle-countries');

  const topCountries = rankingYear
    .filter((entry) => entry.year === year && entry.fifa_rank <= 3)
    .map((entry) => entry.team);

  topCountries.forEach((country) => {
    const countryElement = document.createElement('div');
    countryElement.classList.add('ranking__circle-country');
    countryElement.textContent = country;
    rankedCountries.appendChild(countryElement);
  });

  yearCircle.appendChild(yearText);
  yearCircle.appendChild(rankedCountries);
  chartContainer.appendChild(yearCircle);
});

const yearCircles = document.querySelectorAll('.ranking__circle');

yearCircles.forEach((circle) => {
  circle.addEventListener('mouseover', () => {
    const rankedCountries = circle.querySelector('.ranking__circle-countries');
    rankedCountries.style.display = 'block';
  });

  circle.addEventListener('mouseout', () => {
    const rankedCountries = circle.querySelector('.ranking__circle-countries');
    rankedCountries.style.display = 'none';
  });
});
