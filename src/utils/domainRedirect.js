export const setupDomainRedirect = () => {
  const currentDomain = window.location.hostname;
  const currentPath = window.location.pathname;
  const currentSearch = window.location.search;

  if (
    currentDomain === "www.dongraelaw.shop" ||
    currentDomain === "dongraelaw.shop"
  ) {
    window.location.replace(
      `https://ko.dongraelaw.shop${currentPath}${currentSearch}`
    );
    return;
  }
};
