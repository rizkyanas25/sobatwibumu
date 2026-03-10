interface GtagEventParams {
  [key: string]: string;
}

interface Window {
  gtag: (command: string, action: string, params?: GtagEventParams) => void;
}
