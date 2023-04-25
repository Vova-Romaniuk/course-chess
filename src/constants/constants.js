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
		'Зараз на дошці ви бачите сірі кружочки вони показують на яке поле може походити королева давайте підемо на поле а8, а зараз на a1 далі на поле h1 і на поле h8 та повернемось на центр дошки тобто на поле d4 та після цього на d3 проте є деякі нюанси щодо ходів королеви, вона не може перескакувати через союзні фігури зараз щоб перейти на поле d6 є різні варіанти але ми підемо спочатку на a6 потім на d6',
	times: [12160, 1600, 1700, 1400, 5010, 2240, 17500, 1280],
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
		'Король є головною фігурою в шахах від нього залежить результат гри, король ходить тільки на одне поле в будь-якому напрямку. Це єдина фігура яку неможливо побити',
	textLesson:
		'Зараз на дошці ви бачите на яке поле може походити король давайте зробимо декілька ходів підемо на поле f5 потім давайте підемо на e5 після чого на d6 зараз добавимо ворожого короля на поле d8 за правилами відстань між королями не може бути меншою ніж на одне поле як ви бачите білий король неможе перейти на поля c7, d7 та e7 тож давайте ступимо на поле c5 також король не може ходити на ті поля на які може походити ворожа фігура',
	times: [11200, 2850, 1800, 22500],
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
	times: [11600, 2340, 3200, 20000],
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
		'Розглянемо приклад з білопольним слоном, на дошці відображено доступні ходи для даної фігури давайте перейдемо на поле g2 після чого змінимо наш хід на f1 наступним ходом буде поле с4 зараз додамо чорнопольного офіцера на поле d4 та зробимо ним декільки кроків наприклад на поле f6 потім перейдемо на поле g5 та добавимо союзну фігуру на поле f4 як ви бачите діагональ з f4 по c1 недоступна для крокування на неї офіцером оскільки дана фігура немає такої можливості тож перейдемо на будь яке поле, що доступно наприклад h4',
	times: [12800, 3520, 3100, 4900, 5500, 2880, 23000],
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
	times: [6000, 1800, 3200, 17800],
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
		'Пішак це фігура яка ходить тільки вперед не може ходити назад, також має змогу першим ходом ходити на 2 клітинки вперед проте захоплює поле пішак тільки на 1 поле по діагоналі.',
	textLesson:
		'В даний момент на дошці знаходиться пішак початкова позиція всіх пішаків  горизонталь 7 та 2 це початкова його позиція з неї він може походити на одну або дві клітинки, але це тільки перший хід всі наступні кроки на одну клітинку тож давайте підемо на поле e4 і добавимо ворожу фігуру на поле e5 зараз білий пішак може або побити фігуру на d4 або піти на одне поле вперед давайте поб`ємо на e5 аналогічна ситуація і з чорним пішаком додамо дану фігуру на b7 наступним кроком буде поле b6 як видно після першого ходу наступні кроки тільки на одну клітинку вперед також в пішака є ще один цікавий трюк проте про нього ми поговоримо в іншому уроці',
	times: [27600, 14290, 6800, 3200],
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
export const GAME_GOAL = {
	title: 'Гра та мета',
	icon: '/images/game-goal.png',
	description:
		'Головною метою шахів є поставити мат ворожому королю, розташування - фігур по кутках тури, поруч лицарі, за ними слони, королі та королеви займають центральні поля королева поле свого кольору. Всі пішаки йдуть на другому та сьомому рядах. В цій грі спочатку ходять білі фігури потім чорні',
	fieldLighted: [
		[
			[1, 0],
			[1, 1],
			[1, 2],
			[1, 3],
			[1, 4],
			[1, 5],
			[1, 6],
			[1, 7],
			[6, 0],
			[6, 1],
			[6, 2],
			[6, 3],
			[6, 4],
			[6, 5],
			[6, 6],
			[6, 7],
		],
		[
			[0, 0],
			[0, 7],
			[7, 0],
			[7, 7],
		],
		[
			[0, 1],
			[0, 6],
			[7, 1],
			[7, 6],
		],
		[
			[0, 2],
			[0, 5],
			[7, 2],
			[7, 5],
		],
		[
			[0, 3],
			[7, 3],
		],
		[
			[0, 4],
			[7, 4],
		],
	],
	times: [
		12300, 3200, 3200, 2400, 9300, 4800, 37000, 7500, 15250, 3300, 10300,
		23700, 6700, 24000, 6300, 20000, 15000, 2000, 1600, 75000, 2300, 13000,
	],
	timesLight: [11500, 3000, 3000, 2000, 8900, 4500],
	textLesson:
		'Зараз розглянемо розміщення фігур на дошці тож розпочнімо друга та сьомі горизонталі це пішаки відповідних кольорів, далі по кутах розміщені тури після них розміщюються лицарі, після яких ідуть слони далі центральні поля займає король та королева, королева відповідно поле свого кольору, а далі король на позиціях e4 та e8 відповідно. Зараз розглянемо що означає мат, шах та пат, отож шах - це напад на короля після якого король має відійти на не шаховане поле або союзна фігура має закрити свого короля від атаки якщо це можливо тож давайте розглянемо приклад давайте додамо чорного короля на поле с7 та білу королеву на поле f5, а також чорного коня на поле e5 і слона на клітинку з ідентифікатором e4 зараз хід білих давайте дамо шах чорному королю походивши на поле f7 після того як король опинився під шахом то не всі чорні фігури можуть зробити хід, походити  може тільки кінь він може або побити білу королеву або прикрити короля на поле d7 і ще один хід який можуть зробити чорні фігури це сам король який може відійти на не шахове поле. Одразу ж давайте розглянемо варіант мату, мат це коли королю дають шах і він немає шляху ні відійти ні його не можуть прикрити його союзні фігури як приклад знову добавимо чорного короля на поле с8 та білі тури на h7 та g1 зараз білі починають хід тож давайте походимо турою з g1 на g8 зараз чорному королю шах і мат це означає, що білі перемогли залишився випадок пату, пат - це коли на короля ніхто не напав але він і його союзні фігури немають куди походити, давайте розглянемо приклад добавимо декілька фігур, білі починають якщо білим королем переміститись на поле h6 то це буде означати пат тобто нічия. Також розкажу вам про рокеровку та особливості ходів пішаком розпочнемо з рокеровок, рокеровка це рух короля з його початкової позиції через одне поле по горизонталі з одночасним рухом тури на це поле. Рокеровки бувають довгі та короткі розглянемо приклад короткої рокеровки для білих фігур, а зараз приклад довгої для чорних. Правила щодо рокеровки, якщо хочаб одна фігура яка бере  участь в рокеровці здійнювала хід до рокеровки то рокерування неможливе. Залишилось розглянути дві особливості для пішака коли пішак досягає останньої ворожої лінії він може перетворитись в будь яку іншу фігуру окрім короля. Другою особливістю є такий термін як "взяття на проході" це коли пішак одного гравця забирає пішака суперника. Взяття на проході можливе в ситуації, якщо пішак перемістився з початкового положення на два поля вперед та став на сусідню клітину з пішаком суперника. При цьому пішака, який взяв пішака суперника на проході, ставлять на 1 клітинку за збитим пішаком. Взяття на проході можливе лише наступним ходом, і якщо гравець одразу не використав своє право взяти пішак на проході, то надалі взяття цього пішака на проході неможливе. Розглянемо приклад добавимо білого пішака на поле d5 та чорного на поле e7 зараз чорні починають хід і пішак робить хід на поле e5 наступний хід за білими оскільки всі умови співпадають з другою особливістю то ми можемо взяти на проході чорного пішака.',
	lesson: [
		[
			{
				position: [1, 0],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
			{
				position: [1, 1],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
			{
				position: [1, 2],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
			{
				position: [1, 2],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
			{
				position: [1, 3],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
			{
				position: [1, 4],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
			{
				position: [1, 5],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
			{
				position: [1, 6],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
			{
				position: [1, 7],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
			{
				position: [6, 0],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
			{
				position: [6, 1],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
			{
				position: [6, 2],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
			{
				position: [6, 3],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
			{
				position: [6, 4],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
			{
				position: [6, 5],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
			{
				position: [6, 6],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
			{
				position: [6, 7],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [0, 0],
				name: 'rook',
				icon: '/images/rook-black.png',
				color: 'black',
			},
			{
				position: [0, 7],
				name: 'rook',
				icon: '/images/rook-black.png',
				color: 'black',
			},
			{
				position: [7, 7],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
			{
				position: [7, 0],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [0, 1],
				name: 'knight',
				icon: '/images/knight-black.png',
				color: 'black',
			},
			{
				position: [0, 6],
				name: 'knight',
				icon: '/images/knight-black.png',
				color: 'black',
			},
			{
				position: [7, 1],
				name: 'knight',
				icon: '/images/knight-white.png',
				color: 'white',
			},
			{
				position: [7, 6],
				name: 'knight',
				icon: '/images/knight-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [0, 2],
				name: 'bishop',
				icon: '/images/bishop-black.png',
				color: 'black',
			},
			{
				position: [0, 5],
				name: 'bishop',
				icon: '/images/bishop-black.png',
				color: 'black',
			},
			{
				position: [7, 2],
				name: 'bishop',
				icon: '/images/bishop-white.png',
				color: 'white',
			},
			{
				position: [7, 5],
				name: 'bishop',
				icon: '/images/bishop-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [0, 3],
				name: 'queen',
				icon: '/images/queen-black.png',
				color: 'black',
			},
			{
				position: [7, 3],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [0, 4],
				name: 'king',
				icon: '/images/king-black.png',
				color: 'black',
			},
			{
				position: [7, 4],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [1, 2],
				name: 'king',
				icon: '/images/king-black.png',
				color: 'black',
			},
			{
				position: [3, 4],
				name: 'knight',
				icon: '/images/knight-black.png',
				color: 'black',
			},
			{
				position: [4, 4],
				name: 'bishop',
				icon: '/images/bishop-black.png',
				color: 'black',
			},
			{
				position: [3, 5],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
			{
				position: [6, 1],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [1, 2],
				name: 'king',
				icon: '/images/king-black.png',
				color: 'black',
			},
			{
				position: [3, 4],
				name: 'knight',
				icon: '/images/knight-black.png',
				color: 'black',
			},
			{
				position: [4, 4],
				name: 'bishop',
				icon: '/images/bishop-black.png',
				color: 'black',
			},
			{
				position: [1, 5],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
			{
				position: [6, 1],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [1, 2],
				name: 'king',
				icon: '/images/king-black.png',
				color: 'black',
			},
			{
				position: [1, 3],
				name: 'knight',
				icon: '/images/knight-black.png',
				color: 'black',
			},
			{
				position: [4, 4],
				name: 'bishop',
				icon: '/images/bishop-black.png',
				color: 'black',
			},
			{
				position: [1, 5],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
			{
				position: [6, 1],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [1, 2],
				name: 'king',
				icon: '/images/king-black.png',
				color: 'black',
			},
			{
				position: [3, 4],
				name: 'knight',
				icon: '/images/knight-black.png',
				color: 'black',
			},
			{
				position: [4, 4],
				name: 'bishop',
				icon: '/images/bishop-black.png',
				color: 'black',
			},
			{
				position: [1, 5],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
			{
				position: [6, 1],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [2, 2],
				name: 'king',
				icon: '/images/king-black.png',
				color: 'black',
			},
			{
				position: [3, 4],
				name: 'knight',
				icon: '/images/knight-black.png',
				color: 'black',
			},
			{
				position: [4, 4],
				name: 'bishop',
				icon: '/images/bishop-black.png',
				color: 'black',
			},
			{
				position: [1, 5],
				name: 'queen',
				icon: '/images/queen-white.png',
				color: 'white',
			},
			{
				position: [6, 1],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [0, 2],
				name: 'king',
				icon: '/images/king-black.png',
				color: 'black',
			},
			{
				position: [4, 2],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
			{
				position: [7, 5],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
			{
				position: [1, 7],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [0, 2],
				name: 'king',
				icon: '/images/king-black.png',
				color: 'black',
			},
			{
				position: [4, 2],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
			{
				position: [0, 5],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
			{
				position: [1, 7],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [0, 7],
				name: 'king',
				icon: '/images/king-black.png',
				color: 'black',
			},
			{
				position: [2, 6],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
			{
				position: [7, 6],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
			{
				position: [3, 0],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
			{
				position: [4, 0],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
		],
		[
			{
				position: [0, 7],
				name: 'king',
				icon: '/images/king-black.png',
				color: 'black',
			},
			{
				position: [2, 7],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
			{
				position: [7, 6],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
			{
				position: [3, 0],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
			{
				position: [4, 0],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
		],
		[
			{
				position: [7, 4],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
			{
				position: [7, 7],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [7, 6],
				name: 'king',
				icon: '/images/king-white.png',
				color: 'white',
			},
			{
				position: [7, 5],
				name: 'rook',
				icon: '/images/rook-white.png',
				color: 'white',
			},
		],
		[
			{
				position: [0, 4],
				name: 'king',
				icon: '/images/king-black.png',
				color: 'black',
			},
			{
				position: [0, 0],
				name: 'rook',
				icon: '/images/rook-black.png',
				color: 'black',
			},
		],
		[
			{
				position: [0, 2],
				name: 'king',
				icon: '/images/king-black.png',
				color: 'black',
			},
			{
				position: [0, 3],
				name: 'rook',
				icon: '/images/rook-black.png',
				color: 'black',
			},
		],
		[
			{
				position: [3, 4],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
			{
				position: [1, 5],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
		],
		[
			{
				position: [3, 4],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
			{
				position: [3, 5],
				name: 'pawn',
				icon: '/images/pawn-black.png',
				color: 'black',
			},
		],
		[
			{
				position: [2, 5],
				name: 'pawn',
				icon: '/images/pawn-white.png',
				color: 'white',
			},
		],
	],
};
export const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const NUMBERS = ['8', '7', '6', '5', '4', '3', '2', '1'];
