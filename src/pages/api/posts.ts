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
		const data = doc.data() as Omit<BlogPost, 'id'>; // Exclude 'id' temporarily
		metadata.push({
			id: doc.id, // Include the document ID here
			...data,
		});
	});

	if (querySnapshot) {
		console.log('Document data:', metadata);
		res.status(200).json(metadata);
	} else {
		console.log('No such document!');
		res.status(404).json({ message: 'No documents found' });
	}
}
