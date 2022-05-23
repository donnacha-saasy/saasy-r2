export default {
  name: "articleImage",
  title: "Article Image",
  type: "image",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
      options: {
        isHighLight: true,
      },
    },
  ],
  options: {
    hotspot: true,
  },
};
