declare module "*.scss" {
  const classNames: { [key: string]: string };
  export default classNames;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  import React from "react"
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export { ReactComponent, src }
  export default src;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare const __IS__DEV__: boolean;

declare namespace NodeJS {
  export interface ProcessEnv {
    API_KEY_YMAP: string;
    API_BASE_PATH: string;
  }
}