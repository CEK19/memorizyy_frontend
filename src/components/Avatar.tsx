import React from "react";
import { Avatar as AvatarNext } from "@nextui-org/avatar";

interface AvatarProps {
	src: string;
	size?: "sm" | "md" | "lg";
	className?: string;
	name?: string;
}

const Avatar = (props: AvatarProps) => {
	return (
		<AvatarNext showFallback src={props.src} alt="user-avatar" size={props?.size || "md"} className={props.className} name={props.name} />
	);
};

export default Avatar;
