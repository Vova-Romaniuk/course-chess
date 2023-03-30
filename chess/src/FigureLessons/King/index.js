import React from 'react';
import BoardLesson from '../../BoardLesson';

function KingLesson() {
  return (
    <div className="king-lesson">
		 <BoardLesson 
		 	nameFigure={"king"} 
		 	steps={[
				[4,4],
				[5,5],
				[6,4],
				[5,3],
			]}
			pos={[4,4]}
			/>
    </div>
  );
}

export default KingLesson;
