'use client'

import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Menu, X, ArrowRight, ArrowUpRight,
  PenLine, BarChart3, Globe, Zap, Clapperboard, Compass,
  Search, Map, Rocket, TrendingUp, CheckCircle, Target,
  MessageCircle, PlayCircle, MousePointer2, Smartphone, Cpu, ShieldCheck
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

// ─── Stitch image URLs ──────────────────────────────────────────────────────
const IMG = {
  portfolio1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIxsZ6SBrA0Uc6RIm5z4hLj-PVrzMdwxFcy9cYiXrKaRV6ZeYsqnZBl2ZyASLMN7310ECcKCZbFx6IMFEOwSHFogYjl4kN_Hz6cntUrzT7ADi01GjfKRm6LA68w-kswvM1quscIeW5ymJMo27WInnKq3hMRKwMJg0jx8zto9roQe1qQVSWkoKimGuWyqPtQTxUZ3ayjNMNJMD1VOmEUQw8qYXlJeWo7IdKfW0oU7goIxccqbRpT1uqerOoxgHnqB09ZV9Xs0qwEoQ8',
  portfolio2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS0pQANBBBDaxUZRiXhdQA-B2XsFW5YQuamuX9olD-oF9yRKuAIoT1PLvFWkBOZ4kpF5vq659Mzjs1Qy_vUUtqRVgw_1OWN6_JVLMNs66iFQYTnTTcurCujxPgxYaTSY9JFdZl3uwu-tZf8bKVArwDcGaxfHVGCya5RpjXlgr_TxyJ-yJvgCy4TH5CrWrfuQSjOHH9blUMCCBHKMF0KYOjjRLEf8m5CL02D3qc9UN-ZSwWVwSI5tWljC_JBJX96U9IUe9ul-llq5Ie',
  portfolio3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaRxlttEqRf4YJZKx2ik7zm7njd_JahuqOxw4PDlnnMeKVUWxMYyMqxzb_LgdA6bTJTD1xatLHwUBP8ebH8MgE7zdkPA_UZe2AjjPW9cqvWeKZd7KvE8mOxTdcYiQQbWsx2svtbhso9TRQSsroIwFHKVEua2xKfXeYDJ1qs9lIxvFIYNa3m87Lk24pNgtt6y0mfWZ49iCbbfbcFfyxMZVm_Obu8erdyD_fSSrU9OEQlbHP5erVRIFZ5FYXdezmSsS4VK7wYVm8_0Lh',
  portfolio4: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHeTMrYREFjQ0Vlv19ytNxwYvftc-71OF7NDSKyjMyGEzhcxOBYnIJc__p3z_47P2aKYxWcoVonfkrbffk-nbmHTNeMzTYa327jMbboO-9egFmCaXiV_6uUfMmEtuxWEPRm9frIpJ_GBGXLZS-DulhGKA_p9Lq4OHIBrJNPrR3knHSTZrhIMAsVEcW1I2SAdw4xoUUIMFsE0SOmOL0i23z2B4p5E7zraM1ATffbyZQLsXgqfcNA8rn7hV7sA3h0oSxvdGeo9DGt7QV',
  testimonial1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRbA3Ut27y0FUZjK90GytDNawlj-INkwC7MAvb43turCDivH2mZbs3A2PM7vD2KC8Q4qdUswGxfW9NjcjrHcErlVluY93HuIriZ2h8pcsPkWLhP7NzUPkaj9y8d5RX-egtVd9o1BRxCNK20giLgy644rUAfmXgrIWsQ3-m3i_Fc3T1uehQSuq9Ys4QNAwCydfhONe_mBQTgiUZO18kLi3QqBt8qSBnEqHVjGXiUvxBCTZz6faMh_8WqiE_-crW2Hw1mzvwtjSvb5R7',
  testimonial2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb-BrDHQlXeM5qjnlJwUeRLHfUo8yOYAz-jEg8qGRsp3G9OL_dqCeG9Aou8QgR0NRAlCY2dU1nypnl-6_Tpwk8y1osqh6BNuFlpMVsx8IdsuKJapawSYvNAzs7rq6S0F6uWEUuQ1QC9djCX0O3Wsg8uHt6XW14VNqSya1UbudoscRcmSUe09j0NLYYQIi4l8fRD5LRig99aOOJLBRA_B8kD677Wq1G2fbzRDpxuFh0wl1PEBhY0Js-5ZStnGc-KCtsNHlFTgiNyM16',
  teamPhoto:   'https://lh3.googleusercontent.com/aida-public/AB6AXuA1zimSg9D-HHeCm62cnWa9_lF_PxWVZK4i2bb8Y6M0-kb37x-GFfzktk2iP90UvivJVdQ4rvyKTMfvitVWeEHN6RQCYH4lLQdHE-EJcvdlqT12MSvX2M_WFMlLzRSS6lPFZ3tkzt2cFfiFi2I2I3VrqeDTkiVjPUfVNMb37BWVjoUr5Jm28pQAUFnlJYg2_gqvA5oM_V2doalDz0miA54HssAfhNROQjwCvxOV80jhUFvrHQLWPKphXESC9ue-AFtczmNn1_x7mMyi',
}

const SERVICE_DETAILS: Record<string, { icon: any, color: string, capabilities: string[] }> = {
  'Content': {
    icon: PenLine,
    color: '#7346a1',
    capabilities: ['Social Strategy', 'High-Converting Copy', 'Brand Storytelling', 'Content Calendars']
  },
  'Paid Media': {
    icon: Target,
    color: '#5491ff',
    capabilities: ['Meta & Google Ads', 'LinkedIn & TikTok', 'Retargeting Funnels', 'Budget Optimization']
  },
  'Web & Visibility': {
    icon: Globe,
    color: '#7346a1',
    capabilities: ['High-Performance Landing Pages', 'AI-Powered SEO (GEO)', 'Conversion UX', 'Advanced Analytics']
  },
  'Automation': {
    icon: Zap,
    color: '#5491ff',
    capabilities: ['Lead-Gen Chatbots', 'CRM Automations', 'AI Outbound Systems', 'Workflow Optimization']
  },
  'Video & Creative': {
    icon: Clapperboard,
    color: '#7346a1',
    capabilities: ['Short-form Reels/TikTok', 'UGC Direction', 'AI-Generated Promos', 'Visual Brand Identity']
  },
  'Strategy & Consulting': {
    icon: Compass,
    color: '#5491ff',
    capabilities: ['Market Positioning', 'Competitive Audits', 'Growth Roadmaps', 'ICP Identification']
  }
}

const METHOD_ICONS  = [Search, Map, Rocket, TrendingUp]

function SimplaLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} aria-label="Simpla">
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
  const launchRef  = useRef<HTMLDivElement>(null)
  const floatRef   = useRef<HTMLDivElement>(null)
  const flameRef   = useRef<HTMLDivElement>(null)
  const smokeRef   = useRef<HTMLDivElement>(null)
  const gsapRef    = useRef<any>(null)
  const busy       = useRef(false)
  const flickerTls = useRef<any[]>([])

  const startFlicker = (gsap: any, flame: HTMLDivElement) => {
    flickerTls.current.forEach(t => t.kill())
    flickerTls.current = [
      gsap.to(flame.children[0], { scaleY:1.28, scaleX:0.80, duration:0.11, ease:'none', yoyo:true, repeat:-1 }),
      gsap.to(flame.children[1], { scaleY:1.18, scaleX:0.88, duration:0.18, ease:'none', yoyo:true, repeat:-1 }),
      gsap.to(flame.children[2], { scaleY:1.10, scaleX:0.92, duration:0.27, ease:'none', yoyo:true, repeat:-1 }),
    ]
  }

  const doLaunch = async () => {
    if (busy.current) return
    busy.current = true

    const gsap   = gsapRef.current
    const launch = launchRef.current
    const smoke  = smokeRef.current
    const flame  = flameRef.current
    const float  = floatRef.current
    if (!gsap || !launch || !smoke || !flame || !float) { busy.current = false; return }

    // stop idle
    gsap.killTweensOf(float)
    flickerTls.current.forEach(t => t.kill())

    // launch sequence
    const tl = gsap.timeline()
    tl.to(launch, { x: 4, duration: 0.05, repeat: 7, yoyo: true, ease: 'none' })
    tl.to(smoke,  { scaleX: 6, scaleY: 3.5, opacity: 0, duration: 0.5, ease: 'power1.out' }, 0.1)
    tl.to(launch, { y: '-150vh', duration: 1.0, ease: 'power3.in' }, 0.35)
    await tl

    // wait 2s off-screen
    await gsap.delayedCall(2, () => {})

    // reset silently
    gsap.set(launch, { y: '-150vh', x: 0 })
    gsap.set(smoke,  { scaleX: 1, scaleY: 1, opacity: 1 })
    Array.from(flame.children).forEach(c => gsap.set(c, { scaleY: 1, scaleX: 1, opacity: 1 }))

    // glide back down
    await gsap.to(launch, { y: 0, duration: 1.6, ease: 'power2.out' })

    busy.current = false

    // restart idle
    gsap.to(float, { y: -14, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    startFlicker(gsap, flame)
  }

  useEffect(() => {
    ;(async () => {
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
        { l:'8%',  t:'12%', d:2.1, delay:0    },
        { l:'22%', t:'6%',  d:1.7, delay:0.4  },
        { l:'38%', t:'15%', d:2.8, delay:1.2  },
        { l:'55%', t:'5%',  d:1.9, delay:0.8  },
        { l:'70%', t:'20%', d:2.4, delay:0.2  },
        { l:'82%', t:'8%',  d:1.6, delay:1.6  },
        { l:'92%', t:'16%', d:2.2, delay:0.6  },
        { l:'15%', t:'30%', d:3.1, delay:1.0  },
        { l:'48%', t:'28%', d:1.8, delay:1.8  },
        { l:'78%', t:'32%', d:2.6, delay:0.3  },
        { l:'5%',  t:'45%', d:2.0, delay:2.0  },
        { l:'65%', t:'42%', d:1.5, delay:0.9  },
      ].map(({ l, t, d, delay }, i) => (
        <motion.div
          key={`star-${i}`}
          animate={{ opacity:[0.15, 0.7, 0.15], scale:[0.8, 1.3, 0.8] }}
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
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#9E70CE" floodOpacity="0.18"/>
            </filter>
          </defs>
          <g filter="url(#ck-drop1)">
            <ellipse cx="190" cy="148" rx="175" ry="30" fill="url(#ck-g1)" />
            <circle cx="68"  cy="120" r="44" fill="url(#ck-g1)" />
            <circle cx="128" cy="98"  r="58" fill="url(#ck-g1)" />
            <circle cx="200" cy="88"  r="65" fill="url(#ck-g1)" />
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
              <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#5491ff" floodOpacity="0.15"/>
            </filter>
          </defs>
          <g filter="url(#ck-drop2)">
            <ellipse cx="170" cy="134" rx="155" ry="26" fill="url(#ck-g2)" />
            <circle cx="58"  cy="110" r="38" fill="url(#ck-g2)" />
            <circle cx="112" cy="90"  r="52" fill="url(#ck-g2)" />
            <circle cx="178" cy="80"  r="58" fill="url(#ck-g2)" />
            <circle cx="244" cy="92"  r="46" fill="url(#ck-g2)" />
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
          <circle cx="50"  cy="72" r="32" fill="url(#ck-g3)" />
          <circle cx="95"  cy="56" r="44" fill="url(#ck-g3)" />
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
          <circle cx="34"  cy="48" r="22" fill="url(#ck-g4)" />
          <circle cx="66"  cy="35" r="30" fill="url(#ck-g4)" />
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
          <circle cx="24"  cy="33" r="16" fill="url(#ck-g5)" />
          <circle cx="47"  cy="23" r="21" fill="url(#ck-g5)" />
          <circle cx="74"  cy="29" r="17" fill="url(#ck-g5)" />
        </svg>
      </motion.div>

      {/* ── SPEED LINES rising from rocket ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[
          { left:'44%', height:'35%', top:'30%', opacity:0.08, color:'#9E70CE', width:'1px', rotate:'-2deg' },
          { left:'52%', height:'28%', top:'38%', opacity:0.06, color:'#5491ff', width:'2px', rotate:'1deg' },
          { left:'40%', height:'20%', top:'42%', opacity:0.05, color:'#9E70CE', width:'1px', rotate:'-4deg' },
        ].map((s, i) => (
          <div key={i} className="absolute" style={{
            left: s.left, top: s.top, width: s.width, height: s.height,
            background: `linear-gradient(180deg, ${s.color} 0%, transparent 100%)`,
            opacity: s.opacity, transform: `rotate(${s.rotate})`, borderRadius: 4,
          }} />
        ))}
      </div>

      {/* launch wrapper — y animates here */}
      <div ref={launchRef} className="relative flex flex-col items-center" style={{ willChange:'transform' }}>

        {/* float wrapper — idle bob here */}
        <div ref={floatRef} className="relative flex flex-col items-center" style={{ willChange:'transform' }}>
          <svg viewBox="0 0 240 420" width="240" height="420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* body: left-lit cylinder shading */}
              <linearGradient id="rk-body" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#7030a0" />
                <stop offset="22%"  stopColor="#9e60cc" />
                <stop offset="50%"  stopColor="#dcc8f8" />
                <stop offset="78%"  stopColor="#9050b8" />
                <stop offset="100%" stopColor="#4a1880" />
              </linearGradient>
              {/* nose cone */}
              <linearGradient id="rk-nose" x1="120" y1="8" x2="120" y2="110" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#f4eaff" />
                <stop offset="40%"  stopColor="#c49de8" />
                <stop offset="100%" stopColor="#7030a0" />
              </linearGradient>
              <linearGradient id="rk-nose-side" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#5a1880" />
                <stop offset="50%"  stopColor="#c49de8" />
                <stop offset="100%" stopColor="#4a1470" />
              </linearGradient>
              {/* fins */}
              <linearGradient id="rk-fin-l" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%"   stopColor="#6030a0" />
                <stop offset="100%" stopColor="#3060d0" />
              </linearGradient>
              <linearGradient id="rk-fin-r" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#4a1880" />
                <stop offset="100%" stopColor="#2040a0" />
              </linearGradient>
              {/* stripe */}
              <linearGradient id="rk-stripe" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#3060d0" />
                <stop offset="50%"  stopColor="#a060e8" />
                <stop offset="100%" stopColor="#3060d0" />
              </linearGradient>
              {/* window */}
              <radialGradient id="rk-win" cx="40%" cy="35%" r="60%">
                <stop offset="0%"   stopColor="#c8e8ff" stopOpacity="0.9"/>
                <stop offset="40%"  stopColor="#4080c0" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#060412" stopOpacity="1" />
              </radialGradient>
              {/* nozzle */}
              <linearGradient id="rk-nozzle" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#2a1050" />
                <stop offset="100%" stopColor="#0a0418" />
              </linearGradient>
              <filter id="rk-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="rk-soft" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="-4" dy="6" stdDeviation="10" floodColor="#5020a0" floodOpacity="0.45"/>
              </filter>
            </defs>

            {/* ── LEFT FIN ── */}
            {/* main face */}
            <path d="M 88,295 L 32,385 L 32,340 L 82,278 Z" fill="url(#rk-fin-l)" />
            {/* inner bevel */}
            <path d="M 88,295 L 32,385 L 58,385 L 90,308 Z" fill="#5491ff" opacity="0.55"/>
            {/* edge highlight */}
            <line x1="88" y1="295" x2="32" y2="385" stroke="#a0c0ff" strokeWidth="1" opacity="0.3"/>

            {/* ── RIGHT FIN ── */}
            <path d="M 152,295 L 208,385 L 208,340 L 158,278 Z" fill="url(#rk-fin-r)" />
            <path d="M 152,295 L 208,385 L 182,385 L 150,308 Z" fill="#3050b0" opacity="0.55"/>
            <line x1="152" y1="295" x2="208" y2="385" stroke="#6080c0" strokeWidth="1" opacity="0.25"/>

            {/* ── BODY ── */}
            <rect x="72" y="100" width="96" height="286" rx="10" fill="url(#rk-body)" filter="url(#rk-soft)" />

            {/* rivet row left */}
            {[120,150,180,210,250,280].map(y => (
              <circle key={y} cx="78" cy={y} r="1.8" fill="white" opacity="0.18"/>
            ))}
            {/* rivet row right */}
            {[120,150,180,210,250,280].map(y => (
              <circle key={y} cx="162" cy={y} r="1.8" fill="white" opacity="0.12"/>
            ))}

            {/* vertical center seam */}
            <line x1="120" y1="102" x2="120" y2="384" stroke="white" strokeWidth="0.6" opacity="0.1"/>

            {/* ── ACCENT STRIPE 1 ── */}
            <rect x="72" y="238" width="96" height="14" rx="2" fill="url(#rk-stripe)" opacity="0.8"/>
            {/* ── ACCENT STRIPE 2 ── */}
            <rect x="72" y="268" width="96" height="5" rx="1" fill="url(#rk-stripe)" opacity="0.45"/>

            {/* ── NOSE CONE ── rounded Falcon-9 style */}
            <path d="M 72,108 C 72,108 72,40 120,8 C 168,40 168,108 168,108 Z"
              fill="url(#rk-nose)" />
            {/* nose shading left */}
            <path d="M 72,108 C 72,108 72,40 120,8 C 100,30 92,70 92,108 Z"
              fill="white" opacity="0.05"/>
            {/* nose shading right */}
            <path d="M 168,108 C 168,108 168,40 120,8 C 140,30 148,70 148,108 Z"
              fill="black" opacity="0.12"/>
            {/* nose highlight streak */}
            <path d="M 104,95 C 106,60 112,30 120,12" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" fill="none"/>

            {/* ── PORTHOLE WINDOWS ── */}
            {/* main window */}
            <circle cx="120" cy="176" r="26" fill="#0a0618" />
            <circle cx="120" cy="176" r="22" fill="url(#rk-win)" />
            <circle cx="120" cy="176" r="22" fill="none" stroke="#c0a0f0" strokeWidth="1.5" opacity="0.7"/>
            <circle cx="120" cy="176" r="18" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15"/>
            {/* window inner glass glare */}
            <path d="M 109,165 Q 114,160 124,165" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" fill="none"/>
            <circle cx="127" cy="168" r="2" fill="white" opacity="0.3"/>

            {/* small upper portholes */}
            <circle cx="120" cy="135" r="8" fill="#080416"/>
            <circle cx="120" cy="135" r="6.5" fill="url(#rk-win)"/>
            <circle cx="120" cy="135" r="6.5" fill="none" stroke="#c0a0f0" strokeWidth="1" opacity="0.5"/>
            <path d="M 115,131 Q 118,129 122,131" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" fill="none"/>

            {/* ── ENGINE SKIRT ── */}
            <path d="M 80,382 L 72,398 Q 96,408 120,408 Q 144,408 168,398 L 160,382 Z"
              fill="url(#rk-nozzle)" />
            {/* skirt inner ring */}
            <ellipse cx="120" cy="382" rx="40" ry="7" fill="#1c0840"/>
            <ellipse cx="120" cy="382" rx="28" ry="5" fill="#100428"/>

            {/* ── NOZZLE BELLS ── 3 engines */}
            <ellipse cx="97"  cy="394" rx="11" ry="5" fill="#0e0328"/>
            <ellipse cx="97"  cy="394" rx="8"  ry="3" fill="#06021a"/>
            <ellipse cx="120" cy="396" rx="13" ry="6" fill="#0e0328"/>
            <ellipse cx="120" cy="396" rx="10" ry="4" fill="#06021a"/>
            <ellipse cx="143" cy="394" rx="11" ry="5" fill="#0e0328"/>
            <ellipse cx="143" cy="394" rx="8"  ry="3" fill="#06021a"/>

            {/* ── LOGO DECAL ── subtle S on body */}
            <text x="120" y="228" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold"
              fontSize="22" fill="white" opacity="0.07">S</text>
          </svg>
        </div>

        {/* ── FLAME — 3 children for independent flicker ── */}
        <div ref={flameRef} className="-mt-3 relative flex justify-center" style={{ willChange:'transform' }}>
          {/* core: white/yellow, sharpest */}
          <div style={{ width:22, height:100, transformOrigin:'top center', willChange:'transform', position:'relative', zIndex:3,
            background:'linear-gradient(180deg,#fff 0%,#fef9c3 10%,#fde047 25%,#f97316 55%,#dc2626 80%,transparent 100%)',
            borderRadius:'50% 50% 36% 36%', filter:'blur(2px)' }} />
          {/* mid: orange halo */}
          <div style={{ position:'absolute', width:44, height:120, top:0, transformOrigin:'top center', willChange:'transform',
            background:'linear-gradient(180deg,#fef08a 0%,#f97316 30%,#ef4444 62%,transparent 100%)',
            borderRadius:'50% 50% 36% 36%', filter:'blur(7px)', opacity:0.8 }} />
          {/* outer: wide heat glow */}
          <div style={{ position:'absolute', width:80, height:90, top:8, transformOrigin:'top center', willChange:'transform',
            background:'linear-gradient(180deg,#fb923c 0%,#ef444480 40%,transparent 80%)',
            borderRadius:'50% 50% 40% 40%', filter:'blur(18px)', opacity:0.55 }} />
        </div>

        {/* smoke puff — expands on launch */}
        <div ref={smokeRef} className="w-24 h-7 rounded-full mt-1"
          style={{ background:'radial-gradient(ellipse,rgba(210,170,255,0.45) 0%,transparent 70%)',
            filter:'blur(10px)', transformOrigin:'center top', willChange:'transform' }} />

        {/* ground glow */}
        <div className="w-40 h-2 rounded-full mt-1"
          style={{ background:'radial-gradient(ellipse,#f97316 0%,transparent 70%)', filter:'blur(8px)', opacity:0.45 }} />
      </div>
    </div>
  )
}



// ─── Page ──────────────────────────────────────────────────────────────────
export default function Home() {
  const { lang, t, setLang } = useLanguage()
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.name) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const h = t.hero
  const s = t.services
  const w = t.work
  const m = t.method
  const b = t.blog
  const c = t.contact
  const f = t.footer

  return (
    <main className="bg-surface font-body text-on-surface">

      {/* ═══════════════════════════════════════════ NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-[0_8px_32px_rgba(27,27,30,0.07)]' : 'bg-white/60'} backdrop-blur-xl`}>
        <div className="flex justify-between items-center px-6 sm:px-8 py-4 max-w-7xl mx-auto">
          <a href="#" className="flex items-center gap-2.5 group" aria-label="Simpla home">
            <SimplaLogo className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
            <span className="font-headline font-bold text-xl tracking-tight text-on-surface">Simpla</span>
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
            <motion.h1 initial={{ y: 24 }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }}
              className="font-headline font-black tracking-tighter leading-[1.04] text-on-surface"
              style={{ fontSize: 'clamp(3.5rem,6vw,6rem)', letterSpacing: '-0.04em' }}>
              Marketing done <span className="gradient-text">Simple</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, width: 0 }} 
              animate={{ opacity: 1, width: 96 }} 
              transition={{ duration: 1, delay: 0.2 }}
              className="h-2 bg-gradient-to-r from-primary to-secondary-container rounded-full shadow-lg shadow-primary/20" 
            />

            <motion.p initial={{ y: 16 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16,1,0.3,1] }}
              className="text-lg md:text-xl text-on-surface/90 max-w-xl leading-relaxed font-medium opacity-80">
              {h.description}
            </motion.p>

            <motion.div initial={{ y: 12 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.28, ease: [0.16,1,0.3,1] }}
              className="flex flex-wrap gap-4 items-center">
              <a href="#contact" className="bg-gradient-to-br from-primary to-secondary-container text-white px-7 py-3 rounded-full font-headline font-bold text-sm md:text-base shadow-xl shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200">
                {h.cta1}
              </a>
              <a href="#work" className="flex items-center gap-2 px-5 py-3 rounded-full font-headline font-bold text-sm md:text-base text-primary hover:bg-surface-container-low transition-all duration-200">
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

      {/* ═══════════════════════════════════════════ HAPPY CLIENTS CAROUSEL */}
      <section className="py-24 bg-surface border-y border-outline-variant/5 overflow-hidden">
        <div className="container mx-auto px-6 mb-14 text-center">
          <h2 className="text-sm font-headline font-black text-primary uppercase tracking-[0.4em] mb-4">Happy Clients</h2>
          <p className="text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tighter">Trusted by 150+ growth leaders</p>
        </div>

        <div className="relative flex overflow-hidden">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-surface to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-surface to-transparent" />
          
          <motion.div 
            className="flex gap-24 items-center whitespace-nowrap px-12"
            animate={{ x: [0, -1500] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[
              "FORBES", "TECHCRUNCH", "NIKE", "STRIPE", "SHOPIFY", "COCA COLA", "GOOGLE", "META",
              "FORBES", "TECHCRUNCH", "NIKE", "STRIPE", "SHOPIFY", "COCA COLA", "GOOGLE", "META"
            ].map((brand, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black tracking-tighter opacity-[0.08] grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default select-none hover:text-primary">
                {brand}
              </span>
            ))}
          </motion.div>
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
              const serviceKeys = ['Content', 'Paid Media', 'Web & Visibility', 'Automation', 'Video & Creative', 'Strategy & Consulting']
              const details = SERVICE_DETAILS[serviceKeys[i]] || { icon: ArrowRight, color: '#7346a1' }
              const Icon    = details.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col p-5 rounded-2xl border border-outline-variant/10 bg-white/50 hover:bg-white/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  {/* subtle hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 0% 0%, ${details.color}08 0%, transparent 70%)` }} />

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

                  {/* description */}
                  <p className="text-[13px] text-on-surface/65 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* subitems as pills */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {item.subitems.map((subitem) => (
                      <span key={subitem}
                        className="text-[11px] font-semibold px-2.5 py-[3px] rounded-full border transition-colors duration-200"
                        style={{
                          background: `${details.color}0A`,
                          color: details.color,
                          borderColor: `${details.color}20`,
                        }}>
                        {subitem}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ WORK */}
      <section id="work" className="py-32 bg-surface-container-low">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter gradient-text leading-[1.1]">{w.title}</h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary-container rounded-full" />
              <p className="text-lg md:text-xl text-on-surface font-medium opacity-80 leading-relaxed">{w.subtitle}</p>
            </div>
            <button className="group flex items-center gap-3 font-headline font-bold text-lg text-on-surface hover:text-primary transition-colors whitespace-nowrap">
              {w.cta}
              <span className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors">
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Case 1 — wide */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl h-[480px]">
              <img src={IMG.portfolio1} alt={w.cases[0].client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 flex flex-col justify-end">
                <span className="text-white font-headline font-black text-[10px] tracking-widest uppercase mb-2 opacity-80">{w.cases[0].industry}</span>
                <h4 className="text-2xl font-headline font-black text-white leading-tight tracking-tight">{w.cases[0].headline}</h4>
                <p className="text-white font-medium text-sm mt-1.5 opacity-90">{w.cases[0].client} — {w.cases[0].services}</p>
              </div>
            </div>
            {/* Case 2 — narrow */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl h-[480px]">
              <img src={IMG.portfolio2} alt={w.cases[1].client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 flex flex-col justify-end">
                <span className="text-white font-headline font-black text-xs tracking-widest uppercase mb-2">{w.cases[1].industry}</span>
                <h4 className="text-xl font-headline font-bold text-white leading-tight">{w.cases[1].headline}</h4>
                <p className="text-white font-bold text-sm mt-1">{w.cases[1].client} — {w.cases[1].services}</p>
              </div>
            </div>
            {/* Case 3 — narrow */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl h-[400px]">
              <img src={IMG.portfolio3} alt={w.cases[2].client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 flex flex-col justify-end">
                <span className="text-white font-headline font-black text-xs tracking-widest uppercase mb-2">{w.cases[2].industry}</span>
                <h4 className="text-xl font-headline font-bold text-white leading-tight">{w.cases[2].headline}</h4>
                <p className="text-white font-bold text-sm mt-1">{w.cases[2].client} — {w.cases[2].services}</p>
              </div>
            </div>
            {/* Manifesto card — wide */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl h-[400px] overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #7346a1 0%, #5491ff 100%)' }}>
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)' }} aria-hidden="true" />
              <div className="relative z-10 h-full flex flex-col justify-end p-10">
                <p className="font-headline font-extrabold text-white/30 leading-tight" style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)', letterSpacing: '-0.03em' }}>
                  {t.manifesto.line1}
                </p>
                <p className="font-headline font-extrabold text-white leading-tight" style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)', letterSpacing: '-0.03em' }}>
                  {t.manifesto.line2}
                </p>
                <div className="mt-6 h-px w-20 bg-white/30 rounded-full" />
                <p className="text-white text-base mt-2 max-w-md font-bold leading-relaxed">{t.manifesto.body}</p>
              </div>
            </div>
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
              {lang === 'en' ? 'What clients say.' : 'Lo que dicen los clientes.'}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary-container mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              {t.testimonials.map((item, i) => (
                <div key={item.name} className={`glass-card p-10 rounded-2xl shadow-xl shadow-on-surface/5 border border-white relative ${i === 1 ? 'md:ml-12' : ''}`}>
                  <span className="font-headline font-black text-6xl absolute -top-5 -left-3 opacity-15 leading-none select-none gradient-text" aria-hidden="true">"</span>
                  <p className="text-lg italic text-on-surface leading-relaxed mb-8">"{item.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img src={i === 0 ? IMG.testimonial1 : IMG.testimonial2} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h5 className="font-headline font-bold text-on-surface">{item.name}</h5>
                      <p className="text-sm text-on-surface-variant">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary-container/10 rounded-full blur-[100px]" aria-hidden="true" />
              <img src={IMG.teamPhoto} alt="Simpla team" className="relative z-10 rounded-3xl shadow-2xl w-full object-cover" />
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
            <button className="group flex items-center gap-3 font-headline font-bold text-on-surface hover:text-primary transition-colors whitespace-nowrap self-start sm:self-end">
              {b.cta}
              <span className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors">
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {b.posts.map((post, i) => {
              const accent = i % 2 === 0 ? '#7346a1' : '#5491ff'
              return (
                <a key={post.title} href="#" className="group glass-card rounded-2xl overflow-hidden border border-outline-variant/15 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
                  <div className="h-44 relative overflow-hidden" style={{ background: `${accent}08` }}>
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accent}18 0%, rgba(83,144,255,0.08) 100%)` }} />
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle, ${accent} 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }} />
                    <div className="absolute bottom-3 left-3">
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

      {/* ═══════════════════════════════════════════ CONTACT */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-headline font-black tracking-tighter leading-tight"
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
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-4">Full Name</label>
                    <input
                      type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe" required
                      className="w-full px-6 py-4 rounded-2xl text-base text-on-surface placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all bg-white/70 border border-outline-variant/60 backdrop-blur-xl"
                      aria-label="Name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-4">Email Address</label>
                    <input
                      type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com" required
                      className="w-full px-6 py-4 rounded-2xl text-base text-on-surface placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all bg-white/70 border border-outline-variant/60 backdrop-blur-xl"
                      aria-label="Email"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-4">Company</label>
                    <input
                      type="text" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full px-6 py-4 rounded-2xl text-base text-on-surface placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all bg-white/70 border border-outline-variant/60 backdrop-blur-xl"
                      aria-label="Company"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-4">Country</label>
                    <input
                      type="text" value={formData.country} onChange={e => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. USA, UK, Spain"
                      className="w-full px-6 py-4 rounded-2xl text-base text-on-surface placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all bg-white/70 border border-outline-variant/60 backdrop-blur-xl"
                      aria-label="Country"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 ml-4">How can we help?</label>
                  <textarea
                    value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                    rows={4} placeholder="Tell us more about your business..."
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
                  {lang === 'en' ? "Perfect — we'll be in touch soon." : 'Perfecto — te contactaremos pronto.'}
                </p>
              </motion.div>
            )}

            {!submitted && <p className="text-on-surface-variant text-xs">{c.disclaimer}</p>}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ FOOTER */}
      <footer className="w-full rounded-t-[2.5rem] bg-gradient-to-br from-[#7346a1] to-[#5491ff] text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 sm:px-12 py-20">
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <SimplaLogo className="w-8 h-8" />
              <span className="font-headline font-black text-xl text-white">Simpla</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">{f.description}</p>
            <div className="flex gap-3">
              {['L', 'I', 'X'].map(s => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-xs font-bold" aria-label={s}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="font-headline font-bold text-base">{f.servicesTitle}</h4>
            <ul className="space-y-3 text-white/90 font-medium">
              {f.services.map(s => <li key={s}><a href="#services" className="hover:text-white hover:underline decoration-white/30 transition-all text-sm">{s}</a></li>)}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="font-headline font-bold text-base">{f.companyTitle}</h4>
            <ul className="space-y-3 text-white/90 font-medium">
              {f.companyLinks.map(l => <li key={l.label}><a href={l.href} className="hover:text-white hover:underline decoration-white/30 transition-all text-sm">{l.label}</a></li>)}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="font-headline font-bold text-base">{lang === 'en' ? 'Newsletter' : 'Newsletter'}</h4>
            <p className="text-white text-sm font-bold opacity-90">{lang === 'en' ? "Monthly insights on growth marketing." : "Insights mensuales sobre marketing."}</p>
            <div className="flex p-1 bg-white/10 rounded-full border border-white/20">
              <input className="bg-transparent border-none focus:outline-none focus:ring-0 px-4 text-sm w-full text-white placeholder:text-white/40" placeholder={c.placeholder} type="email" />
              <button className="bg-white text-primary px-4 py-2 rounded-full font-headline font-bold text-sm hover:opacity-90 transition-all">
                {lang === 'en' ? 'Join' : 'Unirse'}
              </button>
            </div>
          </div>
        </div>

        <div className="px-8 sm:px-12 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-xs font-bold">{f.copyright}</p>
          <p className="font-headline italic text-white/50 text-xs font-bold">{f.tagline}</p>
        </div>
      </footer>

    </main>
  )
}
