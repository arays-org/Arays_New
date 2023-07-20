import express from 'express';
import multer from 'multer';
import { bwFilterController, converterController, grayscaleController, invertFilterController } from '../Controller/FilterController.js';
// const upload = multer({ dest: 'uploads/' });
const upload = multer({ storage: multer.memoryStorage() });
const router =express.Router();
router.post('/grayscale',upload.single('image'),grayscaleController)
router.post('/invert',upload.single('image'),invertFilterController)
router.post('/b&w/:threshold',upload.single('image'),bwFilterController)
router.post('/png_convert',upload.single('image'),converterController)

export default router