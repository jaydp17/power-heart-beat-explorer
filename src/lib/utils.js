import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export function getKeysForPastMinutes(minutes) {
  // don't check from the current time, as the PI might have not sent the data yet
  const now = moment.utc().subtract(1, 'minute');
  const results = [];
  for (let i = 0; i < minutes; i++) {
    // here haven't switched to dev-powerData prefix as I plan to use the data from prod
    results.push(now.format('[powerData/]YYYY/MM/DD/Z/HH/mm'));
    now.subtract(1, 'minute');
  }
  return results;
}
