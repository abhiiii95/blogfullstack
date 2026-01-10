const severApiDomain = `http://localhost:3000`;

export const getBlogList = () => {
  try {
    return {
      status: true,
      data: {},
    };
  } catch (error) {
    return {
      status: false,
      data: {},
    };
  }
};
