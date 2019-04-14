# autotest-boilerplate 

#### Установка
1. `npm install`
2. Переименовываем projects/PROJECT_NAME в соотвествии с названием проекта. Редактируем projects/PROJECT_NAME/config.js

#### Запуск основного теста:
`node app projects/PROJECT_NAME/common/`


#### Создание карты сайта
`node sitemap PROJECT_NAME`

#### Кастомные тесты

Регулярные тесты, которые должны крутится на сервере размещаем, в projects/PROJECT_NAME/common_ext

Свои тесты размещаем в projects/PROJECT_NAME/TEST_NAME
