import { postNamesDb,getNamesDb,getDeclarations,getDeclarationsNumber } from './controllers/namesController';
import { postUser } from './controllers/userController';

const router = (app,apiRoutes) => {
  app.post('/setup',postUser );
  app.use('/api', apiRoutes);

  apiRoutes.post('/savedb', postNamesDb);
  apiRoutes.get('/getnames/:declaration', getNamesDb);
  apiRoutes.get('/getDeclarations/:declaration', getDeclarations);
  apiRoutes.get('/getDeclarationsNumber', getDeclarationsNumber);
};

export default router;
