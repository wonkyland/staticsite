export class StaticSiteDefault {
  private constructor() { /* noop */ } // Don't allow construction, this is a 'static' class
  public static readonly HomeSource = '/assets/pages/home.md';
  public static readonly TopLevelRouteParameter = 'content';
  public static readonly ContentRoute = `${StaticSiteDefault.TopLevelRouteParameter}/:folder/:tag`;
}