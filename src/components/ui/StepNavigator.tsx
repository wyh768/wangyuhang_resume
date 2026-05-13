'use client';

import { useAppState } from '@/lib/store';

const steps = [
  { label: '上传简历', icon: '1' },
  { label: '编辑确认', icon: '2' },
  { label: '选择风格', icon: '3' },
  { label: '预览导出', icon: '4' },
];

export default function StepNavigator() {
  const { currentStep } = useAppState();

  return (
    <div className="flex items-center justify-center gap-2 py-6">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              i === currentStep
                ? 'bg-gray-900 text-white shadow-lg'
                : i < currentStep
                  ? 'bg-gray-200 text-gray-700'
                  : 'bg-gray-100 text-gray-400'
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                i === currentStep ? 'bg-white text-gray-900' : 'bg-gray-300 text-white'
              }`}
            >
              {i < currentStep ? '✓' : step.icon}
            </span>
            <span className="hidden sm:inline">{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <div className={`w-8 h-0.5 mx-1 ${i < currentStep ? 'bg-gray-400' : 'bg-gray-200'}`} />
          )}
        </div>
      ))}
    </div>
  );
}
