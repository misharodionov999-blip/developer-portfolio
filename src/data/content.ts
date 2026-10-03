import clientflowCover from "../assets/clientflow-cover.jpg";
import formaCover from "../assets/forma-cover.jpg";
import taskflowCover from "../assets/taskflow-cover.jpg";

export type CoverId = "forma" | "taskflow" | "clientflow";

export type Project = {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  task: string;
  implemented: string[];
  description: string;
  stack: string[];
  cover: CoverId;
  image: string;
  liveUrl: string;
  githubUrl: string;
};

export const site = {
  name: "Михаил Родионов",
  role: "Web Developer",
  title: "Михаил Родионов — Web Developer",
  lead: "Создаю современные сайты и веб-приложения: от лендингов и интерфейсов до CRM, авторизации и работы с базами данных.",
};

export const heroFocus = ["React", "TypeScript", "Supabase", "UI", "Web Apps"] as const;

export const navItems = [
  { href: "/#projects", id: "projects", label: "Проекты" },
  { href: "/#services", id: "services", label: "Услуги" },
  { href: "/#process", id: "process", label: "Процесс" },
  { href: "/#about", id: "about", label: "Обо мне" },
  { href: "/#contacts", id: "contacts", label: "Контакты" },
] as const;

export const projects: Project[] = [
  {
    slug: "forma",
    title: "FORMA",
    kind: "Сайт",
    summary: "Сайт архитектурной студии.",
    task: "Собрать сайт, который представляет архитектурную студию через крупную типографику и понятную структуру.",
    implemented: [
      "Подача студии: заголовок, сетка работ и спокойная композиция",
      "Вёрстка на HTML, CSS и JavaScript",
      "Компоновка для компьютера и телефона",
    ],
    description:
      "Самостоятельный сайт архитектурной студии. В нём отрабатывается подача практики: крупный заголовок, сетка работ и сдержанная визуальная система. Это не заказ реальной компании.",
    stack: ["HTML", "CSS", "JavaScript"],
    cover: "forma",
    image: formaCover,
    liveUrl: "https://misharodionov999-blip.github.io/vibe-coding/",
    githubUrl: "https://github.com/misharodionov999-blip/vibe-coding",
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    kind: "Веб-приложение",
    summary: "Система управления проектами и задачами.",
    task: "Сделать приложение, в котором можно вести проекты и задачи, не теряя данные между сессиями.",
    implemented: [
      "Проекты и задачи: создание, изменение и удаление",
      "Поиск, фильтрация и статусы",
      "Статистика и доска с перетаскиванием задач",
      "Адаптивный интерфейс, данные сохраняются в localStorage",
    ],
    description:
      "Самостоятельное приложение для проектов и задач. Интерфейс собран на React и TypeScript, экраны связаны через React Router, данные остаются в браузере. Коммерческого заказчика у проекта нет.",
    stack: ["React", "TypeScript", "Vite", "React Router", "localStorage"],
    cover: "taskflow",
    image: taskflowCover,
    liveUrl: "https://misharodionov999-blip.github.io/taskflow/",
    githubUrl: "https://github.com/misharodionov999-blip/taskflow",
  },
  {
    slug: "clientflow",
    title: "ClientFlow",
    kind: "CRM",
    summary: "CRM с авторизацией, клиентами, сделками и базой данных.",
    task: "Собрать CRM, в которой можно войти в систему и работать с клиентами и сделками.",
    implemented: [
      "Авторизация и защищённые пользовательские данные",
      "Клиенты и сделки: создание, изменение и удаление",
      "База данных на Supabase",
    ],
    description:
      "Самостоятельная CRM: авторизация, клиенты, сделки и хранение данных в Supabase. Интерфейс на React и TypeScript, маршруты через React Router. Это не внедрение в чужой компании.",
    stack: ["React", "TypeScript", "Vite", "React Router", "Supabase"],
    cover: "clientflow",
    image: clientflowCover,
    liveUrl: "https://dashing-horse-b17306.netlify.app/",
    githubUrl: "",
  },
];

export const projectsNote =
  "Три самостоятельных проекта разной сложности: сайт, приложение для задач и CRM с авторизацией и базой данных.";

export const serviceGroups = [
  {
    title: "Сайты",
    text: "Страницы, которые представляют продукт, студию или компанию и нормально читаются с телефона.",
    items: [
      "Лендинги",
      "Промо-сайты",
      "Корпоративные сайты",
      "Многостраничные сайты",
      "Адаптивная версия",
      "Редизайн существующих сайтов",
    ],
  },
  {
    title: "Веб-приложения",
    text: "Интерфейсы, в которых человек не только смотрит страницу, а работает со списками, карточками и сценариями.",
    items: [
      "React-приложения",
      "CRM",
      "Личные кабинеты",
      "Системы управления задачами",
      "Административные интерфейсы",
      "Интерактивные сервисы",
    ],
  },
  {
    title: "Функциональность",
    text: "Сценарии, без которых приложение остаётся макетом: вход, формы, данные и доступ к страницам.",
    items: [
      "Регистрация и авторизация",
      "Формы и заявки",
      "Поиск и фильтрация",
      "CRUD",
      "Пользовательские данные",
      "Роли и защищённые страницы",
      "Интеграция API",
    ],
  },
  {
    title: "Данные и запуск",
    text: "Хранение, репозиторий и публикация — чтобы проект можно было открыть и продолжать дорабатывать.",
    items: [
      "Supabase",
      "Базы данных",
      "Хранение данных",
      "Git/GitHub",
      "Настройка deployment",
      "Публикация проекта",
      "Дальнейшие доработки",
    ],
  },
];

export const processSteps = [
  {
    title: "Задача",
    text: "Разбираю требования и определяю структуру проекта.",
  },
  {
    title: "Интерфейс",
    text: "Продумываю страницы, пользовательские сценарии и адаптивность.",
  },
  {
    title: "Разработка",
    text: "Собираю интерфейс и необходимую функциональность.",
  },
  {
    title: "Проверка",
    text: "Проверяю основные сценарии, мобильную версию и ошибки.",
  },
  {
    title: "Запуск",
    text: "Подготавливаю проект к публикации и размещаю его.",
  },
];

export const aboutParagraphs = [
  "Разрабатываю интерфейсы и веб-приложения на HTML, CSS, JavaScript, React и TypeScript: клиентская логика, адаптивная вёрстка, авторизация и работа с данными. Проекты собираю на Vite, для базы использую Supabase. Код веду в Git и GitHub и готовлю проект к публикации.",
  "AI-assisted development — часть рабочего процесса: так быстрее собираю структуру, проверяю интерфейс и довожу сценарии. Решения остаются в коде проекта.",
  "В портфолио — самостоятельные проекты разной сложности, от сайта до приложения с авторизацией и базой данных. Это не коммерческий стаж и не заказы компаний.",
];

export const competencies = [
  "HTML, CSS, JavaScript",
  "Разработка интерфейсов",
  "React + TypeScript",
  "Vite",
  "React Router",
  "Клиентская логика",
  "Supabase",
  "Авторизация",
  "Базы данных",
  "Адаптивная разработка",
  "Git/GitHub",
  "Deployment",
  "AI-assisted development",
];

export const contactPlaces = [
  { label: "Telegram", value: "MiRicknes", href: "https://t.me/MiRicknes" },
  {
    label: "Email",
    value: "misha.rodionov999@gmail.com",
    href: "mailto:misha.rodionov999@gmail.com",
  },
  {
    label: "GitHub",
    value: "misharodionov999-blip",
    href: "https://github.com/misharodionov999-blip",
  },
];

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}

export function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}
