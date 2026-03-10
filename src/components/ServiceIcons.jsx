import React from 'react';

const ServiceIcons = {
  city: (
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="6" width="7" height="16" rx="1"/>
      <rect x="9" y="2" width="7" height="20" rx="1"/>
      <rect x="17" y="9" width="6" height="13" rx="1"/>
      <line x1="3" y1="9" x2="6" y2="9"/><line x1="3" y1="12" x2="6" y2="12"/><line x1="3" y1="15" x2="6" y2="15"/>
      <line x1="11" y1="5" x2="14" y2="5"/><line x1="11" y1="8" x2="14" y2="8"/><line x1="11" y1="11" x2="14" y2="11"/><line x1="11" y1="14" x2="14" y2="14"/>
      <line x1="19" y1="12" x2="21" y2="12"/><line x1="19" y1="15" x2="21" y2="15"/>
    </svg>
  ),
  manufacturing: (
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  digital: (
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <polyline points="6 8 10 12 6 16"/>
      <line x1="13" y1="14" x2="18" y2="14"/>
    </svg>
  ),
  architecture: (
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/>
      <path d="M5 21V7l7-4 7 4v14"/>
      <path d="M9 21v-6h6v6"/>
      <path d="M9 10h.01"/><path d="M15 10h.01"/>
      <path d="M9 14h.01"/><path d="M15 14h.01"/>
    </svg>
  ),
  mobility: (
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
      <path d="M17 17h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
      <path d="M7 17v4"/><path d="M17 17v4"/>
      <path d="M3 7h4"/><path d="M15 7h6"/>
      <line x1="7" y1="21" x2="17" y2="21"/>
    </svg>
  ),
  innovation: (
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
      <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>
      <line x1="12" y1="6" x2="12" y2="10"/>
      <line x1="10" y1="8" x2="14" y2="8"/>
    </svg>
  ),
};

export default ServiceIcons;
