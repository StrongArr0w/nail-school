declare module "aos" {
  export interface AosOptions {
    duration?: number;
    delay?: number;
    easing?: string;
    offset?: number;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: boolean | "phone" | "tablet" | "mobile" | ((elem: HTMLElement) => boolean);
  }

  export interface AosStatic {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AosStatic;
  export default AOS;
}


