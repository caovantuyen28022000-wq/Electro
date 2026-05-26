declare module 'wowjs' {
  export class WOW {
    constructor(config?: {
      boxClass?: string;
      animateClass?: string;
      offset?: number;
      mobile?: boolean;
      live?: boolean;
      scrollContainer?: string;
      callback?: (wow: WOW) => void;
    });
    init(): void;
    sync(element: any): void;
    addBox(element: any): void;
    removeBox(element: any): void;
    show(element: any, animation?: string): void;
    scrollCallback(): void;
    getInlineStyle(element: any): any;
    setAnimationName(element: any): any;
    setBoxHeight(element: any): any;
    getScrollTop(): number;
    isScrolled(): boolean;
    isNotScrolled(): boolean;
    destroy(): void;
    vendor: string;
    boxes: any[];
    live: string;
    callback: (wow: WOW) => void;
    config: any;
    scrollHandler: () => void;
    resizeHandler: () => void;
  }
}