import { h, Component } from 'preact';
import style from './style';

import Chart from '../../components/chart';

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
        <Chart />
      </div>
    );
  }
}
