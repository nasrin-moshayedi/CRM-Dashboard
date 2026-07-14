import type { ReactNode } from "react";
 export default interface ButtonTypes {
    className ?: string;
    children: ReactNode;
    onClick: Function;
 }