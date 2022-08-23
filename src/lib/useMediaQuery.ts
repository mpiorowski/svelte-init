export const useMediaQuery = (
  window: Window,
  lg = '1024px',
  md = '760px',
  sm = '640px'
) => {
  const isMediaQueryLg = () => window.matchMedia(`(min-width: ${lg})`).matches;
  const isMediaQueryMd = () => window.matchMedia(`(min-width: ${md})`).matches;
  const isMediaQuerySm = () => window.matchMedia(`(min-width: ${sm})`).matches;
  return {
    isMediaQueryLg,
    isMediaQueryMd,
    isMediaQuerySm,
  };
};
