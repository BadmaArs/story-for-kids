## Commands

- **yarn dev**: Запуск проекта в производственном режиме.
- **yarn preview**: "Запуск демонстрационной сборки из папки /dist".
- **yarn build**: Создание сборки проекта в папке /dist.
- **yarn lint**: Проверка всех файлов на соответствие с правилами ESLint.
- **yarn format**: Форматирование в соответствии с правилами Prettier.

## Naming Conventions

- **Файлы**: Использовать kebab-case именования файлов (`use-hook.ts`).
- **Папки**: Использовать kebab-case именования файлов (`hooks`). Если из папки экспортируется только React компонент то PascalCase (Layout)
- **Компоненты**: Использовать PascalCase для React компонентов (`MyComponent.tsx`).
- **Переменные**: Использовать camelCase для именования переменных (`myVariable`).
- **Константы**: Использовать UPPER_SNAKE_CASE для именования констант (`MY_CONSTANT`).

## Import Conventions

- **Shared**: @/shared (`import { baseApi, useAppDispatch, ErrorIcon } from '@/shared'`);
- **Entities**: @/entities (`import { entitiesApi } from '@/entities'`);
- **Shared**: @/features (`import { useFeature, FeatureComponent } from '@/features'`);
- **Widgets**: @/pages (`import { Page } from '@/pages'`);
- **Pages**: @/shared (`import { baseApi, useAppDispatch, ErrorIcon } from '@/shared'`);

