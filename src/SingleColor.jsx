import { toast } from 'react-toastify';

const SingleColor = ({ index, color }) => {
	const { hex, weight } = color;
	const saveToClipborad = async () => {
		if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(`#${hex}`);
				toast.success('color copied to clipborad');
			} catch (error) {
				toast.error('falied to copied the color');
			}
		}
	};
	return (
		<article
			className={index > 10 ? 'color color-light' : 'color'}
			style={{ background: `#${hex}` }}
			onClick={saveToClipborad}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hex}</p>
		</article>
	);
};
export default SingleColor;
