"use client";
import React from 'react';
import { 
  Rocket, 
  Users, 
  Target, 
  Calendar, 
  Palette, 
  Zap, 
  TrendingUp, 
  Share2, 
  Lightbulb,
  MessageSquare,
  Globe,
  Mic2
} from 'lucide-react';
import { ServiceItem, PricingTier } from './types';

export const COLORS = {
  primary: '#2E3192', // Blue
  secondary: '#E45D91', // Pink
  accent: '#F9813A', // Orange
  teal: '#2EB1A1', // Teal
  dark: '#333333'
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    title: 'Startup Growth & Marketing',
    description: 'Scaling startups through branding, positioning, and social media growth strategies.',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: 'Collaborations & Partnerships',
    description: 'Connecting startups with the right creators, brands, and business partners.',
    icon: <Share2 className="w-6 h-6" />
  },
  {
    title: 'Community & Networking',
    description: 'Building a strong ecosystem via meetups, panel talks, and founder networks.',
    icon: <Users className="w-6 h-6" />
  },
  {
    title: 'Events & Opportunities',
    description: 'Organizing and enabling high-impact startup, youth, and brand events.',
    icon: <Calendar className="w-6 h-6" />
  },
  {
    title: 'Artist / Creator Growth',
    description: 'Supporting creators with brand deals, collaborations, and personal branding.',
    icon: <Mic2 className="w-6 h-6" />
  },
  {
    title: 'Consultation & Strategy',
    description: 'Long-term growth roadmaps and marketing direction for sustainable impact.',
    icon: <Lightbulb className="w-6 h-6" />
  }
];

export const BRANDPE_PRICING: PricingTier[] = [
  {
    name: 'Starter Plan - Launch',
    price: '₹7,999',
    bestFor: 'Early-stage startups, solo founders',
    deliverables: [
      'Step-by-step brand identity framework',
      'Tone, positioning, and audience clarity',
      'Platform selection and bio optimization',
      'First 30 days posting best practices',
      'Email + chat support'
    ],
    outcome: 'Start right with clarity and professional presence.'
  },
  {
    name: 'Growth Plan - Scale',
    price: '₹14,999',
    bestFor: 'Startups with traction aiming for faster growth',
    deliverables: [
      '30–60–90 day growth roadmap',
      'Ready-to-use content templates',
      'Messaging frameworks',
      'Monthly 1:1 strategy call',
      'Bottleneck analysis & optimization'
    ],
    outcome: 'Structured momentum with strategic clarity.'
  },
  {
    name: 'Premium Plan - Dominate',
    price: '₹34,999',
    bestFor: 'High-intent founders aiming for market leadership',
    deliverables: [
      'Dedicated growth advisor',
      'Hands-on execution guidance',
      'Access to brand and startup collaborations',
      'Priority invites to Collabify events',
      'Founder roundtables & workshops'
    ],
    outcome: 'Authority, visibility, and category dominance.'
  }
];

