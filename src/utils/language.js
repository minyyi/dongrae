// src/utils/language.js
// 언어 감지 및 전환 유틸리티

export const getCurrentLanguage = () => {
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    return localStorage.getItem("language") || "ko";
  }

  const hostname = window.location.hostname;
  if (hostname.startsWith("ko.")) return "ko";
  if (hostname.startsWith("en.")) return "en";
  return "ko"; // 기본값
};

export const switchLanguage = (targetLang) => {
  const currentHost = window.location.hostname;
  const protocol = window.location.protocol;
  const pathname = window.location.pathname;
  const search = window.location.search;

  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    localStorage.setItem("language", targetLang);
    window.location.reload();
    return;
  }

  let newHost;
  if (targetLang === "en") {
    newHost = currentHost.replace(/^(ko\.)?/, "en.");
  } else {
    newHost = currentHost.replace(/^(en\.)?/, "ko.");
  }

  const newUrl = `${protocol}//${newHost}${pathname}${search}`;
  window.location.href = newUrl;
};

export const getLanguageText = (koreanText, englishText) => {
  const currentLang = getCurrentLanguage();
  return currentLang === "en" ? englishText : koreanText;
};
