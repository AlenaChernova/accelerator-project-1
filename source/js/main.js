// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { initValidation } from './validation.js';
import { initVideo } from './video.js';
import { initFaq } from './faq.js';
import { initJurySlider } from './jury-slider.js';
import { initReviewsSlider } from './reviews-slider.js';
import { initPrices } from './price/tabs.js';


initValidation();
initVideo();
initFaq();
initJurySlider();
initReviewsSlider();
initPrices();
