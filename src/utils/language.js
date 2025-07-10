export const getCurrentLanguage = () => {
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    return localStorage.getItem("language") || "ko";
  }

  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  if (hostname.startsWith("en.")) {
    return "en";
  }
  // 기본값을 한국어로 (ko 도메인 또는 기타 모든 경우)
  return "ko";
};

// 언어 변경 함수
export const switchLanguage = (targetLang) => {
  const currentPath = window.location.pathname;
  const currentSearch = window.location.search;

  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    localStorage.setItem("language", targetLang);
    window.location.reload();
    return;
  }

  if (targetLang === "en") {
    window.location.href = `https://en.dongraelaw.shop${currentPath}${currentSearch}`;
  } else {
    window.location.href = `https://ko.dongraelaw.shop${currentPath}${currentSearch}`;
  }
};

// export const switchLanguage = (targetLang) => {
//   const currentHost = window.location.hostname;
//   const protocol = window.location.protocol;
//   const pathname = window.location.pathname;
//   const search = window.location.search;

//   if (
//     window.location.hostname === "localhost" ||
//     window.location.hostname === "127.0.0.1"
//   ) {
//     localStorage.setItem("language", targetLang);
//     window.location.reload();
//     return;
//   }

//   let newHost;
//   if (targetLang === "en") {
//     newHost = currentHost.replace(/^(ko\.)?/, "en.");
//   } else {
//     newHost = currentHost.replace(/^(en\.)?/, "ko.");
//   }

//   const newUrl = `${protocol}//${newHost}${pathname}${search}`;
//   window.location.href = newUrl;
// };

export const getLanguageText = (koreanText, englishText) => {
  const currentLang = getCurrentLanguage();
  return currentLang === "en" ? englishText : koreanText;
};
