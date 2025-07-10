// utils/urlCleanup.js
export const cleanUrl = (url) => {
  const urlObj = new URL(url);

  // 제거할 파라미터 목록
  const paramsToRemove = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "fbclid",
    "gclid",
    "sessionid",
    "timestamp",
    "_ga",
    "_gid",
  ];

  paramsToRemove.forEach((param) => {
    urlObj.searchParams.delete(param);
  });

  return urlObj.toString();
};

// 표준 URL 반환 (canonical용)
export const getCanonicalUrl = (pagePath = "/") => {
  const currentLang = getCurrentLanguage();
  const baseUrl =
    currentLang === "en"
      ? "https://en.dongraelaw.shop"
      : "https://ko.dongraelaw.shop";

  return `${baseUrl}${pagePath}`;
};

// 페이지 로드 시 URL 정리 (선택사항)
export const initUrlCleanup = () => {
  const currentUrl = window.location.href;
  const cleanedUrl = cleanUrl(currentUrl);

  if (currentUrl !== cleanedUrl) {
    // 히스토리 교체 (리다이렉트 없이)
    window.history.replaceState(null, "", cleanedUrl);
  }
};
