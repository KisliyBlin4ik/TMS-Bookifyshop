import React, { FC, ReactNode } from 'react';

export interface IInput {
  type: 'password' | 'text' | 'file' | 'search';
  placeholder?: string;
  value: string;
  label?: string;
  onChange: (value: string) => void;
}

export interface IPageTemplate {
  title: string;
  children: ReactNode;
}