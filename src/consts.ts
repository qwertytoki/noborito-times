export const SITE_TITLE = '登戸タイムズ';
export const SITE_TAGLINE = '登戸・向ヶ丘遊園に密着した地域情報サイト';
export const SITE_DESCRIPTION =
  '登戸・向ヶ丘遊園エリアに密着した情報サイトです。グルメ情報から開店・閉店、街づくりの動きまで、登戸の今がわかる情報を発信します。';

export const CATEGORIES = {
  gourmet: 'グルメ',
  'open-close': '開店・閉店',
  life: 'ライフ',
  living: '住まい',
  event: 'イベント',
  kosodate: '子育て',
  machizukuri: '交通・街づくり',
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

/** base パス（GitHub Pages のサブパス）を付けた内部リンクを作る */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

export function formatDate(date: Date): string {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}
