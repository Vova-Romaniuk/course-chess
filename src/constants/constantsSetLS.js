export const taskAllFigures = {
	knight: [
		{
			conditionText:
				'Кінь хоче досягти правого краю дошки та найвищого поля яке яке йому доступне. Чи можете ви знайти цей хід?',
			checkStep: [
				{
					name: 'knight',
					icon: 'https://www.chess.com/chess-themes/pieces/neo/150/wn.png',
					positionCheck: [[2, 7]],
				},
			],
			firstSolutionPos: [4, 6],
			figures: [
				{
					position: [4, 6],
					name: 'knight',
					icon: '/images/knight-white.png',
					color: 'white',
				},
			],
		},
		{
			conditionText:
				'Кінь любить знаходитись в центрі дошки. Перемістіть коня в центр дошки.',
			checkStep: [
				{
					name: 'knight',
					icon: 'https://www.chess.com/chess-themes/pieces/neo/150/wn.png',
					positionCheck: [[4, 4]],
				},
			],
			firstSolutionPos: [6, 3],
			figures: [
				{
					position: [5, 1],
					name: 'rook',
					icon: '/images/rook-white.png',
					color: 'white',
				},
				{
					position: [5, 5],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
				{
					position: [4, 2],
					name: 'bishop',
					icon: '/images/bishop-white.png',
					color: 'white',
				},
				{
					position: [6, 3],
					name: 'knight',
					icon: '/images/knight-white.png',
					color: 'white',
				},
			],
		},
		{
			conditionText:
				'Один з білих конів знаходиться в центрі дошки. Перемістіть іншого також в центр?',
			checkStep: [
				{
					name: 'knight',
					icon: 'https://www.chess.com/chess-themes/pieces/neo/150/wn.png',
					positionCheck: [[4, 3]],
				},
			],
			firstSolutionPos: [5, 1],
			figures: [
				{
					position: [5, 1],
					name: 'knight',
					icon: '/images/knight-white.png',
					color: 'white',
				},
				{
					position: [4, 4],
					name: 'knight',
					icon: '/images/knight-white.png',
					color: 'white',
				},
			],
		},
		{
			conditionText:
				'Більшість полів коня перекрито союзними фігурами. Однак перемість коня в центр подій.',
			checkStep: [
				{
					name: 'knight',
					icon: 'https://www.chess.com/chess-themes/pieces/neo/150/wn.png',
					positionCheck: [[4, 4]],
				},
			],
			firstSolutionPos: [6, 5],
			figures: [
				{
					position: [7, 3],
					name: 'rook',
					icon: '/images/rook-white.png',
					color: 'white',
				},
				{
					position: [5, 3],
					name: 'bishop',
					icon: '/images/bishop-white.png',
					color: 'white',
				},
				{
					position: [6, 3],
					name: 'bishop',
					icon: '/images/bishop-white.png',
					color: 'white',
				},
				{
					position: [6, 5],
					name: 'knight',
					icon: '/images/knight-white.png',
					color: 'white',
				},
				{
					position: [6, 7],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
			],
		},
		{
			conditionText:
				'Знайдіть такий хід, щоб кінь міг дістати до всіх чотирьох фігур чорних',
			checkStep: [
				{
					name: 'knight',
					icon: 'https://www.chess.com/chess-themes/pieces/neo/150/wn.png',
					positionCheck: [[4, 3]],
				},
			],
			firstSolutionPos: [6, 4],
			figures: [
				{
					position: [6, 4],
					name: 'knight',
					icon: '/images/knight-white.png',
					color: 'white',
				},
				{
					position: [3, 1],
					name: 'queen',
					icon: '/images/queen-black.png',
					color: 'black',
				},
				{
					position: [3, 5],
					name: 'bishop',
					icon: '/images/bishop-black.png',
					color: 'black',
				},
				{
					position: [2, 2],
					name: 'rook',
					icon: '/images/rook-black.png',
					color: 'black',
				},
				{
					position: [2, 4],
					name: 'rook',
					icon: '/images/rook-black.png',
					color: 'black',
				},
			],
		},
	],
	king: [
		{
			conditionText:
				'Чи можете ви перемістити короля прямо на одне поле вгору, щоб стати ближче до кута?',
			checkStep: [
				{
					name: 'king',
					icon: '/images/king-white.png',
					positionCheck: [[1, 0]],
				},
			],
			firstSolutionPos: [2, 0],
			figures: [
				{
					position: [2, 0],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText: 'Перемістіть короля в нижній правий кут.',
			checkStep: [
				{
					name: 'king',
					icon: '/images/king-white.png',
					positionCheck: [[7, 7]],
				},
			],
			firstSolutionPos: [6, 6],
			figures: [
				{
					position: [6, 6],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText: 'Перемістіть короля в центр дошки.',
			checkStep: [
				{
					name: 'king',
					icon: '/images/king-white.png',
					positionCheck: [[3, 4]],
				},
			],
			firstSolutionPos: [2, 5],
			figures: [
				{
					position: [2, 5],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText:
				'Перемістіть короля на іншу центральну частину дошки перемістивши короля вліво.',
			checkStep: [
				{
					name: 'king',
					icon: '/images/king-white.png',
					positionCheck: [[3, 3]],
				},
			],
			firstSolutionPos: [3, 4],
			figures: [
				{
					position: [3, 4],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText:
				'Перемістіть короля на іншу центральну частину дошки перемістивши короля вліво.',
			checkStep: [
				{
					name: 'king',
					icon: '/images/king-white.png',
					positionCheck: [[3, 3]],
				},
			],
			firstSolutionPos: [3, 4],
			figures: [
				{
					position: [3, 4],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText:
				'Король хоче перейти до кутового поля сусіднього з ним. Чи можете ви перемістити короля в цей кут',
			checkStep: [
				{
					name: 'king',
					icon: '/images/king-white.png',
					positionCheck: [[0, 7]],
				},
			],
			firstSolutionPos: [0, 6],
			figures: [
				{
					position: [0, 6],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
	],
	pawn: [
		{
			conditionText:
				'Пішак білих може ходити на одне або два поля за свій перший хід. Зіграйте хід який перемістить пішака в центр дошки',
			checkStep: [
				{
					name: 'pawn',
					icon: '/images/pawn-white.png',
					positionCheck: [[4, 4]],
				},
			],
			firstSolutionPos: [6, 4],
			figures: [
				{
					position: [6, 4],
					name: 'pawn',
					icon: '/images/pawn-white.png',
					color: 'white',
				},
			],
		},
		{
			conditionText:
				'У білих є два пішаки, але тільки один з них може походити на два поля вперед. Знайдіть цей хід.',
			checkStep: [
				{
					name: 'pawn',
					icon: '/images/pawn-white.png',
					positionCheck: [[4, 3]],
				},
			],
			firstSolutionPos: [6, 3],
			figures: [
				{
					position: [6, 3],
					name: 'pawn',
					icon: '/images/pawn-white.png',
					color: 'white',
				},
				{
					position: [5, 6],
					name: 'pawn',
					icon: '/images/pawn-white.png',
					color: 'white',
				},
			],
		},
		{
			conditionText:
				'Зараз на дошці знаходиться три пішака, але тільки один з них може рухатись. Зробіть цей хід.',
			checkStep: [
				{
					name: 'pawn',
					icon: '/images/pawn-white.png',
					positionCheck: [[3, 6]],
				},
			],
			firstSolutionPos: [4, 6],
			figures: [
				{
					position: [4, 6],
					name: 'pawn',
					icon: '/images/pawn-white.png',
					color: 'white',
				},
				{
					position: [4, 4],
					name: 'pawn',
					icon: '/images/pawn-white.png',
					color: 'white',
				},
				{
					position: [4, 2],
					name: 'pawn',
					icon: '/images/pawn-white.png',
					color: 'white',
				},
				{
					position: [3, 2],
					name: 'pawn',
					icon: '/images/pawn-black.png',
					color: 'black',
				},
				{
					position: [3, 4],
					name: 'pawn',
					icon: '/images/pawn-black.png',
					color: 'black',
				},
			],
		},
		{
			conditionText:
				'Чи можете ви знайти хід яким пішак може атакувати 2 ворожі тури.',
			checkStep: [
				{
					name: 'pawn',
					icon: '/images/pawn-white.png',
					positionCheck: [[4, 4]],
				},
			],
			firstSolutionPos: [5, 4],
			figures: [
				{
					position: [5, 4],
					name: 'pawn',
					icon: '/images/pawn-white.png',
					color: 'white',
				},
				{
					position: [6, 0],
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
				{
					position: [3, 3],
					name: 'rook',
					icon: '/images/rook-black.png',
					color: 'black',
				},
				{
					position: [3, 5],
					name: 'rook',
					icon: '/images/rook-black.png',
					color: 'black',
				},
			],
		},
		{
			conditionText:
				'Білий слон знаходиться в оточенні союзних пішаків. Знайдіть такий хід який відкриє шлях слону.',
			checkStep: [
				{
					name: 'pawn',
					icon: '/images/pawn-white.png',
					positionCheck: [[3, 4]],
				},
			],
			firstSolutionPos: [4, 4],
			figures: [
				{
					position: [4, 4],
					name: 'pawn',
					icon: '/images/pawn-white.png',
					color: 'white',
				},
				{
					position: [4, 6],
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
					position: [6, 4],
					name: 'pawn',
					icon: '/images/pawn-white.png',
					color: 'white',
				},
				{
					position: [5, 5],
					name: 'bishop',
					icon: '/images/bishop-white.png',
					color: 'white',
				},
				{
					position: [5, 4],
					name: 'knight',
					icon: '/images/knight-black.png',
					color: 'black',
				},
				{
					position: [5, 6],
					name: 'bishop',
					icon: '/images/bishop-black.png',
					color: 'black',
				},
				{
					position: [3, 6],
					name: 'pawn',
					icon: '/images/pawn-black.png',
					color: 'black',
				},
				{
					position: [0, 0],
					name: 'king',
					icon: '/images/king-black.png',
					color: 'black',
				},
			],
		},
	],
	rook: [
		{
			conditionText: 'Перемістіть туру вгору на край дошки.',
			checkStep: [
				{
					name: 'rook',
					icon: '/images/rook-white.png',
					positionCheck: [[0, 6]],
				},
			],
			firstSolutionPos: [7, 6],
			figures: [
				{
					position: [7, 6],
					name: 'rook',
					icon: '/images/rook-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText:
				'Тура хоче побувати на одному з чотирьох кутових полів. Чи можете ви знайти єдиний хід яким тура досягне кута?',
			checkStep: [
				{
					name: 'rook',
					icon: '/images/rook-white.png',
					positionCheck: [[0, 0]],
				},
			],
			firstSolutionPos: [0, 6],
			figures: [
				{
					position: [0, 6],
					name: 'rook',
					icon: '/images/rook-white.png',
					color: 'white',
				},
				{
					position: [0, 7],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText:
				'Обидві тури хочуть дістатись правого краю дошки, яка тура може зробити це зробивши один хід?',
			checkStep: [
				{
					name: 'rook',
					icon: '/images/rook-white.png',
					positionCheck: [[5, 7]],
				},
			],
			firstSolutionPos: [5, 0],
			figures: [
				{
					position: [5, 0],
					name: 'rook',
					icon: '/images/rook-white.png',
					color: 'white',
				},
				{
					position: [3, 0],
					name: 'rook',
					icon: '/images/rook-white.png',
					color: 'white',
				},
				{
					position: [3, 3],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText:
				'Обидві тури хочуть досягти верхнього правого кута. Яка тура зможе потрапити туди всього за 2 ходи?',
			checkStep: [
				{
					name: 'rook',
					icon: '/images/rook-white.png',
					positionCheck: [[0, 0]],
				},
			],
			firstSolutionPos: [1, 0],
			figures: [
				{
					position: [1, 0],
					name: 'rook',
					icon: '/images/rook-white.png',
					color: 'white',
				},
				{
					position: [1, 7],
					name: 'queen',
					icon: '/images/queen-white.png',
					color: 'white',
				},
				{
					position: [4, 7],
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
			passed: false,
		},
		{
			conditionText:
				'Тура в нижньому правому куті заблокована власними фігурами! Тура хоче переміститися в нижній лівий кут всього за два ходи чи можете ви пересунути іншу фігуру, щоб відкрити шлях турам.',
			checkStep: [
				{
					name: 'king',
					icon: '/images/king-white.png',
					positionCheck: [[6, 6]],
				},
			],
			firstSolutionPos: [7, 6],
			figures: [
				{
					position: [7, 7],
					name: 'rook',
					icon: '/images/rook-white.png',
					color: 'white',
				},
				{
					position: [6, 7],
					name: 'rook',
					icon: '/images/rook-white.png',
					color: 'white',
				},
				{
					position: [7, 6],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
				{
					position: [6, 5],
					name: 'queen',
					icon: '/images/queen-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
	],
	queen: [
		{
			conditionText:
				'Королева хоче досягнути лівого краю дошки. Чи можете ви знайти цей хід?',
			checkStep: [
				{
					name: 'queen',
					icon: '/images/queen-white.png',
					positionCheck: [[3, 0]],
				},
			],
			firstSolutionPos: [3, 7],
			figures: [
				{
					position: [3, 7],
					name: 'queen',
					icon: '/images/queen-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText:
				'Зараз королева хоче переміститись в нижній в кут який їй доступний.',
			checkStep: [
				{
					name: 'queen',
					icon: '/images/queen-white.png',
					positionCheck: [[7, 0]],
				},
			],
			firstSolutionPos: [3, 0],
			figures: [
				{
					position: [3, 0],
					name: 'queen',
					icon: '/images/queen-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText: 'Перемістіть королеву в верхній правий кут.',
			checkStep: [
				{
					name: 'queen',
					icon: '/images/queen-white.png',
					positionCheck: [[0, 7]],
				},
			],
			firstSolutionPos: [7, 0],
			figures: [
				{
					position: [7, 0],
					name: 'queen',
					icon: '/images/queen-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText:
				'Королева хоче просунутися прямо вниз по дошці та досягти правого нижнього поля, але перешкоджає король білих. Чи можете ви найти хід королеви, щоб вона могла досягти своєї мети за два ходи.',
			checkStep: [
				{
					name: 'queen',
					icon: '/images/queen-white.png',
					positionCheck: [[0, 0]],
				},
			],
			firstSolutionPos: [7, 7],
			figures: [
				{
					position: [0, 7],
					name: 'queen',
					icon: '/images/queen-white.png',
					color: 'white',
				},
				{
					position: [1, 7],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText:
				'Королева хоче досягти верхнього лівого кута. Чи можете ви знайти цей хід?',
			checkStep: [
				{
					name: 'queen',
					icon: '/images/queen-white.png',
					positionCheck: [[0, 0]],
				},
			],
			firstSolutionPos: [7, 7],
			figures: [
				{
					position: [7, 7],
					name: 'queen',
					icon: '/images/queen-white.png',
					color: 'white',
				},
				{
					position: [6, 0],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
	],
	bishop: [
		{
			conditionText:
				'Слон хоче перейти на іншу сторону дошки одним ходом. Можете знайти цей хід?',
			checkStep: [
				{
					name: 'bishop',
					icon: '/images/bishop-white.png',
					positionCheck: [[0, 7]],
				},
			],
			firstSolutionPos: [7, 0],
			figures: [
				{
					position: [7, 0],
					name: 'bishop',
					icon: '/images/bishop-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText:
				'Слон хоче дістатись лівого верхнього кута який хід допоможе йому це зробити?',
			checkStep: [
				{
					name: 'bishop',
					icon: '/images/bishop-white.png',
					positionCheck: [[6, 6]],
				},
			],
			firstSolutionPos: [7, 5],
			figures: [
				{
					position: [7, 5],
					name: 'bishop',
					icon: '/images/bishop-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText:
				'Білопольний слон знаходиться в центрі чи можете ви поруч з ним перемістити чорнопольного слона?',
			checkStep: [
				{
					name: 'bishop',
					icon: '/images/bishop-white.png',
					positionCheck: [[4, 3]],
				},
			],
			firstSolutionPos: [1, 0],
			figures: [
				{
					position: [1, 0],
					name: 'bishop',
					icon: '/images/bishop-white.png',
					color: 'white',
				},
				{
					position: [4, 4],
					name: 'bishop',
					icon: '/images/bishop-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText:
				'Слон хоче перейти на інший бік і досягти вершини всього за 2 ходи. Який хід дозволить це зробити?',
			checkStep: [
				{
					name: 'bishop',
					icon: '/images/bishop-white.png',
					positionCheck: [[4, 2]],
				},
			],
			firstSolutionPos: [7, 5],
			figures: [
				{
					position: [1, 1],
					name: 'queen',
					icon: '/images/queen-white.png',
					color: 'white',
				},
				{
					position: [7, 5],
					name: 'bishop',
					icon: '/images/bishop-white.png',
					color: 'white',
				},
				{
					position: [1, 3],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
				{
					position: [1, 7],
					name: 'rook',
					icon: '/images/rook-white.png',
					color: 'white',
				},
				{
					position: [4, 6],
					name: 'rook',
					icon: '/images/rook-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
		{
			conditionText:
				'Слон готовий, досягнути вершини дошки. Зможете це зробити?',
			checkStep: [
				{
					name: 'bishop',
					icon: '/images/bishop-white.png',
					positionCheck: [[0, 6]],
				},
			],
			firstSolutionPos: [7, 5],
			figures: [
				{
					position: [1, 1],
					name: 'queen',
					icon: '/images/queen-white.png',
					color: 'white',
				},
				{
					position: [4, 2],
					name: 'bishop',
					icon: '/images/bishop-white.png',
					color: 'white',
				},
				{
					position: [1, 3],
					name: 'king',
					icon: '/images/king-white.png',
					color: 'white',
				},
				{
					position: [1, 7],
					name: 'rook',
					icon: '/images/rook-white.png',
					color: 'white',
				},
				{
					position: [4, 6],
					name: 'rook',
					icon: '/images/rook-white.png',
					color: 'white',
				},
			],
			passed: false,
		},
	],
};
export const task = {
	knight: {
		number: 0,
		passed: false,
	},
	king: {
		number: 0,
		passed: false,
	},
	bishop: {
		number: 0,
		passed: false,
	},
	pawn: {
		number: 0,
		passed: false,
	},
	rook: {
		number: 0,
		passed: false,
	},
	queen: {
		number: 0,
		passed: false,
	},
};
