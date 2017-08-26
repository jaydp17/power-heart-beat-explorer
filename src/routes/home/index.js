import { h } from 'preact';
import style from './style.scss';

import IsPowerThere from '../../components/IsPowerThere';

export default () =>
  <div class={style.home}>
    <IsPowerThere />
  </div>;
