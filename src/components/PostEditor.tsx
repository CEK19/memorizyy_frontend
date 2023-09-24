import React from "react";

const PostEditor = () => {
	return (
		<React.Fragment>
			<div className="post-editor-heading text-center font-bold text-2xl m-5 text-gray-800">
				Post Editor
			</div>
			<div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
				<textarea
					className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none resize-none"
					spellCheck="false"
					placeholder="Describe everything about this post here"
				></textarea>

				<div className="p-2"></div>

				<div className="buttons flex">
					<div className="btn border border-gray-300 p-1 px-4 cursor-pointer text-gray-500 ml-auto">
						Cancel
					</div>
					<div className="btn border border-indigo-500 p-1 px-4 cursor-pointer text-gray-200 ml-2 bg-indigo-500">
						Post
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default PostEditor;
