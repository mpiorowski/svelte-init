export const useMediaQuery = (
    browser: boolean,
    lg = '1024px',
    md = '760px',
    sm = '640px'
) => {
    const isMediaQueryLg =
        browser && window.matchMedia(`(min-width: ${lg})`).matches;
    const isMediaQueryMd =
        browser && window.matchMedia(`(min-width: ${md})`).matches;
    const isMediaQuerySm =
        browser && window.matchMedia(`(min-width: ${sm})`).matches;
    return {
        isMediaQueryLg,
        isMediaQueryMd,
        isMediaQuerySm,
    };
};
