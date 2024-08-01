import { ReactElement } from "react";

export interface CardProps {
  title: string,
  description: string[],
  text?: string,
  images?: string[],
  classNameSuffix?: string,
}