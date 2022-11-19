CREATE CAST (text as "QuestionType") WITH INOUT AS ASSIGNMENT ;

INSERT INTO "Question" (description, type, "createdAt") VALUES ('Qual o seu gênero ?', 'SINGLE'::text, now());
INSERT INTO "Question" (description, type, "createdAt") VALUES ('Quantos anos você tem ?', 'SINGLE'::text, now());
INSERT INTO "Question" (description, type, "createdAt") VALUES ('Você assina o Prime Video ?', 'SINGLE'::text, now());
INSERT INTO "Question" (description, type, "createdAt") VALUES ('Assinale a opção que melhor define sua relação com o Prime Video.', 'SINGLE'::text, now());
INSERT INTO "Question" (description, type, "createdAt") VALUES ('Você já assistiu a algum dos programas/filmes/séries listados abaixo', 'MULTIPLE'::text, now());

-- 1
INSERT INTO "Answer" (description, "questionId") VALUES ('Feminino', 1);
INSERT INTO "Answer" (description, "questionId") VALUES ('Masculino', 1);
INSERT INTO "Answer" (description, "questionId") VALUES ('Outros', 1);
INSERT INTO "Answer" (description, "questionId") VALUES ('Prefiro não dizer', 1);

-- 2
INSERT INTO "Answer" (description, "questionId") VALUES ('18-24', 2);
INSERT INTO "Answer" (description, "questionId") VALUES ('25-34', 2);
INSERT INTO "Answer" (description, "questionId") VALUES ('35-44', 2);
INSERT INTO "Answer" (description, "questionId") VALUES ('45-54', 2);
INSERT INTO "Answer" (description, "questionId") VALUES ('55-64', 2);
INSERT INTO "Answer" (description, "questionId") VALUES ('65+', 2);

-- 3
INSERT INTO "Answer" (description, "questionId") VALUES ('Sim', 3);
INSERT INTO "Answer" (description, "questionId") VALUES ('Não', 3);

-- 4
INSERT INTO "Answer" (description, "questionId") VALUES ('Pretendo assinar Prime Video no próximo mês', 4);
INSERT INTO "Answer" (description, "questionId") VALUES ('Pretendo assinar Prime Video nos próximos 3 meses', 4);
INSERT INTO "Answer" (description, "questionId") VALUES ('Pretendo assinar Prime Video um dia', 4);
INSERT INTO "Answer" (description, "questionId") VALUES ('Não pretendo assinar', 4);

-- 5
INSERT INTO "Answer" (description, "questionId") VALUES ('O Senhor dos Anéis – Os Anéis de Poder', 5);
INSERT INTO "Answer" (description, "questionId") VALUES ('Períféricos', 5);
INSERT INTO "Answer" (description, "questionId") VALUES ('Jack Ryan de Tom Clancy', 5);
INSERT INTO "Answer" (description, "questionId") VALUES ('The Boys', 5);
INSERT INTO "Answer" (description, "questionId") VALUES ('A Roda do Tempo', 5);
INSERT INTO "Answer" (description, "questionId") VALUES ('Samaritano', 5);
INSERT INTO "Answer" (description, "questionId") VALUES ('A Guerra do Amanhã', 5);
INSERT INTO "Answer" (description, "questionId") VALUES ('LOL: Se Rir, Já Era!', 5);
INSERT INTO "Answer" (description, "questionId") VALUES ('NBA', 5);
INSERT INTO "Answer" (description, "questionId") VALUES ('Hotel Transilvânia 4 – Transformonstrão', 5);
INSERT INTO "Answer" (description, "questionId") VALUES ('Não assisti a nenhum dos conteúdos listado', 5);



-- ALTER SEQUENCE "Question_id_seq" RESTART;
-- UPDATE "Question" SET id = DEFAULT;