// declaration.d.ts
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
// declare module '*.scss' {
//   interface IClassNames {
//       [className: string]: string
//   }
//   const classNames: IClassNames;
//   export = classNames;
// }

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare module '*.svg' {
  import React from 'react';
  const content: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default content;
}