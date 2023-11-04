import React from "react";
import IconSearch from "@/icons/IconSearch";
import IconCreate from "@/icons/IconCreate";
import IconFolder from "@/icons/IconFolder";
import IconMultipleFlashCard from "@/icons/IconMultipleFlashCard";

enum EDocumentFeatures {
	SEARCHING,
	CREATE_NEW_DOCUMENT,
	CREATE_NEW_FLASHCARD,
	MY_FOLDERS,
	MY_FLASHCARDS,
}

interface IDocumentFeatures {
	key: EDocumentFeatures;
	text: string;
	leftIcon?: React.ReactNode;
	description?: string;
}

export const DocumentFeatures: IDocumentFeatures[] = [
	{
		key: EDocumentFeatures.SEARCHING,
		text: "Searching",
		leftIcon: <IconSearch />,
	},
	{
		key: EDocumentFeatures.CREATE_NEW_DOCUMENT,
		text: "Create new document",
		leftIcon: <IconCreate />,
	},
	{
		key: EDocumentFeatures.CREATE_NEW_FLASHCARD,
		text: "Create new flashcard",
		leftIcon: <IconCreate />,
	},
	{
		key: EDocumentFeatures.MY_FOLDERS,
		text: "My folders",
		leftIcon: <IconFolder />,
	},
	{
		key: EDocumentFeatures.MY_FLASHCARDS,
		text: "My flashcards",
		leftIcon: <IconMultipleFlashCard />,
	},
]