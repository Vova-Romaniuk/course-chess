export const SUBMENU_FIGURES = [
	{
		name: 'King',
		link: 'lesson/king',
	},
	{
		name: 'Knight',
		link: 'lesson/knight',
	},
	{
		name: 'Bishop',
		link: 'lesson/bishop',
	},
	{
		name: 'Queen',
		link: 'lesson/queen',
	},
	{
		name: 'Pawn',
		link: 'lesson/pawn',
	},
	{
		name: 'Rook',
		link: 'lesson/rook',
	},
];

export const QUEEN_LESSON = {
	firstPosition: [4, 4],
	name: 'queen',
	icon: '/images/queen-white.png',
	title: 'Королева',
	description:
		'Королева є однією з найважливіших та найнебезпечніших фігур в шахах. Вона може рухатись вперед, назад, убік і по діагоналі.',
	textLesson:
		'Зараз на дошці ви бачите сірі кружочки вони показують на яке поле може походити королева отож давайте підемо на поле а8, а зараз на a1 далі на поле h1 і на поле h8 та повернемось на центр дошки тобто на поле d4 та після цього на d3 проте є деякі нюанси щодо ходів королеви, вона не може перескакувати через союзні фігури зараз щоб перейти на поле d6 є різні варіанти але ми підемо спочатку на a6 потім на d6 також дана фігура не може перескакувати і ворожі фігури але вона може їх бити',
	times: [12000, 1400, 1600, 1500, 5000, 2000, 7000, 1000],
	lesson: [
		{
			currentFig: {
				position: [0, 0],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [7, 0],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [7, 7],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [0, 7],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [4, 3],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
			otherFig: {
				position: [3, 3],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
		},
		{
			currentFig: {
				position: [5, 3],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [2, 0],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [2, 3],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
	],
};
export const KING_LESSON = {
	firstPosition: [4, 4],
	name: 'king',
	icon: '/images/king-white.png',
	title: 'Король',
	description:
		'Король є головною фігурою в шахах від нього залежить результат гри, король ходить тільки на одне поле в будь-якому напрямку',
	textLesson:
		'Зараз на дошці ви бачите на яке поле може походити король давайте зробимо декілька ходів підемо на поле f5 потім давайте підемо на e5 після чого на d6 зараз добавимо ворожого короля на поле d8 за правилами відстань між королями не може бути меншою ніж на одне поле  як ви бачите білий король неможе перейти на поля c7, d7 та e7 тож давайте ступимо на поле c5 також король не може ходити на ті поля на які може походити ворожа фігура',
	times: [11000, 2500, 2000, 20000],
	lesson: [
		{
			currentFig: {
				position: [3, 5],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [3, 4],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [2, 3],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
			otherFig: {
				position: [0, 3],
				name: 'king',
				icon: '/images/king-black.png',
				color: 'black',
			},
		},
		{
			currentFig: {
				position: [3, 2],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
	],
};
export const KNIGHT_LESSON = {
	firstPosition: [4, 4],
	name: 'knight',
	icon: '/images/knight-white.png',
	title: 'Кінь',
	description:
		'Кінь єдина шахова фігура яка не йде по прямій лінії. Лицар рухається в одному напрямку на 2 поля,а потім на одну клітинку вбік буквою "Г"',
	textLesson:
		'Зараз на дошці знаходиться кінь та всі доступні для нього поля на які він може піти давайте підемо на поле d6 після чого на поле b5, а зараз перейдемо на поле d4 та добавимо союзну фігуру на поле d5. Лицар це єдина фігура яка може переступати через фігури в даний момент кінь може з легкістю перейти на поле c6 або e6 тож давайте покрокуємо на поле e6',
	times: [12000, 2300, 2800, 19000],
	lesson: [
		{
			currentFig: {
				position: [2, 3],
				name: 'knight',
				icon: '/images/knight-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [3, 1],
				name: 'knight',
				icon: '/images/knight-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [4, 3],
				name: 'knight',
				icon: '/images/knight-white.png',
				color: 'white',
			},
			otherFig: {
				position: [3, 3],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
		},
		{
			currentFig: {
				position: [2, 4],
				name: 'knight',
				icon: '/images/knight-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
	],
};
export const BISHOP_LESSON = {
	firstPosition: [4, 4],
	name: 'bishop',
	icon: '/images/bishop-white.png',
	title: 'Слон',
	description:
		'Слон це фігура яка ходить тільки діагонально, офіцери бувають двох типів біло та чорно польні відповідно',
	textLesson:
		'Розглянемо приклад з білопольним слоном, на дошці відображено доступні ходи для даної фігури  давайте перейдемо на поле g2 після чого змінимо наш хід на f1 наступним ходом буде поле с4 зараз додамо чорнопольного офіцера на поле d4 та зробимо ним декільки кроків наприклад на клітинку з ідентифікатором f6 потім перейдемо на поле g5 та добавимо союзну фігуру на поле f4 як ви бачите діагональ з f4 по c1 недоступна для крокування на неї офіцером оскільки дана фігура немає такої можливості тож перейдемо на будь яке поле, що доступно наприклад h4',
	times: [12400, 3500, 3200, 4300, 8500, 3000, 23000],
	lesson: [
		{
			currentFig: {
				position: [6, 6],
				name: 'bishop',
				icon: '/images/bishop-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [7, 5],
				name: 'bishop',
				icon: '/images/bishop-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [4, 2],
				name: 'bishop',
				icon: '/images/bishop-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [4, 3],
				name: 'bishop',
				icon: '/images/bishop-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [2, 5],
				name: 'bishop',
				icon: '/images/bishop-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [3, 6],
				name: 'bishop',
				icon: '/images/bishop-white.png',
				color: 'white',
			},
			otherFig: {
				position: [4, 5],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
		},
		{
			currentFig: {
				position: [4, 7],
				name: 'bishop',
				icon: '/images/bishop-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
	],
};

export const ROOK_LESSON = {
	firstPosition: [4, 4],
	name: 'rook',
	icon: '/images/rook-white.png',
	title: 'Тура',
	description: 'Тура може рухатись вперед, назад, наліво та вправо',
	textLesson:
		'Зараз зробимо декілька ходів давайте перейдемо на поле f7 після чого на c7 наступним кроком буде поле c4 водночас добавимо союзну фігуру на d4 як бачите напрямок в праву сторону не доступний оскільки тура не має можливості ходити крізь союзні фігури тож підемо на поле c2',
	times: [6000, 1600, 3100, 18500],
	lesson: [
		{
			currentFig: {
				position: [1, 5],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [1, 2],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [4, 2],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
			otherFig: {
				position: [4, 3],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
		},
		{
			currentFig: {
				position: [6, 2],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
	],
};
export const PAWN_LESSON = {
	firstPosition: [6, 5],
	name: 'pawn',
	icon: '/images/pawn-white.png',
	title: 'Пішак',
	description:
		'Пішак це фігура яка не ходить тільки вперед не може ходити назад, також має змогу першим ходом ходити на 2 клітинки вперед проте захоплює поле пішак тільки на 1 поле по діагоналі.',
	textLesson:
		'В даний момент на дошці знаходиться пішак початкова позиція всіх пішаків  горизонталь 7 та 2 це початкова його позиція з неї він може походити на одну або дві клітинки, але це тільки перший хід всі наступні кроки на одну клітинку тож давайте підемо на поле e4 і добавимо ворожу фігуру на поле e5 зараз білий пішак може або побити фігуру на d4 або піти на одне поле вперед давайте поб`ємо на e5 аналогічна ситуація і з чорним пішаком додамо дану фігуру на b7 наступним кроком буде поле b6 як видно після першого ходу наступні кроки тільки на одну клітинку вперед також в пішака є ще один цікавий трюк проте про нього ми поговоримо в іншому уроці.',
	times: [26500, 13100, 7300, 3800],
	lesson: [
		{
			currentFig: {
				position: [4, 5],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
			otherFig: {
				position: [3, 4],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
		},
		{
			currentFig: {
				position: [3, 4],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [1, 1],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
		{
			currentFig: {
				position: [2, 1],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
			otherFig: {
				position: [],
				name: '',
				icon: '',
				color: '',
			},
		},
	],
};
export const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const NUMBERS = ['8', '7', '6', '5', '4', '3', '2', '1'];
