'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Web Development',
    subtitle: 'PORTFOLIO WEBSITE',
    description: 'A responsive portfolio website built with modern web technologies to showcase projects and skills in an elegant interface.',
    image: '/MultiNotes.png',
    category: 'Web Development',
    tags: ['React', 'NextJS', 'TailwindCSS'],
    github: 'https://github.com/username/project1',
    demoLink: 'https://project1-demo.com'
  },
  {
    id: 2,
    number: '02',
    title: 'Mobile App',
    subtitle: 'MULTINOTES - MULTI-PURPOSE NOTES AND REMINDER PRODUCTIVITY APPLICATION',
    description: 'Mobile application that includes note taking and a to-do list.',
    image: '/MultiNotes.png',
    category: 'Mobile Development',
    tags: ['Java', 'MySQL'],
    github: 'https://github.com/username/project2',
    demoLink: 'https://project2-demo.com'
  },
  {
    id: 3,
    number: '07',
    title: 'Wordpress',
    subtitle: 'Envaa',
    description: 'A thesis that aimed to develop a modified framework for COVID-19 detection algorithm with the use of offline augmentation techniques such as gaussian noise, shear, and brightness increase and decrease.',
    image: '/MultiNotes.png',
    category: 'Web Development',
    tags: ['Wordpress', 'Javascript', 'PHP'],
    github: 'https://github.com/username/project3',
    demoLink: 'https://project3-demo.com'
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  // Handle click outside filter dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-9 px-14"
    >
      {/* Header with Category Indicator */}
      <div className="flex items-center mb-8">
        <div className="font-medium tracking-wide flex items-center text-[#1C1423] dark:text-[#AD98B8]">
          {activeCategory === 'All' ? 'ALL PROJECTS' : activeCategory.toUpperCase()} 
          <span className="mx-2">
            ({filteredProjects.length} {filteredProjects.length === 1 ? 'PROJECT' : 'PROJECTS'})
          </span>
        
          {/* Toggle/Slider Filter Button */}
          <div className="relative ml-1" ref={filterRef}>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="relative flex items-center justify-center transition-colors duration-200 group"
              aria-label="Filter projects"
            >
              <svg width="28" height="20" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left line with circle */}
                <line x1="8" y1="1" x2="8" y2="23" stroke="currentColor" className="text-[#1C1423] dark:text-[#AD98B8] group-hover:stroke-[#AD8F75] transition-colors duration-200" strokeWidth="1.5" />
                <circle cx="8" cy="8" r="3" stroke="currentColor" className="text-[#1C1423] dark:text-[#AD98B8] group-hover:stroke-[#AD8F75] transition-colors duration-200" strokeWidth="1.5"/>
                
                {/* Right line with circle */}
                <line x1="20" y1="1" x2="20" y2="23" stroke="currentColor" className="text-[#1C1423] dark:text-[#AD98B8] group-hover:stroke-[#AD8F75] transition-colors duration-200" strokeWidth="1.5" />
                <circle cx="20" cy="16" r="3" stroke="currentColor" className="text-[#1C1423] dark:text-[#AD98B8] group-hover:stroke-[#AD8F75] transition-colors duration-200" strokeWidth="1.5"/>
              </svg>
              {activeCategory !== 'All' && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full" />
              )}
            </button>
            
            {/* Filter Dropdown */}
            {isFilterOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-8 left-0 z-20 bg-white dark:bg-[#261e22] shadow-lg rounded-lg p-2 min-w-[220px] border border-gray-100 dark:border-gray-800"
              >
                <div className="mb-1 pb-1 border-b border-gray-100 dark:border-gray-800">
                  <h3 className="font-medium text-[#261e22] dark:text-white text-sm">Filter by category</h3>
                </div>
                <div className="flex flex-col gap-1">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`px-3 py-1.5 rounded-md text-left text-sm transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-[#b19477] text-white shadow-lg dark:bg-[#3a2e32]'
                          : 'text-[#261e22] dark:text-white hover:text-[#8f7764] dark:hover:text-[#a0847b]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative">
        {filteredProjects.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination',
            }}
            loop={filteredProjects.length > 1}
            className="w-full px-6 lg:px-0"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="flex flex-col lg:flex-row gap-8 bg-white dark:bg-[#261e22] rounded-lg p-4 md:p-6">
                  <div className="lg:w-[40%]">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:w-[60%]">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-light text-[#8f7764] dark:text-[#a0847b]">
                        {project.number} <span className="ml-2 text-[#261e22] dark:text-white">{project.title}</span>
                      </h2>
                      
                      <h3 className="text-sm uppercase tracking-wider text-[#98675a] dark:text-[#a0847b]">
                        {project.subtitle}
                      </h3>
                      
                      <p className="text-base dark:text-gray-200">
                        {project.description}
                      </p>
                      
                      <div className="pt-4 border-b border-gray-200 dark:border-gray-700 pb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="px-2 py-1 text-[#261e22] dark:text-white dark:bg-[#3a2e32] rounded-md text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#261e22] dark:text-white hover:text-[#8f7764] dark:hover:text-[#a0847b] transition-colors"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center py-20 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl text-gray-600 dark:text-gray-300">No projects found in this category</h3>
          </div>
        )}
        
        {/* Only show navigation buttons if there are projects */}
        {filteredProjects.length > 1 && (
          <>
            <div className="swiper-button-prev cursor-pointer">
              <ChevronLeft size={28} className="text-[#261e22] hover:text-[#8f7764] dark:text-white dark:hover:text-[#a0847b]" />
            </div>
            <div className="swiper-button-next cursor-pointer">
              <ChevronRight size={28} className="text-[#261e22] hover:text-[#8f7764] dark:text-white dark:hover:text-[#a0847b]" />
            </div>
          </>
        )}
        
        {/* Custom Pagination */}
        <div className="swiper-pagination flex justify-center gap-2 mt-8 w-full"></div>
      </div>
      
      {/* Add some styles to customize Swiper pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #8f7764;
        }
        .swiper-button-prev:after, .swiper-button-next:after {
          display: none;
        }
        .swiper-button-prev, .swiper-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          box-shadow: none;
        }
        .swiper-button-prev {
          left: -50px;
        }
        .swiper-button-next {
          right: -50px;
        }
        @media (max-width: 1024px) {
          .swiper-button-prev {
            left: -20px;
          }
          .swiper-button-next {
            right: -20px;
          }
        }
        @media (max-width: 640px) {
          .swiper-button-prev {
            left: 0;
          }
          .swiper-button-next {
            right: 0;
          }
        }
        .swiper-pagination {
          position: relative;
          bottom: auto !important;
          left: 0 !important;
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }
      `}</style>
    </motion.div>
  );
};

export default Projects;
