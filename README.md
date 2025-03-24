# Areal Frontend

## Описание

Веб-приложение для управления статьями и комментариями. Позволяет добавлять, редактировать, удалять статьи, ставлять и просматривать комментарии, а так же просмотривать комментарииза определенный период

## Стэк-технологий

### Backend:

- Node.js
- Express
- Sequelize ORM
- PostgreSQL

### Frontend:

- Vue3
- Vuex
- Vue-router
- Axios
- Vuetify

## Установка

1. У вас должны быть установлены Node.js и PostgreSQL

1. Клонируйте репозиторий:

```bash
https://github.com/BakSnn/Areal.git
```

## Запуск проекта

Запуск backend-части:

1. Перейдите в директорию backend-части приложения:

```bash
cd backend
```

2. Создайте файл `.env.local` и добавьте в него переменные с вашими значениями, указанные в файле `.env.example`
3. Установите зависимости:

- NPM:

```bash
npm install
npm run dev

```

- Yarn:

```bash
yarn install
yarn dev
```

4. Запустите миграции и сиды

- NPM

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

- Yarn

```bash
yarn sequelize-cli db:migrate
yarn sequelize-cli db:seed:all
```

Запуск frontend-части:

```bash
cd frontend
```

- NPM:

```bash
npm install
npm run dev
```

- Yarn:

```bash
yarn install
yarn dev
```

# Маршруты

## Frontend

### Маршруты

- `/`: Главная страница
- `/add-article`: Страница добавления статьи
- `/articles`: Страница со списком статей
- `/article/:id`: Страница просмотра статьи с комментариями
- `/comments-by-date`: Страница для вывода комментариев за определенный период

## Backend

### Маршруты для работы со статьями:

1. `POST /article/` — Создание новой статьи

2. `GET /article/:id/` — Получение информации о статье по её ID

3. `GET /articles/` — Получение списка всех статей

4. `PATCH /article/:id/` — Редактирование статьи по её ID

5. `DELETE /article/:id/` — Удаление статьи по её ID

### Маршруты для работы с комментариями:

1. `POST /article/:id/comment/`— Создание нового комментария для статьи по её ID

2. `GET /article/:id/comment/:commentId/` — Получение информации о комментарии по его ID для конкретной статьи

3. `GET /article/:id/comments/` - Получение всех комментариев для конкретной статьи по её ID

4. `PATCH /article/:id/comment/:commentId/` — Редактирование комментария по его ID для конкретной статьи

5. `DELETE /article/:id/comment/:commentId/` — Удаление комментария по его ID для конкретной статьи

### Маршрут для аналитики комментариев:

1. `GET /analytic/comments/` — Получение комментариев за период с группировкой по статьям
