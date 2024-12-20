export function TestimonialUser(desc, img, name) {
  this.desc = desc;
  this.img = img;
  this.name = name;
}

const testimonialUser1 = new TestimonialUser(
  "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
  "./assets/img/user4.jpg",
  "Jennifer Anderson"
);

const testimonialUser2 = new TestimonialUser(
  "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
  "./assets/img/user5.jpg",
  "Robert Johnson"
);

const testimonialUser3 = new TestimonialUser(
  "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
  "./assets/img/user6.jpg",
  "Emily Davis"
);

const testimonialUser4 = new TestimonialUser(
  "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
  "./assets/img/user6.jpg",
  "Emily Davis"
);

const testimonialUser5 = new TestimonialUser(
  "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
  "./assets/img/user5.jpg",
  "Robert Johnson"
);

const testimonialUser6 = new TestimonialUser(
  "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
  "./assets/img/user4.jpg",
  "Jennifer Anderson"
);

export const testimonialUsers = [
    testimonialUser1,
    testimonialUser2,
    testimonialUser3,
    testimonialUser4,
    testimonialUser5,
    testimonialUser6
];

