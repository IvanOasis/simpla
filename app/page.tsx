'use client'

import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Menu, X, ArrowRight,
  BarChart3, Globe, Clapperboard,
  Search, Map, Rocket, TrendingUp, CheckCircle, Target,
  Smartphone,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { posts } from '@/lib/posts'


const SERVICE_DETAILS: Record<string, { icon: any, color: string }> = {
  'Meta Ads':       { icon: Target,      color: '#5491ff' },
  'Google Ads':     { icon: Search,      color: '#7346a1' },
  'TikTok Ads':     { icon: Smartphone,  color: '#5491ff' },
  'LinkedIn Ads':   { icon: BarChart3,   color: '#7346a1' },
  'More Platforms': { icon: Globe,       color: '#5491ff' },
  'Ad Creative':    { icon: Clapperboard, color: '#7346a1' },
}

const METHOD_ICONS = [Search, Map, Rocket, TrendingUp]

function SIMPLALogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} aria-label="SIMPLA">
      <defs>
        <linearGradient id="logo-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9E70CE" />
          <stop offset="100%" stopColor="#5390FF" />
        </linearGradient>
      </defs>
      <circle cx="150" cy="150" r="147" fill="url(#logo-g)" />
      <path d="M231.6,209c-1.5,4.5-4.5,7.9-8.7,10.1c-2.4,1.2-5,1.9-7.7,1.9c-3.3,0-6.3-0.8-9-2.6c-2.8-1.7-5.1-4.1-6.5-7.2L150,112l-40,79.8l1.8-3.6l-11.5,23c-2.1,4.4-5.5,7.3-10,8.7c-4.5,1.6-9,1.2-13.3-0.9c-4.3-2.1-7.2-5.5-8.7-10.1c-1.6-4.6-1.2-9,0.9-13.3l65.2-130.4c1.5-2.9,3.6-5.3,6.4-7.1c2.8-1.7,5.8-2.5,9.1-2.5c3.3,0,6.4,0.8,9.2,2.5c2.8,1.7,4.9,4.1,6.4,7.1l65.1,130.4C232.9,200,233.2,204.5,231.6,209" fill="#fff" />
    </svg>
  )
}

// ─── Hero Rocket ───────────────────────────────────────────────────────────
function HeroRocket() {
  const launchRef = useRef<HTMLDivElement>(null)
  const floatRef = useRef<HTMLDivElement>(null)
  const flameRef = useRef<HTMLDivElement>(null)
  const smokeRef = useRef<HTMLDivElement>(null)
  const gsapRef = useRef<any>(null)
  const busy = useRef(false)
  const flickerTls = useRef<any[]>([])

  const startFlicker = (gsap: any, flame: HTMLDivElement) => {
    flickerTls.current.forEach(t => t.kill())
    flickerTls.current = [
      gsap.to(flame.children[0], { scaleY: 1.28, scaleX: 0.80, duration: 0.11, ease: 'none', yoyo: true, repeat: -1 }),
      gsap.to(flame.children[1], { scaleY: 1.18, scaleX: 0.88, duration: 0.18, ease: 'none', yoyo: true, repeat: -1 }),
      gsap.to(flame.children[2], { scaleY: 1.10, scaleX: 0.92, duration: 0.27, ease: 'none', yoyo: true, repeat: -1 }),
    ]
  }

  const doLaunch = async () => {
    if (busy.current) return
    busy.current = true

    const gsap = gsapRef.current
    const launch = launchRef.current
    const smoke = smokeRef.current
    const flame = flameRef.current
    const float = floatRef.current
    if (!gsap || !launch || !smoke || !flame || !float) { busy.current = false; return }

    // stop idle
    gsap.killTweensOf(float)
    flickerTls.current.forEach(t => t.kill())

    // launch sequence
    const tl = gsap.timeline()
    tl.to(launch, { x: 4, duration: 0.05, repeat: 7, yoyo: true, ease: 'none' })
    tl.to(smoke, { scaleX: 6, scaleY: 3.5, opacity: 0, duration: 0.5, ease: 'power1.out' }, 0.1)
    tl.to(launch, { y: '-150vh', duration: 1.0, ease: 'power3.in' }, 0.35)
    await tl

    // wait 2s off-screen
    await gsap.delayedCall(2, () => { })

    // reset silently
    gsap.set(launch, { y: '-150vh', x: 0 })
    gsap.set(smoke, { scaleX: 1, scaleY: 1, opacity: 1 })
    Array.from(flame.children).forEach(c => gsap.set(c, { scaleY: 1, scaleX: 1, opacity: 1 }))

    // glide back down
    await gsap.to(launch, { y: 0, duration: 1.6, ease: 'power2.out' })

    busy.current = false

    // restart idle
    gsap.to(float, { y: -14, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    startFlicker(gsap, flame)
  }

  useEffect(() => {
    ; (async () => {
      const { gsap } = await import('gsap')
      gsapRef.current = gsap

      const float = floatRef.current
      const flame = flameRef.current
      if (!float || !flame) return

      // idle float
      gsap.to(float, { y: -14, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1 })
      startFlicker(gsap, flame)

      // Auto-launch 1s after load
      setTimeout(() => doLaunch(), 1000)
    })()
    return () => { flickerTls.current.forEach(t => t.kill()) }
  }, [])

  return (
    <div className="relative flex items-end justify-center w-full h-[580px] select-none overflow-visible" aria-hidden="true">
      {/* ambient glow */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-[90px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #9E70CE 0%, #5491ff 70%, transparent 100%)' }} />

      {/* ── TWINKLING STARS ── */}
      {[
        { l: '8%', t: '12%', d: 2.1, delay: 0 },
        { l: '22%', t: '6%', d: 1.7, delay: 0.4 },
        { l: '38%', t: '15%', d: 2.8, delay: 1.2 },
        { l: '55%', t: '5%', d: 1.9, delay: 0.8 },
        { l: '70%', t: '20%', d: 2.4, delay: 0.2 },
        { l: '82%', t: '8%', d: 1.6, delay: 1.6 },
        { l: '92%', t: '16%', d: 2.2, delay: 0.6 },
        { l: '15%', t: '30%', d: 3.1, delay: 1.0 },
        { l: '48%', t: '28%', d: 1.8, delay: 1.8 },
        { l: '78%', t: '32%', d: 2.6, delay: 0.3 },
        { l: '5%', t: '45%', d: 2.0, delay: 2.0 },
        { l: '65%', t: '42%', d: 1.5, delay: 0.9 },
      ].map(({ l, t, d, delay }, i) => (
        <motion.div
          key={`star-${i}`}
          animate={{ opacity: [0.15, 0.7, 0.15], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: d, repeat: Infinity, delay, ease: 'easeInOut' }}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: l, top: t,
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            background: i % 2 === 0 ? '#9E70CE' : '#5491ff',
            boxShadow: i % 3 === 0 ? '0 0 4px 1px #9E70CE88' : '0 0 3px 1px #5491ff66',
          }}
        />
      ))}

      {/* ── CLOUD BANK (bottom) — rocket launches from here ── */}
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, -6, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-2%] left-[-18%] z-0 pointer-events-none"
        style={{ opacity: 0.72 }}
      >
        <svg width="380" height="170" viewBox="0 0 380 170" fill="none">
          <defs>
            <linearGradient id="ck-g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3eeff" />
              <stop offset="55%" stopColor="#ddd0f8" />
              <stop offset="100%" stopColor="#c4aef0" />
            </linearGradient>
            <filter id="ck-drop1" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#9E70CE" floodOpacity="0.18" />
            </filter>
          </defs>
          <g filter="url(#ck-drop1)">
            <ellipse cx="190" cy="148" rx="175" ry="30" fill="url(#ck-g1)" />
            <circle cx="68" cy="120" r="44" fill="url(#ck-g1)" />
            <circle cx="128" cy="98" r="58" fill="url(#ck-g1)" />
            <circle cx="200" cy="88" r="65" fill="url(#ck-g1)" />
            <circle cx="272" cy="100" r="52" fill="url(#ck-g1)" />
            <circle cx="330" cy="120" r="38" fill="url(#ck-g1)" />
          </g>
          {/* highlight rim */}
          <ellipse cx="165" cy="84" rx="55" ry="18" fill="white" opacity="0.28" />
        </svg>
      </motion.div>

      {/* ── CLOUD BANK (bottom-right) ── */}
      <motion.div
        animate={{ x: [0, -22, 0], y: [0, -4, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute bottom-[-4%] right-[-20%] z-0 pointer-events-none"
        style={{ opacity: 0.58 }}
      >
        <svg width="340" height="155" viewBox="0 0 340 155" fill="none">
          <defs>
            <linearGradient id="ck-g2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eaf0ff" />
              <stop offset="55%" stopColor="#cdd8f8" />
              <stop offset="100%" stopColor="#b0c2f0" />
            </linearGradient>
            <filter id="ck-drop2" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#5491ff" floodOpacity="0.15" />
            </filter>
          </defs>
          <g filter="url(#ck-drop2)">
            <ellipse cx="170" cy="134" rx="155" ry="26" fill="url(#ck-g2)" />
            <circle cx="58" cy="110" r="38" fill="url(#ck-g2)" />
            <circle cx="112" cy="90" r="52" fill="url(#ck-g2)" />
            <circle cx="178" cy="80" r="58" fill="url(#ck-g2)" />
            <circle cx="244" cy="92" r="46" fill="url(#ck-g2)" />
            <circle cx="298" cy="112" r="34" fill="url(#ck-g2)" />
          </g>
          <ellipse cx="155" cy="78" rx="48" ry="16" fill="white" opacity="0.24" />
        </svg>
      </motion.div>

      {/* ── MID CLOUD left — drifting ── */}
      <motion.div
        animate={{ x: [0, 28, 0], y: [0, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 7 }}
        className="absolute top-[38%] left-[-8%] z-0 pointer-events-none"
        style={{ opacity: 0.48 }}
      >
        <svg width="220" height="110" viewBox="0 0 220 110" fill="none">
          <defs>
            <linearGradient id="ck-g3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7f2ff" />
              <stop offset="100%" stopColor="#ddd0f8" />
            </linearGradient>
          </defs>
          <ellipse cx="110" cy="92" rx="100" ry="22" fill="url(#ck-g3)" />
          <circle cx="50" cy="72" r="32" fill="url(#ck-g3)" />
          <circle cx="95" cy="56" r="44" fill="url(#ck-g3)" />
          <circle cx="152" cy="62" r="38" fill="url(#ck-g3)" />
          <circle cx="195" cy="76" r="26" fill="url(#ck-g3)" />
          <ellipse cx="100" cy="53" rx="32" ry="12" fill="white" opacity="0.30" />
        </svg>
      </motion.div>

      {/* ── SMALL CLOUD top-right ── */}
      <motion.div
        animate={{ x: [0, -16, 0], y: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[10%] right-[12%] z-0 pointer-events-none"
        style={{ opacity: 0.40 }}
      >
        <svg width="150" height="76" viewBox="0 0 150 76" fill="none">
          <defs>
            <linearGradient id="ck-g4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#faf5ff" />
              <stop offset="100%" stopColor="#e8d8ff" />
            </linearGradient>
          </defs>
          <ellipse cx="75" cy="62" rx="65" ry="17" fill="url(#ck-g4)" />
          <circle cx="34" cy="48" r="22" fill="url(#ck-g4)" />
          <circle cx="66" cy="35" r="30" fill="url(#ck-g4)" />
          <circle cx="106" cy="42" r="26" fill="url(#ck-g4)" />
          <circle cx="130" cy="54" r="18" fill="url(#ck-g4)" />
          <ellipse cx="70" cy="33" rx="22" ry="9" fill="white" opacity="0.28" />
        </svg>
      </motion.div>

      {/* ── WISPY CLOUD top-left ── */}
      <motion.div
        animate={{ x: [0, 14, 0], y: [0, -8, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 11 }}
        className="absolute top-[20%] left-[4%] z-0 pointer-events-none"
        style={{ opacity: 0.30 }}
      >
        <svg width="100" height="52" viewBox="0 0 100 52" fill="none">
          <defs>
            <linearGradient id="ck-g5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8f4ff" />
              <stop offset="100%" stopColor="#e0ccff" />
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="42" rx="42" ry="13" fill="url(#ck-g5)" />
          <circle cx="24" cy="33" r="16" fill="url(#ck-g5)" />
          <circle cx="47" cy="23" r="21" fill="url(#ck-g5)" />
          <circle cx="74" cy="29" r="17" fill="url(#ck-g5)" />
        </svg>
      </motion.div>

      {/* ── SPEED LINES rising from rocket ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[
          { left: '44%', height: '35%', top: '30%', opacity: 0.08, color: '#9E70CE', width: '1px', rotate: '-2deg' },
          { left: '52%', height: '28%', top: '38%', opacity: 0.06, color: '#5491ff', width: '2px', rotate: '1deg' },
          { left: '40%', height: '20%', top: '42%', opacity: 0.05, color: '#9E70CE', width: '1px', rotate: '-4deg' },
        ].map((s, i) => (
          <div key={i} className="absolute" style={{
            left: s.left, top: s.top, width: s.width, height: s.height,
            background: `linear-gradient(180deg, ${s.color} 0%, transparent 100%)`,
            opacity: s.opacity, transform: `rotate(${s.rotate})`, borderRadius: 4,
          }} />
        ))}
      </div>

      {/* launch wrapper — y animates here */}
      <div ref={launchRef} className="relative flex flex-col items-center" style={{ willChange: 'transform' }}>

        {/* float wrapper — idle bob here */}
        <div ref={floatRef} className="relative flex flex-col items-center" style={{ willChange: 'transform' }}>
          <svg viewBox="0 0 240 420" width="240" height="420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* body: left-lit cylinder shading */}
              <linearGradient id="rk-body" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7030a0" />
                <stop offset="22%" stopColor="#9e60cc" />
                <stop offset="50%" stopColor="#dcc8f8" />
                <stop offset="78%" stopColor="#9050b8" />
                <stop offset="100%" stopColor="#4a1880" />
              </linearGradient>
              {/* nose cone */}
              <linearGradient id="rk-nose" x1="120" y1="8" x2="120" y2="110" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f4eaff" />
                <stop offset="40%" stopColor="#c49de8" />
                <stop offset="100%" stopColor="#7030a0" />
              </linearGradient>
              <linearGradient id="rk-nose-side" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5a1880" />
                <stop offset="50%" stopColor="#c49de8" />
                <stop offset="100%" stopColor="#4a1470" />
              </linearGradient>
              {/* fins */}
              <linearGradient id="rk-fin-l" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6030a0" />
                <stop offset="100%" stopColor="#3060d0" />
              </linearGradient>
              <linearGradient id="rk-fin-r" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4a1880" />
                <stop offset="100%" stopColor="#2040a0" />
              </linearGradient>
              {/* stripe */}
              <linearGradient id="rk-stripe" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3060d0" />
                <stop offset="50%" stopColor="#a060e8" />
                <stop offset="100%" stopColor="#3060d0" />
              </linearGradient>
              {/* window */}
              <radialGradient id="rk-win" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#c8e8ff" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#4080c0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#060412" stopOpacity="1" />
              </radialGradient>
              {/* nozzle */}
              <linearGradient id="rk-nozzle" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2a1050" />
                <stop offset="100%" stopColor="#0a0418" />
              </linearGradient>
              <filter id="rk-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="rk-soft" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="-4" dy="6" stdDeviation="10" floodColor="#5020a0" floodOpacity="0.45" />
              </filter>
            </defs>

            {/* ── LEFT FIN ── */}
            {/* main face */}
            <path d="M 88,295 L 32,385 L 32,340 L 82,278 Z" fill="url(#rk-fin-l)" />
            {/* inner bevel */}
            <path d="M 88,295 L 32,385 L 58,385 L 90,308 Z" fill="#5491ff" opacity="0.55" />
            {/* edge highlight */}
            <line x1="88" y1="295" x2="32" y2="385" stroke="#a0c0ff" strokeWidth="1" opacity="0.3" />

            {/* ── RIGHT FIN ── */}
            <path d="M 152,295 L 208,385 L 208,340 L 158,278 Z" fill="url(#rk-fin-r)" />
            <path d="M 152,295 L 208,385 L 182,385 L 150,308 Z" fill="#3050b0" opacity="0.55" />
            <line x1="152" y1="295" x2="208" y2="385" stroke="#6080c0" strokeWidth="1" opacity="0.25" />

            {/* ── BODY ── */}
            <rect x="72" y="100" width="96" height="286" rx="10" fill="url(#rk-body)" filter="url(#rk-soft)" />

            {/* rivet row left */}
            {[120, 150, 180, 210, 250, 280].map(y => (
              <circle key={y} cx="78" cy={y} r="1.8" fill="white" opacity="0.18" />
            ))}
            {/* rivet row right */}
            {[120, 150, 180, 210, 250, 280].map(y => (
              <circle key={y} cx="162" cy={y} r="1.8" fill="white" opacity="0.12" />
            ))}

            {/* vertical center seam */}
            <line x1="120" y1="102" x2="120" y2="384" stroke="white" strokeWidth="0.6" opacity="0.1" />

            {/* ── ACCENT STRIPE 1 ── */}
            <rect x="72" y="238" width="96" height="14" rx="2" fill="url(#rk-stripe)" opacity="0.8" />
            {/* ── ACCENT STRIPE 2 ── */}
            <rect x="72" y="268" width="96" height="5" rx="1" fill="url(#rk-stripe)" opacity="0.45" />

            {/* ── NOSE CONE ── rounded Falcon-9 style */}
            <path d="M 72,108 C 72,108 72,40 120,8 C 168,40 168,108 168,108 Z"
              fill="url(#rk-nose)" />
            {/* nose shading left */}
            <path d="M 72,108 C 72,108 72,40 120,8 C 100,30 92,70 92,108 Z"
              fill="white" opacity="0.05" />
            {/* nose shading right */}
            <path d="M 168,108 C 168,108 168,40 120,8 C 140,30 148,70 148,108 Z"
              fill="black" opacity="0.12" />
            {/* nose highlight streak */}
            <path d="M 104,95 C 106,60 112,30 120,12" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" fill="none" />

            {/* ── PORTHOLE WINDOWS ── */}
            {/* main window */}
            <circle cx="120" cy="176" r="26" fill="#0a0618" />
            <circle cx="120" cy="176" r="22" fill="url(#rk-win)" />
            <circle cx="120" cy="176" r="22" fill="none" stroke="#c0a0f0" strokeWidth="1.5" opacity="0.7" />
            <circle cx="120" cy="176" r="18" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15" />
            {/* window inner glass glare */}
            <path d="M 109,165 Q 114,160 124,165" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" fill="none" />
            <circle cx="127" cy="168" r="2" fill="white" opacity="0.3" />

            {/* small upper portholes */}
            <circle cx="120" cy="135" r="8" fill="#080416" />
            <circle cx="120" cy="135" r="6.5" fill="url(#rk-win)" />
            <circle cx="120" cy="135" r="6.5" fill="none" stroke="#c0a0f0" strokeWidth="1" opacity="0.5" />
            <path d="M 115,131 Q 118,129 122,131" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" fill="none" />

            {/* ── ENGINE SKIRT ── */}
            <path d="M 80,382 L 72,398 Q 96,408 120,408 Q 144,408 168,398 L 160,382 Z"
              fill="url(#rk-nozzle)" />
            {/* skirt inner ring */}
            <ellipse cx="120" cy="382" rx="40" ry="7" fill="#1c0840" />
            <ellipse cx="120" cy="382" rx="28" ry="5" fill="#100428" />

            {/* ── NOZZLE BELLS ── 3 engines */}
            <ellipse cx="97" cy="394" rx="11" ry="5" fill="#0e0328" />
            <ellipse cx="97" cy="394" rx="8" ry="3" fill="#06021a" />
            <ellipse cx="120" cy="396" rx="13" ry="6" fill="#0e0328" />
            <ellipse cx="120" cy="396" rx="10" ry="4" fill="#06021a" />
            <ellipse cx="143" cy="394" rx="11" ry="5" fill="#0e0328" />
            <ellipse cx="143" cy="394" rx="8" ry="3" fill="#06021a" />

            {/* ── LOGO DECAL ── subtle S on body */}
            <text x="120" y="228" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold"
              fontSize="22" fill="white" opacity="0.07">S</text>
          </svg>
        </div>

        {/* ── FLAME — 3 children for independent flicker ── */}
        <div ref={flameRef} className="-mt-3 relative flex justify-center" style={{ willChange: 'transform' }}>
          {/* core: white/yellow, sharpest */}
          <div style={{
            width: 22, height: 100, transformOrigin: 'top center', willChange: 'transform', position: 'relative', zIndex: 3,
            background: 'linear-gradient(180deg,#fff 0%,#fef9c3 10%,#fde047 25%,#f97316 55%,#dc2626 80%,transparent 100%)',
            borderRadius: '50% 50% 36% 36%', filter: 'blur(2px)'
          }} />
          {/* mid: orange halo */}
          <div style={{
            position: 'absolute', width: 44, height: 120, top: 0, transformOrigin: 'top center', willChange: 'transform',
            background: 'linear-gradient(180deg,#fef08a 0%,#f97316 30%,#ef4444 62%,transparent 100%)',
            borderRadius: '50% 50% 36% 36%', filter: 'blur(7px)', opacity: 0.8
          }} />
          {/* outer: wide heat glow */}
          <div style={{
            position: 'absolute', width: 80, height: 90, top: 8, transformOrigin: 'top center', willChange: 'transform',
            background: 'linear-gradient(180deg,#fb923c 0%,#ef444480 40%,transparent 80%)',
            borderRadius: '50% 50% 40% 40%', filter: 'blur(18px)', opacity: 0.55
          }} />
        </div>

        {/* smoke puff — expands on launch */}
        <div ref={smokeRef} className="w-24 h-7 rounded-full mt-1"
          style={{
            background: 'radial-gradient(ellipse,rgba(210,170,255,0.45) 0%,transparent 70%)',
            filter: 'blur(10px)', transformOrigin: 'center top', willChange: 'transform'
          }} />

        {/* ground glow */}
        <div className="w-40 h-2 rounded-full mt-1"
          style={{ background: 'radial-gradient(ellipse,#f97316 0%,transparent 70%)', filter: 'blur(8px)', opacity: 0.45 }} />
      </div>
    </div>
  )
}



// ─── Testimonial Graphic ──────────────────────────────────────────────────
function TestimonialGraphic() {
  return (
    <div className="relative flex items-center justify-center w-full h-[450px] md:h-[580px] select-none" aria-hidden="true">
      {/* ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#9E70CE]/20 to-[#5390FF]/20 rounded-full blur-[100px]" />

      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <svg viewBox="0 0 400 400" className="w-[98%] max-w-[450px] h-auto drop-shadow-[0_45px_65px_rgba(83,144,255,0.3)] overflow-visible">
          <defs>
            <linearGradient id="tg-main" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9E70CE" />
              <stop offset="100%" stopColor="#7346A1" />
            </linearGradient>
            <linearGradient id="tg-sec" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5390FF" />
              <stop offset="100%" stopColor="#2D66E0" />
            </linearGradient>
            <linearGradient id="tg-star" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <filter id="tg-drop" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="-4" dy="8" stdDeviation="15" floodColor="#9E70CE" floodOpacity="0.4" />
            </filter>
            <filter id="tg-drop-sec" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="4" dy="8" stdDeviation="12" floodColor="#5390FF" floodOpacity="0.35" />
            </filter>
            <filter id="tg-glow-star" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* BACK BUBBLE (Blue) */}
          <path d="M 280,100 C 280,60 320,30 360,30 C 400,30 440,60 440,100 C 440,140 400,170 360,170 C 340,170 320,180 300,190 C 300,190 310,170 310,170 C 290,150 280,120 280,100 Z"
            fill="url(#tg-sec)" filter="url(#tg-drop-sec)" transform="matrix(-0.8 0 0 0.8 450 60)" />

          {/* MAIN BUBBLE (Purple) */}
          <path d="M 40,180 C 40,90 130,40 220,40 C 310,40 370,90 370,180 C 370,270 310,320 220,320 C 180,320 130,330 90,350 C 90,350 110,310 110,310 C 60,270 40,230 40,180 Z"
            fill="url(#tg-main)" filter="url(#tg-drop)" />

          {/* HEAD/AVATAR inside bubble */}
          <circle cx="110" cy="220" r="30" fill="white" opacity="0.9" />
          <path d="M 82,275 C 82,252 94,240 110,240 C 126,240 138,252 138,275" stroke="white" strokeWidth="10" strokeLinecap="round" opacity="0.9" fill="none" />

          {/* INNER WHITE HIGHLIGHT streaks */}
          <path d="M 80,100 C 120,60 180,50 220,50" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.35" fill="none" />

          {/* RATING STARS 5x */}
          <g transform="translate(160, 110) scale(1.2)">
            {[0, 30, 60, 90, 120].map((dx, i) => (
              <path key={i} transform={`translate(${dx}, 0)`}
                d="M10,0 l3,6.5 l7,1 l-5,5 l1,7.5 l-6,-3.5 l-6,3.5 l1,-7.5 l-5,-5 l7,-1 z"
                fill="url(#tg-star)" filter="url(#tg-glow-star)" />
            ))}
          </g>

          {/* CHAT LINES (Placeholder for text) */}
          <rect x="160" y="195" width="165" height="12" rx="6" fill="white" opacity="0.95" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))' }} />
          <rect x="160" y="228" width="135" height="12" rx="6" fill="white" opacity="0.95" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))' }} />
          <rect x="160" y="261" width="105" height="12" rx="6" fill="white" opacity="0.95" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))' }} />

          {/* DECORATIVE SPARKLES */}
          <motion.g animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.3, 0.9] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}>
            <path d="M 20,40 Q 30,40 30,30 Q 30,40 40,40 Q 30,40 30,50 Q 30,40 20,40 Z" fill="#fef08a" />
          </motion.g>

          <motion.g animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.3, 0.9] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}>
            <path d="M 370,280 Q 385,280 385,265 Q 385,280 400,280 Q 385,280 385,295 Q 385,280 370,280 Z" fill="#fef08a" />
          </motion.g>

          <motion.g animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.3, 0.9] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}>
            <path d="M 340,70 Q 350,70 350,60 Q 350,70 360,70 Q 350,70 350,80 Q 350,70 340,70 Z" fill="white" opacity="0.9" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function Home() {
  const { lang, t, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    budget: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail) return
    setNewsletterStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      })
      setNewsletterStatus(res.ok ? 'done' : 'error')
    } catch {
      setNewsletterStatus('error')
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.name) return
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      // silently fail — user sees the form still open
    } finally {
      setLoading(false)
    }
  }

  const h = t.hero
  const s = t.services
  const m = t.method
  const b = t.blog
  const c = t.contact
  const f = t.footer

  return (
    <main className="bg-surface font-body text-on-surface">

      {/* ═══════════════════════════════════════════ NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-[0_8px_32px_rgba(27,27,30,0.07)]' : 'bg-white/60'} backdrop-blur-xl`}>
        <div className="flex justify-between items-center px-6 sm:px-8 py-4 max-w-7xl mx-auto">
          <a href="/" className="flex items-center gap-1.5 group" aria-label="SIMPLA home">
            <SIMPLALogo className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
            <img src="/assets/Simpla-Logo-Web.png" alt="SIMPLA" className="h-6 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {t.nav.links.map(link => (
              <a key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-on-surface-variant hover:text-primary rounded-lg hover:bg-surface-container-low transition-all">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant/50 text-sm font-semibold text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all" aria-label="Toggle language">
              <span className={lang === 'en' ? 'text-primary' : 'text-outline'}>EN</span>
              <span className="text-outline-variant">/</span>
              <span className={lang === 'es' ? 'text-primary' : 'text-outline'}>ES</span>
            </button>
            <a href="#contact" className="bg-gradient-to-br from-primary to-secondary-container text-white px-6 py-2.5 rounded-full font-headline text-sm font-bold shadow-lg hover:opacity-85 hover:-translate-y-px transition-all duration-200">
              {t.nav.cta}
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="px-2.5 py-1.5 rounded-full border border-outline-variant/50 text-xs font-bold text-on-surface-variant" aria-label="Toggle language">
              {lang.toUpperCase()}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-lg hover:bg-surface-container-low transition-colors" aria-label="Menu">
              {mobileOpen ? <X className="w-5 h-5 text-on-surface" /> : <Menu className="w-5 h-5 text-on-surface" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl bg-white/90 backdrop-blur-xl border border-outline-variant/20 shadow-2xl overflow-hidden">
            <nav className="p-4 flex flex-col gap-1">
              {t.nav.links.map(link => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-xl transition-all">
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-outline-variant/20">
                <a href="#contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-full bg-gradient-to-br from-primary to-secondary-container text-white py-3 rounded-full font-headline font-bold text-sm">
                  {t.nav.cta}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════ HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" aria-hidden="true" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px]" aria-hidden="true" />
        <div className="container mx-auto px-6 lg:px-16 grid md:grid-cols-12 gap-8 items-center relative z-10 py-20">
          {/* Left — 7 cols */}
          <div className="md:col-span-7 space-y-7">
            <motion.h1 initial={{ y: 24 }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-headline font-black tracking-tighter leading-[1.04] text-on-surface"
              style={{ fontSize: 'clamp(3.5rem,6vw,6rem)', letterSpacing: '-0.04em' }}>
              {h.tagline.split(' ').slice(0, -1).join(' ')} <span className="gradient-text">{h.tagline.split(' ').slice(-1)}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 96 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-2 bg-gradient-to-r from-primary to-secondary-container rounded-full shadow-lg shadow-primary/20"
            />

            <motion.p initial={{ y: 16 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-on-surface/90 max-w-xl leading-relaxed font-medium opacity-80">
              {h.description}
            </motion.p>

            <motion.div initial={{ y: 12 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 items-center">
              <a href="#contact" className="bg-gradient-to-br from-primary to-secondary-container text-white px-7 py-3 rounded-full font-headline font-bold text-sm md:text-base shadow-xl shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200">
                {h.cta1}
              </a>
              <a href="#services" className="flex items-center gap-2 px-5 py-3 rounded-full font-headline font-bold text-sm md:text-base text-primary hover:bg-surface-container-low transition-all duration-200">
                {h.cta2} <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </motion.div>

            {/* No stats per user request */}
          </div>

          {/* Right — 5 cols, rocket */}
          <div className="hidden md:flex md:col-span-5 items-center justify-center">
            <HeroRocket />
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════ SERVICES */}
      <section id="services" className="py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mb-16 space-y-6">
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter gradient-text leading-[1.1]">{s.title}</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary-container rounded-full" />
            <p className="text-lg md:text-xl text-on-surface font-medium leading-relaxed opacity-80">{s.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {s.items.map((item, i) => {
              const serviceKeys = ['Meta Ads', 'Google Ads', 'TikTok Ads', 'LinkedIn Ads', 'More Platforms', 'Ad Creative']
              const details = SERVICE_DETAILS[serviceKeys[i]] || { icon: ArrowRight, color: '#7346a1' }
              const Icon = details.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group relative flex flex-col p-5 rounded-2xl border border-outline-variant/10 bg-white/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
                >
                  {/* hover background tint */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${details.color}12 0%, ${details.color}05 100%)` }} />

                  {/* header: icon + title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${details.color}12`, color: details.color }}>
                      <Icon className="w-[18px] h-[18px]" />
                    </div>
                    <h3 className="font-headline font-black text-base md:text-lg text-on-surface group-hover:text-primary transition-colors duration-200 leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* description — clamped so bullets always start at the same position */}
                  <p className="text-[13px] text-on-surface/65 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* subitems as bullets */}
                  <div className="flex flex-col gap-2 pt-3 border-t border-outline-variant/10">
                    {item.subitems.map((subitem) => (
                      <div key={subitem} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: `${details.color}15` }}>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: details.color }} />
                        </div>
                        <span className="text-[13px] font-medium text-on-surface/75">{subitem}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ HAPPY CLIENTS */}
      <section id="work" className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-14 space-y-4">
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter gradient-text leading-[1.1]">
              {t.clients.title}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary-container rounded-full" />
            <p className="text-lg md:text-xl text-on-surface font-medium opacity-70 leading-relaxed">
              {t.clients.subtitle}
            </p>
          </div>

          {/* Logo grid */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { src: '/assets/Logos/pixeldustlogo.jpg', alt: 'Pixeldust' },
              { src: '/assets/Logos/images.png', alt: 'Open Sports', multiply: true },
              { src: '/assets/Logos/ahadvisory.png', alt: 'AH Advisory', scale: 1.3 },
              { src: '/assets/Logos/metasoccer-logo.png', alt: 'MetaSoccer', scale: 1.8, multiply: true },
              { src: '/assets/Logos/realmint.png', alt: 'Realmint', scale: 3.5 },
              { src: '/assets/Logos/naventlogo.png', alt: 'Navent' },
              { src: '/assets/Logos/obitus_logo.webp', alt: 'Obitus', invert: true },
              { src: '/assets/Logos/fundasmulticoverlogo.webp', alt: 'Multicover', invert: true, scale: 2.2 },
            ].map((logo, i) => (
              <motion.div
                key={logo.src}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="h-28 w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] rounded-3xl border border-white bg-white/50 flex items-center justify-center p-8 group hover:shadow-xl hover:shadow-primary/5 hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ transform: `scale(${(logo as any).scale || 1})` }}
                  className={`w-full h-full max-h-12 object-contain transition-opacity duration-300 ${
                    (logo as any).invert
                      ? 'invert opacity-50 group-hover:opacity-100'
                      : (logo as any).multiply
                        ? 'mix-blend-multiply grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100'
                        : 'grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ METHOD */}
      <section id="method" className="py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16 space-y-6">
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter gradient-text leading-[1.1]">{m.title}</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary-container rounded-full" />
            <p className="text-lg md:text-xl text-on-surface font-medium leading-relaxed opacity-80">{m.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {m.steps.map((step, i) => {
              const Icon = METHOD_ICONS[i]
              const accent = i % 2 === 0 ? '#7346a1' : '#5491ff'
              return (
                <div key={step.number} className="glass-card rounded-2xl border border-outline-variant/15 p-8 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-headline font-black text-5xl leading-none" style={{ color: `${accent}18`, letterSpacing: '-0.04em' }}>{step.number}</span>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `${accent}12`, color: accent }}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-on-surface text-sm leading-relaxed font-medium">{step.description}</p>
                  <div className="mt-6 h-0.5 w-0 rounded-full group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} aria-hidden="true" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ TESTIMONIALS */}
      <section id="testimonials" className="py-32 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter gradient-text leading-[1.1]">
              {t.testimonials.title}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary-container mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              {t.testimonials.items.map((item, i) => (
                <div key={item.name} className={`glass-card p-10 rounded-2xl shadow-xl shadow-on-surface/5 border border-white relative ${i === 1 ? 'md:ml-12' : ''}`}>
                  <span className="font-headline font-black text-6xl absolute -top-5 -left-3 opacity-15 leading-none select-none gradient-text" aria-hidden="true">"</span>
                  <p className="text-lg italic text-on-surface leading-relaxed mb-8">"{item.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-headline font-bold text-[17px] text-white shadow-sm"
                      style={{ background: i === 0 ? 'linear-gradient(135deg, #b08ce0, #7346A1)' : 'linear-gradient(135deg, #8cb5ff, #2D66E0)' }}>
                      {item.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                    <div>
                      <h5 className="font-headline font-bold text-on-surface">{item.name}</h5>
                      <p className="text-sm text-on-surface-variant">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block relative">
              <TestimonialGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ BLOG */}
      <section id="blog" className="py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter gradient-text leading-[1.1]">{b.title}</h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary-container rounded-full" />
              <p className="text-lg md:text-xl text-on-surface font-medium leading-relaxed opacity-80">{b.subtitle}</p>
            </div>
            <a href="/blog" className="group flex items-center gap-3 font-headline font-bold text-on-surface hover:text-primary transition-colors whitespace-nowrap self-start sm:self-end">
              {b.cta}
              <span className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors">
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {b.posts.map((post, i) => {
              const accent = i % 2 === 0 ? '#7346a1' : '#5491ff'
              const BLOG_IMAGES = [
                '/assets/Blog/blog_seo_globe.png',
                '/assets/Blog/blog_strategy_box.png',
                '/assets/Blog/blog_automation_gears.png'
              ]
              return (
                <a key={post.title} href={`/blog/${posts[i]?.slug ?? '#'}`} className="group glass-card rounded-2xl overflow-hidden border border-outline-variant/15 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
                  <div className="h-48 relative overflow-hidden bg-surface-container">
                    <img src={BLOG_IMAGES[i]} alt={post.title} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accent}30 0%, transparent 100%)` }} />
                    <div className="absolute bottom-3 left-3 z-20">
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider" style={{ background: `${accent}18`, border: `1px solid ${accent}35`, color: accent }}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-headline font-bold text-on-surface text-base leading-snug mb-2.5 group-hover:text-primary transition-colors flex-1">{post.title}</h3>
                    <p className="text-on-surface/90 text-sm leading-relaxed mb-4 line-clamp-3 font-medium">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-outline">{post.date} · {post.readTime}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-outline group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" aria-hidden="true" />
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ GLOBAL PRESENCE */}
      <section className="py-32 bg-[#0B0510] relative overflow-hidden text-white border-t border-purple-900/30">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" aria-hidden="true" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-[120px]" aria-hidden="true" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter leading-[1.1]"
              dangerouslySetInnerHTML={{ __html: t.presence.title }} />
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary-fixed-dim to-secondary-fixed mx-auto rounded-full" />
            <p className="text-lg md:text-xl font-medium opacity-80 max-w-2xl mx-auto leading-relaxed">
              {t.presence.subtitle}
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-3xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-md flex items-center justify-center">
            {/* Map Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '4% 4%'
            }}></div>

            <div className="relative w-full h-full max-w-[90%] max-h-[90%] mx-auto mt-[4%]">
              <img src="/assets/world-map.svg" alt="World Map" className="absolute inset-0 w-full h-full object-fill opacity-20 invert" aria-hidden="true" />

              {/* Connection Arcs (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 overflow-visible">
                <path d="M 28% 75% Q 30% 50% 20% 30%" fill="none" stroke="url(#arc-gradient)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[spin_40s_linear_infinite]" />
                <path d="M 28% 75% Q 40% 60% 48% 30%" fill="none" stroke="url(#arc-gradient)" strokeWidth="1.5" strokeDasharray="4,4" />
                <path d="M 28% 75% Q 55% 70% 65% 45%" fill="none" stroke="url(#arc-gradient)" strokeWidth="1.5" strokeDasharray="4,4" />
                <defs>
                  <linearGradient id="arc-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#dcb8ff" />
                    <stop offset="100%" stopColor="#5491ff" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Animated Map Locators */}
              {[
                { name: 'Canada', top: '12%', left: '20%', delay: 0 },
                { name: 'USA', top: '25%', left: '20%', delay: 0.2 },
                { name: 'Mexico', top: '38%', left: '18%', delay: 0.4 },
                { name: 'Argentina', top: '75%', left: '28%', delay: 0, primary: true },
                { name: 'Uruguay', top: '72%', left: '32%', delay: 0.6 },
                { name: 'UK', top: '22%', left: '46%', delay: 0.3 },
                { name: 'Spain', top: '31%', left: '47%', delay: 0.8 },
                { name: 'France', top: '28%', left: '49%', delay: 0.5 },
                { name: 'Dubai', top: '42%', left: '60%', delay: 0.7 },
              ].map((loc) => (
                <div key={loc.name} className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2" style={{ top: loc.top, left: loc.left }}>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: loc.delay }}
                    className="relative"
                  >
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${loc.primary ? 'bg-secondary-fixed shadow-[0_0_20px_rgba(84,145,255,0.9)]' : 'bg-primary-fixed shadow-[0_0_15px_rgba(220,184,255,0.8)]'}`} />
                    <div className={`absolute inset-0 rounded-full animate-ping opacity-60 ${loc.primary ? 'bg-secondary-fixed' : 'bg-primary-fixed'}`} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ CONTACT */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-headline font-black tracking-tighter leading-tight text-center"
              style={{ fontSize: 'clamp(3.5rem,8vw,7rem)', letterSpacing: '-0.05em' }}>
              {c.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="gradient-text">{c.title.split(' ').slice(-1)}</span>
            </h2>
            <div className="w-28 h-2 bg-gradient-to-r from-primary to-secondary-container mx-auto rounded-full mb-8 shadow-lg shadow-primary/20" />
            <p className="text-lg md:text-xl text-on-surface font-medium max-w-xl mx-auto leading-relaxed opacity-70 mb-10">{c.subtitle}</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-4">{c.labels.name}</label>
                    <input
                      type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder={c.placeholders.name} required
                      className="w-full px-6 py-4 rounded-2xl text-base text-on-surface placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all bg-white/70 border border-outline-variant/60 backdrop-blur-xl"
                      aria-label="Name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-4">{c.labels.email}</label>
                    <input
                      type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder={c.placeholders.email} required
                      className="w-full px-6 py-4 rounded-2xl text-base text-on-surface placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all bg-white/70 border border-outline-variant/60 backdrop-blur-xl"
                      aria-label="Email"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-4">{c.labels.company}</label>
                    <input
                      type="text" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder={c.placeholders.company}
                      className="w-full px-6 py-4 rounded-2xl text-base text-on-surface placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all bg-white/70 border border-outline-variant/60 backdrop-blur-xl"
                      aria-label="Company"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-4">{c.labels.country}</label>
                    <input
                      type="text" value={formData.country} onChange={e => setFormData({ ...formData, country: e.target.value })}
                      placeholder={c.placeholders.country}
                      className="w-full px-6 py-4 rounded-2xl text-base text-on-surface placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all bg-white/70 border border-outline-variant/60 backdrop-blur-xl"
                      aria-label="Country"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-4">{c.labels.budget}</label>
                    <input
                      type="text" value={formData.budget} onChange={e => setFormData({ ...formData, budget: e.target.value })}
                      placeholder={c.placeholders.budget}
                      className="w-full px-6 py-4 rounded-2xl text-base text-on-surface placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all bg-white/70 border border-outline-variant/60 backdrop-blur-xl"
                      aria-label="Budget"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-4">{c.labels.message}</label>
                  <textarea
                    value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                    rows={4} placeholder={c.placeholders.message}
                    className="w-full px-6 py-5 rounded-2xl text-base text-on-surface placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all bg-white/70 border border-outline-variant/60 backdrop-blur-xl resize-none"
                    aria-label="Message"
                  />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full bg-gradient-to-br from-primary to-secondary-container text-white px-8 py-5 rounded-2xl font-headline font-black text-lg shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 flex items-center gap-3 justify-center mt-4">
                  {loading
                    ? <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    : <><span>{c.cta}</span><ArrowRight className="w-5 h-5" aria-hidden="true" /></>}
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-3 py-4">
                <CheckCircle className="w-12 h-12 text-primary" aria-hidden="true" />
                <p className="font-headline font-bold text-on-surface text-lg">
                  {c.success}
                </p>
              </motion.div>
            )}

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ FOOTER */}
      <footer className="w-full rounded-t-[2.5rem] bg-gradient-to-br from-[#7346a1] to-[#5491ff] text-white overflow-hidden relative">
        <div className="container mx-auto max-w-7xl px-6 lg:px-16 pt-20 pb-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-7">
              <div className="flex items-center gap-1.5">
                <SIMPLALogo className="w-9 h-9" />
                <img src="/assets/Simpla-Logo-Web.png" alt="SIMPLA" className="h-7 w-auto brightness-0 invert" />
              </div>
              <p className="text-white/80 text-base leading-relaxed max-w-sm">
                {f.description}
              </p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/simpla-agency" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" aria-label="LinkedIn">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/simplaagency" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" aria-label="Instagram">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
              <div className="space-y-6">
                <h4 className="font-headline font-bold text-base text-white">{f.servicesTitle}</h4>
                <ul className="space-y-3">
                  {f.services.map(s => (
                    <li key={s}>
                      <a href="#services" className="text-white/80 hover:text-white hover:underline transition-all text-sm">
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="font-headline font-bold text-base text-white">{f.companyTitle}</h4>
                <ul className="space-y-3">
                  {f.companyLinks.map(l => (
                    <li key={l.label}>
                      <a href={l.href} className="text-white/80 hover:text-white hover:underline transition-all text-sm">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="font-headline font-bold text-base text-white">Newsletter</h4>
                <div className="space-y-3">
                  <p className="text-white/80 text-sm">Growth insights weekly.</p>
                  {newsletterStatus === 'done' ? (
                    <p className="text-white font-bold text-sm">{lang === 'es' ? '¡Suscripto!' : 'Subscribed!'}</p>
                  ) : (
                    <form onSubmit={handleNewsletter} className="flex gap-2">
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={newsletterEmail}
                        onChange={e => setNewsletterEmail(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:bg-white/20 w-full"
                        aria-label="Email newsletter"
                      />
                      <button
                        type="submit"
                        disabled={newsletterStatus === 'loading'}
                        className="bg-white text-[#7346a1] font-bold px-3 py-1.5 rounded-lg text-xs hover:bg-white/90 transition-all disabled:opacity-60"
                      >
                        {newsletterStatus === 'loading' ? '...' : '→'}
                      </button>
                    </form>
                  )}
                  {newsletterStatus === 'error' && (
                    <p className="text-red-300 text-xs">Error, intentá de nuevo.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-xs font-bold">{f.copyright}</p>
            <p className="font-headline italic text-white/50 text-xs font-bold">{f.tagline}</p>
          </div>
        </div>
      </footer>

    </main>
  )
}
