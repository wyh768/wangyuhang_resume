'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { ResumeData, TemplateConfig, DEFAULT_TEMPLATE_CONFIG } from './types';

interface AppState {
  resumeData: ResumeData | null;
  setResumeData: (data: ResumeData) => void;
  templateConfig: TemplateConfig;
  setTemplateConfig: (config: TemplateConfig) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [templateConfig, setTemplateConfig] = useState<TemplateConfig>(DEFAULT_TEMPLATE_CONFIG);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <AppContext.Provider
      value={{
        resumeData,
        setResumeData,
        templateConfig,
        setTemplateConfig,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppState must be used within AppProvider');
  }
  return context;
}

export const STORAGE_KEY = 'resume-site-generator-data';

export function saveToStorage(data: ResumeData, config: TemplateConfig) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ resumeData: data, templateConfig: config }));
  }
}

export function loadFromStorage(): { resumeData: ResumeData | null; templateConfig: TemplateConfig } | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}
