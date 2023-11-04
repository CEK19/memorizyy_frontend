import { Spacer } from "@nextui-org/spacer";
import React from "react"

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
   children: React.ReactNode | string;
   leftIcon?: React.ReactNode;
}

const Tag = (props: TagProps) => {
   console.log(typeof props.children)
   return (
      <div>
         <div className="flex flex-row items-center justify-center">
            {props.leftIcon}
            {props.leftIcon && <Spacer x={2} />}
            <div>{props.children}</div>
         </div>
      </div>
   )
}

export default Tag