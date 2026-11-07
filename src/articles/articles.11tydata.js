export default {
  layout: "layouts/article.njk",
  isArticle: true,
  templateEngineOverride: "md",
  permalink: (data) => `/articles/${data.page.fileSlug}/`,
  eleventyComputed: {
    updated: (data) => data.updated || data.page.date,
    breadcrumbs: (data) => {
      const cat = (data.categories || []).find((c) => c.slug === data.category);
      return [
        { label: "Home", url: "/" },
        cat ? { label: cat.short, url: `/category/${cat.slug}/` } : { label: "Articles", url: "/articles/" },
        { label: data.title, url: `/articles/${data.page.fileSlug}/` },
      ];
    },
  },
};
