//Создаем массив listOfFilmDirectors, который содержит информацию о кинорежиссерах и их лучших фильмах.
const listOfFilmDirectors = [
	{
		name: "Стивен Спилберг",
		career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
		films:
			"https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
		top_rated_film: "Список Шиндлера",
	},
	{
		name: "Кристофер Нолан",
		career:
			"Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
		films:
			"https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
		top_rated_film: "Начало",
	},
	{
		name: "Мартин МакДона",
		career: "Сценарист, Режиссёр, Продюсер",
		films: "https://www.film.ru/person/martin-makdonah",
		top_rated_film: "Три билборда на границе Эббинга, Миссури",
	},
	{
		name: "Алексей Балабанов",
		career: "Режиссёр, Сценарист, Актёр, Продюсер",
		films: "https://www.film.ru/person/aleksey-balabanov",
		top_rated_film: "Брат",
	},
	{
		name: "Питер Фаррелли",
		career: "Продюсер, Режиссёр, Сценарист, Актёр",
		films: "https://www.film.ru/person/piter-farrelli",
		top_rated_film: "Зелёная книга",
	},
	{
		name: "Юрий Быков",
		career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
		films: "https://www.film.ru/person/yuriy-bykov",
		top_rated_film: "Дурак",
	},
	{
		name: "Жан-Марк Валле",
		career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
		films: "https://www.film.ru/person/zhan-mark-valle",
		top_rated_film: "Далласский клуб покупателей",
	},
];

const topFilmsList = []; //Создаем пустой массив с именем "topFilmsList", а затем добавляем в него значение свойства "top_rated_film" объекта "director". Объект содержит информацию о лучшем фильме.

// Вызываем метод forEach для массива listOfFilmDirectors, чтобы обойти каждого режиссера.
listOfFilmDirectors.forEach((director) => {
	const directorElement = document.querySelector(".directors"); //Для каждого режиссера находим элемент на странице с классом "directors", куда мы будем добавлять информацию.
	//Добавляем информацию на страницу
	const directorLi = document.createElement("li"); //Создаем новый элемент на странице (li-элемент используется для создания элементов списка), заполняем его информацией о режиссере и добавляем на страницу.
	directorLi.innerHTML = `
    <h2 class="director_name">${director.name}</h2>
	
    <p class="director_career">Карьера: ${director.career}</p>
    <p classs="director_film"> <a href="${director.films}">Список фильмов</a></p>
    <p class="director_top_rated_film">Лучший фильм: ${director.top_rated_film}</p>
  `; //выводим на страницу имя, карьеру, список фильмов и лучшие фильмы режиссёра
	directorElement.appendChild(directorLi); //добавляем созданный li-элемент в контейнер, который мы создали для вывода информации о каждом режиссёре

	// После добавления информации о каждом режиссере на страницу, мы добавляем его лучший фильм в новый массив topFilmsList
	topFilmsList.push(director.top_rated_film); //Метод "push()" добавляет новый элемент в конец массива. В данном случае, он добавляет значение свойства "top_rated_film" в массив "topFilmsList". Таким образом, можно создать список лучших фильмов режиссера и добавлять в него новые значения по мере необходимости.
});

//В конце выводим массив topFilmsList в консоль, чтобы проверить правильность добавления лучших фильмов к режиссерам.
console.log(topFilmsList); // ["Список Шиндлера", "Начало", "Три билборда на границе Эббинга, Миссури", "Брат", "Зелёная книга", "Дурак", "Далласский клуб покупателей"]
