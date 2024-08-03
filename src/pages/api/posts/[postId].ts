import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { postId } = req.query;
	console.log('hey ', postId);

	const docRef = doc(db, 'posts', `${postId}`);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		console.log('Document data:', docSnap.data());
		res.status(200).json({ ...docSnap.data() });
	} else {
		// docSnap.data() will be undefined in this case
		console.log('No such document!');
	}
}
