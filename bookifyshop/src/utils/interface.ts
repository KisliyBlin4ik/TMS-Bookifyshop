import React, { FC, ReactNode } from 'react';

export interface IInput {
  type: 'password' | 'text' | 'file' | 'search';
  placeholder?: string;
  value: string;
  label?: string;
  children?: ReactNode;
  onChange: (value: string) => void;
  onClick?: () => void;
}

export interface IPageTemplate {
  title?: string;
  customClass: string;
  children: ReactNode;
  invisible?: boolean;
}

export interface IFormTemplate extends IPageTemplate {
  id: string;
}

export interface IBooks {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

export interface IBookItem extends IBooks {
  authors: string;
  desc: string;
  error: string;
  isbn10: string;
  language: string;
  pages: string;
  pdf: {
    'Free eBook': string;
  };
  publisher: string;
  rating: string;
  year: string;
}
export interface IAddCart extends IBookItem {
  counter: number;
}
export interface IAddFavorite extends IBookItem {
}

export interface IButton {
  type: 'button' | 'submit' | 'reset';
  children: string | ReactNode;
  customClass?: string;
  onClick?: () => void;
}

export interface ILabelText {
  text1: string;
  text2: string;
  text3?: string | ReactNode;
}
export interface ITabMenu extends ILabelText {
  onChange: (value: number) => void;
}

export interface ICartCounter {
  counter: number;
  isbn13: string;
}

export interface IRating {
  rating: string;
}

export interface IBurgerMenu {
  handleBurger: boolean;
  handleSwitchBurger: () => void;
}

export interface IPagination {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (value: number) => void;
}
