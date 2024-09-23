ALTER TABLE "feedbacks" RENAME COLUMN "feedback" TO "rating";--> statement-breakpoint
ALTER TABLE "feedbacks" ALTER COLUMN "project_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "feedbacks" ALTER COLUMN "rating" SET DATA TYPE integer;