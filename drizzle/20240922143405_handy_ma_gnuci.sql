CREATE TABLE IF NOT EXISTS "feedbacks" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" varchar,
	"feedback" text,
	"user_name" text,
	"user_email" text,
	"message" text
);
--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "user_id" varchar;