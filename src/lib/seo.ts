import type { Metadata } from "next";
import { profileData } from "@/data/profile";
import { blogPosts } from "@/data/blog";

export const siteUrl = "https://avanesov-ux.ru";
export const siteName = "avanesov-ux.ru";
export const socialImage = "/images/social_img.png";

export const homeMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Юрий Аванесов — UX/UI Designer | B2B корпоративные интерфейсы",
  description:
    "Системный UX/UI-дизайн для корпоративных продуктов. Архитектура интерфейсов, логика взаимодействия и формирование дизайн-кода.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Юрий Аванесов — UX/UI Designer",
    description: "UX/UI-дизайн B2B-продуктов, корпоративных интерфейсов и инженерных систем.",
    images: [
      {
        url: socialImage,
        width: 1731,
        height: 909,
        alt: "Юрий Аванесов — UX/UI Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Юрий Аванесов — UX/UI Designer",
    description: "UX/UI-дизайн B2B-продуктов, корпоративных интерфейсов и инженерных систем.",
    images: [socialImage],
  },
};

export const portfolioMetadata: Metadata = {
  title: "Портфолио UX/UI-дизайнера — Юрий Аванесов",
  description:
    "Кейсы Юрия Аванесова по UX/UI и продуктовому дизайну B2B-интерфейсов: энергетика, банки, HR, аналитика и внутренние инструменты.",
  alternates: {
    canonical: "/portfolio/",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/portfolio/`,
    siteName,
    title: "Портфолио UX/UI-дизайнера — Юрий Аванесов",
    description:
      "Кейсы по продуктовому дизайну B2B-интерфейсов: энергетика, банки, HR, аналитика и внутренние инструменты.",
    images: [
      {
        url: socialImage,
        width: 1731,
        height: 909,
        alt: "Портфолио UX/UI-дизайнера — Юрий Аванесов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Портфолио UX/UI-дизайнера — Юрий Аванесов",
    description:
      "Кейсы по продуктовому дизайну B2B-интерфейсов: энергетика, банки, HR, аналитика и внутренние инструменты.",
    images: [socialImage],
  },
};

export const blogMetadata: Metadata = {
  title: "Блог о UX/UI и продуктовом дизайне — Юрий Аванесов",
  description:
    "Экспертные статьи Юрия Аванесова о UX/UI, продуктовой логике, B2B-интерфейсах, сложных системах и дизайн-процессе.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/blog/`,
    siteName,
    title: "Блог о UX/UI и продуктовом дизайне — Юрий Аванесов",
    description:
      "Экспертные материалы о продуктовой работе, интерфейсах для сложных систем и коммуникации внутри команды.",
    images: [
      {
        url: socialImage,
        width: 1731,
        height: 909,
        alt: "Блог о UX/UI и продуктовом дизайне — Юрий Аванесов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Блог о UX/UI и продуктовом дизайне — Юрий Аванесов",
    description:
      "Экспертные материалы о продуктовой работе, интерфейсах для сложных систем и коммуникации внутри команды.",
    images: [socialImage],
  },
};

export function getBlogPostMetadata(slug: string): Metadata {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Статья не найдена — Юрий Аванесов",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `${siteUrl}/blog/${post.slug}/`;

  return {
    title: `${post.title} — Юрий Аванесов`,
    description: post.description,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      type: "article",
      url,
      siteName,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [profileData.name],
      tags: post.tags,
      images: [
        {
          url: socialImage,
          width: 1731,
          height: 909,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [socialImage],
    },
  };
}

const caseSeoBySlug: Record<
  string,
  {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  }
> = {
  ead: {
    title: "Электронный архив документов — UX/UI кейс банковской системы",
    description:
      "Корпоративный архив для хранения, поиска и управления банковскими документами: роли, метаданные, досье клиентов и журнал активности.",
    ogTitle: "Электронный архив документов — UX/UI кейс для банка",
    ogDescription:
      "Проектирование B2B-системы для документов, ролей, прав доступа, метаданных, поиска и регуляторных требований.",
  },
  "hr-planner": {
    title: "HR Planner — UX/UI кейс системы планирования загрузки",
    description:
      "Проектирование HR-платформы для анализа загрузки сотрудников, управления проектами, заявками, ролями и кадровыми процессами.",
    ogTitle: "HR Planner — UX/UI кейс HR-платформы",
    ogDescription:
      "Как прототипы и документация превратились в интерфейс для профилей сотрудников, проектов, заявок и администрирования.",
  },
  "performance-evaluation": {
    title: "Система оценки эффективности сотрудников — UX/UI кейс",
    description:
      "Интерфейс для оценки эффективности сотрудников по рабочим метрикам: сроки, возвраты задач, точность оценки и трудозатраты.",
    ogTitle: "Система оценки эффективности сотрудников — UX/UI кейс",
    ogDescription:
      "MVP аналитического инструмента поверх Kaiten с методологией расчёта, дашбордами, периодами и объяснимой оценкой 0-100.",
  },
  crewsplit: {
    title: "CrewSplit — UX/UI кейс учёта выездов и распределения выплат",
    description:
      "Продуктовый кейс сервиса для учёта рабочих выездов, материалов, продаж и распределения выплат между участниками бригад.",
    ogTitle: "CrewSplit — UX/UI кейс инструмента для выплат",
    ogDescription:
      "Как ручной учёт в таблицах превратился в web-приложение для выездов, материалов, продаж и прозрачного распределения денег.",
  },
};

export function getCaseMetadata(slug: string): Metadata {
  const caseItem = profileData.cases.find((item) => item.slug === slug);
  const seo = caseSeoBySlug[slug];

  if (!caseItem || !seo) {
    return {
      title: "Кейс не найден — Юрий Аванесов",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `${siteUrl}/portfolio/${caseItem.slug}/`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/portfolio/${caseItem.slug}/`,
    },
    openGraph: {
      type: "article",
      url,
      siteName,
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [
        {
          url: caseItem.image,
          alt: `${caseItem.title} — UX/UI кейс`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [caseItem.image],
    },
  };
}

export function getPersonOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Юрий Аванесов",
        alternateName: "Аванесов Юрий",
        url: siteUrl,
        jobTitle: "UX/UI Designer, продуктовый дизайнер",
        email: `mailto:${profileData.email}`,
        sameAs: [`https://t.me/${profileData.telegram.replace("@", "")}`],
        knowsAbout: [
          "UX/UI дизайн",
          "Продуктовый дизайн",
          "B2B интерфейсы",
          "Корпоративные системы",
          "Дизайн систем",
        ],
        worksFor: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Юрий Аванесов UX/UI Design",
        url: siteUrl,
        email: profileData.email,
        founder: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };
}
