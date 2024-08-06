import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';

interface BlogPost {
	title: string;
	created_at: string;
	summary: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	let metadata: BlogPost[] = [];

	const querySnapshot = await getDocs(collection(db, 'posts'));
	querySnapshot.forEach((doc) => {
		const data = doc.data() as BlogPost;
		metadata.push(data);
	});

	if (querySnapshot) {
		console.log('Document data:');
		res.status(200).json(metadata);
	} else {
		// docSnap.data() will be undefined in this case
		console.log('No such document!');
	}
}
