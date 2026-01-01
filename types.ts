import React from 'react';

export enum Page {
  INTRODUCTION = 'introduction',
  BRAND_VALUES = 'brand-values',
  TYPOGRAPHY = 'typography',
  COLORS = 'colors',
  GRID = 'grid',
  BUTTONS = 'buttons',
  INPUTS = 'inputs',
  CARDS = 'cards',
  MODALS = 'modals',
  ICONS = 'icons'
}

export interface ComponentProps {
  // Fix: Imported React to resolve the namespace for ReactNode
  children?: React.ReactNode;
  className?: string;
}

export interface NavItem {
  id: Page;
  label: string;
  category: 'Foundation' | 'Components' | 'Getting Started';
}