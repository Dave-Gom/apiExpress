import { Router } from 'express';
import { getCompleteSiteInfo, postSiteInfo } from '../controllers/SiteController';
import { checkSession } from '../middlewares/Session';

const router = Router();

router.get('/', checkSession, getCompleteSiteInfo);
router.post('/', checkSession, postSiteInfo);

export { router };
