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

    document.title = title;

    const dynamicMetas = document.querySelectorAll('meta[data-dynamic="true"]');
    dynamicMetas.forEach((meta) => meta.remove());

    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${baseUrl}${pagePath}` },
      { property: "og:image", content: `${baseUrl}/og-image.jpg` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement("meta");
      if (name) meta.name = name;
      if (property) meta.setAttribute("property", property);
      meta.content = content;
      meta.setAttribute("data-dynamic", "true"); // 나중에 제거하기 위한 표시
      document.head.appendChild(meta);
    });

    return () => {
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
