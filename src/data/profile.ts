import { ProfileData } from '@/types';

export const profileData: ProfileData = {
  name: 'Аванесов Юрий',
  position: 'UI/UX Designer, Design System Lead',
  tagline: 'Привет! Я UI/UX-дизайнер из Москвы. Создаю чистые, системные интерфейсы с фокусом на пользовательский опыт и масштабируемость.',
  about: `Я занимаюсь дизайном цифровых продуктов более 5 лет. Мой подход основан на глубоком понимании потребностей пользователей и бизнес-целей проекта.

Верю, что хороший дизайн должен быть незаметным — он просто работает, помогая людям достигать своих целей без лишних усилий.

Специализируюсь на разработке дизайн-систем, которые позволяют командам работать быстрее и поддерживать визуальную согласованность на всех этапах развития продукта.`,

  experience: [
    {
      id: 'exp-1',
      company: 'TechCorp',
      position: 'Lead UI/UX Designer',
      period: '2023 — н.в.',
      description: 'Руководство командой дизайнеров, разработка дизайн-системы компании',
    },
    {
      id: 'exp-2',
      company: 'Digital Studio',
      position: 'Senior UI/UX Designer',
      period: '2021 — 2023',
      description: 'Проектирование интерфейсов для веб- и мобильных приложений',
    },
    {
      id: 'exp-3',
      company: 'Startup Lab',
      position: 'UI/UX Designer',
      period: '2019 — 2021',
      description: 'Дизайн продуктов с нуля, исследования пользователей',
    },
  ],

  cases: [
    {
      id: 'case-1',
      title: 'Редизайн мобильного банка',
      description: 'Полное обновление интерфейса мобильного приложения для крупного банка',
      image: 'https://placehold.co/600x400/2563eb/ffffff?text=Mobile+Banking+App',
      task: 'Клиент обратился с проблемой низкого вовлечения пользователей в мобильном приложении. Основные жалобы: сложная навигация, перегруженные экраны, долгое выполнение целевых действий.',
      solution: 'Проведено полное исследование пользовательского опыта: интервью с 20 клиентами, анализ метрик, конкурентный анализ. Разработана новая информационная архитектура, упрощены ключевые сценарии, создана модульная система компонентов.',
      result: 'Конверсия на ключевых сценариях выросла на 34%. Время выполнения целевых действий сократилось в среднем на 40%. NPS приложения увеличился с 2.1 до 4.3.',
      gallery: [
        'https://placehold.co/1200x800/1e40af/ffffff?text=Main+Screen',
        'https://placehold.co/1200x800/2563eb/ffffff?text=Transfer+Flow',
        'https://placehold.co/1200x800/3b82f6/ffffff?text=Card+Details',
        'https://placehold.co/1200x800/60a5fa/ffffff?text=Analytics',
      ],
    },
    {
      id: 'case-2',
      title: 'Дизайн-система для SaaS-платформы',
      description: 'Создание единой дизайн-системы для команды из 15 дизайнеров и разработчиков',
      image: 'https://placehold.co/600x400/7c3aed/ffffff?text=Design+System',
      task: 'Команда разрабатывала несколько продуктов параллельно, что приводило к визуальной несогласованности и дублированию работы. Требовалось создать единую систему компонентов и правил.',
      solution: 'Разработана модульная дизайн-система с токенами, библиотекой компонентов в Figma и документацией. Проведены воркшопы для команды, настроен процесс поддержки и развития системы.',
      result: 'Скорость разработки новых фич увеличилась на 45%. Количество визуальных багов сократилось на 70%. Команда теперь говорит на одном языке.',
      gallery: [
        'https://placehold.co/1200x800/6d28d9/ffffff?text=Components+Library',
        'https://placehold.co/1200x800/7c3aed/ffffff?text=Design+Tokens',
        'https://placehold.co/1200x800/8b5cf6/ffffff?text=Documentation',
      ],
    },
    {
      id: 'case-3',
      title: 'E-commerce платформа для мебели',
      description: 'Проектирование и дизайн маркетплейса дизайнерской мебели',
      image: 'https://placehold.co/600x400/059669/ffffff?text=Furniture+E-commerce',
      task: 'Заказчик планировал запустить онлайн-платформу для продажи премиальной мебели. Требовалось создать интерфейс, который передаёт ценность продукта и упрощает процесс выбора.',
      solution: 'Разработан минималистичный дизайн с акцентом на фотографии товаров. Упрощён процесс фильтрации, добавлены интерактивные инструменты визуализации в интерьере.',
      result: 'Платформа успешно запущена, средний чек превысил плановые показатели на 25%. Пользователи отмечают удобство каталога и оформления заказа.',
      gallery: [
        'https://placehold.co/1200x800/047857/ffffff?text=Homepage',
        'https://placehold.co/1200x800/059669/ffffff?text=Product+Catalog',
        'https://placehold.co/1200x800/10b981/ffffff?text=Product+Page',
        'https://placehold.co/1200x800/34d399/ffffff?text=Checkout',
        'https://placehold.co/1200x800/6ee7b7/ffffff?text=Order+Confirmation',
      ],
    },
  ],

  education: [
    {
      id: 'edu-1',
      institution: 'Британская высшая школа дизайна',
      specialty: 'Дизайн цифровой среды',
      period: '2018 — 2020',
    },
    {
      id: 'edu-2',
      institution: 'МГТУ им. Баумана',
      specialty: 'Программная инженерия',
      period: '2014 — 2018',
    },
  ],

  certificates: [
    {
      id: 'cert-1',
      title: 'Design Systems Certification',
      organization: 'Nielsen Norman Group',
      year: '2023',
    },
    {
      id: 'cert-2',
      title: 'Advanced UX Research',
      organization: 'Interaction Design Foundation',
      year: '2022',
    },
  ],

  hobbies: ['Фотография', 'Велоспорт', 'Чтение профессиональной литературы'],

  email: 'yuri.avanesov@example.com',
  telegram: '@yuri_avanesov',
  linkedin: 'linkedin.com/in/yuri-avanesov',
};
