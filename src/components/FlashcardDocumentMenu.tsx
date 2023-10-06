import React from "react";
import SelectedLineOnMenu from "./SelectedLineOnMenu";

type Props = {};

const FlashcardDocumentMenu = (props: Props) => {
	return (
		<React.Fragment>
			<div className="flash-card-document-menu w-full">
				<SelectedLineOnMenu>
					<div className="w-full h-full flex flex-row">
						<div className="text-slate-800 text-xs">
							Flashcard 1
						</div>
					</div>
				</SelectedLineOnMenu>
				<SelectedLineOnMenu>
					<div className="w-full h-full flex flex-row">
						<div className="text-slate-800 text-xs">
							Flashcard 2
						</div>
					</div>
				</SelectedLineOnMenu>
			</div>
		</React.Fragment>
	);
};

export default FlashcardDocumentMenu;
