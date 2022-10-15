export class StaticSiteDefault {
  private constructor() { /* noop */ } // Don't allow construction, this is a 'static' class
  public static readonly HomeSource = 'assets/pages/home.md';
  public static readonly ContentRoute = '';
  public static cononicalizeUrl(url: string): string {
    let returnValue = url;
    returnValue = returnValue.replace(/\W+(?!$)/g, '-').replace(/\-$/, '').toLowerCase(); // Replace whitespace and special chars with '-' then remove traling '-' and convert to lower case

    return returnValue;
  }
}