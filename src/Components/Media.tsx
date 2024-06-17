import { css, type CSSObject, type Interpolation } from "styled-components";

export type Breakpoints = "small" | "large";

export const breakpoints: Record<Breakpoints, string> = {
  small: "@media all and (min-width:360px) and (max-width:767px)",
  large: "@media all and (min-width:768px) and (max-width:1199px)",
};

const Media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<CSSObject>[]
    ) => css`
      ${value} {
        ${css(first, ...(interpolations as Interpolation<any>[]))}
      }
    `,
  };
}, {}) as Record<Breakpoints, any>;

export default Media;
