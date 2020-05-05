import Cookie from "./Cookie";

describe("CookieInfo/Cookie", () => {
  const COOKIE_VALUE = "foocookiefoo";

  it("gets undefined cookie", () => {
    const returnValue = Cookie.getCookie();

    expect(returnValue).toBe(undefined);
  });

  it("gets predefined cookie", () => {
    document.cookie = `cookie_concent=${COOKIE_VALUE}`;

    const returnValue = Cookie.getCookie();

    expect(returnValue).toBe(true);
  });

  it("sets cookie", () => {
    Cookie.setCookie(COOKIE_VALUE);

    expect(document.cookie).toBe(`cookie_concent=${COOKIE_VALUE}`);
  });

  it("gets cookie value correctly", () => {
    const returnValue = Cookie.getCookie();

    expect(returnValue).toBe(COOKIE_VALUE);
  });
});
