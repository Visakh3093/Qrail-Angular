    interface Headers {
    language: string;
    'api-platform': string;
  }
  interface Icon {
    alt: string;
    url: string;
  }
  interface Below {
    base_url: string;
    url: string;
    title: string;
    external: boolean;
    icon: Icon;
    icon_mini: Icon;
  }
 export interface Header {
    base_url: string;
    url: string;
    title: string;
    external: boolean;
    icon: Icon;
    icon_mini: Icon;
    below?: Below[];
  }
 export interface Footer {
    base_url: string;
    url: string;
    title: string;
    external: boolean;
    icon: Icon;
    icon_mini: Icon;
    below: Below[];
  }
  interface Body {
    header: Header[];
    footer: Footer[];
    social: Below[];
  }
 export interface HeaderFooterModel {
    status: boolean;
    headers: Headers;
    body: Body;
  }