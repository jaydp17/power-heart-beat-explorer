import { h } from 'preact';
import style from './style.scss';

import Chart from '../../components/chart';
import IsPowerThere from '../../components/IsPowerThere';

export default () =>
  <div class={style.home}>
    <h1>Home</h1>
    <p>This is the Home component.</p>
    <Chart />
    <IsPowerThere />
  </div>;
