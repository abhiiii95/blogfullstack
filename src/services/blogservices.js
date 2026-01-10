const serverApiDomain = `http://localhost:3000`;

export const getBlogList = async () => {
  try {
    const res = await fetch(`${serverApiDomain}/api/blog`, {
      method: "GET",
      cache: "no-store",
    });

    console.log("res:", res);

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    // const data = await res.json();

    return data;
  } catch (error) {
    console.log("error: ", error);

    return {
      status: false,
      data: [],
    };
  }
};
