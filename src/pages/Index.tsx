import { useState } from "react";
import Icon from "@/components/ui/icon";

type Tab = "about" | "news" | "roster" | "achievements" | "contacts";

const TABS: { id: Tab; label: string }[] = [
  { id: "about", label: "О КОМАНДЕ" },
  { id: "news", label: "НОВОСТИ" },
  { id: "roster", label: "СОСТАВ" },
  { id: "achievements", label: "ДОСТИЖЕНИЯ" },
  { id: "contacts", label: "КОНТАКТЫ" },
];

const SOCIALS = [
  { label: "VK", icon: "Share2", href: "#", desc: "ВКонтакте" },
  { label: "TG", icon: "Send", href: "#", desc: "Telegram-канал" },
  { label: "YT", icon: "Play", href: "#", desc: "YouTube" },
  { label: "TW", icon: "Tv", href: "#", desc: "Twitch" },
  { label: "DC", icon: "MessageSquare", href: "#", desc: "Discord" },
];

const NEWS = [
  {
    date: "07 APR 2026",
    tag: "ПАРТНЁРСТВО",
    title: "Willow Team сотрудничает с Tuimada Team",
    text: "Рады объявить о партнёрстве с командой Tuimada Team. Вместе мы будем развивать сцену и поддерживать друг друга в подготовке к турнирам.",
  },
  {
    date: "06 APR 2026",
    tag: "ТУРНИР",
    title: "Вылетели из Willow CUP",
    text: "6 апреля команда выбыла из турнира Willow CUP. Это был тяжёлый, но важный опыт — разберём ошибки и вернёмся сильнее.",
  },
  {
    date: "07 APR 2026",
    tag: "РЕГИСТРАЦИЯ",
    title: "Willow Team зарегистрировалась на Major Pental Willow 2026",
    text: "Мы официально подали заявку на участие в Major Pental Willow 2026. Готовимся серьёзно — впереди большая работа.",
    link: "https://t.me/WillowPentalMajor2026tier6",
  },
];

const ROSTER = [
  { nick: "dan11l", name: "Даниил", role: "Капитан / IGL", number: "01", kd: "0.93", avg: "15", kdGood: false },
  { nick: "whysonk1", name: "Степан", role: "Снайпер / Sniper", number: "02", kd: "1.09", avg: "14", kdGood: true },
  { nick: "kismain", name: "Денис", role: "Люркер / Lurker", number: "03", kd: "1.05", avg: "15", kdGood: true },
  { nick: "Makl0n", name: "Максим", role: "Рифлер / Rifler", number: "04", kd: "1.00", avg: "15", kdGood: true },
  { nick: "xyesospeek", name: "Дима", role: "Ентри / Entry", number: "05", kd: "0.89", avg: "13", kdGood: false },
];

const ACHIEVEMENTS = [
  { year: "29 фев 2026", place: "🥇 1 место", event: "Miracle Cup — Чемпионы", prize: "" },
  { year: "30 дек 2025", place: "🥈 2 место", event: "AEL Whiteout", prize: "" },
  { year: "27 дек 2025", place: "🥉 3 место", event: "Volt Series", prize: "" },
  { year: "8 янв 2026", place: "⚔️ 1/4 финала", event: "MLT TOURNAMENTS", prize: "" },
  { year: "12 янв 2026", place: "🥈 2 место", event: "ROFLOTOURS1", prize: "" },
  { year: "29 янв 2026", place: "🥉 3 место", event: "ANGEL TOURNAMENTS", prize: "" },
];

export default function Index() {
  const [active, setActive] = useState<Tab>("about");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080808] text-white relative overflow-x-hidden">
      {/* Background gradient mesh */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-white/[0.015] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] backdrop-blur-md bg-black/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/files/4d2f737a-6f31-4d14-ad58-dc021d7d4b9a.png"
              alt="Willow Team"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`nav-link font-['Oswald'] text-xs tracking-[0.15em] font-light transition-colors duration-200 ${
                  active === tab.id
                    ? "text-white active"
                    : "text-white/40 hover:text-white/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white/60 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/[0.06] bg-black/90 backdrop-blur-md">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActive(tab.id); setMenuOpen(false); }}
                className={`w-full text-left px-6 py-3 font-['Oswald'] text-xs tracking-[0.15em] transition-colors ${
                  active === tab.id ? "text-white" : "text-white/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="pt-16">

        {/* === ABOUT === */}
        {active === "about" && (
          <div>
            {/* Hero */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
              {/* Grid lines */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                  backgroundSize: '80px 80px'
                }}
              />

              <div className="max-w-6xl mx-auto px-6 py-24 relative z-10 w-full">
                <div className="max-w-3xl">
                  <p className="font-['Oswald'] text-xs tracking-[0.4em] text-white/30 mb-6 animate-fade-in">
                    ОСНОВАНА В 2025 · РОССИЯ
                  </p>
                  <h1 className="font-['Oswald'] text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-bold uppercase mb-8 animate-fade-in delay-100">
                    <span className="block gradient-text">WILLOW</span>
                    <span className="block text-white/10 -mt-2">TEAM</span>
                  </h1>
                  <p className="text-white/50 text-lg font-light leading-relaxed max-w-xl animate-fade-in delay-200">
                    Профессиональная киберспортивная команда, объединяющая пять игроков с одной целью — побеждать. Мы строим не просто состав, а единый организм.
                  </p>
                  <div className="flex gap-4 mt-10 animate-fade-in delay-300">
                    <button
                      onClick={() => setActive("roster")}
                      className="px-8 py-3 bg-white text-black font-['Oswald'] text-sm tracking-[0.15em] hover:bg-white/90 transition-all duration-200"
                    >
                      СОСТАВ
                    </button>
                    <button
                      onClick={() => setActive("achievements")}
                      className="px-8 py-3 border border-white/20 text-white/70 font-['Oswald'] text-sm tracking-[0.15em] hover:border-white/50 hover:text-white transition-all duration-200"
                    >
                      ДОСТИЖЕНИЯ
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-12 mt-20 animate-fade-in delay-400">
                  {[
                    { num: "5", label: "ИГРОКОВ" },
                    { num: "1", label: "ТРОФЕЙ" },
                    { num: "1", label: "ГОД" },
                    { num: "TOP 20", label: "РЕГИОНА" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="font-['Oswald'] text-4xl font-bold text-white">{s.num}</div>
                      <div className="font-['Oswald'] text-xs tracking-[0.2em] text-white/30 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Big decorative text */}
              <div className="absolute right-0 bottom-0 font-['Oswald'] text-[20vw] font-bold text-white/[0.015] leading-none select-none pointer-events-none uppercase">
                W
              </div>
            </section>

            {/* About text */}
            <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/[0.06]">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="font-['Oswald'] text-4xl font-medium mb-6 tracking-wide">
                    НАША ИСТОРИЯ
                  </h2>
                  <p className="text-white/50 leading-relaxed mb-4">
                    Willow Team была основана в 2025 году командой единомышленников, объединённых страстью к соревновательному гемингу и желанием достигать новых высот.
                  </p>
                  <p className="text-white/50 leading-relaxed">
                    За короткое время мы прошли путь от новичков регионального дивизиона до одной из ведущих команд, завоевав несколько значимых титулов и репутацию непредсказуемого соперника.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { title: "КОМАНДНЫЙ ДУХ", text: "Мы доверяем друг другу в каждой ситуации." },
                    { title: "СИСТЕМНАЯ ПОДГОТОВКА", text: "Ежедневные тренировки, разбор матчей, работа с тренером." },
                    { title: "РЕЗУЛЬТАТ", text: "Каждый турнир — шаг к следующей вершине." },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-white/10 pl-5 hover:border-white/30 transition-colors cursor-default">
                      <div className="font-['Oswald'] text-sm tracking-[0.15em] text-white mb-1">{item.title}</div>
                      <div className="text-white/40 text-sm">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* === NEWS === */}
        {active === "news" && (
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="mb-12">
              <p className="font-['Oswald'] text-xs tracking-[0.4em] text-white/30 mb-3">ПОСЛЕДНИЕ ОБНОВЛЕНИЯ</p>
              <h2 className="font-['Oswald'] text-5xl font-medium">НОВОСТИ</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {NEWS.map((n, i) => (
                <article
                  key={i}
                  className="border border-white/[0.08] p-6 group animate-fade-in hover:border-white/20 transition-colors"
                  style={{ animationDelay: `${i * 0.08}s`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-['Oswald'] text-[10px] tracking-[0.2em] bg-white/10 text-white/60 px-2 py-1">
                      {n.tag}
                    </span>
                    <span className="font-['Oswald'] text-[10px] tracking-[0.15em] text-white/25">{n.date}</span>
                  </div>
                  <h3 className="font-['Oswald'] text-xl font-medium mb-3 group-hover:text-white/90 transition-colors leading-tight">
                    {n.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{n.text}</p>
                  {n.link ? (
                    <a
                      href={n.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="font-['Oswald'] text-xs tracking-[0.15em]">ЧИТАТЬ В TELEGRAM</span>
                      <Icon name="ExternalLink" size={12} />
                    </a>
                  ) : (
                    <div className="mt-4 flex items-center gap-2 text-white/25 group-hover:text-white/60 transition-colors">
                      <span className="font-['Oswald'] text-xs tracking-[0.15em]">ЧИТАТЬ</span>
                      <Icon name="ArrowRight" size={12} />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* === ROSTER === */}
        {active === "roster" && (
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="mb-12">
              <p className="font-['Oswald'] text-xs tracking-[0.4em] text-white/30 mb-3">ОСНОВНОЙ СОСТАВ 2026</p>
              <h2 className="font-['Oswald'] text-5xl font-medium">ИГРОКИ</h2>
            </div>
            <div className="space-y-3">
              {ROSTER.map((p, i) => (
                <div
                  key={p.nick}
                  className="border border-white/[0.06] p-5 flex items-center gap-5 group animate-fade-in hover:border-white/20 transition-colors"
                  style={{ animationDelay: `${i * 0.08}s`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <span className="font-['Oswald'] text-3xl font-bold text-white/[0.06] w-12 flex-shrink-0 group-hover:text-white/15 transition-colors">
                    {p.number}
                  </span>
                  <div className="w-11 h-11 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/30 transition-colors">
                    <Icon name="User" size={18} className="text-white/30" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-['Oswald'] text-xl font-medium tracking-wide group-hover:text-white transition-colors">
                      {p.nick}
                    </div>
                    <div className="text-white/35 text-xs mt-0.5">{p.name}</div>
                  </div>
                  <div className="hidden sm:block font-['Oswald'] text-xs tracking-[0.12em] text-white/25 px-3 py-1 border border-white/[0.08]">
                    {p.role}
                  </div>
                  {/* Stats */}
                  <div className="flex items-center gap-4 ml-2">
                    <div className="text-center">
                      <div className={`font-['Oswald'] text-lg font-bold ${p.kdGood ? "text-green-400" : "text-red-400"}`}>
                        {p.kd}
                      </div>
                      <div className="font-['Oswald'] text-[9px] tracking-[0.15em] text-white/25">KD</div>
                    </div>
                    <div className="text-center">
                      <div className="font-['Oswald'] text-lg font-bold text-white/70">{p.avg}</div>
                      <div className="font-['Oswald'] text-[9px] tracking-[0.15em] text-white/25">AVG</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* === ACHIEVEMENTS === */}
        {active === "achievements" && (
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="mb-12">
              <p className="font-['Oswald'] text-xs tracking-[0.4em] text-white/30 mb-3">ИСТОРИЯ ПОБЕД</p>
              <h2 className="font-['Oswald'] text-5xl font-medium">ДОСТИЖЕНИЯ</h2>
            </div>
            <div className="space-y-2">
              {ACHIEVEMENTS.map((a, i) => (
                <div
                  key={i}
                  className="border border-white/[0.06] px-6 py-5 flex flex-wrap items-center gap-4 group animate-fade-in hover:border-white/15 transition-colors"
                  style={{ animationDelay: `${i * 0.07}s`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <span className="font-['Oswald'] text-xs tracking-[0.2em] text-white/25 w-12">{a.year}</span>
                  <span className="text-lg">{a.place}</span>
                  <span className="flex-1 font-['Oswald'] text-base font-light text-white/70 group-hover:text-white transition-colors min-w-[200px]">
                    {a.event}
                  </span>
                  <span className="font-['Oswald'] text-sm tracking-[0.1em] text-white/30 ml-auto">{a.prize}</span>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { num: "1", label: "ЗОЛОТО" },
                { num: "2", label: "СЕРЕБРА" },
                { num: "2", label: "БРОНЗЫ" },
              ].map((s) => (
                <div key={s.label} className="border border-white/[0.06] p-6 text-center animate-glow">
                  <div className="font-['Oswald'] text-5xl font-bold text-white">{s.num}</div>
                  <div className="font-['Oswald'] text-xs tracking-[0.2em] text-white/30 mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* === CONTACTS === */}
        {active === "contacts" && (
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="mb-12">
              <p className="font-['Oswald'] text-xs tracking-[0.4em] text-white/30 mb-3">СВЯЗАТЬСЯ С НАМИ</p>
              <h2 className="font-['Oswald'] text-5xl font-medium">КОНТАКТЫ</h2>
            </div>

            {/* Social links */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {[
                { label: "Telegram", icon: "Send", href: "https://t.me/WillowTeamCS2", handle: "t.me/WillowTeamCS2", desc: "Новости и анонсы" },
                { label: "YouTube", icon: "Play", href: "https://www.youtube.com/@willowteamcs2", handle: "youtube.com/@willowteamcs2", desc: "Хайлайты и VOD" },
                { label: "TikTok", icon: "Music", href: "https://www.tiktok.com/@willowteamcs", handle: "tiktok.com/@willowteamcs", desc: "Клипы и шорты" },
                { label: "Twitch", icon: "Tv", href: "https://www.twitch.tv/willowteamcs2", handle: "twitch.tv/willowteamcs2", desc: "Прямые трансляции" },
              ].map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="border border-white/[0.08] p-6 flex items-start gap-4 group animate-fade-in hover:border-white/25 transition-colors"
                  style={{ animationDelay: `${i * 0.07}s`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/30 group-hover:bg-white/5 transition-all">
                    <Icon name={s.icon} size={16} className="text-white/50 group-hover:text-white transition-colors" fallback="Link" />
                  </div>
                  <div>
                    <div className="font-['Oswald'] text-sm tracking-[0.1em] text-white mb-1">{s.label}</div>
                    <div className="text-white/40 text-xs mb-1">{s.handle}</div>
                    <div className="text-white/25 text-xs">{s.desc}</div>
                  </div>
                  <Icon name="ArrowUpRight" size={14} className="text-white/15 group-hover:text-white/50 transition-colors ml-auto mt-1" />
                </a>
              ))}
            </div>

            {/* Booking */}
            <div className="border border-white/[0.08] p-8 relative overflow-hidden">
              <div className="absolute right-0 top-0 font-['Oswald'] text-[8rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
                TEAM
              </div>
              <h3 className="font-['Oswald'] text-2xl font-medium mb-3">СОТРУДНИЧЕСТВО</h3>
              <p className="text-white/40 mb-6 max-w-md">
                По вопросам спонсорства, партнёрства и организации матчей — пишите нам напрямую.
              </p>
              <a
                href="https://t.me/st1menx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-['Oswald'] text-sm tracking-[0.15em] hover:bg-white/90 transition-all"
              >
                НАПИСАТЬ НАМ
                <Icon name="ArrowRight" size={14} />
              </a>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border border-white/15 rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-white/40" />
            </div>
            <span className="font-['Oswald'] text-sm tracking-[0.2em] text-white/30">WILLOW TEAM</span>
          </div>
          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                title={s.desc}
                className="text-white/20 hover:text-white/70 transition-colors"
              >
                <Icon name={s.icon} size={15} fallback="Link" />
              </a>
            ))}
          </div>
          <span className="font-['Oswald'] text-[10px] tracking-[0.15em] text-white/15">© 2026 WILLOW TEAM</span>
        </div>
      </footer>
    </div>
  );
}