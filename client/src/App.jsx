import { useState } from 'react'
import './App.css'


import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Departments from "./pages/Departments";
import Programs from "./pages/Programs";
import Events from "./pages/Events";

import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {

  return (
        <>
      <MainLayout>
      
            <Routes>
            
                    <Route path="/" element={<Home />} />
                    
                            <Route path="/about" element={<About />} />

                            <Route
                              path="/departments"
                                element={<Departments />}
                                />

                                <Route path="/programs" element={<Programs />} />

                                <Route path="/events" element={<Events />} />
                            
                                    
                                    
                                            <Route path="/news" element={<News />} />
                                            
                                                    <Route path="/contact" element={<Contact />} />
                                                    
                                                    
                                                          </Routes>
                                                          
                                                              </MainLayout>
                                                              </>
                                                                );
                                                                
                                                        }
                                                                
                                                                export default App;                                       

                                                                
