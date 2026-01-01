
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
  ICONS = 'icons',
  MARKETPLACE = 'marketplace',
  LOGISTICS = 'logistics'
}

export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
}

export interface NavItem {
  id: Page;
  label: string;
  category: 'Foundation' | 'Components' | 'Patterns' | 'Getting Started';
}
