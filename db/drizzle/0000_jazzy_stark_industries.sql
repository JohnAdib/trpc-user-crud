DO $$ BEGIN
 CREATE TYPE "public"."user_role" AS ENUM('user', 'admin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."user_status" AS ENUM('active', 'inactive', 'pending', 'blocked');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"role" "user_role" NOT NULL,
	"bio" varchar(1024) DEFAULT '',
	"status" "user_status" NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "email_unique_idx" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "role_idx" ON "users" USING btree ("role");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "status_idx" ON "users" USING btree ("status");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "role_status_idx" ON "users" USING btree ("role","status");