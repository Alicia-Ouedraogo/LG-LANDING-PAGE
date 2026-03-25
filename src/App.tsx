import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Target, Copy, Check, Info, HandHeart, Sparkles, MessageCircle, ExternalLink, ShieldCheck, Zap, ArrowRight, Phone, Globe } from 'lucide-react';

const CopyButton = ({ text, label }: { text: string; label: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative flex items-center justify-between bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-brand-light/20 hover:border-brand-light/50 transition-all duration-300 overflow-hidden mb-4">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-light/0 via-brand-light/5 to-brand-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      <div className="relative z-10">
        <p className="text-xs text-brand-light/70 font-display uppercase tracking-widest mb-1">{label}</p>
        <p className="text-xl font-display font-bold text-white tracking-wider">{text}</p>
      </div>
      <button
        onClick={handleCopy}
        className={`relative z-10 p-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
          copied 
            ? 'bg-brand-light text-brand-dark shadow-[0_0_15px_rgba(213,224,181,0.5)]' 
            : 'bg-white/10 text-brand-light hover:bg-brand-light hover:text-brand-dark'
        }`}
        aria-label="Copier le numéro"
      >
        {copied ? <Check size={20} /> : <Copy size={20} />}
        <span className="text-sm font-display font-bold">{copied ? 'COPIÉ' : 'COPIER'}</span>
      </button>
    </div>
  );
};

const SectionHeading = ({ children, icon: Icon, glow = false }: { children: React.ReactNode; icon?: React.ElementType, glow?: boolean }) => (
  <div className="flex items-center gap-4 mb-8">
    {Icon && (
      <div className={`p-3 rounded-xl bg-white/5 border border-brand-light/20 text-brand-light ${glow ? 'shadow-[0_0_20px_rgba(213,224,181,0.3)]' : ''}`}>
        <Icon size={28} strokeWidth={1.5} />
      </div>
    )}
    <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
      {children}
    </h2>
  </div>
);

const GlassCard = ({ children, className = "", delay = 0, id }: { children: React.ReactNode, className?: string, delay?: number, id?: string }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={`bg-white/5 backdrop-blur-xl border border-brand-light/10 rounded-3xl p-8 hover:border-brand-light/30 transition-colors duration-500 ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans text-white/90 selection:bg-brand-light selection:text-brand-dark relative">
      
      {/* Background Tech Grid & Glows */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-light/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-brand-light/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header / Hero */}
      <header className="fixed top-0 w-full bg-brand-dark/80 backdrop-blur-xl border-b border-brand-light/10 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Placeholder - Replace src with actual logo path if available */}
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden shadow-[0_0_15px_rgba(213,224,181,0.4)] bg-white/5">
              <img src="/logo.png" alt="LISE GROUP Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-white leading-none">LISE</span>
              <span className="font-display font-bold text-brand-light tracking-widest text-sm leading-none">GROUP</span>
            </div>
          </div>
          <a
            href="#donations"
            className="group relative px-6 py-2.5 rounded-full font-display font-bold text-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-light transition-transform duration-300 group-hover:scale-105" />
            <div className="relative flex items-center gap-2 text-brand-dark">
              <Heart size={16} className="fill-brand-dark" />
              <span>Faire un don</span>
            </div>
          </a>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 space-y-24">
        
        {/* 1. Accueil */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8 pt-10"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-light/10 border border-brand-light/20 text-brand-light font-display font-medium text-sm mb-4 shadow-[0_0_20px_rgba(213,224,181,0.1)]">
            <Sparkles size={16} />
            <span className="tracking-wide uppercase">Bienvenue chez LISE GROUP</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
            Faites la différence pour <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white">notre pays</span> et notre communauté.
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
            En scannant ce code, vous rejoignez une communauté engagée pour <strong className="text-brand-light font-medium">l'aide aux populations vulnérables</strong> et le <strong className="text-brand-light font-medium">développement du leadership des jeunes</strong>.
          </p>
        </motion.section>

        {/* 2. À propos */}
        <GlassCard>
          <SectionHeading icon={Info} glow>Qui sommes-nous ?</SectionHeading>
          <p className="text-lg leading-relaxed mb-10 text-white/80">
            <strong className="text-brand-light font-display text-xl">LISE GROUP</strong> (Liaison d'Intervention et de Soutien pour les Enfants) est une association à but non lucratif basée à Ouagadougou, régie par la loi burkinabé 064-2015/CNT.
          </p>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-white flex items-center gap-3">
                <Target size={24} className="text-brand-light" />
                Nos objectifs
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="p-2 bg-brand-light/10 rounded-lg text-brand-light shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-white/80 leading-relaxed">Soutenir les populations vulnérables au Burkina Faso</span>
                </li>
                <li className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="p-2 bg-brand-light/10 rounded-lg text-brand-light shrink-0">
                    <Zap size={20} />
                  </div>
                  <span className="text-white/80 leading-relaxed">Promouvoir le leadership des jeunes pour leur autonomisation et le développement communautaire</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-white flex items-center gap-3">
                <Heart size={24} className="text-brand-light" />
                Valeurs fondamentales
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "Solidarité", desc: "Aider les plus démunis et promouvoir l'entraide" },
                  { title: "Engagement", desc: "Mobiliser des ressources pour atteindre nos objectifs" },
                  { title: "Respect", desc: "Maintenir une ambiance bienveillante et respectueuse" }
                ].map((val, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className="font-display font-bold text-2xl text-brand-light/30 group-hover:text-brand-light transition-colors">
                      0{idx + 1}
                    </div>
                    <div>
                      <strong className="font-display text-brand-light text-lg block">{val.title}</strong>
                      <span className="text-white/60 text-sm">{val.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>

        {/* 3. Nos volets d'action */}
        <section>
          <SectionHeading icon={HandHeart}>Nos volets d'action</SectionHeading>
          
          <div className="grid gap-6">
            {/* Humanitaire */}
            <GlassCard delay={0.1} className="relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150" />
              <h3 className="font-display text-2xl font-bold text-brand-light mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-light rounded-full" />
                Volet Humanitaire
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {['Intervention auprès des populations vulnérables', 'Actions sociales et communautaires', 'Accompagnement des bénéficiaires et distribution de dons', 'Sensibilisation et réformes communautaires'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <Check size={18} className="text-brand-light shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-brand-dark/50 border border-brand-light/10 p-4 rounded-xl text-sm text-brand-light/80 font-medium flex items-start gap-3">
                <Info size={18} className="shrink-0 mt-0.5" />
                <p>Objectif : soutenir nos populations, surtout les plus vulnérables. Votre contribution fait la différence !</p>
              </div>
            </GlassCard>

            {/* Leadership */}
            <GlassCard delay={0.2} className="relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150" />
              <h3 className="font-display text-2xl font-bold text-brand-light mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-light rounded-full" />
                Volet Leadership
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {['Développement du leadership chez les jeunes', 'Ateliers, formations et bootcamps', 'Accompagnement de mentors pour guider et inspirer', 'Encouragement de l\'autonomie et de la participation communautaire'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <Check size={18} className="text-brand-light shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-brand-dark/50 border border-brand-light/10 p-4 rounded-xl text-sm text-brand-light/80 font-medium flex items-start gap-3">
                <Info size={18} className="shrink-0 mt-0.5" />
                <p>Objectif : permettre aux jeunes de la diaspora et du Burkina Faso de se former, s'autonomiser et contribuer à la communauté.</p>
              </div>
            </GlassCard>

            {/* Donations */}
            <GlassCard delay={0.3} id="donations" className="border-brand-light/30 shadow-[0_0_30px_rgba(213,224,181,0.1)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-light/10 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-display text-3xl font-bold text-brand-light mb-4 flex items-center gap-3">
                  <Heart size={28} className="fill-brand-light" />
                  Contribution Patriotique
                </h3>
                <p className="mb-8 text-white/90 text-lg">
                  Nous avons des <strong className="text-brand-light font-medium">activités en cours pour soutenir les personnes dans le besoin</strong>.<br/>
                  Votre don est un acte de patriotisme : il permet de financer les actions humanitaires et les projets de leadership.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <CopyButton label="Mob Money" text="+226 01 58 10 69" />
                  <CopyButton label="Orange Money" text="+226 54 79 35 12" />
                  <CopyButton label="Wave" text="+226 64 95 35 35" />
                </div>
                
                <div className="mt-6 p-4 bg-brand-light/10 border border-brand-light/20 rounded-xl">
                  <p className="text-sm text-brand-light font-medium">
                    <strong className="font-bold">NB :</strong> Pour les virements bancaires, prendre attache avec le <strong className="font-bold">+226 54 79 35 12</strong> pour le RIB correspondant.
                  </p>
                </div>
                
                <p className="text-sm text-brand-light/70 font-medium mt-6 text-center uppercase tracking-widest">
                  Mobiliser la diaspora burkinabé et soutenir les initiatives locales.
                </p>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* 4. Nos pôles d'action & 5. Pourquoi nous rejoindre */}
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard>
            <SectionHeading icon={Users}>Nos pôles</SectionHeading>
            <div className="space-y-6">
              <div className="group">
                <h4 className="font-display font-bold text-xl text-brand-light mb-1 flex items-center gap-2">
                  <span className="text-white/30 font-mono text-sm">01</span> Pôle Social
                </h4>
                <p className="text-xs text-white/50 uppercase tracking-wider mb-3 ml-7">Aides, dons, bénéficiaires</p>
                <ul className="text-sm space-y-2 ml-7 text-white/80">
                  <li className="flex items-center gap-2"><ArrowRight size={14} className="text-brand-light" /> Interventions directes sur le terrain</li>
                  <li className="flex items-center gap-2"><ArrowRight size={14} className="text-brand-light" /> Suivi et accompagnement des bénéficiaires</li>
                </ul>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div className="group">
                <h4 className="font-display font-bold text-xl text-brand-light mb-3 flex items-center gap-2">
                  <span className="text-white/30 font-mono text-sm">02</span> Pôle Partenariats & Admin
                </h4>
                <ul className="text-sm space-y-2 ml-7 text-white/80">
                  <li className="flex items-center gap-2"><ArrowRight size={14} className="text-brand-light" /> Gestion des collaborations et projets</li>
                  <li className="flex items-center gap-2"><ArrowRight size={14} className="text-brand-light" /> Coordination administrative</li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <SectionHeading icon={Sparkles}>Pourquoi nous rejoindre ?</SectionHeading>
            <ul className="space-y-6">
              {[
                "Participer à des actions concrètes et solidaires",
                "Contribuer au développement des jeunes leaders",
                "Faire un geste concret pour la communauté et le Burkina Faso",
                "Développer vos compétences personnelles et professionnelles"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-brand-light/10 text-brand-light p-2 rounded-xl shrink-0 border border-brand-light/20">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="text-white/90 leading-relaxed pt-1">{text}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* 6. Comment participer ? */}
        <GlassCard className="bg-gradient-to-br from-brand-light/10 to-transparent border-brand-light/30">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-white">Comment participer ?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <ul className="space-y-5">
              {[
                "Rejoindre un pôle ou microgroupe",
                "Participer à nos activités et projets",
                "Proposer vos initiatives ou partenariats",
                "Faire un don patriotique"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-white/90">
                  <div className="w-2 h-2 rounded-full bg-brand-light shadow-[0_0_10px_rgba(213,224,181,0.8)]" />
                  {text}
                </li>
              ))}
            </ul>
            
            <div className="space-y-6">
              <h4 className="font-display font-bold text-brand-light uppercase tracking-widest text-sm flex items-center gap-2">
                <Phone size={16} /> Contacts WhatsApp directs
              </h4>
              
              <a 
                href="https://wa.me/2265457973512" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-light/50 transition-all duration-300 p-5 rounded-2xl"
              >
                <div className="bg-brand-light text-brand-dark p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Informations / Actions solidaires</p>
                  <p className="font-display font-bold text-xl text-brand-light">+226 54 57 97 35 12</p>
                </div>
              </a>
              
              <a 
                href="https://wa.me/212607681322" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-light/50 transition-all duration-300 p-5 rounded-2xl"
              >
                <div className="bg-brand-light text-brand-dark p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Partenariats & Administration</p>
                  <p className="font-display font-bold text-xl text-brand-light">+212 60 76 81 32 2</p>
                </div>
              </a>
            </div>
          </div>
        </GlassCard>

        {/* 7. Réseaux sociaux */}
        <section className="text-center">
          <h2 className="text-2xl font-display font-bold text-white mb-8">Suivez-nous sur les réseaux</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.tiktok.com/@lise__group" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-display font-bold hover:bg-white/10 hover:border-brand-light/50 transition-all hover:-translate-y-1">
              TikTok
              <ExternalLink size={18} className="text-brand-light" />
            </a>
            <a href="https://www.facebook.com/share/1Ary4HmhXB/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-display font-bold hover:bg-white/10 hover:border-brand-light/50 transition-all hover:-translate-y-1">
              Facebook
              <ExternalLink size={18} className="text-brand-light" />
            </a>
            <a href="https://www.instagram.com/lise_group" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-display font-bold hover:bg-white/10 hover:border-brand-light/50 transition-all hover:-translate-y-1">
              Instagram
              <ExternalLink size={18} className="text-brand-light" />
            </a>
          </div>
        </section>

        {/* 8. Message final */}
        <GlassCard className="text-center relative overflow-hidden border-brand-light/40 shadow-[0_0_50px_rgba(213,224,181,0.15)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-light to-transparent" />
          
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-light/10 border border-brand-light/30 text-brand-light rounded-full mb-8 shadow-[0_0_30px_rgba(213,224,181,0.2)]">
            <Globe size={40} strokeWidth={1.5} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
            Ensemble, faisons la différence, <span className="text-brand-light">même avec peu.</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
            Merci d'avoir pris le temps de découvrir notre univers. <strong className="text-white font-medium">Chaque geste compte. Chaque soutien fait la différence.</strong>
          </p>
          
          <div className="bg-brand-dark/50 border border-brand-light/20 rounded-3xl p-8 md:p-10 mb-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-brand-light mb-8 flex items-center justify-center gap-3">
              <Sparkles className="text-brand-light" />
              Agissez maintenant : Faites un don !
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <CopyButton label="Mob Money" text="+226 01 58 10 69" />
              <CopyButton label="Orange Money" text="+226 54 79 35 12" />
              <CopyButton label="Wave" text="+226 64 95 35 35" />
            </div>

            <div className="mt-6 p-4 bg-brand-light/10 border border-brand-light/20 rounded-xl text-left">
              <p className="text-sm text-brand-light font-medium">
                <strong className="font-bold">NB :</strong> Pour les virements bancaires, prendre attache avec le <strong className="font-bold">+226 54 79 35 12</strong> pour le RIB correspondant.
              </p>
            </div>
          </div>
          
          <div className="inline-block bg-brand-light text-brand-dark px-8 py-4 rounded-2xl font-display font-bold text-lg shadow-[0_0_20px_rgba(213,224,181,0.4)]">
            ✨ Rejoignez la communauté LISE GROUP ✨
          </div>
          <p className="text-white/50 mt-6 font-medium">Suivez nos actions solidaires et nos initiatives en faveur des personnes dans le besoin.</p>
        </GlassCard>

      </main>
      
      <footer className="relative z-10 border-t border-white/10 bg-brand-dark/50 backdrop-blur-md text-white/40 py-10 text-center text-sm font-display tracking-wide">
        <p>© {new Date().getFullYear()} LISE GROUP. Tous droits réservés.</p>
        <p className="mt-2">Association à but non lucratif régie par la loi 064-2015/CNT (Burkina Faso).</p>
      </footer>
    </div>
  );
}
