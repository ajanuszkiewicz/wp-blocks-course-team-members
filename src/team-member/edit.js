import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
	const { name, bio } = attributes;
	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};
	const onChangeBio = (newBio) => {
		setAttributes({ bio: newBio });
	};
	return (
		<div {...useBlockProps()}>
			<MediaPlaceholder
				icon="admin-users"
				// eslint-disable-next-line no-console
				onSelect={(val) => console.log(val)}
				// eslint-disable-next-line no-console
				onSelectURL={(val) => console.log(val)}
				accept="image/*"
				allowedTypes={['image']}
			/>
			<RichText
				placeholder={__('Member Name', 'team-member')}
				tagName="h4"
				onChange={onChangeName}
				value={name}
				allowedFormats={[]}
			/>
			<RichText
				placeholder={__('Member Bio', 'team-member')}
				tagName="p"
				onChange={onChangeBio}
				value={bio}
				allowedFormats={[]}
			/>
		</div>
	);
}
