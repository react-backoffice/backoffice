class Cookie {
  private value: any;

  constructor() {
    this.value = undefined;
  }
  getCookie() {
    if (this.value !== undefined) {
      return this.value;
    }
    const value = `; ${document.cookie}`;
    const parts = value.split("; cookie_concent=");
    if (parts.length < 2) {
      return undefined;
    }
    const concentValue = parts.pop()?.split(";").shift() !== "false";

    this.value = concentValue;
    return concentValue;
  }

  setCookie(value: any) {
    this.value = value;
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + 365);
    document.cookie = `cookie_concent=${value};expires=${exdate.toUTCString()};path=/`;
  }
}
export default new Cookie();
