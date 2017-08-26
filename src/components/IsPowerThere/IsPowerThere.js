import { h } from 'preact';

import BodyColor from '../../components/BodyColor';
import style from './style.scss';

export default ({ isLoading, hasPower }) => {
  const emojiCodes = {
    bulb: '1f4a1',
    candle: '1f56f',
    hourglass: '23f3',
  };

  const currentEmoji = hasPower ? emojiCodes.bulb : emojiCodes.candle;
  const currentText = hasPower ? 'Yes' : 'No';

  const loadingView = isLoading
    ? <div>
        <img
          class={style.loadingImg}
          src={`https://twemoji.maxcdn.com/2/svg/${emojiCodes.hourglass}.svg`}
          height="150"
        />
        <div class={style.loadingText}>Loading…</div>
      </div>
    : null;

  const actualView = isLoading
    ? null
    : <div>
        <img src={`https://twemoji.maxcdn.com/2/svg/${currentEmoji}.svg`} height="350" />
        <div class={hasPower ? style.statusText : style.statusTextOff}>
          {currentText}
        </div>
      </div>;

  return (
    <BodyColor isDark={!isLoading && !hasPower}>
      <div class={style.container}>
        {isLoading ? loadingView : actualView}
      </div>
    </BodyColor>
  );
};
