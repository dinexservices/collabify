
// Fix: Import React to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface EcosystemCard {
  id: string;
  name: string;
  description: string;
  link: string;
  color: string;
  tagline: string;
}

export interface PricingTier {
  name: string;
  price: string;
  bestFor: string;
  deliverables: string[];
  outcome: string;
}
