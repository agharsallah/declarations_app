import { postNamesDb,getNamesDb,getDeclarations,getDeclarationsNumber,getAdvancedDeclarations } from './controllers/namesController';
import { postUser } from './controllers/userController';

const router = (app,apiRoutes) => {
  app.post('/setup',postUser );
  app.use('/api', apiRoutes);
  
  apiRoutes.post('/savedb', postNamesDb);

  apiRoutes.get('/getnames/:declaration', getNamesDb);//for the autocomplete 
  apiRoutes.get('/getDeclarations/:declaration', getDeclarations);// the declaration info ( data ministry date) of a certain name

  apiRoutes.get('/getAdvancedDeclarations', getAdvancedDeclarations);

  apiRoutes.get('/getDeclarationsNumber', getDeclarationsNumber);//returns something ready for hichart lineChart indicating number of dec per year
};

export default router;
