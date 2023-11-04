import React from "react";
import PanelUserInfo from "./PanelUserInfo";
import { Resizable } from "re-resizable";
import { DocumentFeatures } from "./DocumentMenu";
import { Divider } from "@nextui-org/react";
import VerticalSpacing from "../../VerticalSpacing";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";
import { RecentVisited } from "./MostRecentUsedFolderMenu";
import { FlashcardList } from "./FlashcardDocumentMenu";

type Props = {};

function LeftNavBar({ }: Props) {
	const enableResizeConfig = {
		top: false,
		right: true,
		bottom: false,
		left: false,
		topRight: false,
		bottomRight: false,
		bottomLeft: false,
		topLeft: false,
	};
	return (
		<React.Fragment>
			<Resizable
				enable={enableResizeConfig}
				className="min-w-fit max-w-xs"
			>
				<div className="left-bar-all-info w-full h-full min-w-fit bg-gray-50 border-r border-gray-200">
					<PanelUserInfo imgUrl="https://lh3.googleusercontent.com/a-/AOh14GjkqQmQt_ITDSjmJiYQFuTyN5LuycusiFaqaKFk=s100" name="Trong Nhan" />
					<Divider />
					<VerticalSpacing />

					<Listbox  variant="flat" aria-label="Listbox menu with sections" onSelectionChange={() => { }} >
						<ListboxSection items={DocumentFeatures} showDivider>
							{DocumentFeatures.map((item) => {
								return (
									<ListboxItem
										className="px-3"
										key={item.key}
										description={item.description}
										startContent={item.leftIcon}
									>
										{item.text}
									</ListboxItem>
								)
							})}
						</ListboxSection>

						<ListboxSection showDivider title="Recent" aria-label="Recent">
							{RecentVisited.map((item) => {
								return (
									<ListboxItem
										key={item.key}
										description={item.description}
										startContent={item.leftIcon}
									>
										{item.text}
									</ListboxItem>
								)
							})}
						</ListboxSection>

						<ListboxSection title="Flash card" aria-label="Flash card">
							{FlashcardList.map((item) => {
								return (
									<ListboxItem
										key={item.key}
										description={item.description}
										startContent={item.leftIcon}
									>
										{item.text}
									</ListboxItem>
								)
							})}
						</ListboxSection>

					</Listbox>
				</div>
			</Resizable>
		</React.Fragment>
	);
}

export default LeftNavBar;
