import React, { FC, ReactNode } from 'react';

export interface IInput {
  type: 'password' | 'text' | 'file' | 'search';
  placeholder?: string;
  value: string;
  label?: string;
  onChange: (value: string) => void;
}

export interface IPageTemplate {
  title?: string;
  customClass: string;
  children: ReactNode;
}

export interface IFormTemplate extends IPageTemplate {
  id: string;
}

export interface IPosts {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

export interface IPost extends IPosts {
  authors: string;
  desc: string;
  error: string;
  isbn10: string;
  language: string;
  pages: string;
  pdf: {
    FreeeBook: string;
  };
  publisher: string;
  rating: string;
  year: string;
}
export interface IAddCart extends IPosts {
  authors: string;
  year: string;
  isbn10: string;
}

export interface IButton {
  type: 'button' | 'submit';
  content: string;
  onClick?: () => {};
}

export interface ILabelText {
  text1: string;
  text2: string;
  text3?: string;
  onChange: (value: number) => void;
}
