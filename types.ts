
export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  type: 'hero' | 'problem' | 'services' | 'cta';
  content: any;
  aiPrompt: string;
  fallbackInsight: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProblemItem {
  label: string;
  detail: string;
}
