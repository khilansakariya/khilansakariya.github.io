declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: {
        page_path?: string;
        page_title?: string;
        page_location?: string;
        send_page_view?: boolean;
        anonymize_ip?: boolean;
        cookie_flags?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
        name?: string;
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
}

export {}; 