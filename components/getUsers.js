import admin from 'firebase-admin';
const serviceAccount = require('../firebase.init');
if (!admin.apps.length) {
   admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'institute-bd.firebaseapp.com', // Update with your database URL
   });
}

const db = admin.firestore();

export default async function HandlerAdmin(req, res) {
   try {
      const userRecords = await admin.auth().listUsers();
      const users = userRecords.users.map((userRecord) => ({
         uid: userRecord.uid,
         email: userRecord.email,
         displayName: userRecord.displayName,
         // Add other user properties as needed
      }));
      res.status(200).json(users);
   } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
   }
}
