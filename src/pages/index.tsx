import styles from './index.less';
// @ts-ignore
import { getDate } from '@/utils';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h2>{getDate()}</h2>
    </div>
  );
}
