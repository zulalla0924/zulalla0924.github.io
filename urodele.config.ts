export const config = {
  github: {
    login: "zulalla0924", // github login name, not user name
    repo: "zulalla0924.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "zulalla0924",
    brand: "zulalla0924",
    description: "Less is more",
  },
  footer: {
    copyright: "©  zulalla0924  ·  since 2026  ",
    copyrightUrl: "https://zulalla0924.github.io",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
