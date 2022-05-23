import sanityClient from "part:@sanity/base/client";
import SlugInput from "sanity-plugin-better-slug";

export default {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      // RECOMMENDED: using Sanity's default _type: 'slug' w/ input component
      name: "slug",
      type: "slug",
      inputComponent: SlugInput,
      options: {
        source: "title",
        basePath: "https://omahonyheatingandplumbing.ie",
        // Use isUnique/maxLength just like you would w/ the regular slug field
        //isUnique: MyCustomIsUniqueFunction,
        maxLength: 50,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          {
            title: "Boilers",
            value: "boilers",
          },
          {
            title: "Renewables",
            value: "renewables",
          },
          {
            title: "Heating Controls",
            value: "heating-controls",
          },
          {
            title: "Services",
            value: "services",
          },
        ],
        layout: "radio",
      },
    },
    {
      name: "articleBody",
      title: "Article Body",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              {
                title: "Highlight",
                value: "highlight",
                blockEditor: {
                  icon: () => "H",
                },
              },
            ],
          },
        },

        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      dateFormat: "DD-mm-YYYY",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "articleImage",
        },
      ],
    },
    // {
    //   name: "button",
    //   title: "Button",
    //   type: "object",
    //   fields: [{ name: "callToAction", type: "url", title: "Call To Action" }],
    // },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "review" }],
    },
    {
      name: "author",
      title: "Author",
      type: "author",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    },
  ],
};
