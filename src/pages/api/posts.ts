import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';

interface BlogPost {
	id: string; // Add this to include the document ID
	title: string;
	created_at: string;
	summary: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	let metadata: BlogPost[] = [];

	const querySnapshot = await getDocs(collection(db, 'posts'));
	querySnapshot.forEach((doc) => {
		const { title, created_at, summary } = doc.data();
		metadata.push({
			id: doc.id, // Include the document ID here
			title,
			created_at,
			summary,
		});
	});

	if (querySnapshot) {
		res.status(200).json(metadata);
	} else {
		res.status(404).json({ message: 'No documents found' });
	}
}
