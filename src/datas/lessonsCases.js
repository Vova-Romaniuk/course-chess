import {
	KING_LESSON,
	KNIGHT_LESSON,
	PAWN_LESSON,
	BISHOP_LESSON,
	ROOK_LESSON,
	QUEEN_LESSON,
	GAME_GOAL,
} from '../constants/constants';
export const figureLessons = (name) => {
	switch (name) {
		case 'rook':
			return ROOK_LESSON;
		case 'knight':
			return KNIGHT_LESSON;
		case 'bishop':
			return BISHOP_LESSON;
		case 'king':
			return KING_LESSON;
		case 'queen':
			return QUEEN_LESSON;
		case 'pawn':
			return PAWN_LESSON;
		case 'game-goal':
			return GAME_GOAL;
		default:
			return {};
	}
};
