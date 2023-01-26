import { Poppins, Kanit } from '@next/font/google';
import localFont from '@next/font/local';

export const poppins = Poppins({
  weight: ['100', '400'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const kanit = Kanit({
  weight: ['100', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const bustinJieber = localFont({
  src: './BustinJieber.otf',
  display: 'swap',
});
