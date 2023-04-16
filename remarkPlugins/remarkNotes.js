import { visit } from 'unist-util-visit';

const remarkNotes = () => {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type === 'containerDirective' && node.name === 'note') {
				console.log(node);
			}
		});
	};
};

export default remarkNotes;
