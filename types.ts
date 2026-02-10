
export interface BlogInputs {
  topic: string;
  audience: string;
  tone: string;
  keyPoints: string;
}

export interface GeneratedContent {
  title: string;
  blogPost: string;
  seoTitle: string;
  seoDescription: string;
  socialCaptions: {
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  emailNewsletter: string;
}

export type AppState = 'IDLE' | 'LOADING' | 'RESULT';
