'use client';

import React, { useState } from 'react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  // Handler for tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Content components for each section
  const EducationContent = () => (
    <div>
      <h2 className="text-4xl font-bold mb-4">Education</h2>
      <p className="text-muted-foreground mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget odio massa. Mauris quam augue, fringilla a nisi et, ultricies vestibulum nisi.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card text-card-foreground rounded-lg p-4 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
        
        <div className="bg-card text-card-foreground rounded-lg p-4 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
        
        <div className="bg-card text-card-foreground rounded-lg p-4 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
        
        <div className="bg-card text-card-foreground rounded-lg p-4 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
      </div>
    </div>
  );

  const ExperienceContent = () => (
    <div>
      <h2 className="text-4xl font-bold mb-4">Experience / Certificates</h2>
      <p className="text-muted-foreground mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget odio massa. Mauris quam augue, fringilla a nisi et, ultricies vestibulum nisi.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card text-card-foreground rounded-lg p-4 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
        
        <div className="bg-card text-card-foreground rounded-lg p-4 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
        
        <div className="bg-card text-card-foreground rounded-lg p-4 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
        
        <div className="bg-card text-card-foreground rounded-lg p-4 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
      </div>
    </div>
  );

  const SkillsContent = () => (
    <div>
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <p className="text-muted-foreground mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget odio massa. Mauris quam augue, fringilla a nisi et, ultricies vestibulum nisi.
      </p>
      
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-card text-card-foreground rounded-lg p-6 flex items-center justify-center shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );

  const AboutMeContent = () => (
    <div>
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <div className="bg-card text-card-foreground rounded-lg p-6 shadow space-y-4">
        <div className="flex items-center">
          <span className="w-24 font-medium">Name:</span>
          <span className="text-muted-foreground"></span>
        </div>
        <div className="flex items-center">
          <span className="w-24 font-medium">Phone:</span>
          <span className="text-muted-foreground"></span>
        </div>
        <div className="flex items-center">
          <span className="w-24 font-medium">Email:</span>
          <span className="text-muted-foreground"></span>
        </div>
        <div className="flex items-center">
          <span className="w-24 font-medium">Nationality:</span>
          <span className="text-muted-foreground"></span>
        </div>
      </div>
    </div>
  );

  // Tab button component
  const TabButton = ({ title, active, onClick }) => (
    <button
      onClick={onClick}
      className={`w-full text-left py-3 px-4 rounded-lg transition-all ${
        active ? 'bg-card text-card-foreground font-medium' : 'bg-muted/50 text-foreground hover:bg-muted/80'
      }`}
    >
      {title}
    </button>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Content Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-6">
          <div className="">
            <h2 className="text-4xl font-bold mb-4">Why hire me?</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget odio massa. Mauris quam augue, fringilla a nisi et, ultricies vestibulum nisi.
            </p>
          </div>
          
          <div className="space-y-3">
            <TabButton 
              title="Education" 
              active={activeTab === 'education'} 
              onClick={() => handleTabChange('education')} 
            />
            
            <TabButton 
              title="Experience / Certifications" 
              active={activeTab === 'experience'} 
              onClick={() => handleTabChange('experience')} 
            />
            
            <TabButton 
              title="Skills" 
              active={activeTab === 'skills'} 
              onClick={() => handleTabChange('skills')} 
            />
            
            <TabButton 
              title="About Me" 
              active={activeTab === 'about'} 
              onClick={() => handleTabChange('about')} 
            />
          </div>
        </div>
        
        {/* Right Side - Dynamic Content */}
        <div>
          {activeTab === 'education' && <EducationContent />}
          {activeTab === 'experience' && <ExperienceContent />}
          {activeTab === 'skills' && <SkillsContent />}
          {activeTab === 'about' && <AboutMeContent />}
        </div>
      </div>
    </div>
  );
};

export default Resume;
