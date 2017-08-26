import { h } from 'preact';
import style from './style.scss';

import IsPowerThere from '../../components/IsPowerThere';

export default () =>
  <div class={style.home}>
    <h1>Home</h1>
    <p>This is the Home component.</p>
    <IsPowerThere />
  </div>;
