import React from "react";
import SelectedLineOnMenu from "./SelectedLineOnMenu";

type Props = {};

enum DocumentFeatures {
	SEARCHING,
	CREATE_NEW_DOCUMENT,
	CREATE_NEW_FLASHCARD,
	MY_FOLDERS,
	MY_FLASHCARDS,
}

const DocumentFeaturesText: { [key: string]: string } = {
	[DocumentFeatures.SEARCHING]: "Searching",
	[DocumentFeatures.CREATE_NEW_DOCUMENT]: "Create new document",
	[DocumentFeatures.CREATE_NEW_FLASHCARD]: "Create new flashcard",
	[DocumentFeatures.MY_FOLDERS]: "My folders",
	[DocumentFeatures.MY_FLASHCARDS]: "My flashcards",
};

const DocumentMenu = (props: Props) => {
	return (
		<React.Fragment>
			{Object.keys(DocumentFeatures).map((docFtrKey) => {
				return (
					<SelectedLineOnMenu key={docFtrKey} className="py-1">
						<div className="w-full h-full flex flex-row">
							<div className="text-slate-800 text-xs">
								{DocumentFeaturesText[docFtrKey]}
							</div>
						</div>
					</SelectedLineOnMenu>
				);
			})}
		</React.Fragment>
	);
};
export default DocumentMenu;
