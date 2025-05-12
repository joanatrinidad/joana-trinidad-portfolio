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
      <h2 className="text-5xl font-bold mb-4 text-[#AD8F75] dark:text-[#AD8F75]">Education</h2>
      <p className="mb-8 pr-24 text-[#1C1423] dark:text-[#AD98B8]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget odio massa. Mauris quam augue, fringilla a nisi et, ultricies vestibulum nisi.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-x-4">
        <div className="bg-card bg-[#AD98B8]  text-card-foreground rounded-lg p-4 w-5/6 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
        
        <div className="bg-card bg-[#AD98B8] text-card-foreground rounded-lg p-4 w-5/6 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
        
        <div className="bg-card bg-[#AD98B8] text-card-foreground rounded-lg p-4 w-5/6 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
        
        <div className="bg-card bg-[#AD98B8] text-card-foreground rounded-lg p-4 w-5/6 shadow">
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
      <h2 className="text-5xl font-bold mb-4 text-[#AD8F75] dark:text-[#AD8F75]">Experience / Certificates</h2>
      <p className="mb-8 pr-24 text-[#1C1423] dark:text-[#AD98B8]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget odio massa. Mauris quam augue, fringilla a nisi et, ultricies vestibulum nisi.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-x-4">
        <div className="bg-card bg-[#AD98B8] text-card-foreground rounded-lg p-4 w-5/6 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
        
        <div className="bg-card bg-[#AD98B8] text-card-foreground rounded-lg p-4 w-5/6 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
        
        <div className="bg-card bg-[#AD98B8] text-card-foreground rounded-lg p-4 w-5/6 shadow">
          <div className="text-sm font-medium mb-2">2020 - 2024</div>
          <div className="font-bold mb-1">Core Computer Science</div>
          <div className="text-sm flex items-center gap-1">
            <span>•</span> University of Santo Tomas
          </div>
        </div>
        
        <div className="bg-card bg-[#AD98B8] text-card-foreground rounded-lg p-4 w-5/6 shadow">
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
      <h2 className="text-5xl font-bold mb-4 text-[#AD8F75] dark:text-[#AD8F75]">Skills</h2>
      <p className="mb-8 pr-24 text-[#1C1423] dark:text-[#AD98B8]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget odio massa. Mauris quam augue, fringilla a nisi et, ultricies vestibulum nisi.
      </p>
      
      <div className="grid grid-cols-4 gap-6">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bg-[#AD98B8] rounded-full w-20 h-20 flex items-center justify-center shadow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="32" height="32" fill="#1C1423">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );

  const AboutMeContent = () => (
    <div>
      <h2 className="text-5xl font-bold mb-4 text-[#AD8F75] dark:text-[#AD8F75]">About Me</h2>
      <p className="mb-8 pr-24 text-[#1C1423] dark:text-[#AD98B8]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget odio massa. Mauris quam augue, fringilla a nisi et, ultricies vestibulum nisi.
      </p>
      <div className="bg-card bg-[#AD98B8] text-card-foreground rounded-lg p-6 shadow space-y-4">
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
      className={`w-full text-center py-3 px-4 rounded-lg transition-all font-semibold ${
        active ? 'bg-[#AD98B8]/80 text-card-foreground dark:text-primary font-semibold' : 'bg-[#AD98B8]/30 text-foreground hover:bg-[#AD98B8]/50'
      }`}
    >
      {title}
    </button>
  );

  return (
    <div className="container px-4 py-12 ml-28">
      {/* Content Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
        {/* Left Side */}
        <div className="space-y-6">
          <div className="">
            <h1 className="text-5xl font-bold mb-4 text-[#AD8F75] dark:text-[#AD8F75]">Why hire me?</h1>
            <p className="text-[#1C1423] dark:text-[#AD98B8]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget odio massa. 
            </p>
          </div>
          
          <div className="space-y-8">
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
        <div className="mx-24">
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
