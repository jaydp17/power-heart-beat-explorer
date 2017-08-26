import { h, Component } from 'preact';

import firebase from '../../lib/firebase';
import { getKeysForPastMinutes } from '../../lib/utils';

import IsPowerThere from './IsPowerThere';

export default class IsPowerThereContainer extends Component {
  PAST_MINUTES_TO_CHECK = 5;
  state = {
    isLoading: true,
    powerData: {},
  };

  /**
   * Called when firebase returns the value of a given key
   */
  onValue = (key, value) => {
    this.setState(prevState => {
      console.log({ key, value });
      const powerData = { ...prevState.powerData, [key]: value };
      return {
        ...prevState,
        powerData,
        isLoading: !this.hasAllKeys(powerData),
      };
    });
  };

  /**
   * Helper method to check if all keys have got their data from firebase
   */
  hasAllKeys = powerData => Object.keys(powerData).length === this.PAST_MINUTES_TO_CHECK;

  /**
   * Function that goes through the data fetched from firebase and checks if power is there right now
   */
  hasPower = () => {
    const { powerData } = this.state;
    if (!this.hasAllKeys(powerData)) return false;
  };

  componentDidMount() {
    const keys = getKeysForPastMinutes(5);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      firebase.database().ref(key).once('value').then(value => this.onValue(key, value.val()));
    }
  }

  render(props, { isLoading, powerData }) {
    const hasPower = false;
    return <IsPowerThere isLoading={isLoading} hasPower={hasPower} />;
  }
}
