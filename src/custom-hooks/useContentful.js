import { createClient } from "contentful";

const useContentful = () => {
  const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
  const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

  const client = createClient({
    space,
    accessToken,
  });

  const getBlogPosts = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "webPosts",
        select: "fields",
        order: "-fields.date",
        include: 1,
      });

      const sanitizedEntries = entries.items.map((item) => {
        return {
          ...item.fields,
          id: item.sys.id,
          featuredImage: "https:" + item.fields.featuredImage.fields.file.url,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.error(`Error fetching titles: ${error}`);
      throw error;
    }
  };

  return { getBlogPosts };
};

export default useContentful;
