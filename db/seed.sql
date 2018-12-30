DROP DATABASE IF EXISTS wedding;
CREATE DATABASE wedding;
\c wedding

-- add create tables here

CREATE TABLE users (
  id serial primary key,
  name varchar,
  email varchar UNIQUE NOT NULL,
  password_digest varchar NOT NULL,
  phone varchar,
  wedding_date date,
  time timestamp
);

CREATE TABLE todo (
  id serial primary key,
  task varchar,
  description text,
  notes text,
  completion boolean,
  users_id int,
  CONSTRAINT taskDoneOnce UNIQUE(task, users_id),
  foreign key (users_id) references users);

  CREATE TABLE budget (
  id serial primary key,
  amount int,
  users_id int UNIQUE,
  foreign key (users_id) references users);

   CREATE TABLE expenses (
  id serial primary key,
  expense varchar,
  amount int,
  category varchar,
  budget_id int,
  users_id int,
  CONSTRAINT addedOnce UNIQUE(expense, users_id),
  foreign key (budget_id) references budget,
  foreign key (users_id) references users);

  CREATE TABLE vendor (
  id serial primary key,
  name varchar,
  pic varchar,
  about text,
  location varchar,
  map varchar,
  phone varchar,
  emailaddress varchar,
  category varchar,
  website varchar,
  twitter varchar,
  instagram varchar,
  facebook varchar,
  snapchat varchar,
  app varchar);


  CREATE TABLE product (
  id serial primary key,
  name varchar,
  img varchar,
  description text,
  vendor_id int,
  foreign key (vendor_id) references vendor);

  CREATE TABLE likes (
  user_id int,
  vendor_id int,
  CONSTRAINT likeOne UNIQUE(vendor_id, user_id),
  foreign key (user_id) references users,
  foreign key (vendor_id) references vendor);


INSERT INTO vendor (name, location,map,pic, phone ,emailaddress,category,website,twitter,instagram,snapchat,app) VALUES('spring rose','riyadh', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.432435492333!2d46.67586035034547!3d24.677657158560027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f035036f72839%3A0x44cd564bdd61e221!2sSpring+Rose!5e0!3m2!1sen!2ssa!4v1545050400248&zoom=9','https://springrose.com.sa/image/cache/catalog/Products/logo-300x300.png', '0505849372','demo@gmail.com','florist','https://springrose.com.sa/store','https://twitter.com/springroseshop','https://instagram.com/springroseshop/','https://www.snapchat.com/add/springroseshop','https://itunes.apple.com/us/app/spring-rose/id1289058007?ls=1&mt=8');

INSERT INTO vendor (name, location,map,pic, phone ,emailaddress,category,website,twitter,instagram,snapchat,app) VALUES('Bella Fioro','riyadh', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.432435492333!2d46.67586035034547!3d24.677657158560027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f035036f72839%3A0x44cd564bdd61e221!2sSpring+Rose!5e0!3m2!1sen!2ssa!4v1545050400248&zoom=9','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfiWqnWkXeNKzqBUHadgcqWRR5xhktnLkivRWVNIN9Ei-rjJCp8g', '0505849372','demo@gmail.com','florist','https://springrose.com.sa/store','https://twitter.com/springroseshop','https://instagram.com/springroseshop/','https://www.snapchat.com/add/springroseshop','https://itunes.apple.com/us/app/spring-rose/id1289058007?ls=1&mt=8');

INSERT INTO vendor (name, location,map,pic, phone ,emailaddress,category,website,twitter,instagram,snapchat,app) VALUES('Ryhan','dammam', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.432435492333!2d46.67586035034547!3d24.677657158560027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f035036f72839%3A0x44cd564bdd61e221!2sSpring+Rose!5e0!3m2!1sen!2ssa!4v1545050400248&zoom=9','https://pbs.twimg.com/profile_images/770957473805135872/zYUk6fFX_400x400.jpg', '0505849372','demo@gmail.com','florist','https://springrose.com.sa/store','https://twitter.com/springroseshop','https://instagram.com/springroseshop/','https://www.snapchat.com/add/springroseshop','https://itunes.apple.com/us/app/spring-rose/id1289058007?ls=1&mt=8');

INSERT INTO product (name,img,vendor_id) VALUES ('flower','https://media-api.xogrp.com/images/85019a65-5d80-4e2f-b57d-92fe5bafcb03~rs_w.210.fit~rs_400.h',1);

-- INSERT INTO likes (user_id,vendor_id) VALUES(1,1);

-- -INSERT INTO users (name,email,wedding_date) VALUES ('Noorah','nalghamdi_@hotmail.com','07/02/2019');
-- INSERT INTO todo (task,description,completion,users_id) VALUES ('book venue','dghfhfwu',false,1);
-- INSERT INTO todo (task,description,completion,users_id) VALUES ('buquete','dghfhfwu',true,1);
-- INSERT INTO todo (task,description,completion,users_id) VALUES ('reserve dress','dghfhfwu',false,1);

