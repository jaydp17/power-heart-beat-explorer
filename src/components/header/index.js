import { h } from 'preact';
// import { Link } from 'preact-router/match';
import style from './style.scss';

export default () =>
  <header class={style.header}>
    <h1>Power HeartBeat Explorer</h1>
    {/* <nav>
      <Link activeClassName={style.active} href="/">
        Home
      </Link>
      <Link activeClassName={style.active} href="/profile">
        Me
      </Link>
      <Link activeClassName={style.active} href="/profile/john">
        John
      </Link>
    </nav> */}
  </header>;
