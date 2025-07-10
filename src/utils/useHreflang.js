import { useEffect } from "react";
import { getCurrentLanguage } from "./language";

export const useHreflang = (pagePath = "/") => {
  const currentLang = getCurrentLanguage();

  useEffect(() => {
    const existingHreflangs = document.querySelectorAll(
      'link[rel="alternate"]'
    );
    existingHreflangs.forEach((link) => {
      if (link.getAttribute("hreflang")) {
        document.head.removeChild(link);
      }
    });

    const hreflangs = [
      {
        hreflang: "ko",
        href: `https://ko.dongraelaw.shop${pagePath}`,
      },
      {
        hreflang: "en",
        href: `https://en.dongraelaw.shop${pagePath}`,
      },
      {
        hreflang: "x-default",
        href: `https://ko.dongraelaw.shop${pagePath}`,
      },
    ];

    hreflangs.forEach(({ hreflang, href }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hreflang;
      link.href = href;
      document.head.appendChild(link);
    });

    return () => {
      const hreflangLinks = document.querySelectorAll('link[rel="alternate"]');
      hreflangLinks.forEach((link) => {
        if (link.getAttribute("hreflang")) {
          document.head.removeChild(link);
        }
      });
    };
  }, [currentLang, pagePath]);
};
