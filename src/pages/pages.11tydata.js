export default {
  layout: "layouts/page.njk",
  permalink: (data) => `/${data.slug || data.page.fileSlug}/`,
  eleventyComputed: {
    breadcrumbs: (data) => [
      { label: "Home", url: "/" },
      { label: data.navTitle || data.title, url: `/${data.slug || data.page.fileSlug}/` },
    ],
  },
};
