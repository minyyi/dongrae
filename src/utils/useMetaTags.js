import { useEffect } from "react";
import { getCurrentLanguage } from "./language";

const useMetaTags = ({
  titleKo,
  titleEn,
  descriptionKo,
  descriptionEn,
  keywords,
  pagePath = "/",
}) => {
  const currentLang = getCurrentLanguage();

  useEffect(() => {
    const title = currentLang === "en" ? titleEn : titleKo;
    const description = currentLang === "en" ? descriptionEn : descriptionKo;
    const baseUrl =
      currentLang === "en"
        ? "https://en.dongraelaw.shop"
        : "https://ko.dongraelaw.shop";

    // HTML lang 속성 변경
    document.documentElement.lang = currentLang;

    // 페이지 제목 설정
    document.title = title;

    // 기존 동적 메타 태그 제거
    const dynamicMetas = document.querySelectorAll('meta[data-dynamic="true"]');
    dynamicMetas.forEach((meta) => meta.remove());

    // 기존 고정 메타 태그 업데이트
    const updateMetaTag = (selector, content) => {
      const meta = document.querySelector(selector);
      if (meta) meta.content = content;
    };

    // 기존 태그 업데이트
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[name="keywords"]', keywords);
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:image"]', `${baseUrl}/og-image.jpg`);

    // 추가 메타 태그들 (동적 생성)
    const additionalMetaTags = [
      { property: "og:url", content: `${baseUrl}${pagePath}` }, // 언어별 동적 생성
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${baseUrl}/og-image.jpg` },
    ];

    additionalMetaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement("meta");
      if (name) meta.name = name;
      if (property) meta.setAttribute("property", property);
      meta.content = content;
      meta.setAttribute("data-dynamic", "true");
      document.head.appendChild(meta);
    });

    return () => {
      // 컴포넌트 언마운트 시 동적 태그만 정리
      const dynamicMetas = document.querySelectorAll(
        'meta[data-dynamic="true"]'
      );
      dynamicMetas.forEach((meta) => meta.remove());
    };
  }, [
    currentLang,
    titleKo,
    titleEn,
    descriptionKo,
    descriptionEn,
    keywords,
    pagePath,
  ]);
};

export default useMetaTags;
