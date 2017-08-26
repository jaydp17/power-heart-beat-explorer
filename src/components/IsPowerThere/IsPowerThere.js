import { h } from 'preact';

export default ({ isLoading, hasPower }) =>
  <div>
    {isLoading ? 'Loading...' : ''}
    <br />
    {hasPower ? 'Yes' : 'No'}
  </div>;
