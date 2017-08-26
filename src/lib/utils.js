import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export function getKeysForPastMinutes(minutes) {
  const now = moment.utc();
  const results = [];
  for (let i = 0; i < minutes; i++) {
    // here haven't switched to dev-powerData prefix as I plan to use the data from prod
    results.push(now.format('[powerData/]YYYY/MM/DD/Z/HH/mm'));
    now.subtract(1, 'minute');
  }
  return results;
}
