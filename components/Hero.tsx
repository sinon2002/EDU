import { ArrowDownRight, ArrowRight, Building2, GraduationCap, MapPin, Plane, Play } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import heroGirl from "@/assets/hero-student-girl.png";
import logo from "@/assets/kc_logo_transparent.png.asset.json";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 48]);
  const reveal = (delay: number) => reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const } };
  const appear = (delay: number) => reduce ? {} : { initial: { opacity: 0, scale: 0.88 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section id="hero" className="relative overflow-hidden bg-background pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="route-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-border/70" aria-hidden="true" />
      <div className="shell relative grid min-h-[740px] items-center gap-7 lg:grid-cols-[1.02fr_0.98fr] lg:gap-0">
        <div className="hero-copy-intro relative z-20 pt-8 lg:pt-0">
          <motion.div {...reveal(1.05)} className="flex items-center gap-3 text-xs font-bold uppercase text-primary"><span className="h-px w-10 bg-primary" />Kyrgyz Concept Education Abroad</motion.div>
          <h1 className="mt-6 max-w-3xl text-[2.75rem] leading-[1.02] text-ink sm:text-6xl lg:text-[4.45rem]">Учёба за рубежом. <span className="text-primary">Время выйти в мир.</span></h1>
          <motion.div {...reveal(1.2)} className="mt-6 inline-flex border-l-2 border-accent bg-secondary px-4 py-3 text-sm font-bold uppercase text-ink">Для поступления в вуз<br />и жизни за рубежом</motion.div>
          <motion.p {...reveal(1.3)} className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Kyrgyz Concept — ваш надёжный проводник в мировые вузы. Более 30 лет опыта, 90+ направлений по всему миру и полное персональное сопровождение: от первой консультации до успешного зачисления и отъезда.</motion.p>
          <motion.div {...reveal(1.4)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#consult" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">Получить бесплатную консультацию <ArrowRight className="size-4" /></a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-6 py-4 text-sm font-bold text-primary transition-all duration-200 hover:-translate-y-1 hover:bg-secondary">Узнать шансы <ArrowDownRight className="size-4" /></a>
          </motion.div>
          <motion.a {...reveal(1.5)} href="#stories" className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"><span className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground"><Play className="ml-0.5 size-4 fill-current" /></span>Видео-приветствие от команды KC EDU</motion.a>
        </div>

        <motion.div style={{ y: photoY }} className="relative mx-auto h-[500px] w-full max-w-[590px] sm:h-[620px] lg:h-[690px]">
          <div className="hero-girl-intro absolute inset-x-[8%] bottom-0 z-20 mx-auto h-[92%] sm:inset-x-[15%] lg:inset-x-[12%]">
            <img src={heroGirl} alt="Студентка, готовая к учёбе за рубежом" width={1024} height={1536} fetchPriority="high" className="h-full w-full object-contain object-bottom drop-shadow-[0_26px_30px_color-mix(in_oklab,var(--brand)_18%,transparent)]" />
          </div>

          <motion.div {...appear(1.65)} className="absolute top-[7%] right-[2%] z-30 text-primary sm:right-[5%]" aria-hidden="true">
            <Plane className="hero-plane size-16 fill-secondary stroke-[1.4] sm:size-20" />
          </motion.div>

          <motion.div {...appear(1.78)} className="absolute top-[20%] left-[1%] z-30 rounded-md bg-background/95 p-3 shadow-lift backdrop-blur-sm sm:left-[3%] sm:p-4">
            <img src={logo.url} alt="Kyrgyz Concept" width={132} height={44} className="h-8 w-auto sm:h-10" />
          </motion.div>

          <motion.div {...appear(1.92)} className="absolute top-[40%] right-0 z-30 flex items-center gap-2 rounded-md bg-background/95 px-3 py-2 shadow-soft backdrop-blur-sm">
            <Building2 className="size-4 text-primary" /><span className="text-xs font-bold text-ink">Лондон</span>
          </motion.div>
          <motion.div {...appear(2.02)} className="absolute bottom-[26%] left-0 z-30 flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-primary-foreground shadow-soft">
            <MapPin className="size-4" /><span className="text-xs font-bold">Бишкек</span>
          </motion.div>
          <motion.div {...appear(2.12)} className="absolute right-[3%] bottom-[10%] z-30 flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-accent-foreground shadow-gold">
            <GraduationCap className="size-4" /><span className="text-xs font-bold">Кампус мечты</span>
          </motion.div>

          <motion.svg {...(reduce ? {} : { initial: { opacity: 0, pathLength: 0 }, animate: { opacity: 1, pathLength: 1 }, transition: { duration: 1.1, delay: 1.7 } })} aria-hidden="true" viewBox="0 0 500 420" className="absolute inset-x-0 top-[14%] z-10 h-[72%] w-full overflow-visible text-primary">
            <motion.path d="M22 328 C 118 226, 136 88, 286 112 C 394 128, 421 62, 480 34" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" />
            <circle cx="22" cy="328" r="6" fill="var(--brand)" />
            <circle cx="480" cy="34" r="7" fill="var(--orange)" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}