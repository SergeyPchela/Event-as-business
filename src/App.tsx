/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  MapPin, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle,
  ChevronRight,
  Box,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const GOOGLE_FORM_URL = "https://forms.gle/mxFk4B1S5HuznzDt8";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const BlueprintGrid = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
    <div className="absolute inset-0" style={{ 
      backgroundImage: `linear-gradient(#EAE7E2 1px, transparent 1px), linear-gradient(90deg, #EAE7E2 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    }} />
    <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#EAE7E2]" />
    <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#EAE7E2]" />
    <div className="absolute top-1/3 left-0 w-full h-[1px] bg-[#EAE7E2]" />
    <div className="absolute top-[33.33%] left-[25%] w-2 h-2 border border-[#C27E33] translate-x-[-50%] translate-y-[-50%]" />
    <div className="absolute top-[33.33%] right-[25%] w-2 h-2 border border-[#C27E33] translate-x-[50%] translate-y-[-50%]" />
  </div>
);

export default function App() {
  const handleRegister = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] font-sans selection:bg-[#C27E33] selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
        <BlueprintGrid />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-zinc-200 bg-white/50 backdrop-blur-sm text-[10px] font-bold tracking-[0.3em] uppercase">
              <Box size={12} className="text-[#C27E33]" />
              Event as Business
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-[42px] md:text-[84px] font-semibold tracking-tight leading-[1] mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Как перестать делать мероприятия «в минус» и превратить их в системный инструмент продаж.
          </motion.h1>
          
          <motion.div
            className="max-w-xl mx-auto p-4 border border-[#1A1A1A] mb-12 bg-white/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-sm font-medium tracking-tight">
              Закрытая группа для тех, кто хочет пересобрать формат, экономику и результат.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 gap-y-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {['Dubai', 'Event', 'Beauty', 'Wellness', 'Services', 'Communities'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white border border-[#1A1A1A]/10 text-[11px] font-bold uppercase tracking-widest text-zinc-500 hover:text-[#C27E33] transition-colors">
                [{tag}]
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-xs font-bold tracking-[0.2em] uppercase rounded-none bg-[#1A1A1A] hover:bg-[#C27E33] transition-all transform hover:scale-105 h-16 px-12 text-white no-underline"
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </a>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-6 border-y border-zinc-200 relative bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
              Большинство событий — это расходы, а не инструмент
            </h2>
            
            <div className="grid md:grid-cols-2 gap-20">
              <div className="space-y-8">
                <div className="space-y-6">
                  {[
                    { t: "Утечка 1:", d: "Реклама дорожает, а заявки не растут." },
                    { t: "Утечка 2:", d: "Мероприятия делаются «для галочки»." },
                    { t: "Утечка 3:", d: "Бюджет уходит в продакшн, а не в результат." },
                    { t: "Утечка 4:", d: "Есть трафик, но нет продаж." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C27E33] mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-xs uppercase tracking-wider block mb-1">{item.t}</span>
                        <p className="text-zinc-500">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#1A1A1A] text-white p-10 flex flex-col justify-center">
                <p className="text-2xl font-light leading-snug">Инвестиции сгорают без системного возврата.</p>
                <Separator className="my-8 bg-zinc-800" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C27E33]">Главная проблема: <br />Отсутствие монетизации при высокой активности.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Model Contrast Table */}
      <section className="py-32 px-6 bg-[#F9F8F6]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp}>
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-2">Смена парадигмы:</h2>
              <p className="text-zinc-500 uppercase text-xs font-bold tracking-[0.3em]">от продакшена к экономике</p>
            </div>
            
            <div className="overflow-x-auto -mx-6 px-6 no-scrollbar">
              <div className="space-y-2 min-w-[760px] md:min-w-0 pb-4">
                {/* Header */}
                <div className="grid grid-cols-[1fr_2fr_2fr] gap-6 py-6 px-8 border-b border-zinc-900/10 items-end">
                  <div className="text-[9px] uppercase font-bold tracking-[0.4em] text-zinc-400">Измерение</div>
                  <div className="text-[9px] uppercase font-bold tracking-[0.4em] text-zinc-400">Устаревшая модель</div>
                  <div className="text-[9px] uppercase font-bold tracking-[0.4em] text-[#C27E33]">Модель Архитектора</div>
                </div>
                
                {/* Rows */}
                {[
                  { d: "Фокус", old: "Сделать красиво. Акцент на визуальной части и «вау-эффекте» без привязки к бизнес-задаче.", new: "Сделать работающим. Дизайн как функция, обслуживающая механику продаж и путь клиента." },
                  { d: "Бюджет", old: "Продакшн и декорации. Основные траты уходят в то, что гости увидят один раз и забудут.", new: "Путь клиента и механику. Инвестиции в точки касания, которые превращают зрителя в покупателя." },
                  { d: "Участник", old: "Пассивный зритель. Человек потребляет контент, но не взаимодействует с системой.", new: "Активный элемент. Участник встроен в воронку через интерактив и целевые действия." },
                  { d: "Цикл", old: "Короткий. Результат мероприятия оценивается в день его завершения по эмоциям гостей.", new: "Бесконечный. Мероприятие — это лишь вход в долгосрочную систему отношений и продаж." },
                  { d: "Итог", old: "Чистые расходы. Строка в бюджете, которая редко окупается напрямую.", new: "Инвестиционный актив. Понятный ROI, рост базы и системные продажи после события.", highlight: true }
                ].map((row, i) => (
                  <div 
                    key={i} 
                    className={`grid grid-cols-[1fr_2fr_2fr] gap-6 py-10 px-8 items-center transition-all duration-500 group ${
                      row.highlight 
                      ? "bg-[#1A1A1A] text-white shadow-2xl relative z-10 scale-[1.01] border border-zinc-800" 
                      : "hover:bg-white border-b border-zinc-900/5"
                    }`}
                  >
                    <div className={`font-mono text-[9px] uppercase tracking-[0.2em] relative ${row.highlight ? 'text-white/40' : 'text-zinc-400'}`}>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-[1px] bg-current" />
                        {row.d}
                      </div>
                    </div>
                    <div className={`text-sm leading-relaxed pr-8 ${row.highlight ? 'text-zinc-400' : 'text-zinc-500 italic'}`}>
                      {row.old}
                    </div>
                    <div className={`text-sm md:text-base font-medium leading-relaxed group-hover:translate-x-1 transition-transform ${row.highlight ? 'text-[#C27E33] font-bold' : 'text-zinc-900'}`}>
                      {row.new}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Mobile usage hint */}
            <div className="md:hidden mt-4 flex items-center justify-center gap-2 text-[9px] uppercase tracking-widest text-zinc-400">
              <ArrowRight size={10} className="animate-pulse" />
              <span>Листайте таблицу вправо</span>
              <ArrowRight size={10} className="animate-pulse rotate-180" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reconstruction Technology Steps */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-semibold mb-16">Технология реконструкции</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { s: "Шаг 1", t: "Диагностика", d: "Поиск утечек бюджета и точек роста." },
                { s: "Шаг 2", t: "Пересборка", d: "Создание нового смыслового ядра." },
                { s: "Шаг 3", t: "Сценарий", d: "Проектирование бесшовного пути клиента." },
                { s: "Шаг 4", t: "Запуск", d: "Интеграция экономики и выход на результат." }
              ].map((step, i) => (
                <div key={i} className="group p-8 border border-zinc-100 hover:border-[#C27E33] transition-colors bg-[#F9F8F6]">
                  <div className="text-[10px] font-mono text-[#C27E33] mb-4">[{step.s}]</div>
                  <div className="text-lg font-bold mb-3">{step.t}</div>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              <Separator className="flex-1" />
              <span>Движение от хаоса к системе</span>
              <Separator className="flex-1" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Assets Checklists */}
      <section className="py-32 px-6 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp}>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-semibold mb-4 leading-tight">Ваш финальный актив</h2>
              <p className="text-[#C27E33] font-bold uppercase tracking-[0.2em] text-xs">Вы уходите не с идеями, а с готовым решением</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-white/10 p-10 bg-black/20">
                <h3 className="text-xl font-bold mb-8 flex items-center justify-between">
                  Бизнес и События <ChevronRight size={16} className="text-[#C27E33]" />
                </h3>
                <ul className="space-y-4">
                  {[
                    "Понимание, где теряются деньги.",
                    "Новая работающая модель события.",
                    "Конкретный формат под вашу задачу.",
                    "Детальный сценарий движения клиента.",
                    "Пошаговый план действий."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-zinc-400 text-sm">
                      <CheckCircle2 size={16} className="text-[#C27E33] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border border-white/10 p-10 bg-black/20">
                <h3 className="text-xl font-bold mb-8 flex items-center justify-between">
                  Комьюнити <ChevronRight size={16} className="text-[#C27E33]" />
                </h3>
                <ul className="space-y-4">
                  {[
                    "Жесткая структура регулярных встреч.",
                    "Внедренная система удержания (Retention).",
                    "Активная база контактов.",
                    "Рабочая модель монетизации."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-zinc-400 text-sm">
                      <CheckCircle2 size={16} className="text-[#C27E33] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speaker Information */}
      <section className="py-40 px-6 bg-white overflow-hidden relative">
        <BlueprintGrid />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp} className="order-2 md:order-1">
              <h2 className="text-[#C27E33] uppercase text-xs font-bold tracking-[0.5em] mb-4">Архитектор формата</h2>
              <h3 className="text-5xl font-semibold mb-6 tracking-tight">Sergey Larin</h3>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mb-10 border-b border-zinc-100 pb-4 inline-block">
                Creative Strategist & Event Architect
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="h-0.5 bg-zinc-900 w-12" />
                <ul className="space-y-4 text-lg font-medium text-zinc-800">
                  <li className="flex gap-4 items-center">— 25+ лет в индустрии</li>
                  <li className="flex gap-4 items-center">— Сценарист, режиссер, продюсер</li>
                  <li className="flex gap-4 items-center">— Разработка форматов и бизнес-моделей</li>
                </ul>
              </div>
              
              <p className="text-2xl font-serif italic text-zinc-900 leading-relaxed border-l-2 border-[#C27E33] pl-8">
                «Я не учу делать мероприятия. <br />Я пересобираю их модель».
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="relative p-4 border border-zinc-200 bg-white shadow-2xl shadow-[#C27E33]/5 group">
                <div className="aspect-[3/4] bg-zinc-100 relative overflow-hidden transition-all duration-1000">
                   <img 
                    src="https://drive.google.com/thumbnail?id=1HuiE2FjF3HtJNey68PObSCeYhDiVEeB0&sz=w1000" 
                    alt="Sergey Larin"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop";
                    }}
                   />
                   <div className="absolute inset-0 bg-[#C27E33]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-[#C27E33] transition-all duration-500 group-hover:w-32 group-hover:h-32" />
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-[#C27E33] transition-all duration-500 group-hover:w-32 group-hover:h-32" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience & Rejection Criteria */}
      <section className="py-32 px-6 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 mb-12">Для кого это создано:</h2>
              <ul className="space-y-8">
                {[
                  "Организаторы мероприятий и владельцы площадок.",
                  "Владельцы сервисов (декор, техника, обеспечение).",
                  "Эксперты, продающие свои услуги через события.",
                  "Бизнесы (beauty / wellness / B2B services).",
                  "Создатели офлайн и онлайн комьюнити (клубы, чаты)."
                ].map((item, i) => (
                  <li key={i} className="flex gap-6 items-center">
                    <div className="w-12 h-1 px-2 relative">
                      <div className="w-full h-[1px] bg-[#111]" />
                      <div className="absolute top-1/2 left-1/2 w-2 h-2 border border-[#C27E33] translate-x-[-50%] translate-y-[-50%] bg-white rotate-45" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 mb-12">Кому формат не подойдет:</h2>
              <ul className="space-y-8">
                {[
                  { t: "Слушателям", d: "Тем, кто пришел просто «послушать»." },
                  { t: "Теоретикам", d: "Участникам без конкретного проекта или задачи." },
                  { t: "Искателям вдохновения", d: "Тем, кто ищет «вдохновение», а не измеримый финансовый результат." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-6 group">
                    <XCircle className="text-zinc-200 group-hover:text-[#C27E33] transition-colors flex-shrink-0" size={24} />
                    <div className="space-y-1">
                      <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">{item.t}</p>
                      <p className="text-sm text-zinc-500 italic">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Application CTA */}
      <section className="py-40 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <div className="flex justify-center gap-4 mb-16">
              {["Закрытая группа", "Разбор проекта", "Индивидуальная работа"].map((item) => (
                <div key={item} className="px-4 py-2 border border-zinc-200 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  {item}
                </div>
              ))}
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold mb-12 tracking-tight">Подать заявку на диагностику</h2>
            
            <div className="inline-block p-10 border border-[#111] mb-16 max-w-2xl bg-[#F9F8F6]">
              <div className="flex items-center gap-3 justify-center mb-6 text-[#C27E33]">
                <ShieldAlert size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Ограничения</span>
              </div>
              <p className="text-lg font-medium mb-6 leading-tight">Ограниченное количество мест. <br />Отбор строго по анкете. Ручное подтверждение участия.</p>
              <Separator className="mb-6 opacity-20" />
              <p className="text-sm text-zinc-500 leading-relaxed">
                Мы работаем только с теми, у кого есть реальная задача: привлечь клиентов, повысить конверсию, перестать «сливать» бюджет или монетизировать комьюнити.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <a 
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm font-bold tracking-[0.3em] uppercase rounded-none bg-[#111] hover:bg-[#C27E33] transition-all relative overflow-hidden group h-20 px-16 text-white no-underline"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Зарегистрироваться <ArrowUpRight size={16} />
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#C27E33] group-hover:w-full transition-all duration-500" />
              </a>
              
              <div className="mt-12 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 space-y-2">
                <p>Заявки рассматриваются вручную.</p>
                <p>При совпадении формата вы получите подтверждение.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-[#111] text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-tighter uppercase italic">Event as Business</div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">© 2026 Sergey Larin — Архитектор формата</p>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
            <span className="hover:text-white cursor-pointer transition-colors">Dubai</span>
            <span className="hover:text-white cursor-pointer transition-colors">Architecture</span>
            <span className="hover:text-white cursor-pointer transition-colors">Monetization</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
