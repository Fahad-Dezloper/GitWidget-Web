"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Download, RefreshCw, Palette, Zap } from "lucide-react";
import Link from "next/link";

const GRID_COLS = 15;
const GRID_ROWS = 10;

export default function GitHubWidgetHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#0d1117] text-gray-200 flex flex-col items-center justify-center overflow-hidden p-4">
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
          gap: "8px",
          padding: "8px",
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: GRID_COLS * GRID_ROWS }).map((_, i) => {
          const col = i % GRID_COLS;
          const row = Math.floor(i / GRID_COLS);
          const cellWidth = viewport.width / GRID_COLS;
          const cellHeight = viewport.height / GRID_ROWS;
          const cellX = col * cellWidth + cellWidth / 6;
          const cellY = row * cellHeight + cellHeight / 9;
          const dx = mousePos.x - cellX;
          const dy = mousePos.y - cellY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 200;
          const intensity = Math.max(0, 1 - dist / maxDist);

          const greenShades = [
            "rgba(35, 134, 54, 0.1)",
            "rgba(35, 134, 54, 0.3)",
            "rgba(35, 134, 54, 0.5)",
            "rgba(35, 134, 54, 0.7)",
          ];
          const colorIndex = Math.min(
            greenShades.length - 1,
            Math.floor(intensity * (greenShades.length - 1))
          );
          const color = greenShades[colorIndex];

          return (
            <motion.div
              key={i}
              style={{ 
                width: "100%", 
                height: "100%",
                borderRadius: "2px"
              }}
              animate={{
                backgroundColor: intensity > 0 ? color : "transparent",
                scale: intensity > 0.7 ? 1.1 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          );
        })}
      </div>

      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col justify-center items-center h-full space-y-6 lg:space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            textAlign: "center", 
            gap: "8px" 
          }}
        >
          <div className="flex items-center justify-center space-x-2 text-xs lg:text-sm text-gray-400 font-mono">
            <Github className="h-3 w-3 lg:h-4 lg:w-4" />
            <span>GitWidget</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-mono tracking-tight leading-tight">
            Keep your <span className="text-green-500">streak alive</span>.
            <br /> Always in sight.
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto font-mono">
            A minimal Windows widget that shows your live GitHub contributions,
            auto-updates, and stays out of your way.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 w-full max-w-5xl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            style={{ 
              backgroundColor: "#161b22", 
              borderRadius: "12px", 
              padding: "12px", 
              border: "1px solid #374151", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              width: "100%", 
              maxWidth: "384px", 
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", 
              position: "relative" 
            }}
          >
            <div className="absolute top-2 lg:top-3 left-2 lg:left-3 flex space-x-1 lg:space-x-2">
              <span className="w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full"></span>
              <span className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="text-xs lg:text-sm text-gray-400 flex items-center space-x-2 mt-4 lg:mt-6 mb-2 font-mono">
              <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Preview</span>
            </div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              style={{ 
                borderRadius: "12px", 
                overflow: "hidden", 
                width: "100%", 
                backgroundColor: "black", 
                border: "2px solid #23272f", 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", 
                maxWidth: "265px" 
              }}
            >
              <div className="p-3">
                <div 
                  className="grid gap-1 mb-3"
                  style={{
                    gridTemplateColumns: 'repeat(15, 12px)',
                    gridTemplateRows: 'repeat(7, 12px)',
                    gridAutoFlow: 'column'
                  }}
                >
                  {Array.from({ length: 7 * 15 }).map((_, i) => {
                    const row = i % 7;
                    const col = Math.floor(i / 7);
                    
                    // Create realistic contribution pattern matching the image
                    let intensity = Math.random();
                    
                    // Create some clusters of activity like in the image
                    const isInCluster = (col >= 2 && col <= 4 && row >= 1 && row <= 5) ||
                                       (col >= 8 && col <= 11 && row >= 2 && row <= 4) ||
                                       (col >= 13 && col <= 14 && row >= 0 && row <= 6);
                    
                    if (isInCluster) intensity *= 2.5;
                    
                    // Weekend reduction
                    const isWeekend = row === 0 || row === 6;
                    if (isWeekend && !isInCluster) intensity *= 0.2;
                    
                    // Use exact GitHub colors from your CSS
                    let bgColor = "#161b22"; // Level 0 - dark gray
                    if (intensity > 0.9) bgColor = "#39d353"; // Level 4 - bright green
                    else if (intensity > 0.7) bgColor = "#26a641"; // Level 3 - medium green
                    else if (intensity > 0.5) bgColor = "#006d32"; // Level 2 - darker green
                    else if (intensity > 0.25) bgColor = "#0e4429"; // Level 1 - darkest green
                    
                    return (
                      <motion.div
                        key={i}
                        style={{ 
                          width: '12px', 
                          height: '12px', 
                          backgroundColor: bgColor,
                          borderRadius: '2px'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          delay: col * 0.02 + row * 0.003, 
                          duration: 0.12,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          transition: { duration: 0.1 } 
                        }}
                      />
                    );
                  })}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-1.5 items-center">
                    <motion.div 
                      style={{ 
                        width: '32px', 
                        height: '12px', 
                        borderRadius: '6px',
                        backgroundColor: '#3b82f6'
                      }}
                      animate={{ opacity: [1, 0.8, 1] }}
                      transition={{ repeat: Infinity, duration: 3, delay: 0 }}
                    />
                    <motion.div 
                      style={{ 
                        width: '28px', 
                        height: '12px', 
                        borderRadius: '6px',
                        backgroundColor: '#a855f7'
                      }}
                      animate={{ opacity: [1, 0.8, 1] }}
                      transition={{ repeat: Infinity, duration: 3, delay: 0.7 }}
                    />
                    <motion.div 
                      style={{ 
                        width: '24px', 
                        height: '12px', 
                        borderRadius: '6px',
                        backgroundColor: '#facc15'
                      }}
                      animate={{ opacity: [1, 0.8, 1] }}
                      transition={{ repeat: Infinity, duration: 3, delay: 1.4 }}
                    />
                    <motion.div 
                      style={{ 
                        width: '20px', 
                        height: '12px', 
                        borderRadius: '6px',
                        backgroundColor: '#f97316'
                      }}
                      animate={{ opacity: [1, 0.8, 1] }}
                      transition={{ repeat: Infinity, duration: 3, delay: 2.1 }}
                    />
                  </div>
                  
                  <motion.div 
                    style={{ 
                      color: "white", 
                      marginLeft: "8px" 
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                      <polyline points="16,17 21,12 16,7"/>
                      <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "12px", 
              width: "100%", 
              maxWidth: "448px", 
              fontFamily: "monospace", 
              fontSize: "14px" 
            }}
          >
            <div className="text-xs lg:text-sm text-gray-400 flex items-center space-x-2">
              <Zap className="h-3 w-3 lg:h-4 lg:w-4 text-green-500" />
              <span>Why You&apos;ll Love It</span>
            </div>
            <div className="space-y-2 lg:space-y-3">
              <div className="flex items-start space-x-3">
                <RefreshCw className="h-4 w-4 lg:h-5 lg:w-5 text-green-400 mt-0.5" />
                <div>
                  <span className="font-medium text-gray-100 block">Auto Updates</span>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    Always synced with your latest GitHub contributions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Palette className="h-4 w-4 lg:h-5 lg:w-5 text-blue-400 mt-0.5" />
                <div>
                  <span className="font-medium text-gray-100 block">GitHub Style</span>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    Matches GitHub&apos;s native dark theme.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Zap className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-400 mt-0.5" />
                <div>
                  <span className="font-medium text-gray-100 block">Lightweight</span>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    Uses minimal resources while staying always visible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "12px", 
            alignItems: "center", 
            justifyContent: "center", 
            width: "100%" 
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", width: "100%" }}>
            <Link href="https://github.com/Fahad-Dezloper/GitWidget/releases/download/v1.0.4/GitWidget-Setup-1.0.4.exe">
              <Button
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                Install Widget
              </Button>
            </Link>

          <Link href="https://github.com/Fahad-Dezloper/GitWidget">
            <Button
              className="border border-gray-700 text-gray-300 px-4 py-2 rounded bg-transparent"
            >
              <Github className="mr-2 h-4 w-4" />
              Star on GitHub
            </Button>
            </Link>

            <Link href="https://x.com/dezloperr">
            <Button
              className="border border-gray-700 text-gray-300 px-4 py-2 rounded bg-transparent"
            >
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}