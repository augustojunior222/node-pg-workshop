CREATE DATABASE public.nodeapi;

-- public.books definition

-- Drop table

-- DROP TABLE public.books;

CREATE TABLE public.books (
	id serial4 NOT NULL,
	title varchar(150) NOT NULL,
	author varchar(50) NOT NULL,
	pages_num int4 NOT NULL,
	review text NULL,
	date_added date NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT books_pkey PRIMARY KEY (id)
);

-- public.reviews definition

-- Drop table

-- DROP TABLE public.reviews;

CREATE TABLE public.reviews (
	review_id serial4 NOT NULL,
	review text NOT NULL,
	review_author varchar(60) NOT NULL,
	review_date date NULL DEFAULT CURRENT_TIMESTAMP,
	book_id int4 NOT NULL,
	CONSTRAINT reviews_pkey PRIMARY KEY (review_id)
);


-- public.reviews foreign keys

ALTER TABLE public.reviews ADD CONSTRAINT reviews_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.books(id);


INSERT INTO public.books (title,author,pages_num,review,date_added) VALUES
         ('Algebra','Serge Lang',918,'The author has an impressive knack for presenting the important and interesting ideas of algebra in just the ‘right’ way, and he never gets bogged down in the dry formalism which pervades some parts of algebra.','2022-05-19'),
         ('Applied Linear Algebra','Peter J. Olver, Chehrzad Shakiban',679,'Também é bom esse daqui!','2022-05-19'),
         ('Calculus With Applications','Peter D. Lax, Maria Shea Terrell',503,'The book under review, a little over 500 pages co-authored with Maria Terrell, is a first-approximation to Lax’s dream come true: a ‘thorough revision’ of the 1976 Lax-Burstein-Lax. … This reviewer will attempt to use them as a pedagogical tool when teaching single-variable calculus or introductory analysis in the future. … It is filled with beautiful ideas that are elegantly explained and chock-full with problems that will enchant both the experienced teacher and the curious novice.','2022-05-19'),
         ('Discrete Mathematics','L. Lovász, J. Pelikán, K. Vesztergombi',284,'This book is aimed at undergraduate mathematics and computer science students interested in developing a feeling for what mathematics is all about, where mathematics can be helpful, and what kinds of questions mathematicians work on. The authors discuss a number of selected results and methods of discrete mathematics … . Wherever possible, the authors use proofs and problem solving to help students understand the solutions to problems. In addition, there are numerous examples, figures, and exercises spread throughout the book.','2022-05-19'),
         ('Guide to Discrete Mathematics','Gerard O Regan',368,'This book is … an encyclopedic overview of topics of and related to discrete mathematics in the broad sense, including many topics from computer science and software engineering. … Each chapter has a summary and a list of review question which help the reader to recapitulate the contents … . for each topic the reader is able to grasp the specific flavor and can move forward to more specific and advanced literature.','2022-05-19'),
         ('Linear Algebra','Jörg Liesen, Volker Mehrmann',324,'It provides a good introductory undergraduate course at an intermediate level … . From the beginning, the authors motivate the material with interesting examples … . the text includes short ‘MATLAB-Minutes’ which are exercises providing an informal introduction to the use of MATLAB in linear algebra, including hints about how care may be needed when working in finite precision.','2022-05-19'),
         ('Sapiens','Yuval Noah Harari, Jorio Dauster',513,'Super','2022-05-19'),
         ('A Tale of Two Cities','Charles Dickens',490,'!!!!!','2022-05-19');
         

INSERT INTO public.reviews (review,review_author,review_date,book_id) VALUES
         ('Olá, mundo 3.1','Junior','2022-05-20',3),
         ('Olá, mundo 7','Edgar','2022-05-20',7),
         ('Olá, mundo 7.1','Cezar','2022-05-20',7),
         ('Olá, mundo 6','Carlos','2022-05-20',6),
         ('Olá, mundo','Flávia','2022-05-20',3);
