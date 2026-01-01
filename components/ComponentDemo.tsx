
import React from 'react';

interface ComponentDemoProps {
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
}

const ComponentDemo: React.FC<ComponentDemoProps> = ({ title, description, code, children }) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-display font-bold mb-2 dark:text-white">{title}</h3>
      <p className="text-brand-gray-600 dark:text-brand-gray-400 mb-6 max-w-2xl text-sm md:text-base">{description}</p>
      
      <div className="border border-brand-gray-200 dark:border-brand-gray-800 rounded-lg overflow-hidden bg-white dark:bg-brand-blue shadow-sm">
        <div className="p-6 md:p-12 flex items-center justify-center bg-brand-gray-50 dark:bg-brand-gray-900 border-b border-brand-gray-200 dark:border-brand-gray-800 overflow-x-auto">
          {children}
        </div>
        <div className="p-4 bg-brand-gray-900 overflow-x-auto">
          <pre className="text-[10px] md:text-xs font-mono leading-relaxed text-brand-gray-100 whitespace-pre">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ComponentDemo;
