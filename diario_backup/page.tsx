"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import diaryData from './diario.json';

interface LogEntry {
  id: number;
  commit: string;
  fecha: string;
  tipo: string;
  titulo: string;
  descripcion: string;
  autor: string;
}

export default function Diario() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [shake, setShake] = useState<boolean>(false);
  
  const [filter, setFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Check session storage on mount
  useEffect(() => {
    const auth = sessionStorage.getItem('diario_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Clave de acceso establecida: matrix2026
    if (password === 'matrix2026') {
      setError(false);
      setIsAuthenticated(true);
      sessionStorage.setItem('diario_auth', 'true');
    } else {
      setError(true);
      setShake(true);
      setPassword('');
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('diario_auth');
  };

  const filteredData = (diaryData as LogEntry[]).filter((item) => {
    const matchesFilter = filter === 'ALL' || item.tipo === filter;
    const matchesSearch =
      item.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.commit.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getTagStyle = (tipo: string) => {
    switch (tipo) {
      case 'FEAT':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'FIX':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'CHORE':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const formatFecha = (fechaStr: string) => {
    try {
      const date = new Date(fechaStr.replace(' ', 'T'));
      return new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(date);
    } catch (e) {
      return fechaStr;
    }
  };

  // Lock Screen Render
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#0a1931] text-white font-sans antialiased flex items-center justify-center p-6 relative overflow-hidden">
        {/* CSS Keyframes injected for Shake Animation */}
        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
            20%, 40%, 60%, 80% { transform: translateX(6px); }
          }
          .animate-shake {
            animation: shake 0.4s ease-in-out;
          }
        `}</style>

        {/* Background Blur Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-md w-full relative z-10 flex flex-col items-center">
          {/* Logo / Header */}
          <div className="mb-8 text-center">
            <span className="text-4xl mb-3 block">🔒</span>
            <h1 className="text-2xl font-black tracking-tight text-white mb-2">Acceso Restringido</h1>
            <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase">Diario de Desarrollo</p>
          </div>

          {/* Login Card */}
          <div 
            className={`w-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl transition-all duration-300 ${
              shake ? 'animate-shake border-red-500/50 shadow-red-500/5' : ''
            }`}
          >
            <p className="text-sm text-blue-100/70 text-center font-light leading-relaxed mb-6">
              Esta sección es privada para el equipo de desarrollo de <strong className="font-semibold text-white">Matrix Producciones</strong> y <strong className="font-semibold text-white">Ophal Line</strong>. Por favor, ingresa la clave de acceso.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Introduce la contraseña"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(false);
                  }}
                  className={`w-full bg-white/5 border outline-none p-4 pr-12 rounded-xl text-sm font-light text-white transition-all text-center ${
                    error ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-red-500'
                  }`}
                  autoFocus
                />
                
                {/* Show/Hide password toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              {error && (
                <p className="text-xs text-red-400 text-center font-semibold animate-pulse">
                  Contraseña incorrecta. Inténtalo de nuevo.
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-extrabold text-sm shadow-xl shadow-red-600/20 hover:shadow-red-700/30 transition-all duration-200 cursor-pointer"
              >
                Desbloquear Acceso
              </button>
            </form>
          </div>

          {/* Back Link */}
          <Link href="/" className="mt-8 text-xs text-gray-500 hover:text-gray-300 font-semibold tracking-wider uppercase transition-colors">
            ← Volver al Sitio Principal
          </Link>
        </div>
      </main>
    );
  }

  // Full Timeline Render
  return (
    <main className="min-h-screen bg-[#0a1931] text-white font-sans antialiased relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 w-full bg-[#0a1931]/80 backdrop-blur-md border-b border-white/5 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <span className="text-xl">←</span>
              <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">Volver al Inicio</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase hidden sm:inline-block">Bitácora de Desarrollo</span>
            </div>
            
            <button
              onClick={handleLogout}
              className="text-xs font-bold text-gray-400 hover:text-red-400 hover:bg-red-500/5 border border-white/5 hover:border-red-500/20 px-3 py-1.5 rounded-xl transition-all duration-300"
            >
              Cerrar Sesión 🔒
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block bg-red-600 text-white px-5 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-md shadow-red-600/20">
            Diario de Desarrollo
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Historial de Cambios <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Ophal Line</span>
          </h1>
          <p className="text-lg text-blue-100/70 font-light max-w-xl mx-auto">
            Registro cronológico detallado de todas las mejoras, nuevas funciones y mantenimientos realizados en la plataforma.
          </p>
        </div>

        {/* CONTROLS (SEARCH & FILTER) */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-12 backdrop-blur-sm space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {['ALL', 'FEAT', 'CHORE', 'FIX'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 uppercase ${
                    filter === type
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {type === 'ALL' ? 'Todos' : type === 'FEAT' ? 'Novedades' : type === 'CHORE' ? 'Ajustes' : 'Correcciones'}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Buscar cambios o commits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 focus:border-red-500 outline-none px-4 py-2.5 pl-10 rounded-xl text-sm font-light text-white placeholder-gray-500 transition-all"
              />
              <span className="absolute left-3 top-3.5 text-gray-500 text-xs">🔍</span>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={item.id} className="relative pl-8 md:pl-10 group animate-fade-in">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#0a1931] border-2 border-red-500 group-hover:scale-125 group-hover:bg-red-600 transition-all duration-300 z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white"></div>
                </div>

                {/* Card Container */}
                <div className="bg-white/5 border border-white/10 hover:border-red-500/30 hover:bg-white/10/80 rounded-3xl p-6 md:p-8 transition-all duration-300 shadow-xl relative overflow-hidden">
                  {/* Subtle Top Gradient for Hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600/50 to-blue-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    {/* Date and Type Tag */}
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-black tracking-widest px-2.5 py-1 rounded-md border ${getTagStyle(item.tipo)}`}>
                        {item.tipo}
                      </span>
                      <time className="text-xs text-gray-400 font-semibold">
                        {formatFecha(item.fecha)}
                      </time>
                    </div>

                    {/* Commit Hash */}
                    <div className="text-[11px] font-mono text-gray-500 bg-white/5 border border-white/5 rounded-md px-2 py-0.5 select-all group-hover:text-red-400 group-hover:border-red-500/20 transition-colors self-start md:self-auto">
                      commit: {item.commit}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-blue-100/70 leading-relaxed font-light mb-6">
                    {item.descripcion}
                  </p>

                  {/* Footer (Author & Status) */}
                  <div className="flex justify-between items-center border-t border-white/5 pt-4 text-xs text-gray-500">
                    <div>
                      Desarrollado por: <span className="font-semibold text-gray-300">{item.autor}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-500/5 border border-emerald-500/10 px-2 py-1 rounded-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Desplegado
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
              <span className="text-4xl block mb-4">📂</span>
              <h3 className="text-lg font-bold mb-2">No se encontraron registros</h3>
              <p className="text-sm text-gray-400 font-light max-w-xs mx-auto">
                Intenta ajustar los filtros o el término de búsqueda para ver otros registros.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#080f1e] text-white py-12 border-t border-white/5 text-center mt-24">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Ophal Line. Registro Técnico de Desarrollo.
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Administrado en tiempo real por <strong className="font-semibold text-gray-400">Matrix Producciones</strong>
        </p>
      </footer>
    </main>
  );
}
