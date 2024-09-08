import { JSX } from "preact/jsx-runtime";

export type ButtonProps = {
  id?: string;
  className: string;
  onClick: () => void;
  text: string;
  icon?: string | JSX.Element;
};

export type ErrorProps = {
  title: string;
  text: string;
};

export type FooterProps = {
  nameSite: string;
  copyright: string;
};

export type LinkItem = {
  to: string;
  className: string | ((nav: { isActive: boolean }) => string);
  text: string;
};

export type HeaderProps = {
  links: LinkItem[];
};

export type ImageProps = {
  src: string;
  alt: string;
};

export type InputProps = {
  type: string;
  placeholder: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};