import { ReactElement } from "react";

export interface CardProps {
  title: string,
  description: string,
  text?: string,
  image?: string,
  classNameSuffix?: string,
}