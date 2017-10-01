import { postNamesDb,getNamesDb,getDeclarations } from './controllers/namesController';
import { postUser } from './controllers/userController';

const router = (app,apiRoutes) => {
  app.post('/setup',postUser );
  app.use('/api', apiRoutes);

  apiRoutes.post('/savedb', postNamesDb);
  apiRoutes.get('/getnames/:declaration', getNamesDb);
  apiRoutes.get('/getDeclarations/:declaration', getDeclarations);
};

export default router;
